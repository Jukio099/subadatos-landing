import { Button } from '@/components/ui/button';
import { ChevronDown, Phone } from 'lucide-react';
import { DASHBOARD_URL, WHATSAPP_PRICES } from '@/config/constants';

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
            Conozca el precio del ganado antes de <span className="text-nature-400">vender en subasta</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            SubaDatos analiza precios de subastas ganaderas en Colombia para ayudarle a negociar mejor,
            escoger el momento de venta y tomar decisiones con datos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={WHATSAPP_PRICES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              data-event="whatsapp_precios"
              data-source="hero"
            >
              <Button className="w-full bg-nature-600 hover:bg-nature-700 text-white text-base py-4 px-6 sm:text-lg sm:py-6 sm:px-8">
                <Phone className="mr-2 h-5 w-5" /> Consultar precios por WhatsApp
              </Button>
            </a>
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="consulta_precios_click"
              data-source="hero"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white/10 text-base py-4 px-6 sm:text-lg sm:py-6 sm:px-8"
              >
                Ver consulta de precios
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-2 text-white text-sm">
            {['Atención por WhatsApp', 'Especializado en subastas ganaderas', 'Datos para compra y venta'].map(item => (
              <div key={item} className="inline-flex items-center p-2 px-3 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                {item}
              </div>
            ))}
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
