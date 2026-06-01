import { Button } from '@/components/ui/button';
import { Phone, Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from './product/ProductCard';
import { productsData } from '@/types/product';
import { WHATSAPP_DATA_SERVICES } from '@/config/constants';

const Products = () => {
  return (
    <section
      id="productos"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111118 0%, #0a0a0f 100%)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-suba-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-suba-purple-300 bg-suba-purple-500/10 border border-suba-purple-500/20 px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.15em]">
            <Sparkles className="h-3.5 w-3.5" /> Servicios y productos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Para <span className="text-gradient">vender mejor</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bar-shimmer mb-6" />
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Primero le ayudamos a entender el mercado con datos de subastas ganaderas. También
            puede cotizar productos agropecuarios complementarios para su finca.
          </p>
        </div>

        <div className="grid gap-6 stagger">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center animate-on-scroll flex items-center justify-center">
          <a
            href={WHATSAPP_DATA_SERVICES}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
            data-event="whatsapp_consultoria"
            data-source="products_final_cta"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-suba-purple-600 to-suba-green-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <Button className="relative bg-gradient-to-r from-suba-purple-700 to-suba-green-600 hover:from-suba-purple-600 hover:to-suba-green-500 text-white py-6 px-8 rounded-full text-base font-semibold border border-white/10 transition-all duration-300 group-hover:scale-[1.02]">
                <Phone className="mr-2 h-5 w-5" />
                Pedir asesoría por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
