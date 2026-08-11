import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TELEGRAM_GOLD_URL = "https://t.me/hermes_ventas1_bot?start=gold";

const tiers = [
  {
    name: "Inicio",
    price: "US$30",
    description: "Para validar un primer flujo repetitivo.",
    items: ["Diagnóstico de un objetivo", "1 habilidad recomendada", "Guía de acceso y uso", "Entrega de alcance"],
    excluded: "No incluye configuración de cuentas ni integraciones.",
  },
  {
    name: "Operativo",
    price: "US$50",
    description: "Para un proceso concreto que ya genera trabajo manual.",
    items: ["Diagnóstico de proceso", "Selección de skills", "Configuración inicial guiada", "Prueba del flujo acordado"],
    excluded: "No incluye integraciones complejas ni soporte continuo.",
  },
  {
    name: "Gold",
    price: "US$100",
    description: "Para dejar un agente privado listo alrededor de un objetivo real.",
    items: ["Diagnóstico y mapa de trabajo", "Skills de Cloud y comunidad evaluadas", "Perfil Hermes aislado", "Configuración de herramientas aprobadas", "Entrega y guía de arranque"],
    excluded: "No incluye pagos de APIs, licencias externas ni cambios fuera del alcance aprobado.",
    featured: true,
  },
];

const faqs = [
  {
    question: "¿Qué pasa cuando toco “Empezar diagnóstico”?",
    answer: "Abres el concierge de Hermes en Telegram. Te hará preguntas cortas sobre tu trabajo, el resultado esperado y las herramientas que usas. Con eso se define el alcance antes de configurar nada.",
  },
  {
    question: "¿El agente entra a mis cuentas automáticamente?",
    answer: "No. Ninguna cuenta, archivo o integración se conecta sin tu confirmación. Las credenciales se configuran solo dentro del entorno privado del cliente y para el alcance aprobado.",
  },
  {
    question: "¿Puede usar skills de Cloud y de la comunidad?",
    answer: "Sí. Durante el diagnóstico se recomiendan las skills útiles. Antes de instalar una, se revisa su propósito, permisos y encaje con tu objetivo; nunca se instala una skill arbitraria en un agente compartido.",
  },
  {
    question: "¿Reemplaza a mi equipo?",
    answer: "No. Hermes se diseña para quitar trabajo repetitivo y dejar al equipo con el criterio, las decisiones y la supervisión.",
  },
];

