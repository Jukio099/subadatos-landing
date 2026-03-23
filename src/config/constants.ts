export const WHATSAPP_NUMBER = "573144423197";
export const DISPLAY_PHONE = "+57 314 4423197";
export const EMAIL = "subadatos@gmail.com";
export const DASHBOARD_URL = "https://subadatos-centralganadera.streamlit.app";

const encode = (text: string) => encodeURIComponent(text);

export const WHATSAPP_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(
  "Hola, estoy interesado/a en sus servicios. ¿Me podrían dar más información?"
)}`;

export const WHATSAPP_DATA_SERVICES = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(
  "Hola, estoy interesado/a en sus servicios de análisis de datos a $100.000 COP la hora. ¿Me podrían dar más información?"
)}`;
