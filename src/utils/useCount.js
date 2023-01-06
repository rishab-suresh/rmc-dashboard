import { useState, useEffect } from "react";

const useCount = (initialValue, status) => {
  const [counter, setCounter] = useState(initialValue);
  
  useEffect(() => {
    if (status === 1) {
      const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [status]);
  
  return counter;
};

export default useCount;