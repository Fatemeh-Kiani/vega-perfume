import { Heart } from "lucide-react";

import { useWishlist } from "../../hooks/useWishlist";

import type {
  ProductWishlistButtonProps,
} from "../../types/wishlist";

export default function ProductWishlistButton({
  productId,
  productName,
  className = "",
}: ProductWishlistButtonProps) {
  const { isSaved, toggle } = useWishlist();

  const saved = isSaved(productId);

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();
    event.stopPropagation();

    toggle(productId);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        saved
          ? `Remove ${productName} from saved`
          : `Save ${productName}`
      }
      aria-pressed={saved}
      className={`
        group
        absolute
        right-3
        top-3
        z-20
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        border
        border-border/20
        bg-background-main
        text-text-primary
        transition-all
        duration-300
        active:scale-90
        md:right-4
        md:top-4
        md:translate-y-[-6px]
        md:opacity-0
        md:group-hover:translate-y-0
        md:group-hover:opacity-100
        ${className}
      `}
    >
      <Heart
        size={15}
        strokeWidth={1.2}
        className={
          saved
            ? "fill-text-primary text-text-primary"
            : "text-text-primary"
        }
      />
    </button>
  );
}