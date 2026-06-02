export const WHATSAPP_NUMBER = "573144423197";
export const DISPLAY_PHONE = "+57 314 4423197";
export const EMAIL = "noveno.julio.rodriguez@gmail.com";
export const DASHBOARD_URL = "https://subadatos-centralganadera.streamlit.app";

const encode = (text: string) => encodeURIComponent(text);
const whatsapp = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(message)}`;

export const WHATSAPP_GENERAL = whatsapp(
  "Hola, vengo de la página de SubaDatos. Quiero más información sobre sus servicios para tomar mejores decisiones con datos ganaderos. Mi ubicación es: ___"
);

export const WHATSAPP_PRICES = whatsapp(
  "Hola, vengo de la página de SubaDatos. Quiero consultar precios de ganado por plaza/categoría antes de negociar. Plaza o región: ___ Categoría: ___ Peso aproximado: ___"
);

export const WHATSAPP_CONSULTING = whatsapp(
  "Hola, vengo de la página de SubaDatos. Quiero una asesoría para revisar precios de ganado en subasta y saber si es buen momento para vender. Mi ubicación es: ___"
);

export const WHATSAPP_SEEDS = whatsapp(
  "Hola, vengo de la página de SubaDatos. Quiero información/cotización de semillas de pasto. Mi finca está en: ___"
);

export const WHATSAPP_SCALES = whatsapp(
  "Hola, vengo de la página de SubaDatos. Quiero cotizar una báscula ganadera. Ubicación: ___ Capacidad aproximada requerida: ___"
);

export const WHATSAPP_DATA_SERVICES = WHATSAPP_CONSULTING;
