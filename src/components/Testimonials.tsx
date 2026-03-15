import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Ganadero, Finca El Paraíso",
    content:
      "Gracias al análisis de datos de SUBADATOS pudimos identificar los períodos de mayor rentabilidad en nuestras subastas. Mejoramos nuestras ganancias en un 30% en el primer semestre.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "María Rodríguez",
    role: "Administradora, Hacienda Los Llanos",
    content:
      "Las semillas Brachiaria de SUBADATOS superaron nuestras expectativas. El porcentaje de germinación es superior al 90% y la asesoría técnica que nos brindan es invaluable.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Fernando Suárez",
    role: "Propietario, Finca San José",
    content:
      "La consulta de precios de SUBADATOS nos permite decidir mejor en cada subasta. Ver los precios al instante nos da una ventaja enorme frente a los demás compradores.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Laura Quintero",
    role: "Gerente, Agroindustrias del Oriente",
    content:
      "Contratamos la consultoría de datos y los resultados fueron inmediatos. El equipo de SUBADATOS entiende perfectamente las necesidades del sector agropecuario colombiano.",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
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
            Descubra por qué los ganaderos y agricultores de toda Colombia confían en SUBADATOS
            para mejorar sus datos, pasturas y productividad.
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
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                      loading="lazy"
                    />
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
