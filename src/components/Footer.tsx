import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { WHATSAPP_GENERAL, DISPLAY_PHONE, EMAIL } from '@/config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <footer className="bg-[#08080f] text-white border-t border-white/5">
      <div className="container-custom pt-14 pb-6 md:pt-16 md:pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-suba-purple-600/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/lovable-uploads/9569de5a-057e-4973-b16b-1def60885893.webp"
                  alt="SUBADATOS Logo"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-suba-purple-500/30 group-hover:ring-suba-purple-400 group-hover:rotate-[8deg] transition-all duration-500 relative"
                  loading="lazy"
                />
              </div>
              <div className="ml-3">
                <span className="text-white font-display font-bold text-lg tracking-tight">SUBADATOS</span>
                <p className="text-[10px] uppercase tracking-[0.15em] text-suba-purple-300/70">Inteligencia Ganadera</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Datos, análisis e inteligencia artificial para transformar la ganadería colombiana. 
              Precios de subasta, tendencias de mercado y decisiones basadas en datos.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/p/Subadatos-61550126366954/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de SUBADATOS"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-suba-purple-600/30 border border-white/10 hover:border-suba-purple-500/40 flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="h-4 w-4 text-white/60 group-hover:text-suba-purple-300 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/subadatos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de SUBADATOS"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-suba-purple-600/30 border border-white/10 hover:border-suba-purple-500/40 flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="h-4 w-4 text-white/60 group-hover:text-suba-purple-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-suba-purple-500" />
              Enlaces
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', id: 'inicio' },
                { label: 'Precios', to: '/precios' },
                { label: 'Cómo funciona', id: 'como' },
                { label: 'Guías', to: '/noticias' },
                { label: 'Finca', to: '/finca' },
                { label: 'Contáctanos', id: 'contacto' },
              ].map((item) => (
                <li key={item.label}>
                  {'to' in item && item.to ? (
                    <Link to={item.to} className="text-white/50 hover:text-white flex items-center gap-2 text-sm transition-colors group">
                      <ArrowRight className="h-3 w-3 text-suba-purple-500/0 group-hover:text-suba-purple-400 transition-all duration-300 group-hover:translate-x-0.5" />
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => item.id && navigateToSection(item.id)}
                      className="text-white/50 hover:text-white flex items-center gap-2 text-sm transition-colors group"
                    >
                      <ArrowRight className="h-3 w-3 text-suba-purple-500/0 group-hover:text-suba-purple-400 transition-all duration-300 group-hover:translate-x-0.5" />
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-suba-green-500" />
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Precios de subasta', to: '/precios' },
                { label: 'Guías ganaderas', to: '/noticias' },
                { label: 'Semillas y básculas', to: '/finca' },
                { label: 'Hermes Gold', to: '/gold' },
              ].map((service) => (
                <li key={service.label}>
                  <Link to={service.to} className="text-white/50 text-sm flex items-center gap-2 hover:text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-suba-green-500/60" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-suba-gold-500" />
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-suba-purple-400 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">Colombia · cobertura nacional de subastas</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-suba-green-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white/50 text-sm block">{DISPLAY_PHONE}</span>
                  <a
                    href={WHATSAPP_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-suba-green-400 hover:text-suba-green-300 text-sm transition-colors"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-suba-gold-400 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-white/50 hover:text-white text-sm transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mt-8 text-center">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} SUBADATOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
