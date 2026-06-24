import { useEffect, useState, useRef } from 'react';

export function useCountUp(target: number | string, duration = 1800, startWhen = true) {
  const [count, setCount] = useState<number | string>(0);
  const startTime = useRef<number | null>(null);
  
  const isNumeric = typeof target === 'number' || !isNaN(parseFloat(target as string));
  
  useEffect(() => {
    if (!startWhen) return;
    
    if (!isNumeric) {
      setCount(target);
      return;
    }

    const end = typeof target === 'number' ? target : parseFloat(target);
    const hasDecimal = typeof target === 'string' && target.includes('.');
    const decimals = hasDecimal ? target.split('.')[1].length : 0;

    let animationFrame: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const update = (currentTime: number) => {
      if (!startTime.current) startTime.current = currentTime;
      const elapsed = currentTime - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = eased * end;

      if (hasDecimal) {
        setCount(current.toFixed(decimals));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCount(target); // Ensure we end on the exact target string
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, duration, startWhen, isNumeric]);

  return count;
}
