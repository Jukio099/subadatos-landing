import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, CheckCircle2, Phone, TrendingUp, Activity, MapPin } from 'lucide-react';
import { DASHBOARD_URL, WHATSAPP_PRICES } from '@/config/constants';
import { useCountUp } from '@/hooks/use-count-up';
import { useParallax } from '@/hooks/use-parallax';
import { TiltCard } from '@/components/motion/TiltCard';
import { Magnetic } from '@/components/motion/Magnetic';

const Hero = () => {
  const datosCount = useCountUp({ end: 1, decimals: 0, duration: 1800, suffix: 'M+', startOnView: false });
  const plazasCount = useCountUp({ end: 20, decimals: 0, duration: 1800, suffix: '+', startOnView: false });
  const yearsCount = useCountUp({ end: 2, decimals: 0, duration: 1800, suffix: '+', startOnView: false });

  // Escena con parallax controlado por el cursor.
  const sceneRef = useParallax<HTMLDivElement>(26);

  // Mini grafico: dibuja la linea al montar.
  const lineRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    try {
      const len = line.getTotalLength();
      line.style.strokeDasharray = `${len}`;
      line.style.strokeDashoffset = `${len}`;
      const t = setTimeout(() => {
        line.style.transition = 'stroke-dashoffset 1.8s ease-out';
        line.style.strokeDashoffset = '0';
      }, 400);
      return () => clearTimeout(t);
    } catch {
      /* no-op */
    }
  }, []);

  const marketRows = [
    { plaza: 'Yopal', categoria: 'Macho levante', precio: '$8.420/kg', trend: '+3,1%' },
    { plaza: 'Montería', categoria: 'Novilla', precio: '$7.980/kg', trend: '+1,8%' },
    { plaza: 'Medellín', categoria: 'Ceba', precio: '$8.760/kg', trend: '+2,4%' },
  ];

  return (
    <section
      id="inicio"
      ref={sceneRef}
      className="relative isolate overflow-hidden bg-[#07070c] pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Auroras animadas con profundidad (parallax) */}
      <div
        data-depth="0.4"
        className="hero-glow animate-blob-float"
        style={{ top: '-120px', left: '-80px', width: 520, height: 520, background: 'radial-gradient(circle, rgba(126,34,206,0.55), transparent 65%)' }}
      />
      <div
        data-depth="0.6"
        className="hero-glow animate-float-slow"
        style={{ top: 60, right: '-120px', width: 480, height: 480, background: 'radial-gradient(circle, rgba(22,163,74,0.42), transparent 65%)' }}
      />
      <div
        data-depth="0.3"
        className="hero-glow"
        style={{ bottom: '-160px', left: '40%', width: 420, height: 420, background: 'radial-gradient(circle, rgba(245,158,11,0.26), transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light animate-grid-pan"
        style={{ maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 75%)' }}
      />

      <div className="container-custom pb-16 sm:pb-20 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-suba-green-500/30 bg-suba-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-suba-green-300 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-suba-green-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-suba-green-400" />
              </span>
              Datos en vivo · Ganadería colombiana
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.93] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Inteligencia de mercado para vender ganado con{' '}
              <span className="text-gradient-flow">más certeza.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Datos, visualizaciones y análisis para tomar mejores decisiones en compra y venta de ganado, sin perder tiempo revisando reportes sueltos de subastas.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic>
                <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" data-event="consulta_precios_click" data-source="hero_primary">
                  <Button className="btn-shine h-14 rounded-full bg-suba-purple-700 px-7 text-base font-bold text-white shadow-[0_18px_42px_rgba(107,33,168,0.42)] transition-all hover:-translate-y-0.5 hover:bg-suba-purple-600">
                    <BarChart3 className="mr-2 h-5 w-5" /> Explorar datos <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </Magnetic>
              <Magnetic>
                <a href={WHATSAPP_PRICES} target="_blank" rel="noopener noreferrer" data-event="whatsapp_precios" data-source="hero_secondary">
                  <Button variant="outline" className="h-14 rounded-full border-suba-green-600/30 bg-white/5 px-7 text-base font-bold text-suba-green-300 hover:bg-suba-green-500/10 hover:text-suba-green-200">
                    <Phone className="mr-2 h-5 w-5" /> Consultar por WhatsApp
                  </Button>
                </a>
              </Magnetic>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-3xl border border-white/8 bg-white/5">
              {[
                { ref: datosCount.ref, value: datosCount.value, label: 'Datos analizados', cls: 'text-gradient-purple' },
                { ref: plazasCount.ref, value: plazasCount.value, label: 'Plazas monitoreadas', cls: 'text-gradient-green' },
                { ref: yearsCount.ref, value: yearsCount.value, label: 'Años de experiencia', cls: 'text-gradient-gold' },
              ].map((stat, index) => (
                <div key={stat.label} className={`p-4 sm:p-5 ${index !== 0 ? 'border-l border-white/8' : ''}`}>
                  <div ref={stat.ref} className={`font-display text-2xl font-black sm:text-3xl ${stat.cls}`}>{stat.value}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel interactivo con tilt + chips flotantes con parallax */}
          <div className="relative lg:pl-4" data-depth="0.18">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-suba-purple-500/30 via-transparent to-suba-green-500/30 blur-2xl" />

            <div data-depth="1.4" className="absolute -left-8 -top-6 z-20 flex animate-float-smooth items-center gap-2 rounded-2xl border border-suba-purple-500/40 bg-[#0f0f1a]/90 px-4 py-2.5 shadow-2xl">
              <TrendingUp className="h-5 w-5 text-suba-green-400" />
              <div>
                <p className="text-[11px] font-semibold text-white/55">Tendencia 30d</p>
                <p className="font-display text-sm font-bold text-suba-green-400">+2,6%</p>
              </div>
            </div>
            <div data-depth="1.1" className="absolute -right-8 bottom-6 z-20 flex animate-float-smooth items-center gap-2 rounded-2xl border border-suba-gold-500/40 bg-[#0f0f1a]/90 px-4 py-2.5 shadow-2xl" style={{ animationDelay: '1s' }}>
              <span className="h-2 w-2 animate-pulse rounded-full bg-suba-gold-400 shadow-[0_0_12px_#fbbf24]" />
              <div>
                <p className="text-[11px] font-semibold text-white/55">Señales</p>
                <p className="font-display text-sm font-bold text-white">En vivo</p>
              </div>
            </div>

            <TiltCard className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d16] shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
              <div className="border-b border-white/8 bg-gradient-to-r from-[#120a22] to-[#0d0d16] px-5 py-4 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-suba-green-300">SUBADATOS LIVE</p>
                    <h2 className="mt-1 text-xl font-black">Panel de precios ganaderos</h2>
                  </div>
                  <div className="rounded-full bg-suba-green-500/15 px-3 py-1 text-xs font-bold text-suba-green-300 ring-1 ring-suba-green-400/30">● Actualizado</div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {/* Mini grafico que se dibuja al montar */}
                <div className="relative mb-5 h-28 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-suba-purple-500/10 to-transparent">
                  <svg viewBox="0 0 320 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                    <defs>
                      <linearGradient id="subaHeroFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(74,222,128,0.35)" />
                        <stop offset="100%" stopColor="rgba(74,222,128,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,92 L40,84 L80,88 L120,66 L160,72 L200,48 L240,54 L280,32 L320,24 L320,120 L0,120 Z" fill="url(#subaHeroFill)" />
                    <path ref={lineRef} d="M0,92 L40,84 L80,88 L120,66 L160,72 L200,48 L240,54 L280,32 L320,24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: TrendingUp, label: 'Tendencia', value: '+2,6%', color: 'text-suba-green-300 bg-suba-green-500/15' },
                    { icon: MapPin, label: 'Municipios', value: '20+', color: 'text-suba-purple-300 bg-suba-purple-500/15' },
                    { icon: Activity, label: 'Señales', value: 'En vivo', color: 'text-suba-gold-400 bg-suba-gold-500/15' },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${color}`}><Icon className="h-4 w-4" /></div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">{label}</p>
                      <p className="mt-1 text-lg font-black text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-black text-white">Últimas referencias</p>
                    <p className="text-xs font-bold text-white/50">COP/kg</p>
                  </div>
                  <div className="space-y-3">
                    {marketRows.map((row) => (
                      <div key={`${row.plaza}-${row.categoria}`} className="grid grid-cols-[1fr_auto] gap-3 rounded-xl bg-white/5 p-3">
                        <div>
                          <p className="font-bold text-white">{row.plaza}</p>
                          <p className="text-sm text-white/50">{row.categoria}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-white">{row.precio}</p>
                          <p className="text-xs font-bold text-suba-green-400">{row.trend}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-gradient-to-br from-suba-purple-800 to-suba-green-700 p-5 text-white">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-suba-green-200" />
                    <div>
                      <p className="font-black">Lectura accionable del mercado</p>
                      <p className="mt-1 text-sm leading-6 text-white/75">Compare plazas, categorías y tendencias antes de comprar o vender.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
