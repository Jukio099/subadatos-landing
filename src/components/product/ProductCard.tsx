import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Tag, CheckCircle2 } from 'lucide-react';
import ProductIcon from './ProductIcon';
import { getWhatsappEventName, getWhatsappLink } from '@/utils/whatsappUtils';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappLink = getWhatsappLink(product);
  const whatsappEvent = getWhatsappEventName(product);

  const handleCheckout = () => {
    if (product.id === 1 && product.boldLink) {
      window.open(product.boldLink, '_blank');
      return;
    }
    window.open(whatsappLink, '_blank');
  };

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
      <div className="grid min-h-[360px] md:grid-cols-[0.95fr_1.2fr]">
        <div className="relative min-h-[260px] overflow-hidden bg-slate-100">
          <img loading="lazy" src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-sm font-black text-suba-dark-300 shadow-sm">
            <Tag className="mr-1 inline h-3.5 w-3.5 text-suba-gold-600" />{product.price}
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              {product.id === 1 ? 'INTELIGENCIA · DATOS · MERCADO' : 'AGRO · FINCA · PRODUCTIVIDAD'}
            </p>
            <p className="mt-1 text-lg font-black">Solución lista para campo</p>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-suba-purple-100 bg-suba-purple-50 text-suba-purple-700 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
              <ProductIcon iconName={product.iconName} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-suba-green-700">SUBADATOS</p>
              <h3 className="mt-1 text-2xl font-black leading-tight tracking-tight text-slate-950">{product.name}</h3>
            </div>
          </div>

          <p className="text-base leading-7 text-slate-600">{product.description}</p>

          <div className="my-6 grid gap-3 sm:grid-cols-3">
            {product.features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <CheckCircle2 className="mb-2 h-4 w-4 text-suba-green-700" />
                <p className="text-xs font-bold leading-5 text-slate-700">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <Button onClick={handleCheckout} className="h-12 flex-1 rounded-full bg-suba-purple-700 text-white shadow-[0_14px_30px_rgba(107,33,168,0.22)] hover:bg-suba-purple-600">
              {product.id === 1 ? 'Ir a Bold' : 'Contactar por WhatsApp'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1" data-event={whatsappEvent} data-source="product_card">
              <Button variant="outline" className="h-12 w-full rounded-full border-suba-green-600/30 bg-white font-bold text-suba-green-700 hover:bg-suba-green-50 hover:text-suba-green-800">
                <Phone className="mr-2 h-4 w-4" />Consultar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
