import { useCallback, useEffect, useState } from "react";

import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  toggleWishlist,
} from "../services/wishlistService";

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<number[]>(
    () => getWishlist().map((item) => item.productId),
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setWishlistIds(
        getWishlist().map(
          (item) => item.productId,
        ),
      );
    };

    window.addEventListener(
      "storage",
      handleStorageChange,
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange,
      );
    };
  }, []);

  const isSaved = useCallback(
    (productId: number) =>
      wishlistIds.includes(productId),
    [wishlistIds],
  );

  const toggle = useCallback(
    (productId: number) => {
      const saved = toggleWishlist(productId);

      setWishlistIds((current) => {
        if (saved) {
          return current.includes(productId)
            ? current
            : [...current, productId];
        }

        return current.filter(
          (id) => id !== productId,
        );
      });

      return saved;
    },
    [],
  );

  const add = useCallback(
    (productId: number) => {
      addToWishlist(productId);

      setWishlistIds((current) =>
        current.includes(productId)
          ? current
          : [...current, productId],
      );
    },
    [],
  );

  const remove = useCallback(
    (productId: number) => {
      removeFromWishlist(productId);

      setWishlistIds((current) =>
        current.filter(
          (id) => id !== productId,
        ),
      );
    },
    [],
  );

  return {
    wishlistIds,
    isSaved,
    toggle,
    add,
    remove,
  };
}