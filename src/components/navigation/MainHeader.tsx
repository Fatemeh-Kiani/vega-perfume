import { forwardRef } from "react";
import { Link } from "react-router-dom";
import AccountButton from "../navigation/actions/AccountButton";
import WishlistButton from "./actions/WishlistButton";
import CartButton from "../navigation/actions/CartButton";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";

type MainHeaderProps = {
  activeMenu: string | null;

  setActiveMenu: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  onSearch: () => void;
};

const MainHeader = forwardRef<
  HTMLDivElement,
  MainHeaderProps
>(
  (
    {
      activeMenu,
      setActiveMenu,
      onSearch,
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className="
          relative
          z-50
          bg-background-main
        "
      >
        <TopBar />

        {/* BRAND */}

        <div className="layout-container">
          <div
            className="
              grid
              h-[86px]
              grid-cols-3
              items-center
              border-b
              border-text-primary/10
            "
          >
            {/* LEFT */}

            <div />

            {/* CENTER — VEGA */}

            <Link
              to="/"
              aria-label="VEGA Home"
              className="
                flex
                justify-center
              "
            >
              <h1
                className="
                  font-notoSerif
                  text-[35px]
                  font-light
                  leading-none
                  tracking-[0.24em]
                  text-text-primary
                "
              >
                VEGA
              </h1>
            </Link>
{/* RIGHT — ACTIONS */}

<div className="flex justify-end">
  <div className="flex items-center gap-7">
    <AccountButton />
    <WishlistButton />
    <CartButton />
  </div>
</div>

          </div>
        </div>

        {/* NAVIGATION */}

        <MenuBar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          onSearch={onSearch}
        />
      </header>
    );
  },
);

MainHeader.displayName = "MainHeader";

export default MainHeader;