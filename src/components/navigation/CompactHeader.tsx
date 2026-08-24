import { motion } from "motion/react";
import {
  Heart,
  Search,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { megaMenu } from "../../data/megaMenu";
import MegaMenu from "./mega-menu/MegaMenu";

type CompactHeaderProps = {
  activeMenu: string | null;

  setActiveMenu: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  onSearch: () => void;
};

export default function CompactHeader({
  activeMenu,
  setActiveMenu,
  onSearch,
}: CompactHeaderProps) {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseLeave={() => {
        setActiveMenu(null);
      }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        bg-background-main
        font-roboto
      "
    >
      {/* ==================================================
          TOP HAIRLINE
      ================================================== */}

      <div
        className="
          h-px
          w-full
          bg-text-primary/10
        "
      />

      {/* ==================================================
          MAIN
      ================================================== */}

      <div
        className="
          layout-container
          relative
          flex
          h-[76px]
          items-center
        "
      >
        {/* ==================================================
            LEFT
        ================================================== */}

        <div
          className="
            flex
            items-center
            gap-8
          "
        >
          {/* VEGA */}

          <Link
            to="/"
            aria-label="VEGA Home"
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                font-notoSerif
                text-[20px]
                font-light
                leading-none
                tracking-[0.2em]
                text-text-primary
              "
            >
              VEGA
            </span>
          </Link>

          {/* SEARCH */}

          <button
            type="button"
            aria-label="Search"
            onClick={onSearch}
            className="
              group
              flex
              items-center
              gap-2.5
              text-text-primary/60
              transition-colors
              duration-300
              hover:text-text-primary
            "
          >
            <Search
              size={15}
              strokeWidth={1.3}
            />

            <span
              className="
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
              "
            >
              Search
            </span>
          </button>
        </div>

        {/* ==================================================
            CENTER MENU
        ================================================== */}

        <nav
          aria-label="Main navigation"
          className="
            absolute
            left-1/2
            top-1/2
            flex
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-8
          "
        >
          {megaMenu.map((item) => {
            const isActive =
              activeMenu === item.id;

            return (
              <Link
                key={item.id}
                to={item.href ?? `/products`}
                onMouseEnter={() => {
                  setActiveMenu(item.id);
                }}
                onFocus={() => {
                  setActiveMenu(item.id);
                }}
                onClick={() => {
                  setActiveMenu(null);
                }}
                aria-expanded={isActive}
                aria-haspopup="true"
                className="
                  group
                  relative
                  whitespace-nowrap
                  py-4
                  font-notoSerif
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.04em]
                  text-text-primary
                  transition-colors
                  duration-300
                  hover:text-text-primary/65
                  focus:outline-none
                "
              >
                {item.label}

                {/* UNDERLINE */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    bottom-1
                    left-1/2
                    h-px
                    -translate-x-1/2
                    bg-text-primary/70
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* ==================================================
            RIGHT ACTIONS
        ================================================== */}

        <div
          className="
            ml-auto
            flex
            items-center
            gap-7
          "
        >
          {/* WISHLIST */}

          <button
            type="button"
            aria-label="Wishlist"
            className="
              group
              flex
              items-center
              gap-2
              text-text-primary/65
              transition-colors
              duration-300
              hover:text-text-primary
            "
          >
            <Heart
              size={16}
              strokeWidth={1.25}
              className="
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />

            <span
              className="
                hidden
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.16em]
                lg:block
              "
            >
              Save
            </span>
          </button>

          {/* CART */}

          <button
            type="button"
            aria-label="Cart"
            className="
              group
              flex
              items-center
              gap-2
              text-text-primary/65
              transition-colors
              duration-300
              hover:text-text-primary
            "
          >
            <ShoppingBag
              size={16}
              strokeWidth={1.25}
              className="
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />

            <span
              className="
                hidden
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.16em]
                lg:block
              "
            >
              Cart
            </span>
          </button>
        </div>
      </div>

      {/* ==================================================
          BOTTOM HAIRLINE
      ================================================== */}

      <div
        className="
          h-px
          w-full
          bg-text-primary/10
        "
      />

      {/* ==================================================
          MEGA MENU
      ================================================== */}

      <MegaMenu
        activeMenu={activeMenu}
        onClose={() => {
          setActiveMenu(null);
        }}
      />
    </motion.header>
  );
}