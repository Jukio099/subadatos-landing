import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram } from 'lucide-react';
import { WHATSAPP_GENERAL, DISPLAY_PHONE, EMAIL } from '@/config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Ofrecemos los mejores servicios de análisis de datos para su empresa,
              con asesoría técnica especializada y garantía de calidad.
            </p>
            {/* Agrega las URLs reales cuando tengas redes sociales activas */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Subadatos-61550126366954/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de SUBADATOS"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/subadatos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de SUBADATOS"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-nature-700 pb-2">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', id: 'inicio' },
                { label: 'Nosotros', id: 'nosotros' },
                { label: 'Productos', id: 'productos' },
                { label: 'Beneficios', id: 'beneficios' },
                { label: 'Contáctanos', id: 'contacto' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-nature-700 pb-2">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-earth-400 mt-1" />
                <span className="text-gray-300">Colombia</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-earth-400 mt-1" />
                <div>
                  <span className="text-gray-300 block">{DISPLAY_PHONE}</span>
                  <a
                    href={WHATSAPP_GENERAL}
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
                <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-white">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nature-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SUBADATOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
