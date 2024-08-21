import { useCallback, useState } from "react";

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const set = (newArray) => {
    return setArray(newArray);
  };

  const push = useCallback((item) => {
    return setArray((currentArray) => [...currentArray, item]);
  }, []);

  const replace = useCallback((index, item) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        item,
        ...currentArray.slice(index + 1),
      ];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((currentArray) => {
      return currentArray.filter(callback);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        ...currentArray.slice(index + 1),
      ];
    });
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  return { array, set, push, replace, filter, remove, clear, reset };
}
