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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 350);
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
        'fixed left-0 top-0 z-50 w-full transition-all duration-500',
        isScrolled
          ? 'border-b border-slate-200 bg-white/90 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'border-b border-white/60 bg-white/55 py-4 backdrop-blur-md'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="group flex items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-suba-purple-600/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src="/lovable-uploads/9569de5a-057e-4973-b16b-1def60885893.webp"
              alt="SUBADATOS Logo"
              className="relative mr-3 h-11 w-11 rounded-full object-cover ring-2 ring-suba-purple-200 transition-all duration-500 group-hover:rotate-[8deg] group-hover:ring-suba-purple-500/50"
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="font-display text-lg font-black leading-none tracking-tight text-slate-950">SUBADATOS</span>
            <span className="mt-1 text-[10px] uppercase leading-none tracking-[0.18em] text-suba-green-700">Inteligencia Ganadera</span>
          </div>
        </Link>

        <div className="hidden items-center space-x-1 md:flex">
          <a
            href={DASHBOARD_URL}
            className="group relative flex items-center rounded-full px-3 py-2 transition-colors hover:bg-slate-100"
            target="_blank"
            rel="noopener noreferrer"
            data-event="consulta_precios_click"
            data-source="navbar_desktop"
          >
            <div className="flex items-center text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-950">
              <BarChart3 className="mr-1.5 h-4 w-4 text-suba-purple-700" />
              <span>Consulta de Precios</span>
            </div>
            <Badge className="ml-2 border-0 bg-gradient-to-r from-suba-gold-500 to-suba-gold-400 px-1.5 py-0 text-[10px] font-bold text-suba-dark-300">Nuevo</Badge>
          </a>
          <Link to="/noticias" className="flex items-center rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950" data-event="noticias_click" data-source="navbar_desktop">
            <Newspaper className="mr-1.5 h-4 w-4 text-suba-green-700" />
            <span>Noticias</span>
          </Link>
          {navLinks.map(({ label, id }) => (
            <button key={id} onClick={() => navigateToSection(id)} className="group relative rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-950">
              {label}
              <span className="absolute bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-suba-purple-500 to-suba-green-500 transition-all duration-300 group-hover:w-6" />
            </button>
          ))}
          <Button onClick={() => navigateToSection('contacto')} className="ml-3 rounded-full border border-suba-purple-500/20 bg-suba-purple-700 px-5 text-white shadow-[0_12px_28px_rgba(107,33,168,0.24)] transition-all duration-300 hover:bg-suba-purple-600">
            <Sparkles className="mr-1.5 h-4 w-4" />
            Contáctanos
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-950 hover:bg-slate-100">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white/95 px-6 py-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col space-y-1">
            <a href={DASHBOARD_URL} className="flex items-center justify-between rounded-lg px-3 py-3 text-slate-800 transition-colors hover:bg-slate-100 hover:text-suba-purple-800" onClick={() => setIsMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer" data-event="consulta_precios_click" data-source="navbar_mobile">
              <div className="flex items-center"><BarChart3 className="mr-2 h-4 w-4 text-suba-purple-700" /><span>Consulta de Precios</span></div>
              <Badge className="border-0 bg-gradient-to-r from-suba-gold-500 to-suba-gold-400 text-[10px] text-suba-dark-300">Nuevo</Badge>
            </a>
            <Link to="/noticias" className="flex items-center rounded-lg px-3 py-3 text-slate-800 transition-colors hover:bg-slate-100 hover:text-suba-green-800" onClick={() => setIsMobileMenuOpen(false)} data-event="noticias_click" data-source="navbar_mobile">
              <Newspaper className="mr-2 h-4 w-4 text-suba-green-700" /><span>Noticias</span>
            </Link>
            <div className="my-2 h-px bg-slate-200" />
            {navLinks.map(({ label, id }) => (
              <button key={id} onClick={() => navigateToSection(id)} className="rounded-lg px-3 py-3 text-left text-slate-800 transition-colors hover:bg-slate-100 hover:text-slate-950">{label}</button>
            ))}
            <Button onClick={() => navigateToSection('contacto')} className="mt-3 w-full rounded-full border border-suba-purple-500/20 bg-suba-purple-700 text-white hover:bg-suba-purple-600">
              <Sparkles className="mr-1.5 h-4 w-4" />Contáctanos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
