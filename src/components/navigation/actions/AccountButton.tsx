import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountButton() {
  return (
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
        text-text-primary
        transition-opacity
        duration-300
        hover:opacity-55
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

      <span>Account</span>
    </Link>
  );
}