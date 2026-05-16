
export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
  iconName: string;
  boldLink?: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Asesoría en precios ganaderos",
    price: "$100.000/hora",
    description: "Acompañamiento para interpretar precios de subasta, comparar categorías y decidir mejor cuándo vender o comprar ganado.",
    image: "/lovable-uploads/fb7b2fb0-41bf-4e3e-a48e-494045052acd.png",
    features: ["Referencias por plaza y categoría", "Lectura de tendencias del mercado", "Recomendación accionable por WhatsApp"],
    iconName: "ChartLine",
    boldLink: "https://checkout.bold.co/payment/LNK_WIL80MQCBS"
  },
  {
    id: 2,
    name: "Brachiaria Humidicola",
    price: "$89.000/kg",
    description: "Semilla incrustada para zonas húmedas. Resistente a la sequía y suelos pobres.",
    image: "/lovable-uploads/d1b7a494-e5ea-4b34-ad71-70849c067acd.png",
    features: ["Excelente para suelos pobres", "Resistente a sequías", "Alta producción de forraje"],
    iconName: "Leaf"
  },
  {
    id: 3,
    name: "Brachiaria Decumbens",
    price: "$21.200/kg",
    description: "Semilla incrustada ideal para zonas con precipitaciones moderadas. Excelente para el ganado.",
    image: "/lovable-uploads/afb51770-ae33-4bc9-b163-4a4950946883.png",
    features: ["Incrustada para mayor germinación", "Ideal para ganado bovino", "Alta resistencia"],
    iconName: "Leaf"
  },
  {
    id: 4,
    name: "Básculas",
    price: "Consultar precio",
    description: "Básculas de precisión para el pesaje de ganado en su finca.",
    image: "/lovable-uploads/aea2a7de-ba3d-4483-91da-718db6980336.png",
    features: ["Alta precisión", "Fácil instalación", "Servicio técnico"],
    iconName: "Scale"
  }
];
