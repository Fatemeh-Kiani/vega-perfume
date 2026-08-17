import {
  useEffect,
  useRef,
  useState,
} from "react";
import { megaMenu } from "../../../data/megaMenu";
import { motion } from "motion/react";

type MegaMenuProps = {
  activeMenu: string | null;
  onClose: () => void;
};

function MenuLink({
  label,
  href,
  onMouseEnter,
}: {
  label: string;
  href: string;
  onMouseEnter?: () => void;
}) {
  return (
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      className="
        group
        relative
        flex
        w-fit
        items-center
        font-notoSerif
        text-[13px]
        font-normal
        leading-[1.25]
        text-text-primary
        transition-colors
- hover:text-text-primary/55

      "
    >
      <span
        className="
          relative
          w-fit
        "
      >
        {label}

        <span
          className="
            absolute
            -bottom-[4px]
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            bg-text-primary
            transition-all
            duration-300
            ease-out
            group-hover:w-full
          "
        />
      </span>
    </a>
  );
}

const sectionTitleClass = `
  mb-4
  flex
  items-center
  gap-3
  font-roboto
  text-[10px]
  font-medium
  uppercase
  tracking-[0.18em]
  text-text-muted
`;

const linkListClass = `
  flex
  flex-col
  gap-[9px]
`;

