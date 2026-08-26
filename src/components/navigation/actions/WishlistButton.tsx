import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { useWishlist } from "../../../hooks/useWishlist";

export default function WishlistButton() {
  const { wishlistIds } = useWishlist();

  const wishlistCount = wishlistIds.length;

  return (
    <Link
      to="/wishlist"
      aria-label={`Wishlist${
        wishlistCount
          ? `, ${wishlistCount} saved items`
          : ""
      }`}
      className="
        group
        relative
        flex
        items-center
        gap-2
        font-roboto
        text-[10px]
        font-medium
        uppercase
        tracking-[0.13em]
        text-text-primary
        transition-opacity
        duration-300
        hover:opacity-55
      "
    >
      <span className="relative">
        <Heart
          size={16}
          strokeWidth={1.35}
          className="
            transition-transform
            duration-500
            ease-out
            group-hover:-translate-y-[1px]
          "
        />

        {wishlistCount > 0 && (
          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              min-h-3.5
              min-w-3.5
              items-center
              justify-center
              rounded-full
              bg-text-primary
              px-1
              font-roboto
              text-[7px]
              font-medium
              leading-none
              text-background-main
            "
          >
            {wishlistCount}
          </span>
        )}
      </span>

      <span>Save</span>
    </Link>
  );
}