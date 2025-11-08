import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import AnalyticsPage from "@/routes/analytics/page";
import ProductsPage from "@/routes/products/page";
import ReportsPage from "@/routes/reports/page";
import ProfilePage from "@/routes/profile/page";
import ProtectedRoute from "@/layouts/Protected_Route";
import { ThemeProvider } from "@/context/theme_context";
import { AuthProvider } from "@/context/auth_context";
import LoginPage from "@/routes/login/page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />, // Protege todas las rutas hijas
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "analytics", element: <AnalyticsPage /> },
          { path: "products", element: <ProductsPage /> },
          { path: "products/new", element: <ProductsPage isAdding /> },
          { path: "reports", element: <ReportsPage /> },
          { path: "profile", element: <ProfilePage /> },
        ],
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <h1 className="text-center mt-10 text-red-500">Unauthorized</h1>,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}
