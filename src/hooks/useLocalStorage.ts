import { useEffect, useState } from 'react';

const useLocalStorage = (key : string, defaultValue: Record<string, any> = {}) => {
  const [value, setValue] = useState(() => {
      try {
          const saved = localStorage.getItem(key) as string;
          if (saved !== null) {
              return JSON.parse(saved);
          }
          return defaultValue;
      } catch {
          return defaultValue;
      }
  });

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;