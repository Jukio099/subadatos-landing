import { TrendingDown, TrendingUp } from 'lucide-react';
import { formatCOP, formatVariacion, useMarketData, type MarketData } from '@/hooks/use-market-data';

interface PriceRow {
  plaza: string;
  categoria: string;
  precio: string;
  trend: string | null;
  sube: boolean;
}

/** Aplana el JSON de precios en filas de ticker por plaza. */
const construirFilas = (data: MarketData): PriceRow[] => {
  const filas: PriceRow[] = [];
  const agregar = (plaza: string, precios: MarketData['fuentes']['central']['precios'], max: number) => {
    for (const p of precios.slice(0, max)) {
      filas.push({
        plaza,
        categoria: p.categoria,
        precio: formatCOP(p.precio_kg),
        trend: formatVariacion(p.variacion_pct),
        sube: (p.variacion_pct ?? 0) >= 0,
      });
    }
  };
  agregar('Medellín', data.fuentes.central.precios, 6);
  agregar('Yopal', data.fuentes.casanare.precios, 4);
  agregar('Montería · Guamal', data.fuentes.subastar.precios, 4);
  if (data.fuentes.cogasucre) agregar('Sincelejo', data.fuentes.cogasucre.precios, 4);
  if (data.fuentes.cencogan) agregar('Cencogán', data.fuentes.cencogan.precios, 4);
  if (data.fuentes.asosubastas) agregar('Nacional', data.fuentes.asosubastas.precios, 3);
  if (data.fuentes.sugaberrio) agregar('Sugaberrío', data.fuentes.sugaberrio.precios, 3);
  return filas;
};

const TickerItem = ({ row }: { row: PriceRow }) => (
  <div className="flex items-center gap-2.5 border-r border-white/8 px-7">
    <span className="text-sm font-bold text-white">{row.plaza}</span>
    <span className="text-xs text-white/45">{row.categoria}</span>
    <span className="font-display text-sm font-bold text-white">{row.precio}/kg</span>
    {row.trend && (
      <span className={`flex items-center gap-0.5 text-xs font-bold ${row.sube ? 'text-suba-green-400' : 'text-red-400'}`}>
        {row.sube ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />} {row.trend}
      </span>
    )}
  </div>
);

/**
 * Cinta (ticker) de precios ganaderos en bucle continuo con datos reales
 * del último boletín de cada subasta. Se pausa al pasar el cursor.
 */
const MarketTicker = () => {
  const { data } = useMarketData();
  const filas = construirFilas(data);

  return (
    <section
      id="mercado"
      className="relative border-y border-white/8 bg-[#0d0d16]/60 py-4"
      aria-label="Precios reales de las últimas subastas"
    >
      <div className="marquee group">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {filas.map((row, i) => (
            <TickerItem key={`a-${row.plaza}-${row.categoria}-${i}`} row={row} />
          ))}
        </div>
        <div className="marquee-track group-hover:[animation-play-state:paused]" aria-hidden="true">
          {filas.map((row, i) => (
            <TickerItem key={`b-${row.plaza}-${row.categoria}-${i}`} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketTicker;
