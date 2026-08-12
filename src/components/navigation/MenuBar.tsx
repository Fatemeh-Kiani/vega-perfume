import { Search } from "lucide-react";
import { megaMenu } from "../../data/megaMenu";
import MegaMenu from "./mega-menu/MegaMenu";


type MenuBarProps = {
  activeMenu: string | null;
  setActiveMenu: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};

export default function MenuBar({
  activeMenu,
  setActiveMenu,
}: MenuBarProps) {
  return (
    <nav>
      <div
        className="
          relative
          flex
          h-6
          items-center
         
        "
      >

        {/* Menu Center */}

        <div
          className="
            absolute
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-15
            font-roboto
          "
        >
          {megaMenu.map((item) => (
            <button
              key={item.id}
              className="
              group
              relative
              font-medium
                text-[15px]
                transition-colors
                duration-300
               
              "
              onMouseEnter={() => setActiveMenu(item.id)}
              onFocus={() => setActiveMenu(item.id)}
            >
              {item.label}
              <span
  className="
    absolute
    -bottom-0
    left-1/2
    h-[2px]
    w-0
    -translate-x-1/2
    bg-text-primary
    transition-all
    duration-300
    group-hover:w-full
  "
/>
            </button>
          ))}
        </div>


        {/* Search Right */}

        <button
          className="
            ml-auto
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              h-px
              w-28
              bg-text-primary
            "
          />

          <Search size={18} />

        </button>

      </div>
      <MegaMenu
  activeMenu={activeMenu}
  onClose={() => setActiveMenu(null)}
/>
    </nav>
  );
}