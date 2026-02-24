
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/573026836254?text=Hola,%20estoy%20interesado%2Fa%20en%20sus%20servicios.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-nature-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/9569de5a-057e-4973-b16b-1def60885893.png" 
                alt="SUBADATOS Logo" 
                className="h-16 w-16 mr-3 rounded-full object-cover" 
              />
            </div>
            <p className="text-gray-300 mb-6">
              Ofrecemos los mejores servicios de análisis de datos para su empresa, 
              con asesoría técnica especializada y garantía de calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-nature-700 pb-2">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')} 
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')} 
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('productos')} 
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('beneficios')} 
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Beneficios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')} 
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Contáctanos
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-nature-700 pb-2">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-earth-400 mt-1" />
                <span className="text-gray-300">
                  Colombia
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-earth-400 mt-1" />
                <div>
                  <span className="text-gray-300 block">+57 302 6836254</span>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-earth-400 hover:text-earth-300 text-sm"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-earth-400" />
                <span className="text-gray-300">subadatos@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-nature-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SUBADATOS. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Política de privacidad</a>
            <a href="#" className="hover:text-white">Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
