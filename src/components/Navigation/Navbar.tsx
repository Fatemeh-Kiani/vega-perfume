import logo from "../../assets/images/logo/vega-logo.svg"
import { menuItems } from "../../data/menu";
import { AnimatePresence } from "motion/react";
import HoverLink from "../UI/HoverLink";
import MegaMenu from "./MegaMenu";
import { useState } from "react";
import HeaderActions from "../Header/HeaderActions";
function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (

    <nav
  className="absolute inset-x-0 top-0 z-50 text-white"

>
  <div className="mx-auto max-w-[1200px]">

    {/* Logo */}
    <div className="flex justify-center pt-6">
      <img
        src={logo}
        alt="VEGA"
        className="w-12 h-12"
      />
    </div>

    {/* Navigation */}
    <div className="relative w-full mt-8 ">

      <div className="flex items-center justify-center">

        <ul className="flex gap-8 text-xs font-light tracking-[0.35em]">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onPointerEnter={() => setActiveMenu(item.title)}
            >
              <HoverLink className="text-xs tracking-[0.35em]">
                {item.title}
              </HoverLink>
            </li>
          ))}
        </ul>

      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <HeaderActions />
      </div>

    </div>

    <AnimatePresence mode="wait">
      {activeMenu && (
        <MegaMenu activeMenu={activeMenu}
        setActiveMenu={setActiveMenu} />
      )}
    </AnimatePresence>

  </div>
</nav>
  )}
  export default Navbar