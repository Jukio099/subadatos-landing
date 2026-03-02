
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Tag } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductIcon from './ProductIcon';
import ProductFeatures from './ProductFeatures';
import { getWhatsappLink } from '@/utils/whatsappUtils';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleCheckout = () => {
    // Data analysis product uses direct Bold link
    if (product.id === 1 && product.boldLink) {
      window.open(product.boldLink, '_blank');
      return;
    }

    // For other products, just show WhatsApp message
    const whatsappLink = getWhatsappLink(product);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="animate-on-scroll">
      <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row md:min-h-[320px]">
          {/* Product Image */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto md:self-stretch overflow-hidden flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />

            {/* Price Tag */}
            <div className="absolute top-0 left-0">
              <Badge className="m-3 px-3 py-1.5 bg-earth-500 text-white font-semibold text-sm shadow-md">
                <Tag className="mr-1 h-3.5 w-3.5" /> {product.price}
              </Badge>
            </div>
          </div>

          {/* Product Content */}
          <div className="flex flex-col p-5 md:p-6 w-full md:w-3/5 gap-4">
            {/* Icon and Title */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-nature-50 flex-shrink-0">
                <ProductIcon iconName={product.iconName} />
              </div>
              <h3 className="font-bold text-2xl text-gray-800 leading-tight">{product.name}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base">{product.description}</p>

            {/* Features List */}
            <ProductFeatures features={product.features} />

            {/* Action Buttons */}
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 pt-2">
              <Button
                onClick={handleCheckout}
                className="bg-nature-600 hover:bg-nature-700 text-white transition-all duration-300 group flex-1"
              >
                {product.id === 1 ? "Ir a Bold" : "Contactar por WhatsApp"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <a
                href={getWhatsappLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full border-nature-600 text-nature-600 hover:bg-nature-50"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Consultar
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
