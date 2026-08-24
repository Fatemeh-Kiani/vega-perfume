import type { Product } from "../types/product";

export function searchProducts(
  products: Product[],
  query?: string,
): Product[] {
  if (!query?.trim()) {
    return products;
  }

  const normalizedQuery =
    query.trim().toLowerCase();

  return products.filter((product) => {
    const searchableText = [
      product.name,
      product.slug,
      product.description,
      product.concentration,
      product.country,
      product.fragranceFamilies?.join(" "),
      product.gender?.join(" "),
      product.seasons?.join(" "),
      product.collections?.join(" "),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(
      normalizedQuery,
    );
  });
}