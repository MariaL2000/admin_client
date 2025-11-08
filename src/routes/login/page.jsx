import { useState } from "react";
import { useAuth } from "@/context/auth_context";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

export default function LoginPage() {
  const { login } = useAuth();
  const { theme } = useTheme(); // hook de tema
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (success) {
      navigate("/", { replace: true });
    } else {
      setError("Usuario o contraseña incorrecta");
    }
  };

  // Colores dinámicos según tema
  const bgForm = theme === "dark" ? "bg-gray-800" : "bg-white";
  const bgInput = theme === "dark" ? "bg-gray-700" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const placeholderColor =
    theme === "dark" ? "placeholder-gray-300" : "placeholder-gray-500";
  const btnHover = theme === "dark" ? "hover:bg-blue-500" : "hover:bg-blue-700";

  return (
    <div
      className={`flex items-center justify-center h-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <form
        onSubmit={handleSubmit}
        className={`${bgForm} p-8 rounded-xl shadow-md w-[350px]`}
      >
        <h1 className={`text-2xl font-semibold mb-4 text-center ${textColor}`}>
          Admin Login
        </h1>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          type="text"
          placeholder="Username"
          className={`w-full mb-3 p-2 rounded ${bgInput} focus:outline-none ${textColor} ${placeholderColor}`}
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className={`w-full mb-3 p-2 rounded ${bgInput} focus:outline-none ${textColor} ${placeholderColor}`}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="submit"
          className={`w-full py-2 bg-blue-600 text-white rounded-lg transition-colors ${btnHover}`}
        >
          Log In
        </button>
      </form>
    </div>
  );
}
