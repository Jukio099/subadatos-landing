import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Retraso de la animación en segundos. */
  delay?: number;
  className?: string;
}

/**
 * Envuelve una sección para que aparezca con un fundido ascendente la
 * primera vez que entra al viewport. Respeta prefers-reduced-motion.
 */
export const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
