import { CheckCircle, TrendingUp, MapPin, Database, Award } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import { WordReveal, BlurReveal } from './WordReveal';

const About = () => {
  const yearsCount = useCountUp({ end: 2, suffix: '+', duration: 1800 });
  const plazasCount = useCountUp({ end: 20, suffix: '+', duration: 1800 });
  const datosCount = useCountUp({ end: 1, suffix: 'M+', duration: 1800 });

  return (
    <section
      id="nosotros"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #111118 100%)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-72 h-72 bg-suba-purple-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-suba-green-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <BlurReveal className="order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-suba-purple-600/40 to-suba-green-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass rounded-2xl overflow-hidden border border-white/5">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Análisis de datos ganaderos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-suba-dark-300/80 via-suba-dark-300/30 to-transparent" />
                  <div className="absolute top-4 right-4 glass-light rounded-lg p-3 border border-suba-purple-500/30 animate-float-smooth">
                    <div className="flex items-center gap-2">
                      <Database className="h-3.5 w-3.5 text-suba-purple-300" />
                      <span className="text-xs text-white font-mono">LIVE FEED</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-suba-green-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-light rounded-lg p-3 border border-white/10">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/70">Plazas monitoreadas</span>
                        <span className="text-suba-green-400 font-bold">+20</span>
                      </div>
                      <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-suba-purple-500 to-suba-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-2 md:-right-6 hidden md:flex items-center gap-3 glass-strong rounded-xl p-4 border border-suba-purple-500/30 shadow-2xl animate-float-smooth" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-suba-purple-600 to-suba-green-500 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-xl text-white leading-tight">{yearsCount.value}</p>
                  <p className="text-xs text-white/60 leading-tight">años de experiencia</p>
                </div>
              </div>
            </div>
          </BlurReveal>

          <BlurReveal className="order-1 md:order-2" delay={120}>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-suba-purple-300 bg-suba-purple-500/10 border border-suba-purple-500/20 px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.15em]">
              Quiénes Somos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white leading-tight">
              <WordReveal className="block">Inteligencia ganadera</WordReveal>
              <WordReveal className="block text-gradient" delay={250}>
                hecha en Colombia
              </WordReveal>
            </h2>
            <div className="h-1 w-20 rounded-full bar-shimmer mb-6" />
            <p className="text-white/70 mb-5 leading-relaxed">
              Consolidamos información de las principales subastas ganaderas del país —
              Medellín, Bogotá, Montería, Valledupar y más de 20 municipios adicionales.
            </p>
            <p className="text-white/70 mb-5 leading-relaxed">
              Analizamos categorías de bovinos como macho de levante, hembra de vientre, toros,
              novillas y ganado en ceba, permitiéndote conocer el precio por kilogramo con alta
              precisión antes de entrar a subastar.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Con SubaDatos, la información del mercado ganadero trabaja para usted.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { title: 'Precios en Tiempo Real', desc: 'Consulta precios actuales de subasta' },
                { title: 'Asesoría Personal', desc: 'Te ayudamos cuando lo necesites' },
                { title: 'Predicción de Precios', desc: 'Estimamos el precio antes de subastar' },
                { title: 'Resultados Comprobados', desc: 'Clientes con mejores resultados' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-suba-purple-500/20 border border-suba-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <CheckCircle className="h-4 w-4 text-suba-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-white/55">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 glass-light rounded-2xl border border-white/5">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="h-3.5 w-3.5 text-suba-green-400" />
                  <span ref={yearsCount.ref} className="text-2xl font-bold font-display text-gradient-green">
                    {yearsCount.value}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Años</p>
              </div>
              <div className="text-center border-x border-white/5">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MapPin className="h-3.5 w-3.5 text-suba-gold-400" />
                  <span ref={plazasCount.ref} className="text-2xl font-bold font-display text-gradient-gold">
                    {plazasCount.value}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Plazas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Database className="h-3.5 w-3.5 text-suba-purple-300" />
                  <span ref={datosCount.ref} className="text-2xl font-bold font-display text-gradient-purple">
                    {datosCount.value}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Datos</p>
              </div>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
