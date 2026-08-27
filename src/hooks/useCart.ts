import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  addToCart,
  clearCart,
  getCart,

  removeFromCart,
  updateCartQuantity,
} from "../services/cartService";

import type { CartItem } from "../types/cart";

export function useCart() {
  const [cartItems, setCartItems] =
    useState<CartItem[]>(() =>
      getCart(),
    );

  const refreshCart =
    useCallback(() => {
      setCartItems(getCart());
    }, []);

  useEffect(() => {
    window.addEventListener(
      "cart-updated",
      refreshCart,
    );

    return () => {
      window.removeEventListener(
        "cart-updated",
        refreshCart,
      );
    };
  }, [refreshCart]);

  const handleAddToCart =
    useCallback(
      (productId: number) => {
        addToCart(productId);
        refreshCart();
      },
      [refreshCart],
    );

  const handleRemoveFromCart =
    useCallback(
      (productId: number) => {
        removeFromCart(productId);
        refreshCart();
      },
      [refreshCart],
    );

  const handleUpdateQuantity =
    useCallback(
      (
        productId: number,
        quantity: number,
      ) => {
        updateCartQuantity(
          productId,
          quantity,
        );

        refreshCart();
      },
      [refreshCart],
    );

  const handleClearCart =
    useCallback(() => {
      clearCart();
      refreshCart();
    }, [refreshCart]);

  const itemCount =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0,
    );

  return {
    cartItems,
    itemCount,
    addToCart: handleAddToCart,
    removeFromCart:
      handleRemoveFromCart,
    updateQuantity:
      handleUpdateQuantity,
    clearCart: handleClearCart,
  };
}