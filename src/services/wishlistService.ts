import type { WishlistItem } from "../types/wishlist";

const STORAGE_KEY = "vega-wishlist";

function readWishlist(): WishlistItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed: unknown = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is WishlistItem =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as WishlistItem).productId === "number" &&
        typeof (item as WishlistItem).addedAt === "string",
    );
  } catch {
    return [];
  }
}

function writeWishlist(items: WishlistItem[]): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items),
  );
}

export function getWishlist(): WishlistItem[] {
  return readWishlist();
}

export function isProductInWishlist(
  productId: number,
): boolean {
  return readWishlist().some(
    (item) => item.productId === productId,
  );
}

export function addToWishlist(
  productId: number,
): void {
  const wishlist = readWishlist();

  if (
    wishlist.some(
      (item) => item.productId === productId,
    )
  ) {
    return;
  }

  wishlist.push({
    productId,
    addedAt: new Date().toISOString(),
  });

  writeWishlist(wishlist);
}

export function removeFromWishlist(
  productId: number,
): void {
  const wishlist = readWishlist().filter(
    (item) => item.productId !== productId,
  );

  writeWishlist(wishlist);
}

export function toggleWishlist(
  productId: number,
): boolean {
  const wishlist = readWishlist();

  const exists = wishlist.some(
    (item) => item.productId === productId,
  );

  if (exists) {
    removeFromWishlist(productId);
    return false;
  }

  addToWishlist(productId);
  return true;
}