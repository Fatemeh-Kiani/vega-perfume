import { useEffect, useState } from "react";
import { megaMenu } from "../../../data/megaMenu";

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
        w-fit
        text-text-primary
      "
    >
      {label}

      <span
        className="
          absolute
          -bottom-0.5
          left-1/2
          h-px
          w-0
          bg-text-primary
          transition-all
          duration-300
          group-hover:left-0
          group-hover:w-full
        "
      />
    </a>
  );
}

const sectionTitleClass = `
  text-[13px]
  font-medium
  text-text-muted
  font-roboto
`;

const linkListClass = `
  flex
  flex-col
  gap-1
`;

export default function MegaMenu({
  activeMenu,
  onClose,
}: MegaMenuProps) {
  const menu = megaMenu.find(
    (item) => item.id === activeMenu
  );

  const [activeImage, setActiveImage] =
    useState<string | null>(null);

  const [perfumeImages, setPerfumeImages] =
    useState<Record<string, string>>({});

  /* --------------------------------
     Initial perfume images
  -------------------------------- */

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

  /* --------------------------------
     Initial brand image
  -------------------------------- */

  useEffect(() => {
    if (activeMenu !== "brands") return;

    const firstBrand =
      menu?.sections?.[0]?.items?.[0];

    setActiveImage(firstBrand?.image ?? null);
  }, [activeMenu, menu]);

  if (!menu) return null;

  /* --------------------------------
     PERFUMES
  -------------------------------- */

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
                ? "border-r border-black/20"
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
            {perfumeImages[section.title] && (
              <img
                src={perfumeImages[section.title]}
                alt={section.title}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            )}
          </div>

          {/* TITLE + ITEMS */}

          <div
            className="
              flex
              flex-col
              gap-3
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
                  onMouseEnter={() => {
                    if (!item.image) return;

                    setPerfumeImages((prev) => ({
                      ...prev,
                      [section.title]: item.image!,
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

  /* --------------------------------
     BODY
  -------------------------------- */

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
                ? "border-r border-black/20"
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
                "
              />
            </div>
          )}

          {/* TITLE + LINKS */}

          <div
            className="
              flex
              flex-col
              gap-3
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

  /* --------------------------------
     GIFTS
  -------------------------------- */

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
                ? "border-r border-black/20"
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
                "
              />
            </div>
          )}

          {/* TITLE + LINKS */}

          <div
            className="
              flex
              flex-col
              gap-3
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

  /* --------------------------------
     HOME
  -------------------------------- */

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
                  ? "border-r border-black/20"
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

  /* --------------------------------
     BRANDS
  -------------------------------- */

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
            gap-y-2
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
            border-black/20
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
              <img
                src={activeImage}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  /* --------------------------------
     RENDER
  -------------------------------- */

  return (
    <div
      onMouseLeave={onClose}
      className="
        absolute
        left-0
        mt-2
        z-50
        w-full
        bg-background-main
        text-[14px]
        font-medium
        border-t
        border-black/20
        
        shadow-[0_25px_70px_rgba(0,0,0,0.12)]
      "
    >
      <div
        className="
          layout-container
          py-8
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