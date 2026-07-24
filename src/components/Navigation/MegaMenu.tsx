import { menuData } from "../../data/menuData";
import { motion, AnimatePresence } from "motion/react";
import HoverLink from "../UI/HoverLink";
import { useState } from "react";

import type { MenuDataItem } from "../../data/menu";

type MegaMenuProps = {
  activeMenu: string | null;
  setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>;

};


function MegaMenu({ activeMenu, setActiveMenu, }: MegaMenuProps) {
  const [activeItem, setActiveItem] = useState<MenuDataItem | null>(null);

  if (!activeMenu) return null;

  const items = menuData[activeMenu as keyof typeof menuData];

  return (

    <motion.div
      onMouseLeave={() => setActiveMenu(null)}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="
        absolute
        top-full
        left-0
        mt-6
        w-full
        bg-white
        shadow-2xl
        text-neutral-700
      "

    >
     
<div className="w-full" >  
  {/* Header */}

       <div
  className="
    relative
    w-screen
    left-1/2
    -translate-x-1/2
    border-b
    border-neutral-200
  "
>
          <div
            className="
               h-16
               flex
               items-center
               px-10">
          <p className="
               text-[13px]
               uppercase
               tracking-[0.35em]
               text-neutral-400" >
              {activeMenu}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-[40%_60%] min-h-[430px]  ">

          {/* Left */}
          <div className="border-r border-neutral-200   ">

            <div className="  grid grid-cols-2 gap-y-6 gap-x-16 w-fit ml-10 mt-6 ">

              {items.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  
                >
                  <HoverLink
                    className="
                 
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-neutral-600
                      hover:text-neutral-900

                    "
                  >
                    {item.name}
                  </HoverLink>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}
          <div className="flex items-center justify-center p-10">

            <div className="w-[620px] h-[430px]">

              <AnimatePresence mode="wait">

                {activeItem?.image && (
                  <motion.img
                    key={activeItem.image}
                    src={activeItem.image}
                    alt={activeItem.name}
                    initial={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.18,
                      ease: "easeInOut",
                    }}
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-none
                    "
                  />
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </motion.div>

  );
}

export default MegaMenu;