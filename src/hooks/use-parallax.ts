import { useEffect, useRef } from 'react';

/**
 * Parallax de profundidad controlado por el cursor.
 * Devuelve un ref para el contenedor "escena". Cualquier descendiente con
 * el atributo `data-depth` (p.ej. data-depth="0.4") se desplaza segun la
 * posicion del mouse, con un factor proporcional a su profundidad.
 *
 * Se desactiva automaticamente en dispositivos tactiles y respeta
 * prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(factor = 26) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const scene = ref.current;
    if (!scene) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-depth]'));
    if (!layers.length) return;

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let raf: number | null = null;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      layers.forEach((l) => {
        const d = parseFloat(l.dataset.depth || '0');
        l.style.transform = `translate3d(${(-cx * d * factor).toFixed(2)}px, ${(-cy * d * factor).toFixed(2)}px, 0)`;
      });
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    scene.addEventListener('pointermove', onMove);
    return () => {
      scene.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [factor]);

  return ref;
}
