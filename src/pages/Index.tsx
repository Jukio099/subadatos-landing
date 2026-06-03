import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import NewsPreview from '@/components/NewsPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NeedsSection from '@/components/NeedsSection';
import { WHATSAPP_GENERAL } from '@/config/constants';
import { usePageSeo } from '@/hooks/use-page-seo';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  usePageSeo({
    title: 'SUBADATOS | Inteligencia de Mercado para la Ganadería Colombiana',
    description: 'Datos, visualizaciones y análisis del mercado ganadero colombiano. Consulte precios de ganado en subastas, tendencias y tome decisiones informadas con inteligencia artificial.',
    canonical: 'https://www.subadatos.com/',
    robots: 'index, follow',
  });

  useEffect(() => {
    // Use IntersectionObserver for reliable scroll-reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('animate-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Initial setup: mark everything visible by default, then hide what's below fold
    const setupAnimation = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        } else {
          el.classList.add('animate-hidden');
          observer.observe(el);
        }
      });

      document.querySelectorAll('.stagger').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run on mount and after a short delay for lazy-loaded content
    setupAnimation();
    const timeoutId = setTimeout(setupAnimation, 300);

    // Safety fallback: force all animated elements visible after 3s
    // This prevents black/hidden sections if the observer doesn't fire
    const safetyTimeout = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('visible');
        el.classList.remove('animate-hidden');
      });
      document.querySelectorAll('.stagger').forEach(el => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    }, 3000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      clearTimeout(safetyTimeout);
    };
  }, []);

  useEffect(() => {
    const handleTrackedClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>('[data-event]');
      if (!el) return;

      const trackingWindow = window as typeof window & {
        dataLayer?: Array<Record<string, unknown>>;
      };

      trackingWindow.dataLayer = trackingWindow.dataLayer || [];
      trackingWindow.dataLayer.push({
        event: el.dataset.event,
        source: el.dataset.source || 'unknown',
        href: el instanceof HTMLAnchorElement ? el.href : null,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', handleTrackedClick);
    return () => document.removeEventListener('click', handleTrackedClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-suba-dark-300">
      <Navbar />
      <Hero />
      <NeedsSection />
      <Products />
      <About />
      <Benefits />
      <NewsPreview />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href={WHATSAPP_GENERAL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        data-event="whatsapp_general"
        data-source="floating_button"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-suba-green-500 to-suba-green-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-gradient-to-br from-suba-green-600 to-suba-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] flex items-center justify-center group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>

      {/* Botón volver arriba */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver al inicio"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="bg-gradient-to-br from-suba-purple-700 to-suba-purple-600 text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,33,168,0.5)] hover:scale-105 border border-suba-purple-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default Index;
