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
    slug: 'collar-marshall',
    name: 'MARSHALL',
    description: 'Collares creados uno a uno, de forma totalmente artesanal. Confeccionados en pana, antelina y materiales de alta calidad, suaves y resistentes. Cada pieza nace para ser única, cómoda y protectora, hecha a medida para cada perro',


    basePrice: 35,
    // He puesto tus fotos actuales como ejemplo para que no salgan rotas
    images: [
      '/PT01_marshall.jpeg', 
      
    ],
    customizationOptions: {
      allowsEngraving: true,
      engravingPrice: 8,
      minNeckSize: 15,
      maxNeckSize: 65
    },
    materials: ['Pana exterior', 'Tela tapacosturas', 'Relleno acolchado',],
    colors: ['Roble Oscuro', 'Coñac']
  },
  
 
];