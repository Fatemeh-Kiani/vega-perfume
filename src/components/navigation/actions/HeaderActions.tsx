import {
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useWishlist } from "../../../hooks/useWishlist";

type HeaderActionsProps = {
  variant?: "desktop" | "mobile";

};

export default function HeaderActions({
  variant = "desktop",

}: HeaderActionsProps) {
  const { wishlistIds } = useWishlist();
const { itemCount } = useCart();
  const wishlistCount = wishlistIds.length;

  /* ==================================================
     MOBILE
  ================================================== */

  if (variant === "mobile") {
    return (
      <div
        className="
          flex
          items-center
          gap-3
        "
      >

{/* ACCOUNT */}

<Link
  to="/account"
  aria-label="Account"
className="
  group
  flex
  items-center
  justify-center
  text-text-secondary
  transition-opacity
  duration-300
  hover:text-text-primary
  active:scale-[0.90]
"
>
  <User
    size={17}
    strokeWidth={1.25}
  />
</Link>
        {/* WISHLIST */}

        <Link
          to="/wishlist"
          aria-label={`Wishlist${
            wishlistCount
              ? `, ${wishlistCount} saved items`
              : ""
          }`}
          className="
            relative
            flex
            items-center
            justify-center
            text-text-secondary
            transition-colors
            duration-300
            hover:text-text-primary
            active:scale-[0.90]
          "
        >
          <Heart
            size={17}
            strokeWidth={1.25}
          />

          {wishlistCount > 0 && (
            <span
              className="
                absolute
                -right-[7px]
                -top-[7px]
                flex
                min-h-[13px]
                min-w-[13px]
                items-center
                justify-center
                rounded-full
                bg-text-primary
                px-[3px]
                font-roboto
                text-[7px]
                font-medium
                leading-none
                text-background-main
              "
            >
              {wishlistCount > 99
                ? "99+"
                : wishlistCount}
            </span>
          )}
        </Link>

        {/* CART */}
<Link
  to="/cart"
  aria-label={`Cart${
    itemCount
      ? `, ${itemCount} items`
      : ""
  }`}
  className="
    group
    relative
    flex
    items-center
    justify-center
    text-text-secondary
    transition-colors
    duration-300
    hover:text-text-primary
    active:scale-[0.90]
  "
>
  <ShoppingBag
    size={17}
    strokeWidth={1.25}
  />

  {itemCount > 0 && (
    <span
      className="
        absolute
        -right-[7px]
        -top-[7px]
        flex
        min-h-[13px]
        min-w-[13px]
        items-center
        justify-center
        rounded-full
        bg-text-primary
        px-[3px]
        font-roboto
        text-[7px]
        font-medium
        leading-none
        text-background-main
      "
    >
      {itemCount > 99
        ? "99+"
        : itemCount}
    </span>
  )}
</Link>
      </div>
    );
  }

  /* ==================================================
     DESKTOP
  ================================================== */

  return (
    <div
      className="
        flex
        items-center
        gap-7
      "
    >
      {/* ACCOUNT */}

      <Link
        to="/account"
        aria-label="Account"
className="
  group
  flex
  items-center
  gap-2
  font-roboto
  text-[10px]
  font-medium
  uppercase
  tracking-[0.13em]
  text-text-secondary
  transition-colors
  duration-300
  hover:text-text-primary
"
      >
        <User
          size={16}
          strokeWidth={1.35}
          className="
            transition-transform
            duration-500
            ease-out
            group-hover:-translate-y-[1px]
          "
        />

        <span>
          Account
        </span>
      </Link>

      {/* WISHLIST */}

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
          text-text-secondary
          transition-colors
          duration-300
          hover:text-text-primary
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
              {wishlistCount > 99
                ? "99+"
                : wishlistCount}
            </span>
          )}
        </span>

        <span>
          Save
        </span>
      </Link>

      {/* CART */}

<Link
  to="/cart"
  aria-label={`Cart${
    itemCount
      ? `, ${itemCount} items`
      : ""
  }`}
  className="
    group
    flex
    items-center
    gap-2
    font-roboto
    text-[10px]
    font-medium
    uppercase
    tracking-[0.13em]
    text-text-secondary
    transition-colors
    duration-300
    hover:text-text-primary
  "
>
  <span className="relative">
    <ShoppingBag
      size={16}
      strokeWidth={1.35}
      className="
        transition-transform
        duration-500
        ease-out
        group-hover:-translate-y-[1px]
      "
    />

    {itemCount > 0 && (
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
        {itemCount > 99
          ? "99+"
          : itemCount}
      </span>
    )}
  </span>

  <span>
    Cart
  </span>
</Link>
    </div>
  );
}