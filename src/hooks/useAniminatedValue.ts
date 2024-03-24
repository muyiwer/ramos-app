import { useState, useEffect } from "react";

export const useAnimatedValue = (
  initialValue: number,
  targetValue: number,
  duration: number,
  inView: any
): number => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState<number>(initialValue);
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible) {
      const startTime = Date.now();

      const updateValue = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= duration) {
          setValue(targetValue);
        } else {
          const delta = (targetValue - initialValue) * (elapsedTime / duration);
          setValue(initialValue + delta);
          requestAnimationFrame(updateValue);
        }
      };

      updateValue();

      return () => {
        // Cleanup
      };
    }
  }, [initialValue, targetValue, duration, isVisible]);

  return value;
};
