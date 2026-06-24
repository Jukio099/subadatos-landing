import { useRef, type ReactNode } from 'react';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Fuerza del desplazamiento en px */
  strength?: number;
}

/**
 * Envoltura "magnetica": el contenido se desplaza levemente hacia el cursor.
 * Ideal para botones / CTAs. Se desactiva en dispositivos tactiles.
 */
export function Magnetic({ children, className = '', strength = 10 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isCoarse = () =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const handleMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || isCoarse()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate(${(px * strength).toFixed(2)}px, ${(py * strength).toFixed(2)}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
      style={{ display: 'inline-flex', transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {children}
    </span>
  );
}

export default Magnetic;
