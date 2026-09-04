import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarketTicker from '@/components/MarketTicker';
import PriceExplorer from '@/components/PriceExplorer';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import NewsPreview from '@/components/NewsPreview';
import FincaStrip from '@/components/FincaStrip';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { WHATSAPP_GENERAL } from '@/config/constants';
import { usePageSeo } from '@/hooks/use-page-seo';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  usePageSeo({
    title: 'SUBADATOS | Precios de ganado en subastas de Colombia',
    description: 'Precios reales por kilo en pie de Central Ganadera, Yopal, Subastar, Cencogán y más. Decida cuándo comprar y vender con el último boletín.',
    canonical: 'https://www.subadatos.com/',
    robots: 'index, follow',
  });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);

    const handleTrackedClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>('[data-event]');
      if (!el) return;
      const trackingWindow = window as typeof window & { dataLayer?: Array<Record<string, unknown>> };
      trackingWindow.dataLayer = trackingWindow.dataLayer || [];
      trackingWindow.dataLayer.push({
        event: el.dataset.event,
        source: el.dataset.source || 'unknown',
        href: el instanceof HTMLAnchorElement ? el.href : null,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', handleTrackedClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleTrackedClick);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbf7]">
      <Navbar />
      <Hero />
      <MarketTicker />
      <PriceExplorer compact />
      <HowItWorks />
      <UseCases />
      <NewsPreview />
      <FincaStrip />
      <Contact />
      <Footer />

      <a
        href={WHATSAPP_GENERAL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        data-event="whatsapp_general"
        data-source="floating_button"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-suba-green-600 p-4 text-white shadow-lg hover:bg-suba-green-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver al inicio"
          className="fixed bottom-24 right-6 z-50 rounded-full bg-suba-purple-700 p-3.5 text-white shadow-lg hover:bg-suba-purple-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Index;
