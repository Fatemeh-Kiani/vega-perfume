import type { Collection } from "./collection";
import type {
  FragranceFamily,
  Gender,
  Season,
} from "./fragrance";

export type ProductImage = {
  id: number;
  url: string;
  alt?: string;
};

export type ProductNotes = {
  top?: string[];
  heart?: string[];
  base?: string[];
};

export interface Product {
  id: number;

  name: string;

  slug: string;

  brandId: number;

  categoryId: number;

  subCategoryId?: number;

  description?: string;

  price: number;

  currency: "USD";

  stock?: number;

  images: ProductImage[];

  gender?: Gender[];

  concentration?: string;

  volume?: number;

  country?: string;

  seasons?: Season[];

  fragranceFamilies?: FragranceFamily[];

  longevity?: string;

  sillage?: string;

  collections?: Collection[];

  rating?: number;

  reviewCount?: number;

  createdAt?: string;

  updatedAt?: string;
}