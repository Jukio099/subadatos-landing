import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import ProductCard from './product/ProductCard';
import { productsData } from '@/types/product';
import { WHATSAPP_DATA_SERVICES } from '@/config/constants';

const Products = () => {
  return (
    <section id="productos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Nuestros Servicios y Productos</h2>
          <div className="h-1 w-20 bg-nature-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Ofrecemos servicios avanzados de análisis de datos para empresas y también las mejores variedades
            de semillas de pasto para Colombia, adaptadas específicamente a las condiciones del terreno.
          </p>
        </div>

        <div className="grid gap-8 mx-auto">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll flex items-center justify-center">
          <a href={WHATSAPP_DATA_SERVICES} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-earth-600 hover:bg-earth-700 text-white py-6 px-8 rounded-full">
              <Phone className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
