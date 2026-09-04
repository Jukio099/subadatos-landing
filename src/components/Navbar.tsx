import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BarChart3, Menu, Newspaper, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const darkNav = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate('/');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 350);
  };

  const linkCls = darkNav
    ? 'text-white/80 hover:bg-white/10 hover:text-white'
    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950';

  return (
    <nav
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-500',
        darkNav
          ? 'border-b border-white/10 bg-[#07070c]/40 py-4 backdrop-blur-md'
          : 'border-b border-slate-200 bg-white/90 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl',
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="group flex items-center">
          <img
            src="/lovable-uploads/9569de5a-057e-4973-b16b-1def60885893.webp"
            alt="SUBADATOS"
            className="relative mr-3 h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
          />
          <div className="hidden flex-col sm:flex">
            <span className={cn('font-display text-lg font-black leading-none tracking-tight', darkNav ? 'text-white' : 'text-slate-950')}>
              SUBADATOS
            </span>
            <span className={cn('mt-1 text-[10px] uppercase leading-none tracking-[0.18em]', darkNav ? 'text-suba-green-300' : 'text-suba-green-700')}>
              Inteligencia Ganadera
            </span>
          </div>
        </Link>

        <div className="hidden items-center space-x-1 md:flex">
          <Link to="/precios" className={cn('flex items-center rounded-full px-3 py-2 text-sm font-semibold', linkCls)} data-event="consulta_precios_click" data-source="navbar_desktop">
            <BarChart3 className={cn('mr-1.5 h-4 w-4', darkNav ? 'text-suba-green-300' : 'text-suba-purple-700')} />
            Precios
          </Link>
          <button type="button" onClick={() => goSection('como')} className={cn('rounded-full px-3 py-2 text-sm font-semibold', linkCls)}>
            Cómo funciona
          </button>
          <Link to="/noticias" className={cn('flex items-center rounded-full px-3 py-2 text-sm font-semibold', linkCls)} data-event="noticias_click" data-source="navbar_desktop">
            <Newspaper className={cn('mr-1.5 h-4 w-4', darkNav ? 'text-suba-green-300' : 'text-suba-green-700')} />
            Guías
          </Link>
          <Button onClick={() => goSection('contacto')} className="ml-3 rounded-full bg-suba-purple-700 px-5 text-white hover:bg-suba-purple-600">
            Contáctanos
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={darkNav ? 'text-white hover:bg-white/10' : 'text-slate-950 hover:bg-slate-100'}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white/95 px-6 py-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col space-y-1">
            <Link to="/precios" className="rounded-lg px-3 py-3 text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Precios</Link>
            <button type="button" onClick={() => goSection('como')} className="rounded-lg px-3 py-3 text-left text-slate-800">Cómo funciona</button>
            <Link to="/noticias" className="rounded-lg px-3 py-3 text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Guías</Link>
            <Link to="/finca" className="rounded-lg px-3 py-3 text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Finca</Link>
            <Button onClick={() => goSection('contacto')} className="mt-3 w-full rounded-full bg-suba-purple-700 text-white hover:bg-suba-purple-600">
              Contáctanos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
