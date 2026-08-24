import type { Collection } from "../types/collection";
import type { Product } from "../types/product";
import type { ProductFilters } from "../types/productFilters";

import { brands } from "../data/brands";
import { categories } from "../data/categories";
import { subCategories } from "../data/subCategories";

export function filterProducts(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  /*
   * ==================================================
   * RESOLVE CATEGORY
   * ==================================================
   */

  const categoryId = filters.category
    ? categories.find(
        (category) =>
          category.slug === filters.category,
      )?.id
    : undefined;

  /*
   * ==================================================
   * RESOLVE BRAND
   * ==================================================
   */

  const brandId = filters.brand
    ? brands.find(
        (brand) =>
          brand.slug === filters.brand,
      )?.id
    : undefined;

  /*
   * ==================================================
   * RESOLVE SUBCATEGORY
   * ==================================================
   */

  const subCategoryIds = filters.subcategory
    ? subCategories
        .filter(
          (subCategory) =>
            subCategory.slug ===
            filters.subcategory,
        )
        .map(
          (subCategory) =>
            subCategory.id,
        )
    : [];

  /*
   * ==================================================
   * FILTER PRODUCTS
   * ==================================================
   */

  return products.filter((product) => {
    /*
     * --------------------------------------------------
     * CATEGORY
     * --------------------------------------------------
     *
     * No category selected:
     * → show every category
     *
     * Category selected:
     * → show only that category
     */

    if (
      categoryId !== undefined &&
      product.categoryId !== categoryId
    ) {
      return false;
    }

    /*
     * --------------------------------------------------
     * SUBCATEGORY
     * --------------------------------------------------
     */

    if (
      subCategoryIds.length > 0 &&
      !subCategoryIds.includes(
        product.subCategoryId ?? -1,
      )
    ) {
      return false;
    }

    /*
     * --------------------------------------------------
     * BRAND
     * --------------------------------------------------
     */

    if (
      brandId !== undefined &&
      product.brandId !== brandId
    ) {
      return false;
    }

    /*
     * --------------------------------------------------
     * GENDER
     * --------------------------------------------------
     */

    if (
      filters.gender?.length &&
      !filters.gender.some((gender) =>
        product.gender?.includes(
          gender,
        ),
      )
    ) {
      return false;
    }

    /*
     * --------------------------------------------------
     * FRAGRANCE FAMILY
     * --------------------------------------------------
     */

    if (
      filters.fragrance?.length &&
      !filters.fragrance.some(
        (family) =>
          product.fragranceFamilies?.includes(
            family,
          ),
      )
    ) {
      return false;
    }

    /*
     * --------------------------------------------------
     * SEASON
     * --------------------------------------------------
     */

    if (
      filters.season?.length &&
      !filters.season.some(
        (season) =>
          product.seasons?.includes(
            season,
          ),
      )
    ) {
      return false;
    }

    /*
     * --------------------------------------------------
     * COLLECTION
     * --------------------------------------------------
     */

    if (
      filters.collection &&
      !product.collections?.includes(
        filters.collection as Collection,
      )
    ) {
      return false;
    }

    return true;
  });
}