import { products } from "../data/products";
import type { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  return [...products];
}

export async function getProductById(
  id: number
): Promise<Product | undefined> {
  return products.find(
    (product) => product.id === id
  );
}