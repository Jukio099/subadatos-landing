import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
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
          color: '#35a85d',
          label: 'Reservar una cita',
          target: headerButtonRef.current,
        });
      }
      if (cardButtonRef.current) {
        window.calendar.schedulingButton.load({
          url: CALENDAR_URL,
          color: '#35a85d',
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
    <section id="contacto" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-nature-800" />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-white">Contáctanos</h2>
          <div className="h-1 w-20 bg-earth-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-200">
            Estamos aquí para asesorarte y ofrecerte los mejores servicios para tu empresa.
            Respondemos rápidamente por WhatsApp.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full text-white font-medium transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" /> Contactar por WhatsApp
            </a>
            {/* Google Calendar Button — header (oculto en móvil) */}
            <div ref={headerButtonRef} aria-label="Agendar una cita en Google Calendar" className="hidden sm:block" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 animate-on-scroll max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-nature-800">Información de contacto</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-nature-100 p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-nature-700" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Dirección</h4>
                <p className="text-gray-600">Colombia</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-nature-100 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-nature-700" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Teléfono / WhatsApp</h4>
                <p className="text-gray-600">
                  {DISPLAY_PHONE}<br />
                  <a
                    href={WHATSAPP_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-600 hover:underline"
                  >
                    Contactar por WhatsApp
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-nature-100 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-nature-700" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">
                  <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-nature-100 p-3 rounded-full mr-4">
                <Calendar className="h-5 w-5 text-nature-700" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Agenda una consulta</h4>
                <p className="text-gray-600 mb-2">
                  Reserva una cita para una asesoría personalizada
                </p>
                {/* Google Calendar Button — card (visible solo en desktop) */}
                <div className="hidden md:block">
                  <div ref={cardButtonRef} aria-label="Agendar una cita en Google Calendar" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Horario de atención</h4>
              <p className="text-gray-600">
                Lunes a Viernes: 8:00 AM – 6:00 PM<br />
                Sábados: 8:00 AM – 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
