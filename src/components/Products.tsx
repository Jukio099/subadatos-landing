import { Button } from '@/components/ui/button';
import { Phone, Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from './product/ProductCard';
import { productsData } from '@/types/product';
import { WHATSAPP_DATA_SERVICES } from '@/config/constants';
import { WordReveal } from './WordReveal';

const Products = () => {
  return (
    <section id="productos" className="section-padding relative overflow-hidden bg-[#f8fbf7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(107,33,168,0.08),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(22,163,74,0.10),transparent_30%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center animate-on-scroll">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-suba-purple-200 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-suba-purple-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> Servicios y productos
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            <WordReveal>Soluciones para</WordReveal>{' '}
            <WordReveal className="text-gradient" delay={250}>vender mejor</WordReveal>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Primero le ayudamos a entender el mercado con datos de subastas ganaderas. También puede cotizar productos agropecuarios complementarios para su finca.
          </p>
        </div>

        <div className="grid gap-7 stagger">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center animate-on-scroll">
          <a href={WHATSAPP_DATA_SERVICES} target="_blank" rel="noopener noreferrer" className="group inline-block" data-event="whatsapp_consultoria" data-source="products_final_cta">
            <Button className="h-14 rounded-full bg-slate-950 px-8 text-base font-bold text-white shadow-[0_18px_42px_rgba(15,23,42,0.20)] hover:bg-suba-purple-800">
              <Phone className="mr-2 h-5 w-5" />Pedir asesoría por WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
