import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartButton() {
  return (
    <Link
      to="/cart"
      aria-label="Cart"
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
        text-text-primary
        transition-opacity
        duration-300
        hover:opacity-55
      "
    >
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

      <span>Cart</span>
    </Link>
  );
}