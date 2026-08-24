import type {
  FragranceFamily,
  Gender,
  Season,
} from "../types/fragrance";

import type { ProductFilters } from "../types/productFilters";

type ProductRouteParams = {
  gender?: string;
  fragrance?: string;
  season?: string;
  brand?: string;
  category?: string;
  subcategory?: string;
  collection?: string;
};

function getArrayParam(
  params: URLSearchParams,
  key: string,
): string[] | undefined {
  const value = params.get(key);

  if (!value) {
    return undefined;
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseProductFilters(
  searchParams: URLSearchParams,
  routeParams: ProductRouteParams = {},
): ProductFilters {
  const gender =
    routeParams.gender
      ? [routeParams.gender]
      : getArrayParam(searchParams, "gender");

  const fragrance =
    routeParams.fragrance
      ? [routeParams.fragrance]
      : getArrayParam(searchParams, "fragrance");

  const season =
    routeParams.season
      ? [routeParams.season]
      : getArrayParam(searchParams, "season");

  return {
    search:
      searchParams.get("search") ?? undefined,

    category:
      routeParams.category ??
      searchParams.get("category") ??
      undefined,

    subcategory:
      routeParams.subcategory ??
      searchParams.get("subcategory") ??
      undefined,

    brand:
      routeParams.brand ??
      searchParams.get("brand") ??
      undefined,

    gender:
      gender as Gender[] | undefined,

    fragrance:
      fragrance as FragranceFamily[] | undefined,

    season:
      season as Season[] | undefined,

    collection:
      routeParams.collection ??
      searchParams.get("collection") ??
      undefined,
  };
}