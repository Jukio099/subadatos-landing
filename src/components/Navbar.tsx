
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, BarChart3, Newspaper, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { DASHBOARD_URL } from '@/config/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Productos', id: 'productos' },
    { label: 'Beneficios', id: 'beneficios' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "bg-black/30 backdrop-blur-md border-b border-white/5 py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-suba-purple-600/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/lovable-uploads/9569de5a-057e-4973-b16b-1def60885893.webp"
              alt="SUBADATOS Logo"
              className="h-11 w-11 mr-3 rounded-full object-cover ring-2 ring-suba-purple-500/40 group-hover:ring-suba-purple-400 group-hover:rotate-[8deg] transition-all duration-500 relative"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-white font-display font-bold text-lg tracking-tight leading-none">SUBADATOS</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-suba-purple-300/80 leading-none mt-1">Inteligencia Ganadera</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href={DASHBOARD_URL}
            className="relative flex items-center group px-3 py-2 rounded-full hover:bg-white/5 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            data-event="consulta_precios_click"
            data-source="navbar_desktop"
          >
            <div className="flex items-center text-white/90 group-hover:text-white transition-colors text-sm">
              <BarChart3 className="h-4 w-4 mr-1.5 text-suba-purple-300" />
              <span>Consulta de Precios</span>
            </div>
            <Badge
              variant="default"
              className="ml-2 bg-gradient-to-r from-suba-gold-500 to-suba-gold-400 text-suba-dark-300 border-0 text-[10px] px-1.5 py-0 font-semibold"
            >
              Nuevo
            </Badge>
          </a>
          <Link
            to="/noticias"
            className="flex items-center text-white/90 hover:text-white hover:bg-white/5 px-3 py-2 rounded-full transition-colors text-sm"
            data-event="noticias_click"
            data-source="navbar_desktop"
          >
            <Newspaper className="h-4 w-4 mr-1.5 text-suba-green-400" />
            <span>Noticias</span>
          </Link>
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => navigateToSection(id)}
              className="relative text-white/80 hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-all text-sm group"
            >
              {label}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0.5 w-0 group-hover:w-6 h-[2px] bg-gradient-to-r from-suba-purple-500 to-suba-green-500 transition-all duration-300 rounded-full" />
            </button>
          ))}
          <Button
            onClick={() => navigateToSection('contacto')}
            className="ml-3 bg-gradient-to-r from-suba-purple-700 to-suba-purple-600 hover:from-suba-purple-600 hover:to-suba-purple-500 text-white border border-suba-purple-500/40 shadow-[0_0_20px_rgba(107,33,168,0.4)] hover:shadow-[0_0_30px_rgba(107,33,168,0.6)] rounded-full px-5 transition-all duration-300"
          >
            <Sparkles className="h-4 w-4 mr-1.5" />
            Contáctanos
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/5 py-5 px-6 absolute top-full left-0 w-full animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-1">
            <a
              href={DASHBOARD_URL}
              className="flex items-center justify-between text-white hover:text-suba-purple-300 hover:bg-white/5 transition-colors py-3 px-3 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              data-event="consulta_precios_click"
              data-source="navbar_mobile"
            >
              <div className="flex items-center">
                <BarChart3 className="h-4 w-4 mr-2 text-suba-purple-300" />
                <span>Consulta de Precios</span>
              </div>
              <Badge className="bg-gradient-to-r from-suba-gold-500 to-suba-gold-400 text-suba-dark-300 border-0 text-[10px]">Nuevo</Badge>
            </a>
            <Link
              to="/noticias"
              className="flex items-center text-white hover:text-suba-green-300 hover:bg-white/5 transition-colors py-3 px-3 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
              data-event="noticias_click"
              data-source="navbar_mobile"
            >
              <Newspaper className="h-4 w-4 mr-2 text-suba-green-400" />
              <span>Noticias</span>
            </Link>
            <div className="h-px bg-white/5 my-2" />
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => navigateToSection(id)}
                className="text-white/90 hover:text-white hover:bg-white/5 transition-colors py-3 px-3 rounded-lg text-left"
              >
                {label}
              </button>
            ))}
            <Button
              onClick={() => navigateToSection('contacto')}
              className="mt-3 bg-gradient-to-r from-suba-purple-700 to-suba-purple-600 hover:from-suba-purple-600 hover:to-suba-purple-500 text-white border border-suba-purple-500/40 rounded-full w-full shadow-[0_0_20px_rgba(107,33,168,0.4)]"
            >
              <Sparkles className="h-4 w-4 mr-1.5" />
              Contáctanos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
