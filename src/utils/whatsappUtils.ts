import { WHATSAPP_NUMBER } from '@/config/constants';

/**
 * Genera un link de WhatsApp con mensaje prellenado según el producto.
 */
export const getWhatsappLink = (product: { id: number; name: string }) => {
  let message = "";

  if (product.id === 1) {
    message = encodeURIComponent(
      "Hola, estoy interesado/a en sus servicios de análisis de datos a $100.000 COP la hora. ¿Me podrían dar más información?"
    );
  } else if (product.name.includes("Brachiaria")) {
    message = encodeURIComponent(
      `Hola, estoy interesado/a en el pasto ${product.name}. ¿Me podrían dar más información?`
    );
  } else {
    message = encodeURIComponent(
      `Hola, estoy interesado/a en ${product.name}. ¿Me podrían dar más información?`
    );
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
