import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface WordRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  splitBy?: 'word' | 'char';
  triggerOnce?: boolean;
  threshold?: number;
}

export const WordReveal = ({
  children,
  className,
  delay = 0,
  staggerMs = 60,
  as: Tag = 'span',
  splitBy = 'word',
  triggerOnce = true,
  threshold = 0.2,
}: WordRevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (triggerOnce) observer.unobserve(entry.target);
          } else if (!triggerOnce) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    // Safety fallback: force visible after 3s even if observer never fires
    const fallback = setTimeout(() => setVisible(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [triggerOnce, threshold]);

  const tokens = splitBy === 'word' ? children.split(' ') : children.split('');

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={cn('word-reveal', visible && 'in', className)}
      aria-label={children}
    >
      {tokens.map((token, i) => (
        <span className="word" key={i} aria-hidden="true" style={{ transitionDelay: `${delay + i * staggerMs}ms` }}>
          <span>{token}{splitBy === 'word' && i < tokens.length - 1 ? '\u00A0' : ''}</span>
        </span>
      ))}
    </Tag>
  );
};

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  threshold?: number;
}

export const BlurReveal = ({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  threshold = 0.15,
}: BlurRevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    // Safety fallback: force visible after 3s even if observer never fires
    const fallback = setTimeout(() => setVisible(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={cn('reveal', visible && 'in', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
