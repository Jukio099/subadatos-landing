import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/product/ProductCard';
import { productsData } from '@/types/product';
import { usePageSeo } from '@/hooks/use-page-seo';

const Finca = () => {
  usePageSeo({
    title: 'Semillas y básculas ganaderas | SubaDatos',
    description: 'Cotice semillas de pasto y básculas ganaderas para su finca, aparte de los precios de subasta.',
    canonical: 'https://www.subadatos.com/finca',
    robots: 'index, follow',
  });

  const productos = productsData.filter((p) => p.id !== 1);

  return (
    <div className="min-h-screen bg-[#f8fbf7]">
      <Navbar />
      <main className="container-custom pb-20 pt-28">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-suba-green-700">Para la finca</p>
        <h1 className="mt-2 font-display text-4xl font-black text-slate-950">Semillas y básculas</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Productos agropecuarios complementarios. El mercado de subastas está en Precios.
        </p>
        <div className="mt-10 grid gap-7">
          {productos.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Finca;
