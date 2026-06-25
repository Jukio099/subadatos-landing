import { ArrowRight, Database, ChartBar, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DASHBOARD_URL } from '@/config/constants';
import { useCountUp } from '@/hooks/use-count-up';
import { WordReveal } from './WordReveal';
import { TiltCard } from '@/components/motion/TiltCard';

const Benefits = () => {
  const dataCount = useCountUp({ end: 1, suffix: 'M+', duration: 1800 });
  const plazaCount = useCountUp({ end: 20, suffix: '+', duration: 1800 });
  const yearCount = useCountUp({ end: 2, suffix: '+', duration: 1800 });

  return (
    <section
      id="beneficios"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-suba-purple-700/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-suba-green-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="container-custom relative z-10">
        <div className="animate-on-scroll mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-suba-green-500/20 bg-suba-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-suba-green-300">
            <Sparkles className="h-3.5 w-3.5" /> Beneficios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            <WordReveal>¿Por qué</WordReveal>{' '}
            <WordReveal className="text-gradient" delay={300}>elegirnos</WordReveal>?
          </h2>
          <div className="bar-shimmer mx-auto mb-6 h-1 w-24 rounded-full" />
          <p className="text-base leading-relaxed text-white/60 sm:text-lg">
            En SUBADATOS ofrecemos beneficios únicos que nos distinguen en el mercado,
            garantizando la satisfacción de nuestros clientes y el éxito de sus negocios.
          </p>
        </div>

        <div className="stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Benefit 1 */}
          <TiltCard className="group glass border-shimmer relative overflow-hidden rounded-2xl border-t-2 border-suba-purple-500 p-7">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-suba-purple-600/0 blur-3xl transition-all duration-700 group-hover:bg-suba-purple-600/20" />
            <div className="relative">
              <div className="icon-glow mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-suba-purple-500/30 bg-suba-purple-700/30 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                <Database className="h-7 w-7 text-suba-purple-300" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Análisis de Datos Avanzado</h3>
              <p className="mb-5 text-sm leading-relaxed text-white/60">
                Consultá los precios históricos del ganado por plaza, categoría y peso.
                Tomá decisiones antes de llegar a la subasta.
              </p>
              <ul className="mb-6 space-y-2">
                {['Procesamiento inteligente', 'Visualización interactiva', 'Informes personalizados'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-suba-purple-400 transition-transform group-hover:scale-150" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="btn-shine group/btn w-full rounded-full border border-suba-purple-500/40 bg-suba-purple-700 py-5 text-white hover:bg-suba-purple-600">
                <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Ver Consulta de Precios
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </TiltCard>

          {/* Benefit 2 */}
          <TiltCard className="group glass border-shimmer relative overflow-hidden rounded-2xl border-t-2 border-suba-green-500 p-7">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-suba-green-600/0 blur-3xl transition-all duration-700 group-hover:bg-suba-green-600/20" />
            <div className="relative">
              <div className="icon-glow mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-suba-green-500/30 bg-suba-green-700/30 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                <ChartBar className="h-7 w-7 text-suba-green-300" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Asesoría Técnica Especializada</h3>
              <p className="mb-5 text-sm leading-relaxed text-white/60">
                Nuestro equipo de expertos le brinda asesoramiento personalizado
                para maximizar el rendimiento de sus datos y optimizar sus operaciones.
              </p>
              <ul className="space-y-2">
                {['Consultoría estratégica', 'Implementación de soluciones', 'Seguimiento continuo'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-suba-green-400 transition-transform group-hover:scale-150" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>

          {/* Benefit 3 */}
          <TiltCard className="group glass border-shimmer relative overflow-hidden rounded-2xl border-t-2 border-suba-gold-500 p-7">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-suba-gold-500/0 blur-3xl transition-all duration-700 group-hover:bg-suba-gold-500/15" />
            <div className="relative">
              <div className="icon-glow mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-suba-gold-500/30 bg-suba-gold-500/20 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                <Leaf className="h-7 w-7 text-suba-gold-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Productos Agropecuarios de Calidad</h3>
              <p className="mb-5 text-sm leading-relaxed text-white/60">
                Complementamos nuestros servicios con productos agropecuarios de primera
                calidad adaptados a las necesidades específicas del sector.
              </p>
              <ul className="space-y-2">
                {['Semillas de alto rendimiento', 'Equipos de precisión', 'Adaptados al clima colombiano'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-suba-gold-400 transition-transform group-hover:scale-150" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </div>

        {/* Stats banner */}
        <div className="animate-on-scroll mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6">
          {[
            { ref: dataCount.ref, value: dataCount.value, label: 'Datos analizados', color: 'text-gradient' },
            { ref: plazaCount.ref, value: plazaCount.value, label: 'Plazas conectadas', color: 'text-gradient-green' },
            { ref: yearCount.ref, value: yearCount.value, label: 'Años de experiencia', color: 'text-gradient-gold' },
          ].map(({ ref, value, label, color }) => (
            <div key={label} className="glass-light rounded-2xl border border-white/5 p-4 text-center transition-colors hover:border-white/10 sm:p-6">
              <span ref={ref} className={`mb-1 block font-display text-3xl font-bold sm:text-4xl md:text-5xl ${color}`}>{value}</span>
              <p className="text-xs uppercase tracking-wider text-white/60 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll relative mt-12 overflow-hidden rounded-2xl border border-suba-purple-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-suba-purple-900/60 via-suba-purple-800/40 to-suba-purple-900/60" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative flex flex-col items-center justify-between gap-6 p-6 sm:p-8 md:flex-row">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">¿Listo para optimizar sus datos?</h3>
              <p className="text-sm text-white/70 sm:text-base">
                Contáctenos hoy mismo para recibir una asesoría personalizada y conocer todas nuestras soluciones.
              </p>
            </div>
            <button
              className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-suba-purple-500/40 bg-gradient-to-r from-suba-purple-700 to-suba-purple-600 px-6 py-3 text-white shadow-[0_0_25px_rgba(107,33,168,0.4)] transition-all hover:from-suba-purple-600 hover:to-suba-purple-500 hover:shadow-[0_0_35px_rgba(107,33,168,0.6)]"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Información
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
