import { useState } from "react";

export const useLocalStorate = (key, initialValue) => {
  if (typeof key !== string) {
    throw new Error("Invalid Paramas: useLocalStorage(key,initialValue)");
  }
  const [storedValue, setStoredValue] = useState(() => {
    if (!window.localStorage) {
      throw new Error(
        "Browser does not support local storage. Please upgrade browser or enable local storage for full app functionality."
      );
    } else if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
