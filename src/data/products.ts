import type { Product } from "../types/product";
import byredo from "../assets/images/products/byredo.webp";
import byredoHover from "../assets/images/products/byredo1.webp";

import diptyque from "../assets/images/products/diptyque.webp";
import diptyqueHover from "../assets/images/products/diptyque1.webp";

import leLabo from "../assets/images/products/lelabo.webp";
import leLaboHover from "../assets/images/products/lelabo1.webp";

import mfkRed from "../assets/images/products/mfkred.webp";
import mfkRedHover from "../assets/images/products/mfkred1.webp";

import mfkWhite from "../assets/images/products/mfk.webp";
import mfkWhiteHover from "../assets/images/products/mfk1.webp";

import mfkBlue from "../assets/images/products/mfkblue.webp";
import mfkBlueHover from "../assets/images/products/mfkblue1.webp";
export const products: Product[] = [

   {
    id: 1,
    name: "Baccarat Rouge 540",
    slug: "maison-francis-kurkdjian-baccarat-rouge-540-red",
    brandId: 21,
    categoryId: 1,
    description:
      "An iconic fragrance with an airy, luminous character and a distinctive amber-woody signature.",
    price: 325,
    stock: 10,
    gender: "unisex",
    concentration: "EDP",
    volume: 70,
    country: "France",
    season: "winter",
    fragranceFamily: "amber",
    longevity: "10 hours",
    sillage: "strong",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
    image: mfkRed,
    hoverImage: mfkRedHover,
    isBestSeller: true,
  },

  {
    id: 2,
    name: "Baccarat Rouge 540",
    slug: "maison-francis-kurkdjian-baccarat-rouge-540-white",
    brandId: 21,
    categoryId: 1,
    description:
      "An iconic fragrance with an airy, luminous character and a distinctive amber-woody signature.",
    price: 325,
    stock: 10,
    gender: "unisex",
    concentration: "EDP",
    volume: 70,
    country: "France",
    season: "winter",
    fragranceFamily: "amber",
    longevity: "10 hours",
    sillage: "strong",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
    image: mfkWhite,
    hoverImage: mfkWhiteHover,
    isBestSeller: true,
  },

  {
    id: 3,
    name: "Oud Satin Mood",
    slug: "maison-francis-kurkdjian-oud-satin-mood",
    brandId: 21,
    categoryId: 1,
    description:
      "A rich and sensual fragrance blending oud, rose, and violet with a smooth, enveloping character.",
    price: 345,
    stock: 10,
    gender: "unisex",
    concentration: "EDP",
    volume: 70,
    country: "France",
    season: "winter",
    fragranceFamily: "woody",
    longevity: "10 hours",
    sillage: "strong",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
    image: mfkBlue,
    hoverImage: mfkBlueHover,
    isBestSeller: true,
  },
    {
    id: 4,
    name: "Lavande 31",
    slug: "le-labo-lavande-31",
    brandId: 12,
    categoryId: 1,
    description:
      "A modern interpretation of lavender with fresh, floral, and woody facets.",
    price: 220,
    stock: 10,
    gender: "unisex",
    concentration: "EDP",
    volume: 50,
    country: "United States",
    season: "spring",
    fragranceFamily: "fresh",
    longevity: "8 hours",
    sillage: "moderate",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
    image: leLabo,
    hoverImage: leLaboHover,
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Future Memories",
    slug: "byredo-future-memories",
    brandId: 5,
    categoryId: 1,
    description:
      "A refined and contemporary fragrance with an expressive character.",
    price: 250,
    stock: 10,
    gender: "unisex",
    concentration: "EDP",
    volume: 50,
    country: "Sweden",
    season: "autumn",
    fragranceFamily: "woody",
    longevity: "8 hours",
    sillage: "moderate",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
    image: byredo,
    hoverImage: byredoHover,
    isBestSeller: true,
  },

  {
    id: 6,
    name: "Philosykos",
    slug: "diptyque-philosykos",
    brandId: 11,
    categoryId: 1,
    description:
      "A distinctive fragrance inspired by the fig tree, combining green, woody, and creamy facets.",
    price: 180,
    stock: 10,
    gender: "unisex",
    concentration: "EDP",
    volume: 75,
    country: "France",
    season: "summer",
    fragranceFamily: "woody",
    longevity: "7 hours",
    sillage: "moderate",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
    image: diptyque,
    hoverImage: diptyqueHover,
    isBestSeller: true,
  },



 
];