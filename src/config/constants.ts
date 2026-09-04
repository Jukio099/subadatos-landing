export const WHATSAPP_NUMBER = "573144423197";
export const DISPLAY_PHONE = "+57 314 4423197";
export const EMAIL = "noveno.julio.rodriguez@gmail.com";
export const DASHBOARD_URL = "https://subadatos-centralganadera.streamlit.app";

const encode = (text: string) => encodeURIComponent(text);
const whatsapp = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(message)}`;

export const WHATSAPP_GENERAL = whatsapp(
  "Hola, vengo de SubaDatos. Quiero información sobre precios de subasta ganadera."
);

export const WHATSAPP_PRICES = whatsapp(
  "Hola, vengo de SubaDatos. Quiero consultar precios de ganado por plaza y categoría."
);

export const WHATSAPP_CONSULTING = whatsapp(
  "Hola, vengo de SubaDatos. Quiero una asesoría para revisar si es buen momento de vender."
);

export const WHATSAPP_SEEDS = whatsapp(
  "Hola, vengo de SubaDatos. Quiero cotizar semillas de pasto."
);

export const WHATSAPP_SCALES = whatsapp(
  "Hola, vengo de SubaDatos. Quiero cotizar una báscula ganadera."
);

export const whatsappPreciosPlaza = (plaza: string) =>
  whatsapp(`Hola, vengo de SubaDatos. Quiero consultar precios de ${plaza}.`);

export const WHATSAPP_DATA_SERVICES = WHATSAPP_CONSULTING;
