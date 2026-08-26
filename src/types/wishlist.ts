export type WishlistItem = {
  productId: number;
  addedAt: string;
};

export type ProductWishlistButtonProps = {
  productId: number;
  productName: string;
  className?: string;
};