import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Calendar, Sparkles } from 'lucide-react';
import { WHATSAPP_GENERAL, DISPLAY_PHONE, EMAIL } from '@/config/constants';

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1jukDDZEzrnmkKKAnSxB3Bn8iggOflE6zOEaj7FJ8bGhM2EBcj8XiPfO9xy3EEyIvELBJXORZZ?gv=true';

const Contact = () => {
  const headerButtonRef = useRef<HTMLDivElement>(null);
  const cardButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadButtons = () => {
      if (!window.calendar) return;
      if (headerButtonRef.current) {
        window.calendar.schedulingButton.load({
          url: CALENDAR_URL,
          color: '#6B21A8',
          label: 'Reservar una cita',
          target: headerButtonRef.current,
        });
      }
      if (cardButtonRef.current) {
        window.calendar.schedulingButton.load({
          url: CALENDAR_URL,
          color: '#6B21A8',
          label: 'Reservar una cita',
          target: cardButtonRef.current,
        });
      }
    };

    if (window.calendar) {
      loadButtons();
    } else {
      window.addEventListener('load', loadButtons);
    }

    return () => {
      window.removeEventListener('load', loadButtons);
    };
  }, []);

  return (
    <section id="contacto" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-grid-light opacity-30" />

      {/* Glow effects */}
      <div className="hero-glow bg-suba-purple-700 w-[400px] h-[400px] -top-32 left-1/3 animate-blob-float" />
      <div className="hero-glow bg-suba-green-600/30 w-[300px] h-[300px] bottom-0 right-0 animate-blob-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10 py-14 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pregunte por su plaza y categoría
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-suba-purple-500 to-suba-green-500 mx-auto mb-6 rounded-full" />
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Le respondemos por WhatsApp con la última referencia de subasta. Sin formularios largos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-suba-green-600 to-suba-green-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative bg-gradient-to-r from-suba-green-600 to-suba-green-700 hover:from-suba-green-500 hover:to-suba-green-600 text-white px-6 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-lg shadow-green-900/30">
                <Phone className="h-5 w-5" /> Contactar por WhatsApp
              </span>
            </a>
            {/* Google Calendar Button — header (oculto en móvil) */}
            <div ref={headerButtonRef} aria-label="Agendar una cita en Google Calendar" className="hidden sm:block" />
          </div>
        </div>

        <div className="glass rounded-2xl p-8 md:p-10 animate-on-scroll max-w-2xl mx-auto border border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-suba-purple-600 to-suba-green-500 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Información de contacto</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors transition-duration-300">
              <div className="w-11 h-11 rounded-xl bg-suba-purple-900/50 border border-suba-purple-500/20 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-suba-purple-300" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">Dirección</h4>
                <p className="text-white/60 text-sm">Colombia · cobertura nacional de subastas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-suba-green-900/50 border border-suba-green-500/20 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-suba-green-300" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">Teléfono / WhatsApp</h4>
                <p className="text-white/60 text-sm">
                  {DISPLAY_PHONE}<br />
                  <a
                    href={WHATSAPP_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-suba-green-400 hover:text-suba-green-300 transition-colors"
                  >
                    Contactar por WhatsApp
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-suba-gold-900/50 border border-suba-gold-500/20 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-suba-gold-300" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">Email</h4>
                <p className="text-white/60 text-sm">
                  <a href={`mailto:${EMAIL}`} className="text-suba-gold-400 hover:text-suba-gold-300 transition-colors">{EMAIL}</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-suba-purple-900/50 border border-suba-purple-500/20 flex items-center justify-center shrink-0">
                <Calendar className="h-5 w-5 text-suba-purple-300" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">Agenda una consulta</h4>
                <p className="text-white/60 text-sm mb-2">
                  Reserva una cita para una asesoría personalizada
                </p>
                {/* Google Calendar Button — card */}
                <div className="hidden md:block">
                  <div ref={cardButtonRef} aria-label="Agendar una cita en Google Calendar" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-suba-purple-900/30 border border-suba-purple-500/10 flex items-center justify-center">
                <Calendar className="h-4 w-4 text-suba-purple-300" />
              </div>
              <h4 className="font-semibold text-white text-sm">Horario de atención</h4>
            </div>
            <p className="text-white/60 text-sm ml-11">
              Lunes a Viernes: 8:00 AM – 6:00 PM<br />
              Sábados: 8:00 AM – 1:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-suba-purple-500/50 to-transparent" />
    </section>
  );
};

export default Contact;
