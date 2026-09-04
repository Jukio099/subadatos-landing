import type { FuenteResumen, MarketData } from '@/hooks/use-market-data';

export type FuenteKey = keyof MarketData['fuentes'];

export interface PlazaDef {
  slug: string;
  key: FuenteKey;
  short: string;
  titulo: string;
  region: string;
}

export const PLAZA_CATALOG: PlazaDef[] = [
  { slug: 'medellin', key: 'central', short: 'Medellín', titulo: 'Central Ganadera de Medellín', region: 'Antioquia' },
  { slug: 'yopal', key: 'casanare', short: 'Yopal', titulo: 'SubaCasanare — Yopal', region: 'Casanare' },
  { slug: 'monteria', key: 'subastar', short: 'Montería · Guamal', titulo: 'Subastar', region: 'Córdoba y Magdalena' },
  { slug: 'sincelejo', key: 'cogasucre', short: 'Sincelejo', titulo: 'Cogasucre', region: 'Sucre' },
  { slug: 'cencogan', key: 'cencogan', short: 'Cencogán', titulo: 'Cencogán', region: 'Córdoba y Antioquia' },
  { slug: 'nacional', key: 'asosubastas', short: 'Nacional', titulo: 'Promedio Asosubastas', region: 'Colombia' },
  { slug: 'sugaberrio', key: 'sugaberrio', short: 'Sugaberrío', titulo: 'Sugaberrío', region: 'Antioquia' },
];

export const plazaPorSlug = (slug: string) =>
  PLAZA_CATALOG.find((plaza) => plaza.slug === slug);

export const fuenteDePlaza = (data: MarketData, plaza: PlazaDef): FuenteResumen | undefined =>
  data.fuentes[plaza.key];

export const plazasConDatos = (data: MarketData) =>
  PLAZA_CATALOG.filter((plaza) => {
    const fuente = fuenteDePlaza(data, plaza);
    return Boolean(fuente && fuente.precios.length > 0);
  });
