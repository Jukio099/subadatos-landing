import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Caso ganadero en Casanare",
    role: "Productor bovino",
    content:
      "Antes de vender revisamos referencias de subasta y ajustamos el precio esperado. La conversación por WhatsApp nos ayudó a negociar con más seguridad.",
    initials: "CG",
    rating: 5,
    accent: "purple",
  },
  {
    id: 2,
    name: "Caso finca de los Llanos",
    role: "Administración de finca",
    content:
      "Cotizamos semillas de pasto con información más clara para la zona. La asesoría fue rápida y aterrizada a las condiciones de la finca.",
    initials: "FL",
    rating: 5,
    accent: "green",
  },
  {
    id: 3,
    name: "Caso comprador en subasta",
    role: "Comercializador ganadero",
    content:
      "La consulta de precios de SubaDatos nos dio una referencia antes de entrar a negociar. Tener datos recientes cambia totalmente la conversación.",
    initials: "CS",
    rating: 5,
    accent: "gold",
  },
  {
    id: 4,
    name: "Caso asesoría agropecuaria",
    role: "Equipo técnico de finca",
    content:
      "Ordenamos la información de precios y pesos para tomar decisiones semanales. El valor estuvo en convertir datos dispersos en una recomendación concreta.",
    initials: "AA",
    rating: 5,
    accent: "purple",
  },
];

const accentMap: Record<string, { from: string; to: string; }> = {
  purple: { from: 'from-suba-purple-600', to: 'to-suba-purple-500' },
  green: { from: 'from-suba-green-600', to: 'to-suba-green-500' },
  gold: { from: 'from-suba-gold-500', to: 'to-suba-gold-400' },
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth >= 768 ? 2 : 1);

  useEffect(() => {
    const handleResize = () => setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev + visibleCount >= testimonials.length ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const next = () =>
    setCurrentIndex(prev =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );

  const prev = () =>
    setCurrentIndex(prev =>
      prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
    );

  return (
    <section
      id="testimonios"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-suba-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-suba-gold-400 bg-suba-gold-500/10 border border-suba-gold-500/20 px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.15em]">
            <Sparkles className="h-3.5 w-3.5" /> Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Lo que dicen <span className="text-gradient-gold">nuestros clientes</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-suba-gold-500 to-suba-gold-400 mb-6" />
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Casos anónimos y referencias de uso: ganaderos y equipos agropecuarios usan
            SubaDatos para llegar mejor preparados a sus decisiones de compra, venta y productividad.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {testimonials.slice(currentIndex, currentIndex + visibleCount).map((testimonial, idx) => {
              const accent = accentMap[testimonial.accent];
              return (
                <div
                  key={`${testimonial.id}-${currentIndex}`}
                  className="flex-1 relative group glass rounded-2xl p-7 border border-white/5 hover:border-suba-purple-500/30 transition-all duration-500 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-suba-purple-600/0 group-hover:bg-suba-purple-600/10 rounded-full blur-3xl transition-all duration-700" />

                  {/* Quote icon */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-suba-purple-600 to-suba-green-500 flex items-center justify-center shadow-lg shadow-suba-purple-500/30">
                    <Quote className="h-4 w-4 text-white" />
                  </div>

                  <div className="flex justify-between items-start mb-5 relative">
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-full mr-4 bg-gradient-to-br ${accent.from} ${accent.to} text-white font-display font-bold flex items-center justify-center shadow-lg ring-2 ring-white/10`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-base text-white">{testimonial.name}</h4>
                        <p className="text-xs text-white/55">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${i < testimonial.rating ? 'text-suba-gold-400 fill-suba-gold-400' : 'text-white/15'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/75 italic text-sm leading-relaxed relative">
                    "{testimonial.content}"
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-5 h-px bg-gradient-to-r from-transparent via-suba-purple-500/30 to-transparent" />
                </div>
              );
            })}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * visibleCount)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentIndex === i * visibleCount
                    ? 'w-8 bg-gradient-to-r from-suba-purple-500 to-suba-green-500'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-3">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="p-3 rounded-full glass-light border border-white/10 hover:border-suba-purple-500/50 hover:bg-suba-purple-500/10 text-white/80 hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="p-3 rounded-full glass-light border border-white/10 hover:border-suba-purple-500/50 hover:bg-suba-purple-500/10 text-white/80 hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
