import { useEffect, useState } from 'react';

const useLocalStorage = <TValue>(key : string, defaultValue: TValue = {} as TValue) : [TValue, React.Dispatch<React.SetStateAction<TValue>>] => {
  const [value, setValue] = useState(() => {
      try {
          const saved = localStorage.getItem(key) as string;
          if (saved !== null) {
              return JSON.parse(saved) as TValue;
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