const HermesGold = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090d] text-white">
      <section className="relative isolate border-b border-white/10 bg-[radial-gradient(circle_at_18%_15%,rgba(126,34,206,0.28),transparent_28%),radial-gradient(circle_at_82%_0%,rgba(22,163,74,0.18),transparent_24%),#09090d]">
        <div className="absolute inset-0 -z-10 bg-grid-light opacity-30" />
        <div className="container-custom pt-28 pb-20 md:pt-36 md:pb-28">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-white">
            <ArrowRight className="h-4 w-4 rotate-180" /> Volver a SubaDatos
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
                <Sparkles className="h-3.5 w-3.5" /> Hermes Gold
              </div>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                Tu próximo agente no empieza con un prompt. <span className="text-gradient">Empieza con un objetivo.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Un concierge te hace las preguntas correctas, aterriza tu caso de uso y propone el camino para que Junior configure un agente Hermes privado para tu trabajo real.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="btn-gradient h-13 px-7 text-base shadow-[0_18px_50px_rgba(107,33,168,0.32)]">
                  <a href={TELEGRAM_GOLD_URL} target="_blank" rel="noreferrer" data-event="hermes_gold_diagnostico_click" data-source="gold_hero">
                    Empezar diagnóstico <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <a href="#planes" className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/5">
                  Ver opciones de implementación
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-white/50"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Diagnóstico primero. Accesos y configuración, solo con aprobación.</p>
            </div>

            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-emerald-500"><Bot className="h-5 w-5" /></div>
                <div><p className="font-bold">Concierge Hermes Gold</p><p className="text-xs text-emerald-300">● Disponible para diagnóstico</p></div>
              </div>
              <div className="space-y-3 py-5 text-sm leading-6">
                <div className="mr-8 rounded-2xl rounded-tl-sm bg-white/10 p-3 text-white/85">¿Qué resultado te gustaría dejar de hacer manualmente cada semana?</div>
                <div className="ml-8 rounded-2xl rounded-tr-sm bg-violet-600/70 p-3">Quiero dejar de consolidar correos, archivos y datos para el informe.</div>
                <div className="mr-8 rounded-2xl rounded-tl-sm bg-white/10 p-3 text-white/85">Perfecto. Revisemos fuentes, aprobaciones y la skill más útil antes de configurar tu agente privado.</div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-xs text-white/45"><MessageCircle className="h-4 w-4" /> Conversación guiada, no acceso automático.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101016] py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Cómo funciona</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Un camino claro antes de tocar tus herramientas.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[['1', 'Conversación guiada', 'El concierge entiende tu objetivo y el trabajo que hoy te quita tiempo.', MessageCircle], ['2', 'Diagnóstico', 'Se define un flujo, límites, información requerida y skills potenciales.', Compass], ['3', 'Confirmación', 'Aceptas alcance y pago antes de conectar herramientas o instalar nada.', ShieldCheck], ['4', 'Agente privado', 'Junior entrega el entorno aislado y te guía en el primer uso.', Wrench]].map(([number, title, text, Icon]) => {
              const StepIcon = Icon as typeof MessageCircle;
              return <article key={String(number)} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><div className="flex items-center justify-between"><span className="text-2xl font-black text-violet-300">{number}</span><StepIcon className="h-5 w-5 text-emerald-300" /></div><h3 className="mt-7 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="planes" className="bg-[#09090d] py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-200">Implementación con alcance</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Elige el punto de partida.</h2><p className="mt-4 text-white/60">El valor cubre el diagnóstico y la implementación indicada. Se confirma el alcance antes de empezar.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => <article key={tier.name} className={`relative rounded-3xl border p-7 ${tier.featured ? 'border-amber-300/50 bg-gradient-to-b from-violet-950/75 to-[#16111d] shadow-[0_20px_70px_rgba(124,58,237,0.2)]' : 'border-white/10 bg-white/[0.035]'}`}>
              {tier.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950">Recomendado</span>}
              <h3 className="text-xl font-black">{tier.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-white/60">{tier.description}</p><p className="mt-6 text-4xl font-black">{tier.price}</p><p className="mt-1 text-xs text-white/45">Pago único por implementación inicial</p>
              <ul className="mt-7 space-y-3 text-sm text-white/80">{tier.items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{item}</li>)}</ul>
              <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-white/45"><strong className="text-white/65">No incluye:</strong> {tier.excluded}</p>
              <Button asChild className={`mt-7 w-full rounded-full ${tier.featured ? 'bg-amber-300 text-slate-950 hover:bg-amber-200' : 'bg-white/10 text-white hover:bg-white/15'}`}><a href={TELEGRAM_GOLD_URL} target="_blank" rel="noreferrer" data-event="hermes_gold_plan_click" data-source={`gold_plan_${tier.name.toLowerCase()}`}>Quiero {tier.name} <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
            </article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-emerald-500/[0.07] py-14">
        <div className="container-custom grid items-center gap-7 md:grid-cols-[auto_1fr]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10"><LockKeyhole className="h-6 w-6 text-emerald-200" /></div>
          <div><h2 className="text-2xl font-black">Tu agente no vive en un perfil compartido.</h2><p className="mt-2 max-w-3xl text-white/65">La configuración pagada se hace en un entorno aislado del cliente. Las skills se seleccionan con propósito y los accesos se conectan únicamente cuando tú los apruebas.</p></div>
        </div>
      </section>

      <section className="bg-[#101016] py-16 md:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">Preguntas frecuentes</p><h2 className="mt-3 text-3xl font-black">Sin promesas vagas.</h2><p className="mt-4 text-white/60">Primero entendemos el trabajo; después decidimos qué conviene automatizar.</p></div><div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"><span>{faq.question}</span><ChevronDown className="h-5 w-5 shrink-0 text-white/50 transition group-open:rotate-180" /></summary><p className="mt-4 pr-8 text-sm leading-6 text-white/65">{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="bg-[#09090d] py-16 text-center"><div className="container-custom"><CircleHelp className="mx-auto h-7 w-7 text-amber-200" /><h2 className="mt-4 text-3xl font-black">Cuéntale al concierge qué quieres lograr.</h2><p className="mx-auto mt-3 max-w-xl text-white/60">No necesitas saber qué skill pedir. Empieza por el resultado y se construye el camino contigo.</p><Button asChild size="lg" className="btn-gradient mt-7 px-8"><a href={TELEGRAM_GOLD_URL} target="_blank" rel="noreferrer" data-event="hermes_gold_diagnostico_click" data-source="gold_footer">Abrir concierge Gold <ArrowRight className="ml-2 h-4 w-4" /></a></Button></div></section>
    </main>
  );
};

export default HermesGold;
