import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(); // ✅ Exportamos el contexto

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Sincroniza el theme con el <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
