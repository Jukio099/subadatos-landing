import { Database, LineChart, Handshake } from 'lucide-react';

const pasos = [
  {
    icono: Database,
    etiqueta: '1. Recolectamos',
    titulo: 'Cada boletín oficial',
    texto: 'Central Ganadera, SubaCasanare, Subastar, Cencogán, Cogasucre, Sugaberrío y el promedio nacional de Asosubastas.',
  },
  {
    icono: LineChart,
    etiqueta: '2. Limpiamos',
    titulo: 'Señal, no ruido',
    texto: 'Quitamos lotes equinos y precios por cabeza que rompen el promedio. Queda el kilo en pie de ganado bovino.',
  },
  {
    icono: Handshake,
    etiqueta: '3. Usted decide',
    titulo: 'Antes de subir el camión',
    texto: 'Compare plaza, categoría y variación de la última feria. Luego negocie por WhatsApp o entre a la subasta.',
  },
];

const HowItWorks = () => (
  <section id="como" className="bg-[#07070c] py-16 md:py-20">
    <div className="container-custom">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-suba-green-300">Cómo funciona</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-black text-white sm:text-4xl">
        De la subasta a su decisión, en tres pasos.
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pasos.map((paso) => (
          <article key={paso.etiqueta} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <paso.icono className="h-6 w-6 text-suba-green-300" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-suba-green-300">{paso.etiqueta}</p>
            <h3 className="mt-2 text-xl font-black text-white">{paso.titulo}</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">{paso.texto}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
