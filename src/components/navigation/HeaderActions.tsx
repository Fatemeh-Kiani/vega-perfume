import {
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
} from "lucide-react";

const actions = [
  {
    id: "account",
    label: "Account",
    icon: User,
  },
  {
    id: "save",
    label: "Save",
    icon: Heart,
  },
  {
    id: "cart",
    label: "Cart",
    icon: ShoppingBag,
  },
];

export default function HeaderActions() {
  return (
    <div
      className="
        flex
        items-center
        gap-7
      "
    >
      {/* ==================================================
          ACCOUNT / SAVE / CART
      ================================================== */}

      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.id}
            type="button"
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
            <Icon
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
              {action.label}
            </span>
          </button>
        );
      })}

      {/* ==================================================
          LANGUAGE
      ================================================== */}

      <button
        type="button"
        className="
          group
          flex
          items-center
          gap-1.5
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
        <span>EN</span>

        <ChevronDown
          size={13}
          strokeWidth={1.35}
          className="
            transition-transform
            duration-500
            ease-out
            group-hover:translate-y-[1px]
          "
        />
      </button>
    </div>
  );
}