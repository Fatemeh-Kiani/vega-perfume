import type { CartItem } from "../types/cart";

const CART_KEY = "vega-cart";

export function getCart(): CartItem[] {
  try {
    const storedCart =
      localStorage.getItem(CART_KEY);

    if (!storedCart) {
      return [];
    }

    const parsedCart =
      JSON.parse(storedCart);

    if (!Array.isArray(parsedCart)) {
      return [];
    }

    return parsedCart;
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cart),
  );
}

export function addToCart(
  productId: number,
) {
  const cart = getCart();

  const existingItem =
    cart.find(
      (item) =>
        item.productId === productId,
    );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
  }

  saveCart(cart);

  window.dispatchEvent(
    new Event("cart-updated"),
  );
}

export function removeFromCart(
  productId: number,
) {
  const cart = getCart();

  const nextCart =
    cart.filter(
      (item) =>
        item.productId !== productId,
    );

  saveCart(nextCart);

  window.dispatchEvent(
    new Event("cart-updated"),
  );
}

export function updateCartQuantity(
  productId: number,
  quantity: number,
) {
  const cart = getCart();

  const item = cart.find(
    (item) =>
      item.productId === productId,
  );

  if (!item) return;

  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  item.quantity = quantity;

  saveCart(cart);

  window.dispatchEvent(
    new Event("cart-updated"),
  );
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);

  window.dispatchEvent(
    new Event("cart-updated"),
  );
}

export function getCartCount(): number {
  return getCart().reduce(
    (total, item) =>
      total + item.quantity,
    0,
  );
}