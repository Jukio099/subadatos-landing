
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Tag } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductIcon from './ProductIcon';
import ProductFeatures from './ProductFeatures';
import { getWhatsappEventName, getWhatsappLink } from '@/utils/whatsappUtils';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappLink = getWhatsappLink(product);
  const whatsappEvent = getWhatsappEventName(product);

  const handleCheckout = () => {
    // Data analysis product uses direct Bold link
    if (product.id === 1 && product.boldLink) {
      window.open(product.boldLink, '_blank');
      return;
    }

    // For other products, just show WhatsApp message
    window.open(whatsappLink, '_blank');
  };

  return (
    <Card className="group relative overflow-hidden glass border border-white/5 hover:border-suba-purple-500/40 transition-all duration-500 hover-lift">
      <div className="absolute inset-0 bg-gradient-to-br from-suba-purple-700/0 via-transparent to-suba-green-600/0 group-hover:from-suba-purple-700/10 group-hover:to-suba-green-600/5 transition-all duration-700 pointer-events-none" />

      <div className="flex flex-col md:flex-row md:min-h-[320px] relative">
        {/* Product Image */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto md:self-stretch overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-suba-purple-900/20 via-transparent to-suba-green-900/20 z-10" />
          <img
            loading="lazy"
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Price Tag */}
          <div className="absolute top-0 left-0 z-20">
            <Badge className="m-3 px-3 py-1.5 bg-gradient-to-r from-suba-gold-500 to-suba-gold-400 text-suba-dark-300 font-semibold text-sm shadow-lg border-0">
              <Tag className="mr-1 h-3.5 w-3.5" /> {product.price}
            </Badge>
          </div>

          {/* Decorative gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-suba-dark-300/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        </div>

        {/* Product Content */}
        <div className="flex flex-col p-5 md:p-7 w-full md:w-3/5 gap-4 relative">
          {/* Icon and Title */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-suba-purple-700/30 border border-suba-purple-500/30 flex-shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
              <ProductIcon iconName={product.iconName} />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-white leading-tight">{product.name}</h3>
          </div>

          {/* Description */}
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">{product.description}</p>

          {/* Features List */}
          <ProductFeatures features={product.features} />

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 pt-2 mt-auto">
            <Button
              onClick={handleCheckout}
              className="bg-gradient-to-r from-suba-purple-700 to-suba-purple-600 hover:from-suba-purple-600 hover:to-suba-purple-500 text-white transition-all duration-300 group/btn flex-1 rounded-full py-5 border border-suba-purple-500/40 shadow-[0_0_15px_rgba(107,33,168,0.3)]"
            >
              {product.id === 1 ? "Ir a Bold" : "Contactar por WhatsApp"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              data-event={whatsappEvent}
              data-source="product_card"
            >
              <Button
                variant="outline"
                className="w-full border-suba-green-500/40 text-suba-green-300 hover:bg-suba-green-500/10 hover:border-suba-green-400 rounded-full py-5"
              >
                <Phone className="mr-2 h-4 w-4" />
                Consultar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
