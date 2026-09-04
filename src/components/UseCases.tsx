const casos = [
  {
    plaza: 'Yopal, Casanare',
    rol: 'Productor de levante',
    resultado: 'Ajustó el precio pedido con la feria de la semana, no con el rumor de la plaza.',
  },
  {
    plaza: 'Medellín, Antioquia',
    rol: 'Comercializador',
    resultado: 'Entró a Central Ganadera sabiendo a cuánto cerró HL y ML el boletín anterior.',
  },
  {
    plaza: 'Montería · Guamal',
    rol: 'Comprador de ceba',
    resultado: 'Comparó Subastar contra el promedio nacional antes de armar el lote.',
  },
];

const UseCases = () => (
  <section id="casos" className="bg-[#f8fbf7] py-16 md:py-20">
    <div className="container-custom">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-suba-purple-700">Para qué sirve</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-black text-slate-950 sm:text-4xl">
        Así se usa el dato, no un testimonio inventado.
      </h2>
      <p className="mt-3 max-w-2xl text-base text-slate-600">
        Casos típicos de quien consulta SubaDatos antes de comprar o vender. Sin nombres fingidos.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {casos.map((caso) => (
          <article key={caso.plaza} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-suba-green-700">{caso.plaza}</p>
            <h3 className="mt-2 text-lg font-black text-slate-950">{caso.rol}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{caso.resultado}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
