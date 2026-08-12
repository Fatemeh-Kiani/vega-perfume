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

const MainHeader = forwardRef<HTMLDivElement, MainHeaderProps>(
  ({ activeMenu, setActiveMenu }, ref) => {
  return (
    <div ref={ref} className="">

      <TopBar />

      <div className="layout-container">

        <div
          className="
            relative
            flex
            h-26
            items-center
            justify-center
          "
        >
          <h1
            className="
              font-notoSerif
              text-3xl
              tracking-[0.18em]
            "
          >
            VEGA
          </h1>

          <div className="absolute right-0">
            <HeaderActions />
          </div>
        </div>

        <MenuBar
  activeMenu={activeMenu}
  setActiveMenu={setActiveMenu}
/>

      </div>

    </div>
  );
});

export default MainHeader;