import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const intervalTick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(intervalTick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};

export default useInterval;
