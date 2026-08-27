import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import HeaderActions from "../navigation/actions/HeaderActions";
import { Link } from "react-router-dom";
import { megaMenu } from "../../data/megaMenu";

type MobileHeaderProps = {
  isOpen: boolean;

  setIsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  onSearch: () => void;
};

type MegaMenuItem = {
  label: string;
  href: string;
  image?: string;
};

type MegaMenuSection = {
  title: string;
  image?: string;
  imageRatio?: "square" | "landscape";
  items: MegaMenuItem[];
};

type MegaMenuData = {
  id: string;
  label: string;
  href?: string;
  sections?: MegaMenuSection[];
};

type MobileSection = MegaMenuData;

export default function MobileHeader({
  isOpen,
  setIsOpen,
  onSearch,
}: MobileHeaderProps) {


  const [activeSection, setActiveSection] =
    useState<MobileSection | null>(null);

  /*
   * =====================================================
   * MENU ACTIONS
   * =====================================================
   */

  const openMenu = () => {
    setActiveSection(null);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setActiveSection(null);
    setIsOpen(false);
  };

  const openSection = (
    menuItem: MobileSection
  ) => {
    setActiveSection(menuItem);
  };

  const goBack = () => {
    setActiveSection(null);
  };

  /*
   * =====================================================
   * GET IMAGES
   * =====================================================
   *
   * Uses the exact same image data as desktop MegaMenu.
   */

  const getSectionImages = (
    section: MobileSection
  ): MegaMenuItem[] => {
    const result: MegaMenuItem[] = [];

    section.sections?.forEach(
      (menuSection) => {
        /*
         * Section-level image
         */

        if (menuSection.image) {
          result.push({
            label: menuSection.title,
            href:
              menuSection.items?.[0]?.href ??
              "#",
            image: menuSection.image,
          });
        }

        /*
         * Item-level images
         */

        menuSection.items?.forEach(
          (item) => {
            if (!item.image) return;

            result.push(item);
          }
        );
      }
    );

    /*
     * Remove duplicate images.
     */

    return result.filter(
      (item, index, array) =>
        item.image &&
        array.findIndex(
          (other) =>
            other.image === item.image
        ) === index
    );
  };

  /*
   * =====================================================
   * MAIN MENU
   * =====================================================
   */

  const renderMainMenu = () => {
    return (
      <motion.div
        key="main-menu"
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          min-h-[calc(100dvh-65px)]
          px-5
          pb-8
          pt-8
        "
      >
        <nav
          aria-label="Mobile navigation"
          className="
            flex
            flex-col
          "
        >
          {megaMenu.map(
            (menuItem) => {
              return (
               <button
  key={menuItem.id}
  type="button"
  onClick={() =>
    openSection(
      menuItem as MobileSection
    )
  }
  className="
    group
    flex
    w-full
    origin-left
    items-center
    justify-between
    border-b
    border-text-primary/10
    py-[15px]
    text-left
    transition-transform
    duration-150
    active:scale-[0.97]
  "
>
<span
  className="
    font-roboto
    text-[11px]
    font-light
    uppercase
    tracking-[0.1em]
    text-text-primary
    transition-colors
  
  "
>
                    {menuItem.label}
                  </span>

                  <ArrowRight
                    size={15}
                    strokeWidth={1.25}
                    className="
                      shrink-0
                      text-text-primary/35
                    "
                  />
                </button>
              );
            }
          )}
        </nav>
      </motion.div>
    );
  };

  /*
   * =====================================================
   * SECTION LINKS
   * =====================================================
   */

  const renderSectionLinks = () => {
    if (!activeSection?.sections) {
      return null;
    }

    return (
      <div
        className="
          flex
          flex-col
          gap-5
        "
      >
        {activeSection.sections.map(
          (section) => (
            <div
              key={section.title}
              className="
                flex
                flex-col
              "
            >
              {/* SECTION TITLE */}

              <span
                className="
                  mb-2
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-text-muted
                "
              >
                {section.title}
              </span>

              {/* LINKS */}

              <div className="flex flex-col">
                {section.items.map(
                  (item) => (
          <Link
  key={item.label}
  to={item.href}
  onClick={closeMenu}
className="
  group
  flex
  w-full
  items-center
  justify-between
  border-b
  border-border/20
  py-[10px]
  font-roboto
  text-[12px]
  font-medium
  tracking-[0.01em]
  leading-none
  text-text-secondary
  transition-transform
  duration-200
  last:border-b-0
  active:scale-[0.99]
"
>
                      <span>
                        {item.label}
                      </span>

                      {/* ARROW */}

                      <ArrowRight
                        size={13}
                        strokeWidth={1.2}
                        className="
                          shrink-0
                          text-text-primary/35
                          transition-transform
                          duration-300
                          
                        "
                      />
     </Link>
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>
    );
  };

  /*
   * =====================================================
   * IMAGE STRIP
   * =====================================================
   */

  const renderImageStrip = () => {
    if (!activeSection) {
      return null;
    }

    const images =
      getSectionImages(
        activeSection
      );

    if (images.length === 0) {
      return null;
    }

    return (
      <div className="mt-8">
        {/* LABEL */}

        <div
          className="
            mb-3
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              font-roboto
              text-[7px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-text-muted
            "
          >
            Explore
          </span>

          <span
            className="
              font-roboto
              text-[7px]
              uppercase
              tracking-[0.16em]
              text-text-muted/60
            "
          >
            Swipe
          </span>
        </div>

        {/* HORIZONTAL SCROLL */}

        <div
          className="
            -mx-5
            overflow-x-auto
            px-5
            pb-2
            scrollbar-hide
          "
        >
          <div
            className="
              flex
              w-max
              gap-3
            "
          >
            {images.map(
              (item) => (
<Link
  key={`${item.label}-${item.image}`}
  to={item.href ?? `/${activeSection.id}`}
  onClick={closeMenu}
  className="
    group
    block
    w-[88px]
    shrink-0
  "
>
                  {/* IMAGE */}

                  <div
                    className="
                      aspect-square
                      w-full
                      overflow-hidden
                      bg-background-soft
                    "
                  >
                    <img
                      src={
                        item.image ?? ""
                      }
                      alt={item.label}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        ease-out
                       
                      "
                    />
                  </div>

                  {/* IMAGE NAME */}

                  <p
                    className="
                      mt-2
                      overflow-hidden
                      text-ellipsis
                      whitespace-nowrap
                      font-roboto
                      text-[11px]
                      font-normal
                      tracking-[0.01em]
                      leading-none
                      text-text-primary
                    "
                  >
                    {item.label}
                  </p>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

  /*
   * =====================================================
   * SEE ALL
   * =====================================================
   */

  const renderSeeAll = () => {
    if (!activeSection) {
      return null;
    }

    const href =
      activeSection.href ??
      `/${activeSection.id}`;

    return (
      <div
        className="
          mt-8
          border-t
          border-text-primary/10
          pt-5
        "
      >
<Link
  to={href}
  onClick={closeMenu}
  className="
            group
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              font-roboto
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-text-primary
            "
          >
            See all{" "}
            {activeSection.label}
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              font-roboto
              text-[8px]
              uppercase
              tracking-[0.16em]
              text-text-primary
            "
          >
            Explore

            <ArrowRight
              size={14}
              strokeWidth={1.2}
              className="
                transition-transform
                duration-300
                group-active:scale-[0.97]
              "
            />
          </span>
        </Link>
      </div>
    );
  };

  /*
   * =====================================================
   * SECTION PAGE
   * =====================================================
   */

  const renderSectionPage = () => {
    if (!activeSection) {
      return null;
    }

    return (
      <motion.div
        key={`section-${activeSection.id}`}
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 20,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          min-h-[calc(100dvh-65px)]
          px-5
          pb-8
          pt-7
        "
      >
        {/* LINKS */}

        {renderSectionLinks()}

        {/* IMAGES */}

        {renderImageStrip()}

        {/* SEE ALL */}

        {renderSeeAll()}
      </motion.div>
    );
  };

return (
  <>
    {/* =========================================
        CLOSED MOBILE HEADER
    ========================================= */}

    <header
      className="
        fixed
        inset-x-0
        top-0
        z-40
        bg-background-main
        font-roboto
      "
    >
      <div
        className="
          h-px
          w-full
          bg-text-primary/10
        "
      />

      <div
        className="
          layout-container
          flex
          h-[64px]
          items-center
          justify-between
        "
      >
        <div
          className="

    flex
    items-center
    gap-1
  ">
        {/* MENU */}

        <button
          type="button"
          aria-label="Open menu"
          onClick={openMenu}
          className="
            flex
            h-10
            w-10
            items-center
            justify-start
            text-text-primary
          "
        >
          <Menu
            size={20}
            strokeWidth={1.25}
          />
        </button>
        {/* SEARCH */}

  <button
    type="button"
    onClick={onSearch}
    aria-label="Search"
    className="
      flex
      h-10
      w-10
      items-center
      justify-end
      text-text-primary
      transition-transform
      duration-150
      active:scale-[0.90]
    "
  >
    <Search
      size={18}
      strokeWidth={1.25}
    />
  </button>
</div>

        {/* VEGA */}

<Link
  to="/"
  aria-label="VEGA Home"
          className="
            absolute
            left-1/2
            -translate-x-1/2
          "
        >
          <span
            className="
              font-notoSerif
              text-[22px]
              font-light
              leading-none
              tracking-[0.2em]
              text-text-primary
            "
          >
            VEGA
          </span>
        </Link>
{/* ACTIONS */}

<div>

  {/* ACTIONS */}

  <HeaderActions
    variant="mobile"
  />
</div>
      </div>

      <div
        className="
          h-px
          w-full
          bg-text-primary/10
        "
      />
    </header>

    {/* =========================================
        OPEN MOBILE MENU
    ========================================= */}

    <AnimatePresence>
      {isOpen && (
        <motion.header
          initial={{
            y: "-100%",
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-x-0
            top-0
            z-50
            min-h-screen
            bg-background-main
            font-roboto
          "
        >
          {/* TOP LINE */}

          <div
            className="
              h-px
              w-full
              bg-text-primary/10
            "
          />

          {/* MENU HEADER */}

          <div
            className="
              layout-container
              relative
              flex
              h-[64px]
              items-center
              justify-center
              border-b
              border-text-primary/10
            "
          >
            {/* BACK / X */}

            {activeSection ? (
              <button
                type="button"
                onClick={goBack}
                aria-label="Back"
                className="
                  absolute
                  left-0
                  flex
                  items-center
                  gap-2
                  text-text-primary
                "
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.25}
                />

                <span
                  className="
                    font-roboto
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                  "
                >
                  Back
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="
                  absolute
                  left-0
                  flex
                  h-10
                  w-10
                  items-center
                  justify-start
                  text-text-primary
                "
              >
                <X
                  size={20}
                  strokeWidth={1.25}
                />
              </button>
            )}

            {/* TITLE */}

            <AnimatePresence
              mode="wait"
            >
              <motion.span
                key={
                  activeSection?.id ??
                  "vega"
                }
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  font-notoSerif
                  text-[18px]
                  font-light
                  tracking-[0.08em]
                  text-text-primary
                "
              >
                {activeSection
                  ? activeSection.label
                  : "VEGA"}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* CONTENT */}

          <div
            className="
              max-h-[calc(100dvh-65px)]
              overflow-y-auto
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {activeSection
                ? renderSectionPage()
                : renderMainMenu()}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  </>
);
}