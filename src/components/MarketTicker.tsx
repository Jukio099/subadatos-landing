import { TrendingUp } from 'lucide-react';

interface PriceRow {
  plaza: string;
  categoria: string;
  precio: string;
  trend: string;
}

const ROWS: PriceRow[] = [
  { plaza: 'Yopal', categoria: 'Macho levante', precio: '$8.420', trend: '+3,1%' },
  { plaza: 'Montería', categoria: 'Novilla', precio: '$7.980', trend: '+1,8%' },
  { plaza: 'Medellín', categoria: 'Ceba', precio: '$8.760', trend: '+2,4%' },
  { plaza: 'Bogotá', categoria: 'Toro', precio: '$7.640', trend: '+0,9%' },
  { plaza: 'Valledupar', categoria: 'Hembra vientre', precio: '$7.210', trend: '+2,2%' },
  { plaza: 'Sincelejo', categoria: 'Macho ceba', precio: '$8.510', trend: '+1,4%' },
  { plaza: 'Cúcuta', categoria: 'Levante', precio: '$8.090', trend: '+2,7%' },
  { plaza: 'Villavicencio', categoria: 'Novillo', precio: '$8.330', trend: '+1,1%' },
];

const TickerItem = ({ row }: { row: PriceRow }) => (
  <div className="flex items-center gap-2.5 px-7 border-r border-white/8">
    <span className="text-sm font-bold text-white">{row.plaza}</span>
    <span className="text-xs text-white/45">{row.categoria}</span>
    <span className="font-display text-sm font-bold text-white">{row.precio}/kg</span>
    <span className="flex items-center gap-0.5 text-xs font-bold text-suba-green-400">
      <TrendingUp className="h-3 w-3" /> {row.trend}
    </span>
  </div>
);

/**
 * Cinta (ticker) de precios ganaderos en bucle continuo.
 * Reutiliza las utilidades `.marquee` y `.marquee-track` de index.css.
 * Se pausa al pasar el cursor.
 */
const MarketTicker = () => {
  return (
    <section
      id="mercado"
      className="relative border-y border-white/8 bg-[#0d0d16]/60 py-4"
      aria-label="Precios de ganado en vivo"
    >
      <div className="marquee group">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {ROWS.map((row) => (
            <TickerItem key={`a-${row.plaza}`} row={row} />
          ))}
        </div>
        <div className="marquee-track group-hover:[animation-play-state:paused]" aria-hidden="true">
          {ROWS.map((row) => (
            <TickerItem key={`b-${row.plaza}`} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketTicker;
