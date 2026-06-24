import { useRef, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Inclinacion maxima en grados */
  intensity?: number;
  /** Elevacion en px al pasar el cursor */
  lift?: number;
  style?: React.CSSProperties;
}

/**
 * Tarjeta con inclinacion 3D que sigue al cursor (efecto tilt).
 * Usa la utilidad `.tilt-card` definida en index.css para las transiciones.
 * Se desactiva en dispositivos tactiles.
 */
export function TiltCard({ children, className = '', intensity = 9, lift = 4, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isCoarse = () =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || isCoarse()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${(px * intensity).toFixed(2)}deg) rotateX(${(-py * intensity).toFixed(2)}deg) translateY(-${lift}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`tilt-card ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default TiltCard;
