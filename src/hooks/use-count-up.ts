import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  startOnView?: boolean;
  threshold?: number;
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  startOnView = true,
  threshold = 0.3,
}: UseCountUpOptions) {
  const [value, setValue] = useState<string>(`${prefix}${start.toFixed(decimals)}${suffix}`);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      animate(0);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(0);
          }
        });
      },
      { threshold }
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };

    function animate(delayMs: number) {
      setTimeout(() => {
        const startTime = performance.now();
        const step = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = start + (end - start) * eased;
          const formatted = current.toFixed(decimals);
          setValue(`${prefix}${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, delayMs);
    }
  }, [end, start, duration, decimals, prefix, suffix, startOnView, threshold]);

  return { value, ref };
}
