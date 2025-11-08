import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { navbarLinks } from "@/constants";
import { cn } from "@/utils/cn";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
  const logoLightURL =
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
  const logoDarkURL =
    "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg";

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full flex-col overflow-x-hidden transition-all",
        collapsed
          ? "w-[70px] md:items-center max-md:-left-full"
          : "w-[240px] max-md:left-0"
      )}
      style={{
        backgroundColor: "var(--color-bg)",
        borderRightWidth: "2px",
        borderRightStyle: "solid",
        borderColor: collapsed
          ? "var(--color-border)" // menos visible cuando colapsado
          : "var(--color-border-strong)", // borde más fuerte cuando expandido
        color: "var(--color-text)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-x-3 p-3">
        <img
          src={logoLightURL}
          alt="logo light"
          className="dark:hidden w-8 h-8"
        />
        <img
          src={logoDarkURL}
          alt="logo dark"
          className="hidden dark:block w-8 h-8"
        />
        {!collapsed && (
          <p
            className="text-lg font-semibold transition-colors"
            style={{ color: "var(--color-text)" }}
          >
            Dashboard
          </p>
        )}
      </div>

      {/* Navegación */}
      <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3">
        {navbarLinks.map((navbarGroup) => (
          <nav key={navbarGroup.title} className="sidebar-group">
            {!collapsed && (
              <p
                className="sidebar-group-title mb-2 text-xs font-semibold uppercase tracking-wide transition-colors"
                style={{ color: "var(--color-muted)" }}
              >
                {navbarGroup.title}
              </p>
            )}

            {navbarGroup.links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "sidebar-item flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors shadow-sm",
                    "hover:shadow-lg hover:scale-[1.02] transform transition-all"
                  )
                }
                style={({ isActive }) => ({
                  color: isActive ? "var(--color-accent)" : "var(--color-text)",
                  backgroundColor: isActive
                    ? "var(--color-item-active-bg)"
                    : "transparent",
                })}
              >
                <link.icon size={22} className="flex-shrink-0" />
                {!collapsed && (
                  <span className="whitespace-nowrap">{link.label}</span>
                )}
              </NavLink>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};
