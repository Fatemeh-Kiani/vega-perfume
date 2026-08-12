
import {
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
} from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-6  font-roboto">

      <button
        className="
          flex
          items-center
          gap-1
          text-sm
         
          
        "
      >
        <User size={18} />
        <span>Account</span>
      </button>

      <button
        className="
          flex
          items-center
          gap-1
          text-sm
         
          
        "
      >
        <Heart size={18} />
        <span>Save</span>
      </button>

      <button
        className="
          flex
          items-center
          gap-2
          text-sm
         
          
        "
      >
        <ShoppingBag size={18} />
        <span>Cart</span>
      </button>

      <button
        className="
          flex
          items-center
          gap-1
          text-sm
         
          
        "
      >
        <span>EN</span>

        <ChevronDown size={16} />
      </button>

    </div>
  );
}