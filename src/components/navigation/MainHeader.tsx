import { forwardRef } from "react";

import TopBar from "./TopBar";
import HeaderActions from "./HeaderActions";
import MenuBar from "./MenuBar";

type MainHeaderProps = {
  activeMenu: string | null;
  setActiveMenu: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};

const MainHeader = forwardRef<
  HTMLDivElement,
  MainHeaderProps
>(({ activeMenu, setActiveMenu }, ref) => {
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

  {/* فقط Brand داخل layout-container */}
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
      {/* LEFT — EMPTY */}
      <div />

      {/* CENTER */}
      <a
        href="/"
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
      </a>

      {/* RIGHT */}
      <div className="flex justify-end">
        <HeaderActions />
      </div>
    </div>
  </div>

  {/* MenuBar دیگر داخل layout-container نیست */}
  <MenuBar
    activeMenu={activeMenu}
    setActiveMenu={setActiveMenu}
  />
</header>
   
  );
});

MainHeader.displayName =
  "MainHeader";

export default MainHeader;