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

    brandId: 17,
    categoryId: 1,
    subCategoryId: 42,

    description:
      "An iconic fragrance with an airy, luminous character and a distinctive amber-woody signature.",

    price: 325,
    currency: "USD",
    stock: 10,

    images: [
      {
        id: 1,
        url: mfkRed,
        alt: "Maison Francis Kurkdjian Baccarat Rouge 540",
      },
      {
        id: 2,
        url: mfkRedHover,
        alt: "Maison Francis Kurkdjian Baccarat Rouge 540",
      },
    ],

    gender: ["unisex"],

    concentration: "EDP",
    volume: 70,
    country: "France",

    seasons: ["winter"],

    fragranceFamilies: ["amber"],

    longevity: "10 hours",
    sillage: "strong",

    collections: ["best-sellers"],
    
     createdAt: "2026-01-01",
     updatedAt: "2026-01-01",
  },

  {
    id: 2,
    name: "Baccarat Rouge 540",
    slug: "maison-francis-kurkdjian-baccarat-rouge-540-white",

    brandId: 17,
    categoryId: 1,
    subCategoryId: 42,

    description:
      "An iconic fragrance with an airy, luminous character and a distinctive amber-woody signature.",

    price: 325,
    currency: "USD",
    stock: 10,

    images: [
      {
        id: 201,
        url: mfkWhite,
        alt: "Maison Francis Kurkdjian Baccarat Rouge 540",
      },
      {
        id: 202,
        url: mfkWhiteHover,
        alt: "Maison Francis Kurkdjian Baccarat Rouge 540",
      },
    ],

    gender: ["unisex"],

    concentration: "EDP",
    volume: 70,
    country: "France",

    seasons: ["winter"],

    fragranceFamilies: ["amber"],

    longevity: "10 hours",
    sillage: "strong",

    collections: ["best-sellers"],

         createdAt: "2026-01-01",
         updatedAt: "2026-01-01",
  },

  {
    id: 3,
    name: "Oud Satin Mood",
    slug: "maison-francis-kurkdjian-oud-satin-mood",

    brandId: 17,
    categoryId: 1,
    subCategoryId: 42,

    description:
      "A rich and sensual fragrance blending oud, rose, and violet with a smooth, enveloping character.",

    price: 345,
    currency: "USD",
    stock: 10,

    images: [
      {
        id: 301,
        url: mfkBlue,
        alt: "Maison Francis Kurkdjian Oud Satin Mood",
      },
      {
        id: 302,
        url: mfkBlueHover,
        alt: "Maison Francis Kurkdjian Oud Satin Mood",
      },
    ],

    gender: ["unisex"],

    concentration: "EDP",
    volume: 70,
    country: "France",

    seasons: ["winter"],

    fragranceFamilies: ["woody"],

    longevity: "10 hours",
    sillage: "strong",

    collections: ["best-sellers"],

         createdAt: "2026-01-01",
         updatedAt: "2026-01-01",
  },

  {
    id: 4,
    name: "Lavande 31",
    slug: "le-labo-lavande-31",

    brandId: 9,
    categoryId: 1,
    subCategoryId: 42,

    description:
      "A modern interpretation of lavender with fresh, floral, and woody facets.",

    price: 220,
    currency: "USD",
    stock: 10,

    images: [
      {
        id: 401,
        url: leLabo,
        alt: "Le Labo Lavande 31",
      },
      {
        id: 402,
        url: leLaboHover,
        alt: "Le Labo Lavande 31",
      },
    ],

    gender: ["unisex"],

    concentration: "EDP",
    volume: 50,
    country: "United States",

    seasons: ["spring"],

    fragranceFamilies: ["fresh"],

    longevity: "8 hours",
    sillage: "moderate",

    collections: ["best-sellers"],

       createdAt: "2026-01-01",
       updatedAt: "2026-01-01",
  },

  {
    id: 5,
    name: "Future Memories",
    slug: "byredo-future-memories",

    brandId: 4,
    categoryId: 1,
    subCategoryId: 42,

    description:
      "A refined and contemporary fragrance with an expressive character.",

    price: 250,
    currency: "USD",
    stock: 10,

    images: [
      {
        id: 501,
        url: byredo,
        alt: "Byredo Future Memories",
      },
      {
        id: 502,
        url: byredoHover,
        alt: "Byredo Future Memories",
      },
    ],

    gender: ["unisex"],

    concentration: "EDP",
    volume: 50,
    country: "Sweden",

    seasons: ["autumn"],

    fragranceFamilies: ["woody"],

    longevity: "8 hours",
    sillage: "moderate",

    collections: ["best-sellers"],

     createdAt: "2026-01-01",
     updatedAt: "2026-01-01",
  },

  {
    id: 6,
    name: "Philosykos",
    slug: "diptyque-philosykos",

    brandId: 8,
    categoryId: 1,
    subCategoryId: 42,

    description:
      "A distinctive fragrance inspired by the fig tree, combining green, woody, and creamy facets.",

    price: 180,
    currency: "USD",
    stock: 10,

    images: [
      {
        id: 601,
        url: diptyque,
        alt: "Diptyque Philosykos",
      },
      {
        id: 602,
        url: diptyqueHover,
        alt: "Diptyque Philosykos",
      },
    ],

    gender: ["unisex"],

    concentration: "EDP",
    volume: 75,
    country: "France",

    seasons: ["summer"],

    fragranceFamilies: ["woody"],

    longevity: "7 hours",
    sillage: "moderate",

    collections: ["best-sellers"],

     createdAt: "2026-01-01",
     updatedAt: "2026-01-01",
  },
];