import { BarChart3, Leaf, MessageCircle, Scale, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DASHBOARD_URL,
  WHATSAPP_CONSULTING,
  WHATSAPP_PRICES,
  WHATSAPP_SEEDS,
  WHATSAPP_SCALES,
} from '@/config/constants';

const needs = [
  {
    title: 'Consultar precios de ganado',
    description: 'Revise referencias por plaza, categoría y peso antes de vender o negociar.',
    cta: 'Consultar por WhatsApp',
    href: WHATSAPP_PRICES,
    event: 'whatsapp_precios',
    source: 'needs_prices',
    icon: BarChart3,
    color: 'purple',
  },
  {
    title: 'Agendar asesoría',
    description: 'Reciba orientación para interpretar el mercado y tomar mejores decisiones.',
    cta: 'Pedir asesoría para mi ganado',
    href: WHATSAPP_CONSULTING,
    event: 'whatsapp_consultoria',
    source: 'needs_consulting',
    icon: MessageCircle,
    color: 'green',
  },
  {
    title: 'Comprar semillas',
    description: 'Cotice semillas de pasto según las condiciones de su finca y región.',
    cta: 'Cotizar semillas',
    href: WHATSAPP_SEEDS,
    event: 'whatsapp_semillas',
    source: 'needs_seeds',
    icon: Leaf,
    color: 'gold',
  },
  {
    title: 'Cotizar báscula',
    description: 'Consulte básculas ganaderas para controlar mejor peso, compra y venta.',
    cta: 'Cotizar báscula',
    href: WHATSAPP_SCALES,
    event: 'whatsapp_basculas',
    source: 'needs_scales',
    icon: Scale,
    color: 'purple',
  },
];

const colorMap: Record<string, { ring: string; icon: string; text: string; glow: string; btn: string; }> = {
  purple: {
    ring: 'group-hover:border-suba-purple-500/50',
    icon: 'bg-suba-purple-700/30 text-suba-purple-300 border-suba-purple-500/30',
    text: 'text-suba-purple-300',
    glow: 'group-hover:shadow-[0_0_40px_rgba(107,33,168,0.35)]',
    btn: 'bg-gradient-to-r from-suba-purple-700 to-suba-purple-600 hover:from-suba-purple-600 hover:to-suba-purple-500 border-suba-purple-500/40',
  },
  green: {
    ring: 'group-hover:border-suba-green-500/50',
    icon: 'bg-suba-green-700/30 text-suba-green-300 border-suba-green-500/30',
    text: 'text-suba-green-300',
    glow: 'group-hover:shadow-[0_0_40px_rgba(22,163,74,0.35)]',
    btn: 'bg-gradient-to-r from-suba-green-700 to-suba-green-600 hover:from-suba-green-600 hover:to-suba-green-500 border-suba-green-500/40',
  },
  gold: {
    ring: 'group-hover:border-suba-gold-500/50',
    icon: 'bg-suba-gold-500/20 text-suba-gold-400 border-suba-gold-500/30',
    text: 'text-suba-gold-400',
    glow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.35)]',
    btn: 'bg-gradient-to-r from-suba-gold-600 to-suba-gold-500 hover:from-suba-gold-500 hover:to-suba-gold-400 border-suba-gold-500/40 text-suba-dark-300',
  },
};

const NeedsSection = () => {
  return (
    <section
      id="necesidades"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)' }}
    >
      {/* Background accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-suba-purple-700/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-suba-green-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-suba-purple-300 bg-suba-purple-500/10 border border-suba-purple-500/20 px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.15em]">
            <Sparkles className="h-3.5 w-3.5" /> Empiece por su necesidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            ¿Qué necesita <span className="text-gradient">hoy</span>?
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bar-shimmer mb-6" />
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Elija el camino correcto para que el mensaje de WhatsApp llegue con el contexto
            que necesitamos y podamos responderle más rápido.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {needs.map(({ icon: Icon, color, ...need }) => {
            const palette = colorMap[color];
            return (
              <article
                key={need.title}
                className={`group relative glass rounded-2xl p-6 border border-white/5 ${palette.ring} ${palette.glow} hover-lift flex flex-col overflow-hidden`}
              >
                {/* Decorative gradient orb */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-suba-purple-600/0 group-hover:bg-suba-purple-600/20 rounded-full blur-3xl transition-all duration-700" />

                <div className={`w-12 h-12 rounded-xl ${palette.icon} border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold text-white mb-2 group-hover:${palette.text} transition-colors`}>
                  {need.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 flex-1 leading-relaxed">{need.description}</p>
                <a
                  href={need.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event={need.event}
                  data-source={need.source}
                  className="block"
                >
                  <Button className={`w-full ${palette.btn} text-white rounded-full py-5 group/btn border shadow-lg`}>
                    <span className="flex-1 text-sm font-semibold">{need.cta}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="consulta_precios_click"
            data-source="needs_dashboard"
            className="group inline-flex items-center gap-2 text-suba-purple-300 hover:text-suba-purple-200 font-medium text-sm sm:text-base transition-colors"
          >
            <span className="border-b border-dashed border-suba-purple-500/50 group-hover:border-suba-purple-300 pb-0.5">
              También puede abrir la consulta de precios en línea
            </span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;
