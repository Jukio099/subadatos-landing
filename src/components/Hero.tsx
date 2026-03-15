import { Button } from '@/components/ui/button';
import { ChevronDown, Phone } from 'lucide-react';
import { WHATSAPP_GENERAL } from '@/config/constants';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Reemplazar con foto real de una subasta ganadera colombiana */}
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl animate-on-scroll visible">
          <span className="inline-block bg-nature-500/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Precios de ganado · Subastas en Colombia · Toma mejores decisiones
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Mejora tus ganancias con <span className="text-nature-400">análisis de datos</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            En SUBADATOS te mostramos los precios del ganado en las subastas de Colombia
            para que vendas en el momento justo y ganes más.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={WHATSAPP_GENERAL} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="w-full bg-nature-600 hover:bg-nature-700 text-white text-base py-4 px-6 sm:text-lg sm:py-6 sm:px-8">
                <Phone className="mr-2 h-5 w-5" /> Contactar por WhatsApp
              </Button>
            </a>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 text-base py-4 px-6 sm:text-lg sm:py-6 sm:px-8"
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
        <button onClick={() => scrollToSection('nosotros')} className="flex flex-col items-center">
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
