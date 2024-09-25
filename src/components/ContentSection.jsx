import { createContext, Fragment, useEffect, useState } from "react";
import { Navigation } from "./Navigation";

export const ThemeContext = createContext();

export function ContentSection() {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((d) => !d);
  }

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#333";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Navigation />
      <p className="pt-2">This is sample content</p>
    </ThemeContext.Provider>
  );
}
