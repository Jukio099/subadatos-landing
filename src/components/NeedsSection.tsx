import { BarChart3, Leaf, MessageCircle, Scale } from 'lucide-react';
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
    cta: 'Consultar precios por WhatsApp',
    href: WHATSAPP_PRICES,
    event: 'whatsapp_precios',
    source: 'needs_prices',
    icon: BarChart3,
  },
  {
    title: 'Agendar asesoría',
    description: 'Reciba orientación para interpretar el mercado y tomar mejores decisiones.',
    cta: 'Pedir asesoría para mi ganado',
    href: WHATSAPP_CONSULTING,
    event: 'whatsapp_consultoria',
    source: 'needs_consulting',
    icon: MessageCircle,
  },
  {
    title: 'Comprar semillas',
    description: 'Cotice semillas de pasto según las condiciones de su finca y región.',
    cta: 'Cotizar semillas',
    href: WHATSAPP_SEEDS,
    event: 'whatsapp_semillas',
    source: 'needs_seeds',
    icon: Leaf,
  },
  {
    title: 'Cotizar báscula',
    description: 'Consulte básculas ganaderas para controlar mejor peso, compra y venta.',
    cta: 'Cotizar báscula',
    href: WHATSAPP_SCALES,
    event: 'whatsapp_basculas',
    source: 'needs_scales',
    icon: Scale,
  },
];

const NeedsSection = () => {
  return (
    <section id="necesidades" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-nature-700 bg-nature-50 px-4 py-1 rounded-full mb-3">
            Empiece por su necesidad
          </span>
          <h2 className="text-3xl font-bold mb-2 text-gradient">¿Qué necesita hoy?</h2>
          <div className="h-1 w-20 bg-nature-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600">
            Elija el camino correcto para que el mensaje de WhatsApp llegue con el contexto que necesitamos
            y podamos responderle más rápido.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {needs.map(({ icon: Icon, ...need }) => (
            <article
              key={need.title}
              className="animate-on-scroll bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-nature-50 text-nature-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{need.title}</h3>
              <p className="text-gray-600 text-sm mb-5 flex-1">{need.description}</p>
              <a
                href={need.href}
                target="_blank"
                rel="noopener noreferrer"
                data-event={need.event}
                data-source={need.source}
              >
                <Button className="w-full bg-nature-600 hover:bg-nature-700 text-white">
                  {need.cta}
                </Button>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="consulta_precios_click"
            data-source="needs_dashboard"
            className="text-nature-700 hover:text-nature-900 font-semibold underline underline-offset-4"
          >
            También puede abrir la consulta de precios en línea
          </a>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;
