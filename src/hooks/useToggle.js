import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    return setValue((currentValue) => !currentValue);
  }

  return [value, toggle];
}
