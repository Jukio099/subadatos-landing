
/**
 * Utility functions for generating WhatsApp message links
 */

/**
 * Generates a WhatsApp link with a pre-filled message based on product type
 */
export const getWhatsappLink = (product: {
  id: number;
  name: string;
}) => {
  let message = "";

  if (product.name === "Análisis de Datos") {
    message = "Hola,%20estoy%20interesado%20a%20sus%20servicios%20de%20análisis%20de%20datos%20a%20$100.000%20COP%20la%20hora.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";
  } else if (product.name.includes("Brachiaria")) {
    message = "Hola,%20estoy%20interesado%20a%20sus%20pastos.%20Específicamente%20en%20" + encodeURIComponent(product.name) + ".%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";
  } else {
    message = "Hola,%20estoy%20interesado%20a%20" + encodeURIComponent(product.name) + ".%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";
  }

  return `https://wa.me/573144423197?text=${message}`;
};
