import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth_context";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Checking access...</p>;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
}
