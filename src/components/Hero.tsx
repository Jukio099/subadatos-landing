import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, BarChart3, ArrowRight, Sparkles, TrendingUp, Activity } from 'lucide-react';
import { DASHBOARD_URL, WHATSAPP_PRICES } from '@/config/constants';
import { useCountUp } from '@/hooks/use-count-up';

const TYPING_PHRASES = [
  'el sector ganadero',
  'la próxima subasta',
  'su próxima decisión',
  'el mercado bovino',
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const lotesCount = useCountUp({ end: 1, decimals: 0, duration: 1800, suffix: 'M+' });
  const plazasCount = useCountUp({ end: 20, decimals: 0, duration: 1800, suffix: '+' });
  const datosCount = useCountUp({ end: 1, decimals: 0, duration: 1800, suffix: 'M+' });

  // Typewriter effect
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = phrase.slice(0, typedText.length + 1);
        setTypedText(next);
        if (next === phrase) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        const next = phrase.slice(0, typedText.length - 1);
        setTypedText(next);
        if (next === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex]);

  // Spotlight cursor tracking (CSS-only via CSS vars)
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty('--mx', `${x}%`);
      section.style.setProperty('--my', `${y}%`);
    };

    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="spotlight relative min-h-[100svh] flex items-center overflow-hidden bg-suba-dark-300"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-suba-dark-300 via-[#14091f] to-suba-dark-300" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-40 animate-grid-pan" />

        {/* Radial gradient glows */}
        <div className="hero-glow bg-suba-purple-700 w-[500px] h-[500px] -top-32 -left-32 animate-blob-float" />
        <div className="hero-glow bg-suba-green-600 w-[400px] h-[400px] top-1/2 -right-32 animate-blob-float" style={{ animationDelay: '2s' }} />
        <div className="hero-glow bg-suba-gold-500 w-[300px] h-[300px] bottom-0 left-1/3 opacity-20 animate-blob-float" style={{ animationDelay: '4s' }} />

        {/* SVG data flow lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-50"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6B21A8" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16A34A" stopOpacity="0" />
              <stop offset="50%" stopColor="#4ade80" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            d="M 0 200 Q 300 100 600 250 T 1200 200"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8 8"
            className="animate-data-flow"
          />
          <path
            d="M 0 500 Q 400 350 700 480 T 1200 400"
            stroke="url(#lineGrad2)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8 8"
            className="animate-data-flow"
            style={{ animationDelay: '1.5s' }}
          />
          <path
            d="M 0 650 Q 300 550 600 620 T 1200 600"
            stroke="url(#lineGrad1)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            className="animate-data-flow"
            style={{ animationDelay: '2.5s' }}
          />
          <path
            d="M 0 100 Q 200 200 500 150 T 1200 100"
            stroke="url(#lineGrad2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            className="animate-data-flow"
            style={{ animationDelay: '0.5s' }}
          />

          <circle cx="150" cy="180" r="3" fill="url(#dotGrad)" className="animate-glow-pulse" />
          <circle cx="450" cy="120" r="2" fill="url(#dotGrad)" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="850" cy="350" r="3" fill="url(#dotGrad)" className="animate-glow-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="1050" cy="200" r="2" fill="url(#dotGrad)" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="600" cy="500" r="2.5" fill="url(#dotGrad)" className="animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="300" cy="600" r="2" fill="url(#dotGrad)" className="animate-glow-pulse" style={{ animationDelay: '2.5s' }} />
        </svg>

        {/* Floating particles */}
        <div className="particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ left: `${(i * 8.3) % 100}%`, animationDelay: `${i * 0.7}s` }} />
          ))}
        </div>

        {/* Top/bottom fade overlays */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-suba-dark-300 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-suba-dark-300 to-transparent" />
      </div>

      <div className="container-custom relative z-10 pt-24 sm:pt-28 pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-light border border-suba-purple-500/30 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suba-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-suba-green-500"></span>
            </span>
            <Activity className="h-3.5 w-3.5 text-suba-green-400" />
            <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
              Datos en vivo · Subastas colombianas
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
            <span className="block animate-fade-in-up">Inteligencia de mercado para</span>
            <span className="block mt-2 text-gradient-flow typewriter-caret min-h-[1.1em]">
              {typedText || '\u00A0'}
            </span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}
          >
            Datos, visualizaciones y análisis para tomar mejores decisiones
            en compra y venta de ganado.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
              data-event="consulta_precios_click"
              data-source="hero_primary"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-suba-purple-600 to-suba-green-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
              <Button className="btn-shine relative bg-gradient-to-r from-suba-purple-700 to-suba-purple-600 hover:from-suba-purple-600 hover:to-suba-purple-500 text-white text-base sm:text-lg py-6 px-8 rounded-full font-semibold border border-suba-purple-400/40 transition-all duration-300 group-hover:scale-[1.03]">
                <BarChart3 className="mr-2 h-5 w-5" />
                Explorar datos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href={WHATSAPP_PRICES}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
              data-event="whatsapp_precios"
              data-source="hero_secondary"
            >
              <Button
                variant="outline"
                className="bg-white/5 hover:bg-white/10 border-white/20 hover:border-white/40 text-white text-base sm:text-lg py-6 px-8 rounded-full font-semibold backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Conocer SubaDatos
              </Button>
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto stagger visible">
            {[
              { ref: lotesCount.ref, value: lotesCount.value, label: 'Lotes analizados', icon: TrendingUp, color: 'text-suba-purple-300' },
              { ref: plazasCount.ref, value: plazasCount.value, label: 'Plazas', icon: Sparkles, color: 'text-suba-gold-400' },
              { ref: datosCount.ref, value: datosCount.value, label: 'Datos', icon: BarChart3, color: 'text-suba-green-400' },
            ].map(({ ref, value, label, icon: Icon, color }) => (
              <div
                key={label}
                className="relative glass-light rounded-2xl px-3 py-4 sm:px-5 sm:py-5 border border-white/5 hover:border-suba-purple-500/40 transition-colors group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-suba-purple-500/0 to-suba-green-500/0 group-hover:from-suba-purple-500/10 group-hover:to-suba-green-500/5 transition-all duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-center gap-1.5 mb-1.5">
                    <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${color} group-hover:scale-110 transition-transform`} />
                    <span ref={ref} className={`text-xl sm:text-2xl md:text-3xl font-bold font-display ${color}`}>
                      {value}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-white/60 block">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating badges */}
          <div className="mt-12 hidden md:flex flex-wrap items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            {['Atención por WhatsApp', 'Subastas en vivo', 'Datos para compra y venta'].map((item, i) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 px-3 py-1.5 glass-light rounded-full border border-white/5 text-xs text-white/80"
                style={{ animation: `fade-in-up 0.6s ease-out ${0.5 + i * 0.1}s both` }}
              >
                <span className="w-1.5 h-1.5 bg-suba-green-400 rounded-full animate-pulse" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('necesidades')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
          aria-label="Descubrir más"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Descubre más</span>
          <div className="scroll-indicator group-hover:border-suba-purple-400 transition-colors" />
        </button>
      </div>

      {/* Bottom gradient line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-suba-purple-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