export default function MegaMenu({
  activeMenu,
  onClose,
}: MegaMenuProps) {
  const menu = megaMenu.find(
    (item) => item.id === activeMenu
  );

  const [perfumeImages, setPerfumeImages] =
    useState<Record<string, string>>({});

  const [activeImage, setActiveImage] =
    useState<string | null>(null);

    const closeTimeoutRef =
  useRef<number | null>(null);

  const cancelClose = () => {
  if (closeTimeoutRef.current !== null) {
    window.clearTimeout(
      closeTimeoutRef.current
    );

    closeTimeoutRef.current = null;
  }
};

const handleMouseLeave = () => {
  closeTimeoutRef.current =
    window.setTimeout(() => {
      onClose();
      closeTimeoutRef.current = null;
    }, 180);
};

  /*
   * --------------------------------
   * INITIAL PERFUME IMAGES
   * --------------------------------
   */

  useEffect(() => {
    if (activeMenu !== "perfumes") return;

    const images: Record<string, string> = {};

    menu?.sections?.forEach((section) => {
      const firstItem = section.items[0];

      if (firstItem?.image) {
        images[section.title] = firstItem.image;
      }
    });

    setPerfumeImages(images);
  }, [activeMenu, menu]);

  /*
   * --------------------------------
   * INITIAL BRAND IMAGE
   * --------------------------------
   */

  useEffect(() => {
    if (activeMenu !== "brands") return;

    const firstBrand =
      menu?.sections?.[0]?.items?.[0];

    setActiveImage(firstBrand?.image ?? null);
  }, [activeMenu, menu]);

  if (!menu) return null;

  /*
   * --------------------------------
   * ANIMATED IMAGE
   * --------------------------------
   */

  function AnimatedImage({
    src,
    alt,
    className = "",
  }: {
    src: string | null;
    alt: string;
    className?: string;
  }) {
    return (
      <img
        src={src ?? ""}
        alt={alt}
        className={`
          h-full
          w-full
          object-cover
          ${className}
        `}
      />
    );
  }

  /*
   * --------------------------------
   * PERFUMES
   * --------------------------------
   */

  const renderPerfumes = () => (
    <div
      className="
        grid
        grid-cols-3
        items-start
        w-fit
        mx-auto
    "
    >
      {menu.sections?.map((section, index) => (
        <div
          key={section.title}
          className={`
            grid
            grid-cols-[232px_1fr]
            items-start
            gap-4
            px-6
            ${
              index !== menu.sections!.length - 1
                ? "border-r border-black/10"
                : ""
            }
          `}
        >
          {/* IMAGE */}

          <div
            className="
              w-58
              aspect-square
              overflow-hidden
              bg-background-soft
            "
          >
            <motion.div
              key={perfumeImages[section.title]}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="h-full w-full"
            >
              <img
                src={
                  perfumeImages[section.title] ?? ""
                }
                alt={section.title}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </motion.div>
          </div>

          {/* TITLE + ITEMS */}

          <div
            className="
              flex
              flex-col
            "
          >
            <h3
              className={sectionTitleClass}
            >


              {section.title}
            </h3>

            <div className={linkListClass}>
              {section.items.map((item) => (
                <MenuLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  onMouseEnter={() => {
                    if (!item.image) return;

                    setPerfumeImages((prev) => ({
                      ...prev,
                      [section.title]:
                        item.image!,
                    }));
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  /*
   * --------------------------------
   * BODY
   * --------------------------------
   */

  const renderImageSections = () => (
    <div
      className="
        grid
        grid-cols-3
        items-start
        w-fit
        mx-auto
      "
    >
      {menu.sections?.map((section, index) => (
        <div
          key={section.title}
          className={`
            grid
            grid-cols-[232px_1fr]
            items-start
            gap-5
            px-6
            ${
              index !== menu.sections!.length - 1
                ? "border-r border-black/10"
                : ""
            }
          `}
        >
          {/* IMAGE */}

          {section.image && (
            <div
              className={`
                w-58
                overflow-hidden
                ${
                  section.imageRatio === "landscape"
                    ? "aspect-[3/2]"
                    : "aspect-square"
                }
              `}
            >
              <img
                src={section.image}
                alt={section.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.03]
                "
              />
            </div>
          )}

          {/* TITLE + LINKS */}

          <div
            className="
              flex
              flex-col
            "
          >
            <h3 className={sectionTitleClass}>

              {section.title}
            </h3>

            <div className={linkListClass}>
              {section.items.map((item) => (
                <MenuLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  /*
   * --------------------------------
   * GIFTS
   * --------------------------------
   */

  const renderGift = () => (
    <div
      className="
        grid
        grid-cols-2
        items-start
        w-fit
        mx-auto
      "
    >
      {menu.sections?.map((section, index) => (
        <div
          key={section.title}
          className={`
            grid
            grid-cols-[272px_1fr]
            items-start
            gap-5
            px-6
            ${
              index !== menu.sections!.length - 1
                ? "border-r border-black/10"
                : ""
            }
          `}
        >
          {/* IMAGE */}

          {section.image && (
            <div
              className={`
                w-68
                overflow-hidden
                ${
                  section.imageRatio === "landscape"
                    ? "aspect-[3/2]"
                    : "aspect-square"
                }
              `}
            >
              <img
                src={section.image}
                alt={section.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.03]
                "
              />
            </div>
          )}

          {/* TITLE + LINKS */}

          <div
            className="
              flex
              flex-col
            "
          >
            <h3 className={sectionTitleClass}>

              {section.title}
            </h3>

            <div className={linkListClass}>
              {section.items.map((item) => (
                <MenuLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  /*
   * --------------------------------
   * HOME
   * --------------------------------
   */

  const renderHome = () => {
    const items =
      menu.sections?.[0]?.items ?? [];

    return (
      <div
        className="
          grid
          grid-cols-3
          items-start
          w-fit
          mx-auto
        "
      >
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`
              flex
              flex-col
              gap-3
              px-6
              ${
                index !== items.length - 1
                  ? "border-r border-black/10"
                  : ""
              }
            `}
          >
            {/* IMAGE */}

            {item.image && (
              <div
                className="
                  w-58
                  aspect-square
                  overflow-hidden
                "
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-[1.03]
                  "
                />
              </div>
            )}

            {/* LINK */}

            <MenuLink
              label={item.label}
              href={item.href}
            />
          </div>
        ))}
      </div>
    );
  };

  /*
   * --------------------------------
   * BRANDS
   * --------------------------------
   */

  const renderBrands = () => {
    const brands =
      menu.sections?.[0]?.items ?? [];

    return (
      <div
        className="
          flex
          items-start
          justify-center
          w-fit
          mx-auto
        "
      >
        {/* BRAND COLUMNS */}

        <div
          className="
            grid
            grid-cols-3
            gap-x-6
            gap-y-[7px]
            auto-rows-min
            px-6
          "
        >
          {brands.map((brand) => (
            <MenuLink
              key={brand.label}
              label={brand.label}
              href={brand.href}
              onMouseEnter={() => {
                setActiveImage(
                  brand.image ?? null
                );
              }}
            />
          ))}
        </div>

        {/* IMAGE */}

        <div
          className="
            ml-8
            border-l
            border-black/10
            pl-8
          "
        >
          {activeImage && (
            <div
              className="
                w-58
                aspect-square
                overflow-hidden
              "
            >
              <AnimatedImage
                src={activeImage}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  /*
   * --------------------------------
   * RENDER
   * --------------------------------
   */

return (
  <div
    onMouseEnter={cancelClose}
    onMouseLeave={handleMouseLeave}
    className="
      absolute
      left-0
      top-full
      z-50
      w-full
      bg-background-main
      text-[14px]
      font-medium
    "
  >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-10
          py-7
        "
      >
        {activeMenu === "perfumes" &&
          renderPerfumes()}

        {activeMenu === "body" &&
          renderImageSections()}

        {activeMenu === "home" &&
          renderHome()}

        {activeMenu === "gifts" &&
          renderGift()}

        {activeMenu === "brands" &&
          renderBrands()}
      </div>
    </div>
  );
}