import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

const Provider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark);
    document.documentElement.classList.toggle("dark", isDark === "dark");
    localStorage.setItem("theme", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Context.Provider value={{ isDark, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
