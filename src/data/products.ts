import type { Product } from "../types/product";


export const products: Product[] = [

  {
    id: 1,

    name: "Sauvage Eau de Toilette",

    slug: "dior-sauvage-eau-de-toilette",

    brandId: 1,

    categoryId: 1,

    description:
      "A fresh and powerful fragrance with bergamot and woody notes.",

    price: 120,

    stock: 15,

    gender: "men",

    concentration: "EDT",

    volume: 100,

    country: "France",

    season: "winter",

    fragranceFamily: "woody",

    longevity: "8 hours",

    sillage: "strong",

    createdAt: "2026-01-01",

    updatedAt: "2026-01-01",
  },


  {
    id: 2,

    name: "Coco Mademoiselle",

    slug: "chanel-coco-mademoiselle",

    brandId: 2,

    categoryId: 1,

    description:
      "A sophisticated floral fragrance with elegant citrus notes.",

    price: 150,

    stock: 10,

    gender: "women",

    concentration: "EDP",

    volume: 100,

    country: "France",

    season: "spring",

    fragranceFamily: "floral",

    longevity: "10 hours",

    sillage: "moderate",

    createdAt: "2026-01-01",

    updatedAt: "2026-01-01",
  },


  {
    id: 3,

    name: "Santal 33",

    slug: "le-labo-santal-33",

    brandId: 12,

    categoryId: 1,

    description:
      "A warm woody fragrance with sandalwood notes.",

    price: 220,

    stock: 8,

    gender: "unisex",

    concentration: "EDP",

    volume: 50,

    country: "United States",

    season: "autumn",

    fragranceFamily: "woody",

    longevity: "9 hours",

    sillage: "strong",

    createdAt: "2026-01-01",

    updatedAt: "2026-01-01",
  },

];