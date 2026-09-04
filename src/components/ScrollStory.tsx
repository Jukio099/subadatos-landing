import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Database, LineChart, Handshake } from 'lucide-react';
import { formatCOP, useMarketData } from '@/hooks/use-market-data';

/**
 * Sección de storytelling guiada por scroll: el viewport queda fijado
 * mientras tres escenas se funden una en otra según el avance del scroll.
 * Escena 1: recolección en las subastas (video).
 * Escena 2: procesamiento de los datos.
 * Escena 3: decisión del ganadero con precios reales.
 */

const ESCENAS = [
  {
    icono: Database,
    etiqueta: 'Paso 1 · Recolectamos',
    titulo: 'Cada subasta del país, registrada.',
    texto:
      'Cada semana capturamos los boletines oficiales de Central Ganadera de Medellín, SubaCasanare y Subastar: lote por lote, peso por peso, precio por precio.',
  },
  {
    icono: LineChart,
    etiqueta: 'Paso 2 · Analizamos',
    titulo: 'Miles de lotes se vuelven una señal clara.',
    texto:
      'Limpiamos, cruzamos y comparamos más de 60.000 registros históricos para detectar tendencias por categoría, plaza y región de origen.',
  },
  {
    icono: Handshake,
    etiqueta: 'Paso 3 · Usted decide',
    titulo: 'Negocie con el precio real en la mano.',
    texto:
      'Antes de subir el ganado al camión, sepa a cuánto se pagó el kilo esta semana en cada plaza. Sin rumores: datos oficiales de subasta.',
  },
];

const useEscenaOpacity = (progress: MotionValue<number>, index: number, total: number) => {
  const inicio = index / total;
  const fin = (index + 1) / total;
  const margen = 0.35 / total;
  return useTransform(
    progress,
    index === 0
      ? [inicio, fin - margen, fin]
      : index === total - 1
        ? [inicio, inicio + margen, fin]
        : [inicio, inicio + margen, fin - margen, fin],
    index === 0 ? [1, 1, 0] : index === total - 1 ? [0, 1, 1] : [0, 1, 1, 0],
  );
};

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { data } = useMarketData();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacidad1 = useEscenaOpacity(scrollYProgress, 0, 3);
  const opacidad2 = useEscenaOpacity(scrollYProgress, 1, 3);
  const opacidad3 = useEscenaOpacity(scrollYProgress, 2, 3);
  const opacidades = [opacidad1, opacidad2, opacidad3];

  const videoScale = useTransform(scrollYProgress, [0, 0.4], [1.05, 1.18]);
  const barraProgreso = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const topCentral = data.fuentes.central.precios.slice(0, 3);

  // Con motion reducido mostramos las tres escenas apiladas, sin pin.
  if (prefersReducedMotion) {
    return (
      <section className="bg-[#07070c] py-20">
        <div className="container-custom space-y-16">
          {ESCENAS.map((escena) => (
            <div key={escena.etiqueta} className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-suba-green-300">{escena.etiqueta}</p>
              <h3 className="mt-3 font-display text-4xl font-black text-white">{escena.titulo}</h3>
              <p className="mt-4 text-lg leading-8 text-white/70">{escena.texto}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-[#07070c]" aria-label="Cómo funciona SubaDatos">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Fondo escena 1: video de arreo */}
        <motion.div style={{ opacity: opacidad1 }} className="absolute inset-0">
          <motion.video
            style={{ scale: videoScale }}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/story-herding-poster.jpg"
            aria-hidden="true"
          >
            <source src="/videos/story-herding.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07070c]/90 via-[#07070c]/60 to-[#07070c]/30" />
        </motion.div>

        {/* Fondo escena 2: malla de datos */}
        <motion.div style={{ opacity: opacidad2 }} className="absolute inset-0 bg-[#0a0714]">
          <div
            className="absolute inset-0 bg-grid-light animate-grid-pan opacity-60"
            style={{ maskImage: 'radial-gradient(ellipse 70% 60% at 60% 50%, #000 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 60% 50%, #000 30%, transparent 75%)' }}
          />
          <div className="hero-glow absolute right-[8%] top-[20%] h-96 w-96" style={{ background: 'radial-gradient(circle, rgba(126,34,206,0.4), transparent 65%)' }} />
          <svg viewBox="0 0 400 200" className="absolute right-[6%] top-1/2 hidden w-[420px] -translate-y-1/2 lg:block" aria-hidden="true">
            <defs>
              <linearGradient id="storyFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(74,222,128,0.3)" />
                <stop offset="100%" stopColor="rgba(74,222,128,0)" />
              </linearGradient>
            </defs>
            <path d="M0,150 L50,138 L100,144 L150,110 L200,120 L250,84 L300,92 L350,58 L400,42 L400,200 L0,200 Z" fill="url(#storyFill)" />
            <path d="M0,150 L50,138 L100,144 L150,110 L200,120 L250,84 L300,92 L350,58 L400,42" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Fondo escena 3: panel de precios reales */}
        <motion.div style={{ opacity: opacidad3 }} className="absolute inset-0 bg-[#07070c]">
          <div className="hero-glow absolute left-[45%] top-[15%] h-[480px] w-[480px]" style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.3), transparent 65%)' }} />
          <div className="absolute right-[8%] top-1/2 hidden w-[380px] -translate-y-1/2 space-y-3 lg:block">
            {topCentral.map((precio) => (
              <div key={precio.categoria} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d0d16]/90 px-5 py-4 backdrop-blur">
                <div>
                  <p className="font-bold text-white">{precio.categoria}</p>
                  <p className="text-xs text-white/45">Central Ganadera · esta semana</p>
                </div>
                <p className="font-display text-xl font-black text-suba-green-300">{formatCOP(precio.precio_kg)}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Texto de las escenas */}
        <div className="container-custom relative z-10">
          <div className="relative min-h-[340px] max-w-xl">
            {ESCENAS.map((escena, i) => {
              const Icono = escena.icono;
              return (
                <motion.div key={escena.etiqueta} style={{ opacity: opacidades[i] }} className="absolute inset-0 flex flex-col justify-center">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-suba-green-500/30 bg-suba-green-500/10 text-suba-green-300">
                    <Icono className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-suba-green-300">{escena.etiqueta}</p>
                  <h3 className="mt-3 font-display text-4xl font-black leading-tight text-white sm:text-5xl">{escena.titulo}</h3>
                  <p className="mt-5 text-lg leading-8 text-white/70">{escena.texto}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Barra de progreso de la historia */}
          <div className="mt-10 h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div style={{ width: barraProgreso }} className="h-full rounded-full bg-gradient-to-r from-suba-purple-500 to-suba-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollStory;
