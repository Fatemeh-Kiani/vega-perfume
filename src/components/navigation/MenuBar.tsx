

import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { megaMenu } from "../../data/megaMenu";
import MegaMenu from "./mega-menu/MegaMenu";

type MenuBarProps = {
  activeMenu: string | null;

  setActiveMenu: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  onSearch: () => void;
};

export default function MenuBar({
  activeMenu,
  setActiveMenu,
  onSearch,
}: MenuBarProps) {
  return (
    <nav
      className="
        relative
        z-50
      "
      aria-label="Main navigation"
      onMouseLeave={() => {
        setActiveMenu(null);
      }}
    >
      <div
        className="
        layout-container
          grid
          h-[62px]
          grid-cols-[1fr_auto_1fr]
          items-center
        "
      >
        {/* LEFT — EMPTY */}

        <div />

        {/* ==================================================
            MENU
        ================================================== */}

        <div
          className="
            flex
            items-center
            gap-10
          "
        >
          {megaMenu.map((item) => {
            const isActive =
              activeMenu === item.id;

            return (
<Link
  key={item.id}
  to={item.href ?? `/${item.id}`}
  onMouseEnter={() =>
    setActiveMenu(item.id)
  }
  onFocus={() =>
    setActiveMenu(item.id)
  }
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

  <span
    className="
      pointer-events-none
      absolute
      bottom-1
      left-1/2
      h-px
      w-0
      -translate-x-1/2
      bg-text-primary/80
      transition-all
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:w-full
    "
  />
</Link>
             
            );
          })}
        </div>

        {/* ==================================================
            SEARCH
        ================================================== */}

        <div
          className="
            flex
            justify-end
            
          "
        >
          <button
            type="button"
            aria-label="Search"
            onClick={onSearch}
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                font-roboto
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-text-primary
                transition-opacity
                duration-300
                group-hover:opacity-55
              "
            >
              Search
            </span>

            <span
              className="
                h-px
                w-8
                bg-text-primary/50
                transition-all
                duration-500
                group-hover:w-16
                group-hover:bg-text-primary
              "
            />

            <Search
              size={17}
              strokeWidth={1.4}
              className="
                text-text-primary
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </button>
        </div>
      </div>

      {/* ==================================================
          MEGA MENU
      ================================================== */}

      <MegaMenu
        activeMenu={activeMenu}
        onClose={() =>
          setActiveMenu(null)
        }
      />
    </nav>
  );
}
