import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/layouts/Sidebar";
import { Header } from "@/layouts/Header";
import { cn } from "@/utils/cn";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useClickOutside } from "@/hooks/useClickOutside";

const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  const [collapsed, setCollapsed] = useState(true);
  const sidebarRef = useRef(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);

  useClickOutside(sidebarRef, () => {
    if (!isDesktopDevice && !collapsed) setCollapsed(true);
  });

  return (
    <div
      className="flex min-h-screen transition-colors"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <Sidebar ref={sidebarRef} collapsed={collapsed} />
      <div
        className={cn(
          "flex flex-col flex-1 transition-all duration-300",
          collapsed ? "md:ml-[70px]" : "md:ml-60"
        )}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="flex-1 overflow-auto p-6 h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
