import { useQuery } from '@tanstack/react-query';

/**
 * Datos públicos de precios generados por el ETL de SubaDatos.
 * El JSON se publica en Supabase Storage (bucket público) después de cada
 * corrida del pipeline, por lo que la landing muestra precios reales sin
 * exponer credenciales. Ver Subadatos_Central_Ganadera/publicar_precios_landing.py
 */
export const MARKET_DATA_URL =
  'https://peiuuworaqxesmxfowkf.supabase.co/storage/v1/object/public/subadatos-publicaciones/landing/precios_latest.json';

export interface PrecioCategoria {
  categoria: string;
  precio_kg: number;
  variacion_pct: number | null;
}

export interface FuenteResumen {
  nombre: string;
  fecha: string;
  precios: PrecioCategoria[];
  total_animales?: number;
  total_lotes?: number;
  regiones?: number;
  boletin?: number;
  feria?: number;
  sedes?: string[];
}

export interface MarketData {
  actualizado: string;
  moneda: string;
  fuentes: {
    central: FuenteResumen;
    casanare: FuenteResumen;
    subastar: FuenteResumen;
    cogasucre?: FuenteResumen;
    cencogan?: FuenteResumen;
    asosubastas?: FuenteResumen;
    sugaberrio?: FuenteResumen;
  };
}

/** Última foto real conocida — se usa si el fetch falla (offline, CDN caído). */
export const FALLBACK_DATA: MarketData = {
  actualizado: '2026-08-31T00:00:00Z',
  moneda: 'COP/kg en pie',
  fuentes: {
    central: {
      nombre: 'Central Ganadera de Medellín',
      fecha: '2026-08-25',
      boletin: 42,
      total_animales: 1450,
      total_lotes: 240,
      regiones: 30,
      precios: [
        { categoria: 'Macho Levante', precio_kg: 10416, variacion_pct: -2.2 },
        { categoria: 'Hembra Levante', precio_kg: 9845, variacion_pct: 10.7 },
        { categoria: 'Toro', precio_kg: 9381, variacion_pct: -4.2 },
        { categoria: 'Macho Ceba', precio_kg: 8964, variacion_pct: 3.3 },
        { categoria: 'Vaca Horra', precio_kg: 8158, variacion_pct: -2.6 },
        { categoria: 'Hembra Vientre', precio_kg: 7855, variacion_pct: -4.4 },
      ],
    },
    casanare: {
      nombre: 'SubaCasanare (Yopal)',
      fecha: '2026-08-27',
      feria: 1980,
      total_animales: 1719,
      precios: [
        { categoria: 'Macho Levante', precio_kg: 11850, variacion_pct: null },
        { categoria: 'Novilla de Ceba', precio_kg: 10400, variacion_pct: null },
      ],
    },
    subastar: {
      nombre: 'Subastar (Montería · Guamal · Sahagún)',
      fecha: '2026-08-27',
      sedes: ['GUAMAL', 'MONTERIA'],
      precios: [
        { categoria: 'Macho Levante', precio_kg: 11030, variacion_pct: null },
        { categoria: 'Hembra Levante', precio_kg: 9600, variacion_pct: null },
      ],
    },
  },
};

export const formatCOP = (valor: number) => `$${valor.toLocaleString('es-CO')}`;

export const formatVariacion = (pct: number | null) =>
  pct === null ? null : `${pct > 0 ? '+' : ''}${pct.toLocaleString('es-CO')}%`;

/** Fecha corta legible, ej. "25 ago". */
export const formatFechaCorta = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${d} ${meses[(m ?? 1) - 1]}`;
};

export function useMarketData() {
  const query = useQuery<MarketData>({
    queryKey: ['market-data'],
    queryFn: async () => {
      const res = await fetch(MARKET_DATA_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data: query.data ?? FALLBACK_DATA,
    isLive: query.isSuccess,
  };
}
