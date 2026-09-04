import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PriceExplorer from '@/components/PriceExplorer';
import { usePageSeo } from '@/hooks/use-page-seo';
const Precios = () => {
  usePageSeo({
    title: 'Precios de ganado en subasta | SubaDatos',
    description:
      'Precios reales por kilo en pie de Central Ganadera, SubaCasanare, Subastar, Cencogán, Cogasucre y Asosubastas.',
    canonical: 'https://www.subadatos.com/precios',
    robots: 'index, follow',
  });

  return (
    <div className="min-h-screen bg-[#f4f7f3]">
      <Navbar />
      <main className="pt-28">
        <div className="container-custom mb-2">
          <h1 className="font-display text-4xl font-black text-slate-950 sm:text-5xl">Precios de subasta</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Consulte la última feria por plaza. Para histórico y gráficos abra el análisis avanzado al pie de la tabla.
          </p>
        </div>
        <PriceExplorer />
      </main>
      <Footer />
    </div>
  );
};

export default Precios;
