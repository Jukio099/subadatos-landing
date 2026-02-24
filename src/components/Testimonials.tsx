
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Ganadero, Finca El Paraíso",
    content: "Desde que empecé a utilizar las semillas de Semillas Pasto Yopal, la capacidad de carga de mi finca aumentó en un 30%. El servicio de asesoría técnica que brindan ha sido fundamental para lograr estos resultados.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "María Rodríguez",
    role: "Administradora, Hacienda Los Llanos",
    content: "Excelente relación calidad-precio. Las semillas tienen un porcentaje de germinación superior al 90% y el pasto resultante es resistente tanto a la sequía como a las lluvias intensas.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Fernando Suárez",
    role: "Propietario, Finca San José",
    content: "He probado varias marcas de semillas de pasto, pero ninguna ha dado los resultados que obtengo con Semillas Pasto Yopal. Su asesoría técnica es inigualable y siempre están disponibles para resolver cualquier duda.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "Laura Quintero",
    role: "Gerente, Agroindustrias del Oriente",
    content: "La calidad de las semillas es excepcional. Estamos muy satisfechos con los resultados obtenidos en nuestras extensas áreas de pastura. Sin duda, continuaremos trabajando con Semillas Pasto Yopal.",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 2; // Number of testimonials to show at once on desktop
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleTestimonials >= testimonials.length 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, testimonials.length - visibleTestimonials) 
        : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonios" className="section-padding bg-earth-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Lo que dicen nuestros clientes</h2>
          <div className="h-1 w-20 bg-earth-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Descubra por qué los ganaderos y agricultores de Yopal y toda la región confían en nosotros 
            para el mejoramiento de sus pasturas y el aumento de su productividad.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 overflow-hidden">
            {testimonials
              .slice(currentIndex, currentIndex + visibleTestimonials)
              .map((testimonial) => (
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
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-earth-200 hover:bg-earth-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-earth-700" />
            </button>
            <button 
              onClick={nextTestimonial}
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
