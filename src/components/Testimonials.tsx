import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Caso ganadero en Casanare",
    role: "Productor bovino",
    content:
      "Antes de vender revisamos referencias de subasta y ajustamos el precio esperado. La conversación por WhatsApp nos ayudó a negociar con más seguridad.",
    initials: "CG",
    rating: 5,
  },
  {
    id: 2,
    name: "Caso finca de los Llanos",
    role: "Administración de finca",
    content:
      "Cotizamos semillas de pasto con información más clara para la zona. La asesoría fue rápida y aterrizada a las condiciones de la finca.",
    initials: "FL",
    rating: 5,
  },
  {
    id: 3,
    name: "Caso comprador en subasta",
    role: "Comercializador ganadero",
    content:
      "La consulta de precios de SubaDatos nos dio una referencia antes de entrar a negociar. Tener datos recientes cambia totalmente la conversación.",
    initials: "CS",
    rating: 5,
  },
  {
    id: 4,
    name: "Caso asesoría agropecuaria",
    role: "Equipo técnico de finca",
    content:
      "Ordenamos la información de precios y pesos para tomar decisiones semanales. El valor estuvo en convertir datos dispersos en una recomendación concreta.",
    initials: "AA",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth >= 768 ? 2 : 1);

  useEffect(() => {
    const handleResize = () => setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () =>
    setCurrentIndex(prev =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );

  const prev = () =>
    setCurrentIndex(prev =>
      prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
    );

  return (
    <section id="testimonios" className="section-padding bg-earth-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Lo que dicen nuestros clientes</h2>
          <div className="h-1 w-20 bg-earth-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Casos anónimos y referencias de uso: ganaderos y equipos agropecuarios usan SubaDatos
            para llegar mejor preparados a sus decisiones de compra, venta y productividad.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 overflow-hidden">
            {testimonials.slice(currentIndex, currentIndex + visibleCount).map(testimonial => (
              <div
                key={testimonial.id}
                className="flex-1 bg-white p-6 rounded-lg shadow-lg animate-on-scroll"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full mr-4 bg-gradient-to-br from-nature-500 to-earth-500 text-white font-bold flex items-center justify-center shadow-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="p-3 rounded-full bg-white border border-earth-200 hover:bg-earth-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-earth-700" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="p-3 rounded-full bg-white border border-earth-200 hover:bg-earth-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-earth-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
