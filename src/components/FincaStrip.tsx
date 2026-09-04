import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Scale } from 'lucide-react';

const FincaStrip = () => (
  <section id="finca" className="border-y border-slate-200 bg-white py-12">
    <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">También para la finca</p>
        <h2 className="mt-2 font-display text-2xl font-black text-slate-950">Semillas de pasto y básculas</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-600">
          Complementos agropecuarios, aparte del mercado de subastas.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link to="/finca" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-800 hover:border-slate-400">
          <Leaf className="h-4 w-4 text-suba-green-600" /> Semillas
        </Link>
        <Link to="/finca" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-800 hover:border-slate-400">
          <Scale className="h-4 w-4 text-suba-purple-700" /> Básculas
        </Link>
        <Link to="/finca" className="inline-flex items-center gap-1 text-sm font-bold text-suba-purple-700">
          Ver finca <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default FincaStrip;
