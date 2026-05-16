import { WHATSAPP_CONSULTING, WHATSAPP_PRICES, WHATSAPP_SCALES, WHATSAPP_SEEDS } from '@/config/constants';

/**
 * Genera un link de WhatsApp con mensaje prellenado según la intención del producto.
 */
export const getWhatsappLink = (product: { id: number; name: string }) => {
  if (product.id === 1) return WHATSAPP_CONSULTING;
  if (product.name.includes("Brachiaria")) return WHATSAPP_SEEDS;
  if (product.name.includes("Báscula")) return WHATSAPP_SCALES;

  return WHATSAPP_PRICES;
};

export const getWhatsappEventName = (product: { id: number; name: string }) => {
  if (product.id === 1) return 'whatsapp_consultoria';
  if (product.name.includes("Brachiaria")) return 'whatsapp_semillas';
  if (product.name.includes("Báscula")) return 'whatsapp_basculas';

  return 'whatsapp_precios';
};
