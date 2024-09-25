import { useContext } from "react";
import { ThemeContext } from "./ContentSection";

export function SubLinks() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: isDarkMode ? "#fff" : "#333",
        color: isDarkMode ? "#333" : "#fff",
      }}
      className="btn btn-primary"
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}
