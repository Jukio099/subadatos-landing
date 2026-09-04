import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, ChevronDown, Phone, TrendingDown, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_PRICES } from '@/config/constants';
import { useCountUp } from '@/hooks/use-count-up';
import { formatCOP, formatFechaCorta, formatVariacion, useMarketData } from '@/hooks/use-market-data';
import { Magnetic } from '@/components/motion/Magnetic';

/**
 * Hero cinematográfico: video de fondo a pantalla completa que se aleja y
 * oscurece con el scroll (efecto parallax), titular con entrada escalonada
 * y panel de precios reales alimentado por el JSON público del ETL.
 */
const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { data, isLive } = useMarketData();
  const central = data.fuentes.central;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // El video se acerca lentamente y se funde a negro mientras el contenido sube.
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const datosCount = useCountUp({ end: 60, decimals: 0, duration: 1800, suffix: 'K+', startOnView: false });
  const plazasCount = useCountUp({ end: 14, decimals: 0, duration: 1800, suffix: '', startOnView: false });
  const regionesCount = useCountUp({ end: central.regiones ?? 30, decimals: 0, duration: 1800, suffix: '+', startOnView: false });

  const entrada = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const topPrecios = central.precios.slice(0, 3);

  return (
    <section id="inicio" ref={sectionRef} className="relative isolate min-h-[100svh] overflow-hidden bg-[#07070c]">
      {/* ── Video de fondo con parallax ─────────────────────────────── */}
      <motion.div
        style={prefersReducedMotion ? undefined : { scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 -z-20"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-cattle-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-cattle.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Capas de oscurecimiento para legibilidad y fundido con la siguiente sección */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#07070c]/80 via-[#07070c]/55 to-[#07070c]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07070c]/70 via-transparent to-[#07070c]/40" />

      <div className="container-custom flex min-h-[100svh] flex-col justify-center pb-24 pt-32 sm:pt-36">
        <motion.div
          style={prefersReducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="max-w-3xl">
            <motion.div
              {...entrada(0.05)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-suba-green-500/30 bg-[#07070c]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-suba-green-300 backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-suba-green-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-suba-green-400" />
              </span>
              {isLive ? 'Datos en vivo · Ganadería colombiana' : 'Ganadería colombiana'}
            </motion.div>

            <motion.h1
              {...entrada(0.15)}
              className="max-w-4xl font-display text-5xl font-black leading-[0.93] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              Inteligencia de mercado para vender ganado con{' '}
              <span className="text-gradient-flow">más certeza.</span>
            </motion.h1>

            <motion.p {...entrada(0.28)} className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Seguimos Central Ganadera, SubaCasanare, Subastar, Cencogán, Sugaberrío y el promedio
              nacional de Asosubastas. Precios reales para decidir cuándo comprar y cuándo vender.
            </motion.p>

            <motion.div {...entrada(0.4)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic>
                <Link to="/precios" data-event="consulta_precios_click" data-source="hero_primary">
                  <Button className="btn-shine h-14 rounded-full bg-suba-purple-700 px-7 text-base font-bold text-white shadow-[0_18px_42px_rgba(107,33,168,0.42)] transition-all hover:-translate-y-0.5 hover:bg-suba-purple-600">
                    <BarChart3 className="mr-2 h-5 w-5" /> Ver precios <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic>
                <a href={WHATSAPP_PRICES} target="_blank" rel="noopener noreferrer" data-event="whatsapp_precios" data-source="hero_secondary">
                  <Button variant="outline" className="h-14 rounded-full border-suba-green-600/30 bg-[#07070c]/50 px-7 text-base font-bold text-suba-green-300 backdrop-blur hover:bg-suba-green-500/10 hover:text-suba-green-200">
                    <Phone className="mr-2 h-5 w-5" /> Consultar por WhatsApp
                  </Button>
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              {...entrada(0.55)}
              className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-[#07070c]/55 backdrop-blur"
            >
              {[
                { value: datosCount.value, label: 'Registros de subasta', cls: 'text-gradient-purple' },
                { value: plazasCount.value, label: 'Plazas monitoreadas', cls: 'text-gradient-green' },
                { value: regionesCount.value, label: 'Regiones de origen', cls: 'text-gradient-gold' },
              ].map((stat, index) => (
                <div key={stat.label} className={`p-4 sm:p-5 ${index !== 0 ? 'border-l border-white/10' : ''}`}>
                  <div className={`font-display text-2xl font-black sm:text-3xl ${stat.cls}`}>{stat.value}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Panel de precios reales ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-4"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-suba-purple-500/25 via-transparent to-suba-green-500/25 blur-2xl" />

            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d16]/85 shadow-[0_40px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="border-b border-white/8 bg-gradient-to-r from-[#120a22]/90 to-[#0d0d16]/90 px-5 py-4 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-suba-green-300">SUBADATOS LIVE</p>
                    <h2 className="mt-1 text-xl font-black">{central.nombre}</h2>
                  </div>
                  <div className="rounded-full bg-suba-green-500/15 px-3 py-1 text-xs font-bold text-suba-green-300 ring-1 ring-suba-green-400/30">
                    {central.boletin ? `Boletín #${central.boletin}` : '● Actualizado'}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-black text-white">Subasta del {formatFechaCorta(central.fecha)}</p>
                  <p className="text-xs font-bold text-white/50">COP/kg en pie</p>
                </div>

                <div className="space-y-3">
                  {topPrecios.map((row, i) => {
                    const sube = (row.variacion_pct ?? 0) >= 0;
                    return (
                      <motion.div
                        key={row.categoria}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + i * 0.12 }}
                        className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl bg-white/5 p-3.5"
                      >
                        <div>
                          <p className="font-bold text-white">{row.categoria}</p>
                          <p className="text-xs text-white/45">Promedio semanal</p>
                        </div>
                        <div className="text-right">
                          <p className="font-display font-black text-white">{formatCOP(row.precio_kg)}</p>
                          {row.variacion_pct !== null && (
                            <p className={`flex items-center justify-end gap-0.5 text-xs font-bold ${sube ? 'text-suba-green-400' : 'text-red-400'}`}>
                              {sube ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                              {formatVariacion(row.variacion_pct)}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[data.fuentes.casanare, data.fuentes.subastar].map((fuente) => (
                    <div key={fuente.nombre} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <p className="truncate text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">{fuente.nombre.split('(')[0].trim()}</p>
                      <p className="mt-1 font-display text-lg font-black text-white">
                        {fuente.precios[0] ? formatCOP(fuente.precios[0].precio_kg) : '—'}
                      </p>
                      <p className="text-xs text-white/45">
                        {fuente.precios[0]?.categoria ?? ''} · {formatFechaCorta(fuente.fecha)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]">Descubra más</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
