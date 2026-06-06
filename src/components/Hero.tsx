import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, CheckCircle2, Phone, TrendingUp, Activity, MapPin } from 'lucide-react';
import { DASHBOARD_URL, WHATSAPP_PRICES } from '@/config/constants';
import { useCountUp } from '@/hooks/use-count-up';

const Hero = () => {
  const datosCount = useCountUp({ end: 1, decimals: 0, duration: 1800, suffix: 'M+', startOnView: false });
  const plazasCount = useCountUp({ end: 20, decimals: 0, duration: 1800, suffix: '+', startOnView: false });
  const yearsCount = useCountUp({ end: 2, decimals: 0, duration: 1800, suffix: '+', startOnView: false });

  const marketRows = [
    { plaza: 'Yopal', categoria: 'Macho levante', precio: '$8.420/kg', trend: '+3,1%' },
    { plaza: 'Montería', categoria: 'Novilla', precio: '$7.980/kg', trend: '+1,8%' },
    { plaza: 'Medellín', categoria: 'Ceba', precio: '$8.760/kg', trend: '+2,4%' },
  ];

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#f8fbf7] pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(107,33,168,0.14),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(22,163,74,0.16),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbf7_58%,#f1f7ef_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-suba-purple-400/50 to-transparent" />
      <div className="absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-suba-purple-200/50 bg-white/40 blur-3xl" />

      <div className="container-custom pb-16 sm:pb-20 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-suba-purple-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-suba-purple-800 shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-suba-green-500 opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-suba-green-600" /></span>
              Datos en vivo · Ganadería colombiana
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-black tracking-[-0.055em] text-suba-dark-300 sm:text-6xl lg:text-7xl xl:text-[5.4rem] leading-[0.93]">
              Inteligencia de mercado para vender ganado con más certeza.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Datos, visualizaciones y análisis para tomar mejores decisiones en compra y venta de ganado, sin perder tiempo revisando reportes sueltos de subastas.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" data-event="consulta_precios_click" data-source="hero_primary">
                <Button className="h-14 rounded-full bg-suba-purple-700 px-7 text-base font-bold text-white shadow-[0_18px_42px_rgba(107,33,168,0.28)] transition-all hover:-translate-y-0.5 hover:bg-suba-purple-600">
                  <BarChart3 className="mr-2 h-5 w-5" /> Explorar datos <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href={WHATSAPP_PRICES} target="_blank" rel="noopener noreferrer" data-event="whatsapp_precios" data-source="hero_secondary">
                <Button variant="outline" className="h-14 rounded-full border-suba-green-600/30 bg-white px-7 text-base font-bold text-suba-green-700 shadow-sm hover:bg-suba-green-50 hover:text-suba-green-800">
                  <Phone className="mr-2 h-5 w-5" /> Consultar por WhatsApp
                </Button>
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {[
                { ref: datosCount.ref, value: datosCount.value, label: 'Datos analizados' },
                { ref: plazasCount.ref, value: plazasCount.value, label: 'Plazas monitoreadas' },
                { ref: yearsCount.ref, value: yearsCount.value, label: 'Años de experiencia' },
              ].map((stat, index) => (
                <div key={stat.label} className={`p-4 sm:p-5 ${index !== 0 ? 'border-l border-slate-200' : ''}`}>
                  <div ref={stat.ref} className="font-display text-2xl font-black text-suba-purple-800 sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-suba-purple-500/20 via-white to-suba-green-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.15)]">
              <div className="border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-suba-green-300">SUBADATOS LIVE</p><h2 className="mt-1 text-xl font-black">Panel de precios ganaderos</h2></div>
                  <div className="rounded-full bg-suba-green-500/15 px-3 py-1 text-xs font-bold text-suba-green-300 ring-1 ring-suba-green-400/30">Actualizado</div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: TrendingUp, label: 'Tendencia', value: '+2,6%', color: 'text-suba-green-700 bg-suba-green-50' },
                    { icon: MapPin, label: 'Municipios', value: '20+', color: 'text-suba-purple-700 bg-suba-purple-50' },
                    { icon: Activity, label: 'Señales', value: 'En vivo', color: 'text-amber-700 bg-amber-50' },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${color}`}><Icon className="h-4 w-4" /></div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      <p className="mt-1 text-lg font-black text-slate-950">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-4 flex items-center justify-between"><p className="text-sm font-black text-slate-950">Últimas referencias</p><p className="text-xs font-bold text-slate-500">COP/kg</p></div>
                  <div className="space-y-3">
                    {marketRows.map((row) => (
                      <div key={`${row.plaza}-${row.categoria}`} className="grid grid-cols-[1fr_auto] gap-3 rounded-xl bg-slate-50 p-3">
                        <div><p className="font-bold text-slate-950">{row.plaza}</p><p className="text-sm text-slate-500">{row.categoria}</p></div>
                        <div className="text-right"><p className="font-black text-slate-950">{row.precio}</p><p className="text-xs font-bold text-suba-green-700">{row.trend}</p></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-gradient-to-br from-suba-purple-800 to-suba-green-700 p-5 text-white">
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-suba-green-200" /><div><p className="font-black">Lectura accionable del mercado</p><p className="mt-1 text-sm leading-6 text-white/75">Compare plazas, categorías y tendencias antes de comprar o vender.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
