
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    // If it's a route instead of a section, don't try to scroll
    if (id === 'dashboard') return;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-black/40 backdrop-blur-sm py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/lovable-uploads/9569de5a-057e-4973-b16b-1def60885893.png"
            alt="SUBADATOS Logo"
            className="h-12 w-12 mr-3 rounded-full object-cover"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/dashboard"
            className="relative flex items-center group"
          >
            <div className={cn(
              "flex items-center transition-colors",
              isScrolled ? "text-foreground hover:text-nature-600" : "text-white hover:text-nature-300"
            )}>
              <BarChart3 className="h-4 w-4 mr-1" />
              <span>Dashboard</span>
            </div>
            <Badge
              variant="default"
              className="ml-1 bg-secondary text-white absolute -top-3 -right-8"
            >
              Nuevo
            </Badge>
          </Link>
          <button
            onClick={() => scrollToSection('inicio')}
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground hover:text-nature-600" : "text-white hover:text-nature-300"
            )}
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('nosotros')}
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground hover:text-nature-600" : "text-white hover:text-nature-300"
            )}
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection('productos')}
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground hover:text-nature-600" : "text-white hover:text-nature-300"
            )}
          >
            Productos
          </button>
          <button
            onClick={() => scrollToSection('beneficios')}
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground hover:text-nature-600" : "text-white hover:text-nature-300"
            )}
          >
            Beneficios
          </button>
          <Button
            variant="default"
            className="bg-nature-600 hover:bg-nature-700 text-white"
            onClick={() => scrollToSection('contacto')}
          >
            Contáctanos
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(isScrolled ? "text-foreground" : "text-white")}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center justify-between text-foreground hover:text-nature-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span>Dashboard</span>
              </div>
              <Badge className="bg-secondary text-white text-xs">Nuevo</Badge>
            </Link>
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-nature-600 transition-colors py-2"
            >
              Beneficios
            </button>
            <Button
              variant="default"
              className="bg-nature-600 hover:bg-nature-700 text-white w-full"
              onClick={() => scrollToSection('contacto')}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
