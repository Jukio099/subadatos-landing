import { ArrowRight, Database, ChartBar, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DASHBOARD_URL } from '@/config/constants';
import { useCountUp } from '@/hooks/use-count-up';

const Benefits = () => {
  const dataCount = useCountUp({ end: 1, suffix: 'M+', duration: 1800 });
  const plazaCount = useCountUp({ end: 20, suffix: '+', duration: 1800 });
  const yearCount = useCountUp({ end: 2, suffix: '+', duration: 1800 });

  return (
    <section
      id="beneficios"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #111118 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-suba-purple-700/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-suba-green-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-suba-green-300 bg-suba-green-500/10 border border-suba-green-500/20 px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.15em]">
            <Sparkles className="h-3.5 w-3.5" /> Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            ¿Por qué <span className="text-gradient">elegirnos</span>?
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bar-shimmer mb-6" />
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            En SUBADATOS ofrecemos beneficios únicos que nos distinguen en el mercado,
            garantizando la satisfacción de nuestros clientes y el éxito de sus negocios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {/* Benefit 1 */}
          <div className="group relative glass rounded-2xl p-7 border-t-2 border-suba-purple-500 hover:border-suba-purple-400 hover-lift overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-suba-purple-600/0 group-hover:bg-suba-purple-600/20 rounded-full blur-3xl transition-all duration-700" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-suba-purple-700/30 border border-suba-purple-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Database className="h-7 w-7 text-suba-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Análisis de Datos Avanzado</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Consultá los precios históricos del ganado por plaza, categoría y peso.
                Tomá decisiones antes de llegar a la subasta.
              </p>
              <ul className="space-y-2 mb-6">
                {['Procesamiento inteligente', 'Visualización interactiva', 'Informes personalizados'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-suba-purple-400 group-hover:scale-150 transition-transform" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-suba-purple-700 hover:bg-suba-purple-600 text-white rounded-full py-5 border border-suba-purple-500/40 group/btn">
                <a
                  href={DASHBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver Consulta de Precios
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group relative glass rounded-2xl p-7 border-t-2 border-suba-green-500 hover:border-suba-green-400 hover-lift overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-suba-green-600/0 group-hover:bg-suba-green-600/20 rounded-full blur-3xl transition-all duration-700" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-suba-green-700/30 border border-suba-green-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <ChartBar className="h-7 w-7 text-suba-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Asesoría Técnica Especializada</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Nuestro equipo de expertos le brinda asesoramiento personalizado
                para maximizar el rendimiento de sus datos y optimizar sus operaciones.
              </p>
              <ul className="space-y-2">
                {['Consultoría estratégica', 'Implementación de soluciones', 'Seguimiento continuo'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-suba-green-400 group-hover:scale-150 transition-transform" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group relative glass rounded-2xl p-7 border-t-2 border-suba-gold-500 hover:border-suba-gold-400 hover-lift overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-suba-gold-500/0 group-hover:bg-suba-gold-500/15 rounded-full blur-3xl transition-all duration-700" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-suba-gold-500/20 border border-suba-gold-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Leaf className="h-7 w-7 text-suba-gold-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Productos Agropecuarios de Calidad</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Complementamos nuestros servicios con productos agropecuarios de primera
                calidad adaptados a las necesidades específicas del sector.
              </p>
              <ul className="space-y-2">
                {['Semillas de alto rendimiento', 'Equipos de precisión', 'Adaptados al clima colombiano'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-suba-gold-400 group-hover:scale-150 transition-transform" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto animate-on-scroll">
          {[
            { ref: dataCount.ref, value: dataCount.value, label: 'Datos analizados', color: 'text-gradient' },
            { ref: plazaCount.ref, value: plazaCount.value, label: 'Plazas conectadas', color: 'text-gradient-green' },
            { ref: yearCount.ref, value: yearCount.value, label: 'Años de experiencia', color: 'text-gradient-gold' },
          ].map(({ ref, value, label, color }) => (
            <div
              key={label}
              className="glass-light rounded-2xl p-4 sm:p-6 text-center border border-white/5 hover:border-white/10 transition-colors"
            >
              <span ref={ref} className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold block mb-1 ${color}`}>
                {value}
              </span>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden rounded-2xl border border-suba-purple-500/30 animate-on-scroll">
          <div className="absolute inset-0 bg-gradient-to-r from-suba-purple-900/60 via-suba-purple-800/40 to-suba-purple-900/60" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">¿Listo para optimizar sus datos?</h3>
              <p className="text-white/70 text-sm sm:text-base">
                Contáctenos hoy mismo para recibir una asesoría personalizada y conocer todas nuestras soluciones.
              </p>
            </div>
            <button
              className="group flex items-center gap-2 bg-gradient-to-r from-suba-purple-700 to-suba-purple-600 hover:from-suba-purple-600 hover:to-suba-purple-500 text-white py-3 px-6 rounded-full border border-suba-purple-500/40 shadow-[0_0_25px_rgba(107,33,168,0.4)] hover:shadow-[0_0_35px_rgba(107,33,168,0.6)] transition-all whitespace-nowrap"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Información
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
