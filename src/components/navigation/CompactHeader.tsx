import { motion } from "motion/react";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { megaMenu } from "../../data/megaMenu";
import MegaMenu from "./mega-menu/MegaMenu";
type CompactHeaderProps = {
  activeMenu: string | null;

  setActiveMenu: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};
export default function CompactHeader({
  activeMenu,
  setActiveMenu,
}: CompactHeaderProps) {
  return (
    <motion.header
  initial={{
    opacity: 0,
    y: -20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  className="
  font-roboto
    fixed
    top-6
    left-0
    right-0
    z-50
  "
>
      <div
        className="
          layout-container
          flex
          h-6
          items-center
        "
      >

        {/* Logo + Search */}

        <div
          className="
            flex
            items-center
            gap-8
          "
        >
          <h2
            className="
              font-notoSerif
              text-2xl
              tracking-[0.16em]
            "
          >
            VEGA
          </h2>


          <button
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-px
                w-20
                bg-text-primary
              "
            />

            <Search size={17} />
          </button>

        </div>


        {/* Menu */}

        <nav
          className="
            absolute
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-8
          "
        >
          {megaMenu.map((item) => (
            <button
              key={item.id}
              onMouseEnter={() => setActiveMenu(item.id)}
onFocus={() => setActiveMenu(item.id)}
              className="
             group
             relative
             text-sm
             tracking-[0.03em]
             transition-colors
             duration-300
             hover:text-text-primary"
            >
              {item.label}
              <span
  className="
    absolute
    -bottom-1
    left-1/2
     h-[2px]
    w-0
    bg-text-primary
    transition-all
    duration-300
    group-hover:left-0
    group-hover:w-full
  "
/>
            </button>
          ))}
        </nav>


        {/* Actions */}

        <div
          className="
            ml-auto
            flex
            items-center
            gap-6
          "
        >

          <button aria-label="Wishlist">
            <Heart size={18} />
          </button>

          <button aria-label="Cart">
            <ShoppingBag size={18} />
          </button>

        </div>

      </div>
  <MegaMenu
    activeMenu={activeMenu}
    onClose={() => setActiveMenu(null)}
  />

</motion.header>  );
}