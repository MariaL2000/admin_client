import PropTypes from "prop-types";
import { useTheme } from "@/hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search, Sun, Moon, User } from "lucide-react";

export const Header = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate(); // 🔹 Hook para navegar entre rutas

  return (
    <header
      className="relative z-10 flex h-[60px] items-center justify-between px-4 shadow-md transition-colors"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Toggle Sidebar + Search */}
      <div className="flex items-center gap-x-3">
        <button
          aria-label="Toggle sidebar"
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft
            size={20}
            className={`transform transition-transform duration-300 ${
              collapsed ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          className="relative flex items-center rounded-lg px-3"
          style={{ backgroundColor: "var(--color-card-bg)" }}
        >
          <Search size={20} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent px-2 py-1 focus:outline-none"
            style={{ color: "var(--color-text)" }}
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-x-3">
        {/* Tema claro/oscuro */}
        <button
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{ backgroundColor: "var(--color-card-bg)" }}
        >
          <Sun
            size={20}
            className={`block ${
              theme === "dark" ? "hidden" : "block"
            } text-yellow-500`}
          />
          <Moon
            size={20}
            className={`block ${
              theme === "dark" ? "block" : "hidden"
            } text-slate-200`}
          />
        </button>

        {/* 🔹 Botón de perfil con navegación */}
        <button
          aria-label="User profile"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:shadow-md transition"
          style={{ backgroundColor: "var(--color-card-bg)" }}
          onClick={() => navigate("/profile")} // 🔹 Navega a la ruta del admin
        >
          <User size={20} style={{ color: "var(--color-text)" }} />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
