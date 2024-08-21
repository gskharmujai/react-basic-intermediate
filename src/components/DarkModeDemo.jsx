import { useState, Fragment } from "react";
import { useToggle } from "../hooks/useToggle";
import { useInputValue } from "../hooks/useInputValue";

export function DarkModeDemo() {
  const nameInput = useInputValue("");
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  //const [isDarkMode, toggleDarkMode] = useState(false);

  return (
    <div
      className="p-5"
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <input type="text" className="form-control" {...nameInput} />

      <button className="btn btn-primary mt-3" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
}
