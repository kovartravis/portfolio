import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediately trigger if anywhere near the viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.8) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
          }
        }
      },
      { rootMargin: '300px 0px', threshold: 0 }
    );

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 300) {
        setIsVisible(true);
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
      }
    };

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '600ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transform-gpu ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};
