
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone } from 'lucide-react';

const Hero = () => {
  const whatsappLink = "https://wa.me/573144423197?text=Hola,%20estoy%20interesado%2Fa%20en%20sus%20servicios%20de%20análisis%20de%20datos.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // Check if element is in viewport
        if (position.top < window.innerHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Run once on load

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl animate-on-scroll visible">
          <span className="inline-block bg-nature-500/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Análisis de datos · Servicios de IA · Mejora tu negocio</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mejora tus ganancias con <span className="text-nature-400">análisis de datos</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            En SUBADATOS te ayudamos a mejorar la gestión y análisis de tus datos. Potencia tu empresa con nuestros servicios profesionales de análisis y soluciones de IA.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                className="bg-nature-600 hover:bg-nature-700 text-white text-lg py-6 px-8"
              >
                <Phone className="mr-2 h-5 w-5" /> Contactar por WhatsApp
              </Button>
            </a>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg py-6 px-8"
              onClick={() => scrollToSection('productos')}
            >
              Ver Servicios
            </Button>
          </div>
          <div className="mt-8">
            <div className="inline-flex items-center p-2 px-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              Servicios en toda Colombia
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
        <button
          onClick={() => scrollToSection('nosotros')}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
