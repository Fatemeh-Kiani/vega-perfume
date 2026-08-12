import type { SubCategory } from "../types/subCategorie";


export const subCategories: SubCategory[] = [

  // =====================
  // BODY & BATH
  // =====================

  {
    id: 1,
    name: "Body",
    slug: "body",
    categoryId: 2,
    imageId: 20,
    description: "Luxury body care products.",
  },

  {
    id: 2,
    name: "Face",
    slug: "face",
    categoryId: 2,
    imageId: 21,
    description: "Luxury face care products.",
  },

  {
    id: 3,
    name: "Hair",
    slug: "hair",
    categoryId: 2,
    imageId: 22,
    description: "Luxury hair care products.",
  },


  // Body Products

  {
    id: 4,
    name: "Hand Soap",
    slug: "hand-soap",
    categoryId: 2,
    parentId: 1,
  },

  {
    id: 5,
    name: "Body Cream",
    slug: "body-cream",
    categoryId: 2,
    parentId: 1,
  },

  {
    id: 6,
    name: "Hand Lotion",
    slug: "hand-lotion",
    categoryId: 2,
    parentId: 1,
  },


  // Face Products

  {
    id: 7,
    name: "Face Lotion",
    slug: "face-lotion",
    categoryId: 2,
    parentId: 2,
  },

  {
    id: 8,
    name: "Face Mask",
    slug: "face-mask",
    categoryId: 2,
    parentId: 2,
  },

  {
    id: 9,
    name: "Face Scrub",
    slug: "face-scrub",
    categoryId: 2,
    parentId: 2,
  },


  // Hair Products

  {
    id: 10,
    name: "Shampoo",
    slug: "shampoo",
    categoryId: 2,
    parentId: 3,
  },

  {
    id: 11,
    name: "Hair Mask",
    slug: "hair-mask",
    categoryId: 2,
    parentId: 3,
  },


  // =====================
  // HOME
  // =====================

  {
    id: 20,
    name: "Candles",
    slug: "candles",
    categoryId: 3,
    imageId: 30,
  },

  {
    id: 21,
    name: "Room Spray",
    slug: "room-spray",
    categoryId: 3,
    imageId: 31,
  },

  {
    id: 22,
    name: "Incense",
    slug: "incense",
    categoryId: 3,
  },


  // =====================
  // GIFTS
  // =====================

  {
    id: 30,
    name: "Gift Sets",
    slug: "gift-sets",
    categoryId: 4,
    imageId: 40,
  },

];