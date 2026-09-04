import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, TrendingDown, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DASHBOARD_URL, whatsappPreciosPlaza } from '@/config/constants';
import { formatCOP, formatFechaCorta, formatVariacion, useMarketData } from '@/hooks/use-market-data';
import { fuenteDePlaza, plazasConDatos, type PlazaDef } from '@/lib/plazas';

interface PriceExplorerProps {
  compact?: boolean;
  plazaFija?: PlazaDef;
}

const PriceExplorer = ({ compact = false, plazaFija }: PriceExplorerProps) => {
  const { data, isLive } = useMarketData();
  const plazas = useMemo(() => plazasConDatos(data), [data]);
  const [slug, setSlug] = useState(plazaFija?.slug ?? plazas[0]?.slug ?? 'medellin');

  const plazaActiva = plazaFija ?? plazas.find((p) => p.slug === slug) ?? plazas[0];
  const fuente = plazaActiva ? fuenteDePlaza(data, plazaActiva) : undefined;
  const filas = fuente?.precios ?? [];

  if (!plazaActiva || !fuente) {
    return null;
  }

  return (
    <section id="precios" className={compact ? 'bg-[#f4f7f3] py-16 md:py-20' : 'bg-[#f4f7f3] pb-20'}>
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-suba-green-700">
              {isLive ? 'Precios de la última subasta' : 'Última referencia conocida'}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Plaza, categoría y precio por kilo.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              COP/kg en pie. Fecha del boletín: {formatFechaCorta(fuente.fecha)}
              {fuente.boletin ? ` · Boletín #${fuente.boletin}` : ''}.
            </p>
          </div>
          {!plazaFija && (
            <p className="text-sm text-slate-500">
              Actualizado {formatFechaCorta(data.actualizado.slice(0, 10))}
            </p>
          )}
        </div>

        {!plazaFija && (
          <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {plazas.map((plaza) => {
              const activa = plaza.slug === plazaActiva.slug;
              return (
                <button
                  key={plaza.slug}
                  type="button"
                  onClick={() => setSlug(plaza.slug)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    activa
                      ? 'bg-slate-950 text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  {plaza.short}
                </button>
              );
            })}
          </div>
        )}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-2 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-black text-slate-950">{plazaActiva.titulo}</p>
              <p className="text-sm text-slate-500">{plazaActiva.region}</p>
            </div>
            {!plazaFija && (
              <Link
                to={`/precios/${plazaActiva.slug}`}
                className="text-sm font-bold text-suba-purple-700 hover:text-suba-purple-500"
              >
                Ver plaza <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="divide-y divide-slate-100">
            {filas.slice(0, compact ? 6 : filas.length).map((row) => {
              const sube = (row.variacion_pct ?? 0) >= 0;
              return (
                <div key={row.categoria} className="grid grid-cols-[1fr_auto] items-center gap-3 px-5 py-3.5">
                  <p className="font-semibold text-slate-900">{row.categoria}</p>
                  <div className="text-right">
                    <p className="font-display text-lg font-black text-slate-950">{formatCOP(row.precio_kg)}/kg</p>
                    {row.variacion_pct !== null && (
                      <p className={`flex items-center justify-end gap-0.5 text-xs font-bold ${sube ? 'text-suba-green-600' : 'text-red-500'}`}>
                        {sube ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {formatVariacion(row.variacion_pct)}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={whatsappPreciosPlaza(plazaActiva.short)} target="_blank" rel="noopener noreferrer" data-event="whatsapp_precios" data-source="price_explorer">
            <Button className="h-12 rounded-full bg-suba-green-600 px-6 font-bold text-white hover:bg-suba-green-500">
              <Phone className="mr-2 h-4 w-4" /> Consultar {plazaActiva.short} por WhatsApp
            </Button>
          </a>
          <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" data-event="consulta_precios_click" data-source="price_explorer_advanced" className="text-sm font-semibold text-slate-600 hover:text-slate-950">
            Análisis avanzado e histórico →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PriceExplorer;
