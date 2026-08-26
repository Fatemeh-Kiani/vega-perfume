import type {
  FragranceFamily,
  Gender,
  Season,
} from "../types/fragrance";

import type { ProductFilters } from "../types/productFilters";

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
): ProductFilters {
  return {
    search:
      searchParams.get("search") ??
      undefined,

    category:
      searchParams.get("category") ??
      undefined,

    subcategory:
      searchParams.get("subcategory") ??
      undefined,

    brand:
      searchParams.get("brand") ??
      undefined,

    gender:
      getArrayParam(
        searchParams,
        "gender",
      ) as Gender[] | undefined,

    fragrance:
      getArrayParam(
        searchParams,
        "fragrance",
      ) as FragranceFamily[] | undefined,

    season:
      getArrayParam(
        searchParams,
        "season",
      ) as Season[] | undefined,

    collection:
      searchParams.get("collection") ??
      undefined,
  };
}