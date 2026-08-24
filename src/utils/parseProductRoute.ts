import type {
  FragranceFamily,
  Gender,
  Season,
} from "../types/fragrance";

import type { ProductFilters } from "../types/productFilters";

type ProductRouteParams = {
  filterType?: string;
  filterValue?: string;
};

export function parseProductRoute(
  params: ProductRouteParams,
): ProductFilters {
  const { filterType, filterValue } = params;

  if (!filterType || !filterValue) {
    return {};
  }

  switch (filterType) {
    case "fragrance":
      return {
        fragrance: [filterValue as FragranceFamily],
      };

    case "gender":
      return {
        gender: [filterValue as Gender],
      };

    case "season":
      return {
        season: [filterValue as Season],
      };

    case "brand":
      return {
        brand: filterValue,
      };

    case "category":
      return {
        category: filterValue,
      };

    case "subcategory":
      return {
        subcategory: filterValue,
      };

    case "collection":
      return {
        collection: filterValue,
      };

    default:
      return {};
  }
}