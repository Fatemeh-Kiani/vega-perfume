import { categories } from "../data/categories";

import type { Category } from "../types/category";

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(
  slug: string
): Category | undefined {
  return categories.find(
    (category) => category.slug === slug
  );
}

export function getCategoryById(
  id: number
): Category | undefined {
  return categories.find(
    (category) => category.id === id
  );
}