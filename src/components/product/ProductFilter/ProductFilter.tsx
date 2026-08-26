import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { useSearchParams } from "react-router-dom";

import { brands } from "../../../data/brands";
import { categories } from "../../../data/categories";
import { filters } from "../../../data/filters";
import { subCategories } from "../../../data/subCategories";

import type { FilterOption as FilterOptionType } from "../../../types/filter";

/* ======================================================
   TYPES
====================================================== */

interface FilterOptionProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

interface FilterGroupProps {
  title: string;
  options: FilterOptionType[];
  selectedValues: string[];
  onToggle: (value: string) => void;
}

/* ======================================================
   FILTER OPTION
====================================================== */

function FilterOption({
  label,
  checked,
  onChange,
}: FilterOptionProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="
        group
        flex
        w-full
        items-center
        justify-between
        border-b
        border-border/30
        py-3
        text-left
        transition-transform
        duration-150
        active:scale-[0.995]
        last:border-b-0s
      "
    >
      <span
        className={`
          font-roboto
          text-[12px]
          font-normal
          tracking-[0.01em]
          transition-colors
          duration-300
          ${
            checked
              ? "text-text-primary"
              : "text-text-secondary"
          }
        `}
      >
        {label}
      </span>

<span
  className={`
    flex
    h-4
    w-4
    shrink-0
    items-center
    justify-center
    border
    transition-all
    duration-300
    ${
      checked
        ? "border-border bg-text-secondary"
        : "border-border/60 bg-transparent"
    }
  `}
>
  {checked && (
    <span
      className="
        h-[5px]
        w-[8px]
        rotate-[-45deg]
        border-b
        border-l
        border-white
      "
    />
  )}
</span>
    </button>
  );
}

/* ======================================================
   FILTER GROUP
====================================================== */

function FilterGroup({
  title,
  options,
  selectedValues,
  onToggle,
}: FilterGroupProps) {
  return (
    <div className="w-full">
      {title && (
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
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-text-secondary
            "
          >
            {title}
          </span>

          {selectedValues.length > 0 && (
            <span
              className="
                font-roboto
                text-[8px]
                text-text-secondary
              "
            >
              {selectedValues.length}
            </span>
          )}
        </div>
      )}

      <div
        className="
          flex
          max-h-[300px]
          flex-col
          overflow-y-auto
          overscroll-contain
          scrollbar-thin
        "
      >
        {options.map((option) => (
          <FilterOption
            key={option.id}
            label={option.name}
            checked={selectedValues.includes(
              option.slug,
            )}
            onChange={() =>
              onToggle(option.slug)
            }
          />
        ))}
      </div>
    </div>
  );
}

/* ======================================================
   PRODUCT FILTER
====================================================== */

export default function ProductFilter() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const [openGroup, setOpenGroup] =
    useState<string | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const filterRef =
    useRef<HTMLDivElement>(null);

  /* ======================================================
     CLOSE DESKTOP DROPDOWN ON OUTSIDE CLICK
  ====================================================== */
