import type { Product } from "./product";

export type CartItem = {
  productId: number;
  quantity: number;
};

export type CartItemWithProduct = CartItem & {
  product: Product;
};