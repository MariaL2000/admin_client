import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar usuario desde localStorage si existe
    const storedUser = localStorage.getItem("admin_user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Admin provisional: username: admin / password: admin123
    if (username === "admin" && password === "admin123") {
      const adminUser = { name: "Admin", role: "admin" };
      localStorage.setItem("admin_user", JSON.stringify(adminUser));
      setUser(adminUser);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