useEffect(() => {
  function handlePointerDown(
    event: PointerEvent,
  ) {
    if (mobileOpen) {
      return;
    }

    if (
      filterRef.current &&
      !filterRef.current.contains(
        event.target as Node,
      )
    ) {
      setOpenGroup(null);
    }
  }

  document.addEventListener(
    "pointerdown",
    handlePointerDown,
  );

  return () => {
    document.removeEventListener(
      "pointerdown",
      handlePointerDown,
    );
  };
}, [mobileOpen]);

  /* ======================================================
     FILTER OPTIONS
  ====================================================== */

  const brandOptions = useMemo(
    () =>
      brands.map((brand) => ({
        id: brand.id,
        name: brand.name,
        slug: brand.slug,
        type: "brand" as const,
      })),
    [],
  );

  const genderOptions = useMemo(
    () =>
      filters.filter(
        (item) => item.type === "gender",
      ),
    [],
  );

  const fragranceOptions = useMemo(
    () =>
      filters.filter(
        (item) =>
          item.type ===
          "fragranceFamily",
      ),
    [],
  );

  const seasonOptions = useMemo(
    () =>
      filters.filter(
        (item) => item.type === "season",
      ),
    [],
  );

  /* ======================================================
     CATEGORY IDS
  ====================================================== */

  const bodyBathCategoryId =
    categories.find(
      (category) =>
        category.slug === "body-bath",
    )?.id;

  const homeCategoryId =
    categories.find(
      (category) =>
        category.slug === "home",
    )?.id;

  const giftsCategoryId =
    categories.find(
      (category) =>
        category.slug === "gifts",
    )?.id;


  const bodyBathOptions = useMemo(
    () =>
      subCategories
        .filter(
          (item) =>
            item.categoryId ===
              bodyBathCategoryId &&
            item.parentId !== undefined,
        )
        .map((item) => ({
          id: item.id,
          name: item.name,
          slug: item.slug,
          type: "category" as const,
        })),
    [bodyBathCategoryId],
  );

  /* ======================================================
     HOME OPTIONS
  ====================================================== */

  const homeOptions = useMemo(
    () =>
      subCategories
        .filter(
          (item) =>
            item.categoryId ===
            homeCategoryId,
        )
        .map((item) => ({
          id: item.id,
          name: item.name,
          slug: item.slug,
          type: "category" as const,
        })),
    [homeCategoryId],
  );

  /* ======================================================
     GIFTS OPTIONS
  ====================================================== */

  const giftOptions = useMemo(
    () =>
      subCategories
        .filter(
          (item) =>
            item.categoryId ===
            giftsCategoryId,
        )
        .map((item) => ({
          id: item.id,
          name: item.name,
          slug: item.slug,
          type: "category" as const,
        })),
    [giftsCategoryId],
  );

  /* ======================================================
     URL VALUES
  ====================================================== */

  function getSelectedValues(
    key: string,
  ): string[] {
    const value =
      searchParams.get(key);

    if (!value) {
      return [];
    }

    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  const selectedCategory =
    getSelectedValues("category");

  const selectedSubcategory =
    getSelectedValues("subcategory");

  const selectedBrand =
    getSelectedValues("brand");

  const selectedGender =
    getSelectedValues("gender");

  const selectedFragrance =
    getSelectedValues("fragrance");

  const selectedSeason =
    getSelectedValues("season");

  /* ======================================================
     TOGGLE FILTER
  ====================================================== */

  function toggleFilter(
    key: string,
    value: string,
  ) {
    const nextParams =
      new URLSearchParams(
        searchParams,
      );

    const current =
      getSelectedValues(key);

    const next = current.includes(value)
      ? current.filter(
          (item) => item !== value,
        )
      : [...current, value];

    if (next.length === 0) {
      nextParams.delete(key);
    } else {
      nextParams.set(
        key,
        next.join(","),
      );
    }

    setSearchParams(nextParams, {
      replace: true,
    });
  }


  function toggleCategory(
    categorySlug: string,
  ) {
    const nextParams =
      new URLSearchParams(
        searchParams,
      );

    const currentCategory =
      searchParams.get("category");

    if (currentCategory === categorySlug) {
      nextParams.delete("category");
    } else {
      nextParams.set(
        "category",
        categorySlug,
      );

      /*
       * When changing the main category,
       * remove old subcategory selections.
       */
      nextParams.delete(
        "subcategory",
      );
    }

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  /* ======================================================
     CLEAR
  ====================================================== */

  function clearFilters() {
    const nextParams =
      new URLSearchParams(
        searchParams,
      );

    [
      "category",
      "subcategory",
      "brand",
      "gender",
      "fragrance",
      "season",
    ].forEach((key) => {
      nextParams.delete(key);
    });

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  /* ======================================================
     UI GROUPS
  ====================================================== */

  const groups = [
    {
      key: "perfumes",
      title: "Perfumes",
      categorySlug: "perfumes",
      options: [] as FilterOptionType[],
      selected: selectedCategory,
      type: "category" as const,
    },

    {
      key: "body-bath",
      title: "Body & Bath",
      categorySlug: "body-bath",
      options: bodyBathOptions,
      selected: selectedSubcategory,
      type: "subcategory" as const,
    },

    {
      key: "home",
      title: "Home",
      categorySlug: "home",
      options: homeOptions,
      selected: selectedSubcategory,
      type: "subcategory" as const,
    },

    {
      key: "gifts",
      title: "Gifts",
      categorySlug: "gifts",
      options: giftOptions,
      selected: selectedSubcategory,
      type: "subcategory" as const,
    },

    {
      key: "brand",
      title: "Brand",
      options: brandOptions,
      selected: selectedBrand,
      type: "filter" as const,
    },

    {
      key: "gender",
      title: "Gender",
      options: genderOptions,
      selected: selectedGender,
      type: "filter" as const,
    },

    {
      key: "fragrance",
      title: "Fragrance",
      options: fragranceOptions,
      selected: selectedFragrance,
      type: "filter" as const,
    },

    {
      key: "season",
      title: "Season",
      options: seasonOptions,
      selected: selectedSeason,
      type: "filter" as const,
    },
  ];

  /* ======================================================
     ACTIVE FILTERS
  ====================================================== */

  const activeFilters =
    groups.flatMap((group) => {
      if (
        group.type === "category"
      ) {
        const categorySlug =
          group.categorySlug;

        if (
          selectedCategory.includes(
            categorySlug,
          )
        ) {
          return [
            {
              key: "category",
              value: categorySlug,
              label: group.title,
            },
          ];
        }

        return [];
      }

      return group.selected
        .filter((value) =>
          group.options.some(
            (option) =>
              option.slug === value,
          ),
        )
        .map((value) => ({
          key:
            group.type ===
            "subcategory"
              ? "subcategory"
              : group.key,
          value,
          label:
            group.options.find(
              (option) =>
                option.slug === value,
            )?.name ?? value,
        }));
    });

  const activeFilterCount =
    activeFilters.length;

  /* ======================================================
     HANDLE GROUP BUTTON
  ====================================================== */

  function handleGroupClick(
    group: (typeof groups)[number],
  ) {
    /*
     * Perfumes has no child options.
     * Clicking it directly selects the category.
     */
    if (
      group.type === "category"
    ) {
      toggleCategory(
        group.categorySlug!,
      );

      return;
    }

    /*
     * Other category groups open their
     * subcategory list directly.
     */
    setOpenGroup((current) =>
      current === group.key
        ? null
        : group.key,
    );
  }

  /* ======================================================
     RENDER
  ====================================================== */

  return (
    <div
      ref={filterRef}
      className="w-full"
    >
      {/* ==================================================
          DESKTOP FILTER
      ================================================== */}

      <section
        className="
          hidden
          lg:block
        "
      >
        <div
          className="
            flex
            min-h-[58px]
            items-center
            justify-between
            gap-6
          "
        >
          {/* FILTER GROUPS */}

          <div
            className="
              flex
              min-w-0
              items-center
            "
          >
            {groups.map((group) => {
              const isOpen =
                openGroup ===
                group.key;

const selectedCount =
  group.type === "category"
    ? selectedCategory.includes(
        group.categorySlug!,
      )
      ? 1
      : 0
    : group.type === "subcategory"
      ? group.selected.filter((value) =>
          group.options.some(
            (option) =>
              option.slug === value,
          ),
        ).length
      : group.selected.length;

              return (
                <div
                  key={group.key}
                  className="
                    relative
                    shrink-0
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      handleGroupClick(
                        group,
                      )
                    }
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-2
                      px-4
                      py-5
                      font-roboto
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-text-secondary
                      transition-colors
                      duration-300
                      hover:text-text-primary
                    "
                  >
                    <span>
                      {group.title}
                    </span>

                    {selectedCount >
                      0 && (
                      <span
                        className="
                          font-roboto
                          text-[9px]
                          text-[#747662]
                        "
                      >
                        {selectedCount}
                      </span>
                    )}

                    {group.options.length >
                      0 && (
                      <ChevronDown
                        size={12}
                        strokeWidth={1.2}
                        className={`
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    )}

                    {/* UNDERLINE */}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-px
                        w-0
                        bg-text-primary
                        transition-all
                        duration-500
                        ease-out
                        group-hover:left-0
                        group-hover:w-full"

                    />
                  </button>

                  {/* DROPDOWN */}

                  {isOpen &&
                    group.options.length >
                      0 && (
                      <div
                        className="
                          absolute
                          left-0
                          top-full
                          z-[999]
                          w-[280px]
                          border
                          border-border/60
                          bg-background-main
                          p-5
                          shadow-[0_20px_60px_rgba(30,29,24,0.12)]
                          animate-[filterDrop_220ms_ease-out]
                        "
                      >
                        <div
                          className="
                            mb-4
                            flex
                            items-center
                            justify-between
                            border-b
                            border-border/50
                            pb-3
                          "
                        >
                          <span
                            className="
                              font-roboto
                              text-[8px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-text-secondary
                            "
                          >
                            {group.title}
                          </span>

                          {selectedCount >
                            0 && (
                            <span
                              className="
                                font-roboto
                                text-[8px]
                                text-text-secondary
                              "
                            >
                              {
                                selectedCount
                              }
                            </span>
                          )}
                        </div>

                        <FilterGroup
                          title=""
                          options={
                            group.options
                          }
                          selectedValues={
                            group.selected
                          }
                          onToggle={(value) =>
                            toggleFilter(
                              group.type ===
                                "subcategory"
                                ? "subcategory"
                                : group.key,
                              value,
                            )
                          }
                        />
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ACTIVE FILTERS */}

        {activeFilterCount > 0 && (
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              border-t
              border-border/40
              py-3
            "
          >
            <span
              className="
                mr-1
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-text-secondary
              "
            >
              Applied
            </span>

            {activeFilters.map(
              (filter) => (
                <button
                  key={`${filter.key}-${filter.value}`}
                  type="button"
                  onClick={() => {
                    if (
                      filter.key ===
                      "category"
                    ) {
                      toggleCategory(
                        filter.value,
                      );
                    } else {
                      toggleFilter(
                        filter.key,
                        filter.value,
                      );
                    }
                  }}
   className="
  group
  flex
  shrink-0
  items-center
  gap-2
  border
  border-border/60
  bg-white
  px-3
  py-1.5
  font-roboto
  text-[8px]
  uppercase
  tracking-[0.1em]
  text-[#55544D]
 
"
                >
                  {filter.label}

                  <X
                    size={10}
                    strokeWidth={1.25}
                    className="
                      text-text-secondary
                      transition-transform
                      duration-200
                      group-hover:text-text-primary
                    "
                  />
                </button>
              ),
            )}
          </div>
        )}
      </section>
{/* ==================================================
    MOBILE FILTER
================================================== */}

<section className="lg:hidden">
  <div
    className="
      flex
      min-h-[50px]
      items-center
      justify-between
    "
  >
    {/* FILTER BUTTON */}

    <button
      type="button"
      onClick={() => setMobileOpen(true)}
      className="
        flex
        items-center
        gap-2
        py-3
        font-roboto
        text-[10px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-text-primary
      "
    >
      <SlidersHorizontal
        size={14}
        strokeWidth={1.15}
      />

      <span>Filters</span>

      {activeFilterCount > 0 && (
        <span
          className="
            min-w-[15px]
            bg-background-box
            px-1.5
            py-0.5
            text-center
            font-roboto
            text-[8px]
            text-white
          "
        >
          {activeFilterCount}
        </span>
      )}
    </button>

    {/* CLEAR */}

    {activeFilterCount > 0 && (
      <button
        type="button"
        onClick={clearFilters}
        className="
          font-roboto
          text-[8px]
          font-medium
          uppercase
          tracking-[0.15em]
          text-text-secondary
        "
      >
        Clear
      </button>
    )}
  </div>

  {/* ACTIVE FILTERS */}

  {activeFilterCount > 0 && (
    <div
      className="
        flex
        gap-2
        overflow-x-auto
        border-t
        border-border/20
        py-2.5
        scrollbar-none
      "
    >
      {activeFilters.map((filter) => (
        <button
          key={`${filter.key}-${filter.value}`}
          type="button"
          onClick={() => {
            if (filter.key === "category") {
              toggleCategory(filter.value);
            } else {
              toggleFilter(
                filter.key,
                filter.value,
              );
            }
          }}
          className="
            flex
            shrink-0
            items-center
            gap-2
            border
            border-border/20
            bg-white
            px-2.5
            py-1.5
            font-roboto
            text-[8px]
            uppercase
            tracking-[0.1em]
            text-ext-secondary
          "
        >
          {filter.label}

          <X
            size={9}
            strokeWidth={1.2}
          />
        </button>
      ))}
    </div>
  )}
</section>

{/* ==================================================
    MOBILE FILTER DRAWER
================================================== */}

{mobileOpen &&
  createPortal(
    <div
      className="
        fixed
        inset-0
        z-[9999]
        lg:hidden
      "
    >
      {/* BACKDROP */}

      <button
        type="button"
        aria-label="Close filters"
        onClick={() => setMobileOpen(false)}
        className="
          absolute
          inset-0
          bg-background-box/30
          backdrop-blur-[2px]
        "
      />

      {/* DRAWER */}

      <aside
        className="
          absolute
          inset-y-0
          left-0
          flex
          w-[88%]
          max-w-[420px]
          flex-col
          bg-background-main
          shadow-[20px_0_60px_rgba(30,29,24,0.15)]
          animate-[filterPanelRight_260ms_cubic-bezier(0.22,1,0.36,1)]
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
  
            px-5
            py-5
          "
        >
          <div>
            <p
              className="
                font-notoSerif
                text-[24px]
                font-light
                tracking-[-0.02em]
                text-text-primary
              "
            >
              Filters
            </p>

            <p
              className="
                mt-1
                font-roboto
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-text-secondary
              "
            >
              Refine your selection
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close filters"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
             text-text-primary
            "
          >
            <X
              size={20}
              strokeWidth={1.2}
            />
          </button>
        </div>
{/* ACTIVE FILTERS */}

{activeFilterCount > 0 && (
  <div
    className="
      flex
      min-h-[48px]
      items-center
      gap-3
      border-t
      border-border/30
      px-2
      py-2
    "
  >
    {/* APPLIED LABEL */}

    <span
      className="
        shrink-0
        font-roboto
        text-[8px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-text-secondary
      "
    >
      Applied
    </span>

    {/* FILTERS BORDER */}

    <div
      className="
        flex
        min-w-0
        flex-1
        flex-wrap
        items-center
        gap-2
        border
        border-border/30
        bg-white
        px-3
        py-2
      "
    >
      {activeFilters.map((filter) => (
        <button
          key={`${filter.key}-${filter.value}`}
          type="button"
          onClick={() => {
            if (
              filter.key === "category"
            ) {
              toggleCategory(
                filter.value,
              );
            } else {
              toggleFilter(
                filter.key,
                filter.value,
              );
            }
          }}
          className="
            group
            flex
            shrink-0
            items-center
            gap-2
            bg-[#F3F2ED]
            px-3
            py-1.5
            font-roboto
            text-[8px]
            uppercase
            tracking-[0.1em]
            text-text-secondary
          "
        >
          {filter.label}

          <X
            size={10}
            strokeWidth={1.2}
            className="
              text-text-secondary/70
              transition-all
              duration-200
              group-hover:scale-110
              group-hover:text-text-primary
            "
          />
        </button>
      ))}
    </div>
  </div>
)}

        {/* FILTER GROUPS */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
          "
        >
          {groups.map((group) => {
            const isOpen =
              openGroup === group.key;

const selectedCount =
  group.type === "category"
    ? selectedCategory.includes(
        group.categorySlug!,
      )
      ? 1
      : 0
    : group.type === "subcategory"
      ? group.selected.filter((value) =>
          group.options.some(
            (option) =>
              option.slug === value,
          ),
        ).length
      : group.selected.length;

            return (
              <div
                key={group.key}
                className="
                  border-b
                  border-border/30
                "
              >
                {/* GROUP HEADER */}

                <button
                  type="button"
                  onClick={() =>
                    handleGroupClick(group)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-4
                    text-left
                    transition-transform
                    duration-150
                    active:scale-[0.995]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        font-roboto
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        text-text-primary
                      "
                    >
                      {group.title}
                    </span>

                    {selectedCount > 0 && (
                      <span
                        className="
                          bg-text-secondary
                          px-1.5
                          py-0.5
                          font-roboto
                          text-[7px]
                          text-white
                        "
                      >
                        {selectedCount}
                      </span>
                    )}
                  </div>

                  {group.options.length > 0 && (
                    <ChevronRight
                      size={16}
                      strokeWidth={1.2}
                      className={`
                        text-[#8E8C82]
                        transition-transform
                        duration-300
                        ${
                          isOpen
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />
                  )}
                </button>

                {/* OPTIONS */}

                {group.options.length > 0 &&
                  isOpen && (
                    <div
                      className="
                        pb-4
                      "
                    >
                      <FilterGroup
                        title=""
                        options={group.options}
                        selectedValues={
                          group.selected
                        }
                        onToggle={(value) =>
                          toggleFilter(
                            group.type ===
                              "subcategory"
                              ? "subcategory"
                              : group.key,
                            value,
                          )
                        }
                      />
                    </div>
                  )}
              </div>
            );
          })}
        </div>
{/* FOOTER */}

<div
  className="
    border-t
   border-border/30
    bg-background-main
    px-5
    py-4
  "
>
  <div
    className="
      grid
      grid-cols-2
      gap-3
    "
  >
    {/* CLEAR ALL */}

    <button
      type="button"
      onClick={clearFilters}
      className="
        flex
        h-12
        items-center
        justify-center
        border
        border-border/40
        bg-transparent
        font-roboto
        text-[9px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-text-secondary
        transition-all
        duration-300
        hover:border-border/20
        hover:text-text-primary/90
        active:scale-[0.98]
      "
    >
      Clear all
    </button>

    {/* APPLY */}

    <button
      type="button"
      onClick={() =>
        setMobileOpen(false)
      }
      className="
        flex
        h-12
        items-center
        justify-center
        bg-[#24241F]
        font-roboto
        text-[9px]
        font-medium
        uppercase
        border
        border-border/40
        tracking-[0.18em]
        text-white
        transition-all
        duration-300
        hover:bg-background-main
        hover:text-text-secondary
        active:scale-[0.98]
      "
    >
      Apply
      {activeFilterCount > 0
        ? ` · ${activeFilterCount}`
        : ""}
    </button>
  </div>
</div>
      </aside>
    </div>,
    document.body,
  )}
    </div>
  );
}