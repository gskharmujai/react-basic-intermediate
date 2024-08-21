import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useInput() {
  const [value, setFieldValue] = useLocalStorage(key, "");

  return {
    value,
    onChange: (e) => {
      setFieldValue(e.target.value);
    },
  };
}
