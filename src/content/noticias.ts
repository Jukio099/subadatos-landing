export interface NewsSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  updatedAt?: string;
  category: string;
  readTime: string;
  sourceLabel: string;
  heroKicker: string;
  coverGradient: string;
  tags: string[];
  intro: string;
  keyTakeaways: string[];
  sections: NewsSection[];
  debateQuestion: string;
  ctaText: string;
  sources: Array<{ label: string; url: string }>;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'guias-movilizacion-ica-sigma-ganaderos',
    title: 'Guías de movilización ICA SIGMA: qué revisar antes de mover ganado',
    metaTitle: 'Guías ICA SIGMA para ganaderos: checklist antes de movilizar ganado | SubaDatos',
    description:
      'Explicación clara para ganaderos sobre guías de movilización ICA SIGMA, predio, inventario, sanidad y soportes antes de comprar, vender o mover animales.',
    date: '2026-05-13',
    category: 'Trámites ganaderos',
    readTime: '4 min',
    sourceLabel: 'Radar Ganadero SubaDatos',
    heroKicker: 'Radar Ganadero',
    coverGradient: 'from-[#2B2344] via-[#164E35] to-[#009E5A]',
    tags: ['ICA', 'SIGMA', 'Movilización', 'Ganadería'],
    intro:
      'Cuando un trámite toca predios, guías, inventarios o datos sanitarios, el impacto no se siente en una oficina: se siente cuando toca mover animales, vender, comprar o responder por documentación.',
    keyTakeaways: [
      'Revise datos del predio y responsable antes de necesitar la guía.',
      'Cruce inventario real, registros sanitarios y soportes disponibles.',
      'No espere al día de la venta para descubrir inconsistencias.',
    ],
    sections: [
      {
        heading: 'Qué está pasando',
        paragraphs: [
          'El ecosistema de trámites ganaderos viene incorporando más procesos digitales para movilización animal, registros y validaciones. Para el productor, la pregunta importante no es si el sistema existe, sino si sus datos están listos cuando necesite mover ganado.',
          'SubaDatos lo traduce a una revisión práctica: predio, responsable, inventario, sanidad y soportes. Si uno de esos puntos falla, la tecnología deja de ser ayuda y se vuelve fricción.',
        ],
      },
      {
        heading: 'Checklist práctico antes de mover animales',
        bullets: [
          'Predio: confirme que la información básica esté actualizada.',
          'Responsable: valide nombres, documento y datos de contacto.',
          'Inventario: compare animales registrados contra la realidad de la finca.',
          'Sanidad: revise vacunación, eventos sanitarios y restricciones vigentes.',
          'Soportes: guarde evidencias de comunicaciones, trámites y correcciones.',
        ],
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Confiar en que “eso debe estar bien” sin verificar.',
          'Esperar hasta el último día para revisar datos.',
          'No guardar pantallazos, radicados o soportes de trámites.',
          'No pedir explicación cuando cambia el sistema o aparece una inconsistencia.',
        ],
      },
      {
        heading: 'Opinión SubaDatos',
        paragraphs: [
          'La tecnología en el campo sirve si reduce fricción. Si el productor necesita más llamadas, más filas o más ensayo-error, entonces falta pedagogía. El reto no es solo digitalizar: es explicar bien y acompañar mejor.',
        ],
      },
    ],
    debateQuestion:
      '¿Para usted estos cambios tecnológicos son un avance real o se están convirtiendo en otra carga para el ganadero?',
    ctaText:
      'Si quiere una guía rápida para revisar este tema antes de mover ganado, escriba GUÍAS por WhatsApp y cuéntenos su caso.',
    sources: [
      { label: 'ICA — sitio oficial', url: 'https://www.ica.gov.co/' },
      { label: 'ICA — noticias', url: 'https://www.ica.gov.co/noticias' },
    ],
  },
  {
    slug: 'sinigan-v6-ganaderia-colombia',
    title: 'SINIGAN V6: el cambio que el ganadero debe entender antes de que lo coja tarde',
    metaTitle: 'SINIGAN V6: qué debe revisar el ganadero colombiano | SubaDatos',
    description:
      'Una guía sencilla sobre SINIGAN V6 para productores ganaderos: predios, inventario, guías, validaciones y preguntas clave antes de mover animales.',
    date: '2026-05-12',
    category: 'Tecnología ganadera',
    readTime: '5 min',
    sourceLabel: 'Radar Ganadero SubaDatos',
    heroKicker: 'Actualidad ganadera',
    coverGradient: 'from-[#6B21A8] via-[#2B2344] to-[#16A34A]',
    tags: ['SINIGAN', 'ICA', 'Datos', 'Trazabilidad'],
    intro:
      'SINIGAN V6 no debería verse como una sigla lejana. Si el sistema centraliza y valida más información, el productor necesita tener sus datos limpios para evitar tropiezos cuando quiera vender, comprar o movilizar animales.',
    keyTakeaways: [
      'La trazabilidad gana peso en las decisiones del negocio ganadero.',
      'Datos malos pueden convertirse en demoras o bloqueos prácticos.',
      'El productor que revise antes tiene ventaja frente al que espera al trámite.',
    ],
    sections: [
      {
        heading: 'Por qué importa',
        paragraphs: [
          'Cada avance en trazabilidad busca ordenar la información del hato ganadero. Eso puede mejorar control sanitario y confianza comercial, pero también exige que predios, responsables e inventarios estén bien registrados.',
        ],
      },
      {
        heading: 'Qué debería revisar un productor',
        bullets: [
          'Datos del predio y responsable principal.',
          'Coherencia entre inventario registrado y animales reales.',
          'Historial sanitario y novedades recientes.',
          'Capacidad de consultar o corregir información antes de una venta.',
        ],
      },
      {
        heading: 'La lectura de SubaDatos',
        paragraphs: [
          'El dato ganadero ya no solo sirve para mirar precios. También sirve para reducir riesgo operativo. Quien tenga información ordenada podrá responder más rápido cuando el mercado, una subasta o una entidad le exija claridad.',
        ],
      },
    ],
    debateQuestion:
      '¿La digitalización le está facilitando la vida al ganadero o le está poniendo más trabas?',
    ctaText:
      'En SubaDatos convertimos datos ganaderos en decisiones prácticas. Escríbanos y le ayudamos a leer su mercado antes de negociar.',
    sources: [
      { label: 'ICA — noticias', url: 'https://www.ica.gov.co/noticias' },
      { label: 'ICA — sitio oficial', url: 'https://www.ica.gov.co/' },
    ],
  },
];

export const latestNews = [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));

export const getNewsArticleBySlug = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);

export const formatArticleDate = (date: string) =>
  new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Bogota',
  }).format(new Date(`${date}T12:00:00-05:00`));
