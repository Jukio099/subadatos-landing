import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PriceExplorer from '@/components/PriceExplorer';
import { usePageSeo } from '@/hooks/use-page-seo';
import { plazaPorSlug } from '@/lib/plazas';

const PlazaPrecios = () => {
  const { slug = '' } = useParams();
  const plaza = plazaPorSlug(slug);

  usePageSeo({
    title: plaza ? `Precios de ganado en ${plaza.short} | SubaDatos` : 'Precios | SubaDatos',
    description: plaza
      ? `Últimos precios por kilo en pie de ${plaza.titulo} (${plaza.region}).`
      : 'Precios de subastas ganaderas en Colombia.',
    canonical: plaza ? `https://www.subadatos.com/precios/${plaza.slug}` : 'https://www.subadatos.com/precios',
    robots: 'index, follow',
  });

  if (!plaza) {
    return <Navigate to="/precios" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f4f7f3]">
      <Navbar />
      <main className="pt-28">
        <div className="container-custom mb-2 text-sm font-semibold text-slate-500">
          <Link to="/precios" className="hover:text-slate-900">Precios</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{plaza.short}</span>
        </div>
        <PriceExplorer plazaFija={plaza} />
      </main>
      <Footer />
    </div>
  );
};

export default PlazaPrecios;
