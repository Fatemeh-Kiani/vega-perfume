import { useEffect, useState } from "react";
import {
  ArrowDown,
  Search,
  X,
} from "lucide-react";

import {
  useParams,
  useSearchParams,
} from "react-router-dom";

import Footer from "../components/Footer/Footer";
import ProductFilter from "../components/product/ProductFilter/ProductFilter";
import ProductGrid from "../components/product/ProductGrid";

import { getProducts } from "../services/productService";
import { filterProducts } from "../utils/filterProducts";
import { parseProductFilters } from "../utils/parseProductFilters";
import { searchProducts } from "../utils/searchProducts";

import type { Product } from "../types/product";

export default function ProductsPage() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const routeParams = useParams<{
    gender?: string;
    fragrance?: string;
    season?: string;
    brand?: string;
    category?: string;
    subcategory?: string;
    collection?: string;
  }>();

  const [products, setProducts] =
    useState<Product[]>([]);

  const searchValue =
    searchParams.get("search") ?? "";

  /*
   * ==================================================
   * SEARCH
   * ==================================================
   */

  function handleSearch(value: string) {
    const nextParams =
      new URLSearchParams(searchParams);

    const normalizedValue =
      value.trim();

    if (normalizedValue) {
      nextParams.set(
        "search",
        normalizedValue,
      );
    } else {
      nextParams.delete("search");
    }

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  /*
   * ==================================================
   * LOAD + FILTER PRODUCTS
   * ==================================================
   */

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      const data = await getProducts();

      if (!mounted) return;

      const filters =
        parseProductFilters(
          searchParams,
          routeParams,
        );

      const filteredProducts =
        filterProducts(
          data,
          filters,
        );

      const searchedProducts =
        searchProducts(
          filteredProducts,
          filters.search,
        );

      setProducts(
        searchedProducts,
      );
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, [
    searchParams,
    routeParams.gender,
    routeParams.fragrance,
    routeParams.season,
    routeParams.brand,
    routeParams.category,
    routeParams.subcategory,
    routeParams.collection,
  ]);

  return (
    <main className="min-h-screen bg-background-main text-[#1D1C19]">

      {/* ==================================================
          INTRO
      ================================================== */}

      <section
        className="
          px-5
          pb-8
          pt-24
          sm:px-6
          sm:pb-10
          sm:pt-28
          lg:px-8
          lg:pb-14
          lg:pt-36
        "
      >
        <div className="layout-container">

          <div className="flex items-center gap-3">

            <span
              className="
                h-px
                w-10
                bg-[#1D1C19]
              "
            />

            <span
              className="
                font-roboto
                text-[10px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-[#77736B]
              "
            >
              The collection
            </span>

          </div>

          <div
            className="
              mt-7
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <h1
              className="
                font-notoSerif
                text-[54px]
                font-light
                leading-[0.9]
                tracking-[-0.06em]
                sm:text-[70px]
                lg:text-[92px]
              "
            >
              Explore
            </h1>

            <div
              className="
                max-w-[330px]
                lg:pb-2
              "
            >

              <p
                className="
                  font-roboto
                  text-[12px]
                  leading-6
                  text-[#77736B]
                "
              >
                Discover fragrances and
                everyday rituals selected
                with intention.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    h-px
                    w-8
                    bg-[#1D1C19]
                  "
                />

                <span
                  className="
                    font-roboto
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                  "
                >
                  Browse collection
                </span>

                <ArrowDown
                  size={12}
                  strokeWidth={1.2}
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          STICKY SEARCH + FILTER
      ================================================== */}

      <section
        className="
          sticky
          top-0
          z-[100]
          bg-[#FAF9F6]/95
          backdrop-blur-md
        "
      >
        <div className="layout-container">

          <div
            className="
              border-y
              border-[#1D1C19]/10
            "
          >

            <div
              className="
                flex
                min-h-[58px]
                items-center
                gap-3
                px-1
                sm:min-h-[62px]
                sm:px-2
              "
            >

              <Search
                size={17}
                strokeWidth={1.2}
                className="
                  shrink-0
                  text-[#77736B]
                "
              />

              <input
                type="search"
                value={searchValue}
                onChange={(event) =>
                  handleSearch(
                    event.target.value,
                  )
                }
                placeholder="Search fragrances, brands..."
                aria-label="Search products"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  font-roboto
                  text-[13px]
                  font-normal
                  text-[#1D1C19]
                  outline-none
                  placeholder:text-[#A6A198]
                  [&::-webkit-search-cancel-button]:appearance-none
                  [&::-webkit-search-decoration]:appearance-none
                "
              />

              {searchValue && (
                <button
                  type="button"
                  onClick={() =>
                    handleSearch("")
                  }
                  aria-label="Clear search"
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-[#1D1C19]/15
                    text-[#77736B]
                    transition-all
                    duration-200
                    hover:text-[#1D1C19]
                  "
                >
                  <X
                    size={13}
                    strokeWidth={1.2}
                  />
                </button>
              )}

            </div>

            <ProductFilter />

          </div>

        </div>
      </section>

      {/* ==================================================
          RESULT BAND
      ================================================== */}

      <section
        className="
          border-b
          border-[#1D1C19]/10
          bg-[#1D1C19]
          text-[#FAF9F6]
        "
      >
        <div
          className="
            layout-container
            flex
            min-h-[64px]
            items-center
            justify-between
            gap-6
            px-5
            sm:px-6
            lg:px-8
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <span
              className="
                font-notoSerif
                text-[24px]
                font-light
              "
            >
              {products.length}
            </span>

            <span
              className="
                h-5
                w-px
                bg-white/20
              "
            />

            <span
              className="
                font-roboto
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/65
              "
            >
              results
            </span>

          </div>

          <span
            className="
              hidden
              font-roboto
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/45
              sm:block
            "
          >
            VEGA selection
          </span>

        </div>
      </section>

      {/* ==================================================
          PRODUCTS
      ================================================== */}

      <section
        className="
          layout-container
          px-5
          pb-24
          pt-9
          sm:px-6
          sm:pb-28
          sm:pt-12
          lg:px-8
          lg:pb-36
          lg:pt-16
        "
      >
        <ProductGrid
          products={products}
        />
      </section>

      <Footer />

    </main>
  );
}