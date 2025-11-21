// data/products.ts

// 1. DEFINICIÓN DEL TIPO DE DATO (La estructura)
export interface Product {
  id: string;
  slug: string; // Esto es lo que sale en la URL (ej: /product/collar-cuero)
  name: string;
  description: string;
  basePrice: number;
  images: string[];
  // Opciones de configuración
  customizationOptions: {
    allowsEngraving: boolean;
    engravingPrice: number;
    minNeckSize: number;
    maxNeckSize: number;
  };
  // Detalles extra para los acordeones
  materials: string[];
  colors: string[];
}

// 2. LOS DATOS (Tu catálogo)
export const products: Product[] = [
  {
    id: 'p1',
    slug: 'collar-cuero-eterno',
    name: 'El Clásico Eterno',
    description: 'Un collar de cuero de grano completo que envejece con elegancia. Curtido vegetal y herrajes de latón macizo que no se oxidan. Perfecto para el día a día.',
    basePrice: 45,
    // He puesto tus fotos actuales como ejemplo para que no salgan rotas
    images: [
      '/HP_telas.jpg', 
      '/HP_taller.jpg'
    ],
    customizationOptions: {
      allowsEngraving: true,
      engravingPrice: 5,
      minNeckSize: 20,
      maxNeckSize: 65
    },
    materials: ['Cuero Vacuno', 'Latón Macizo', 'Hilo encerado'],
    colors: ['Roble Oscuro', 'Coñac']
  },
  {
    id: 'p2',
    slug: 'trenzado-nautico',
    name: 'Trenzado Náutico',
    description: 'Inspirado en los nudos marineros. Cuerda de algodón de alta resistencia teñida a mano. Suave al tacto pero increíblemente resistente.',
    basePrice: 38,
    images: [
      '/HP_teckel.jpg',
      '/HP_texto.jpg'
    ],
    customizationOptions: {
      allowsEngraving: true,
      engravingPrice: 5,
      minNeckSize: 25,
      maxNeckSize: 60
    },
    materials: ['Algodón Orgánico', 'Hilo Encerado'],
    colors: ['Azul Profundo', 'Arena']
  },
  {
    id: 'p3',
    slug: 'coleccion-pana',
    name: 'Colección Pana Soft',
    description: 'La opción más suave para cuellos sensibles. Pana de alta calidad reforzada interiormente con cinta de nylon resistente.',
    basePrice: 40,
    images: [
      '/HP_telas.jpg'
    ],
    customizationOptions: {
      allowsEngraving: true,
      engravingPrice: 5,
      minNeckSize: 15,
      maxNeckSize: 55
    },
    materials: ['Pana 100% Algodón', 'Nylon', 'Latón'],
    colors: ['Verde Bosque', 'Teja']
  }
];