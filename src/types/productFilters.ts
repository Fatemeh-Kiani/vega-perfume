import type {
  FragranceFamily,
  Gender,
  Season,
} from "./fragrance";

export interface ProductFilters {
    search?: string;
  category?: string;

  subcategory?: string;

  brand?: string;

  gender?: Gender[];

  fragrance?: FragranceFamily[];

  season?: Season[];

  collection?: string;
}