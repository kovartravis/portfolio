import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '' }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Extract number and suffix/prefix (e.g., "3,000+" -> numeric 3000, suffix "+", format with commas)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    // Check if contains numbers
    const match = value.match(/[\d,]+/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numStr = match[0].replace(/,/g, '');
    const targetNum = parseInt(numStr, 10);
    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    const prefix = value.substring(0, value.indexOf(match[0]));
    const suffix = value.substring(value.indexOf(match[0]) + match[0].length);

    const duration = 1400; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetNum);

      const formatted = targetNum >= 1000 ? current.toLocaleString() : current.toString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
