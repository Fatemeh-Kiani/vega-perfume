import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useWishlist } from "../hooks/useWishlist";
import {
  getWishlist,
  removeFromWishlist,
} from "../services/wishlistService";
import { getProducts } from "../services/productService";

import type { Product } from "../types/product";

export default function WishlistPage() {
  const { wishlistIds } = useWishlist();

  const [products, setProducts] = useState<Product[]>([]);

  /*
   * ==================================================
   * LOAD WISHLIST PRODUCTS
   * ==================================================
   */

  useEffect(() => {
    let mounted = true;

    async function loadWishlistProducts() {
      const data = await getProducts();

      if (!mounted) return;

      const wishlistItems = getWishlist();

      const wishlistProducts = wishlistItems
        .sort(
          (a, b) =>
            new Date(b.addedAt).getTime() -
            new Date(a.addedAt).getTime(),
        )
        .map((item) =>
          data.find(
            (product) =>
              product.id === item.productId,
          ),
        )
        .filter(
          (product): product is Product =>
            product !== undefined,
        );

      setProducts(wishlistProducts);
    }

    loadWishlistProducts();

    return () => {
      mounted = false;
    };
  }, [wishlistIds]);

  /*
   * ==================================================
   * DELETE
   * ==================================================
   */

  function handleRemove(productId: number) {
    removeFromWishlist(productId);

    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== productId,
      ),
    );
  }

  /*
   * ==================================================
   * RENDER
   * ==================================================
   */

  return (
    <main className="min-h-screen bg-background-main text-text-primary">

      {/* ==================================================
          INTRO
      ================================================== */}

      <section
        className="
          layout-container
          px-5
          pb-12
          pt-28
          sm:px-6
          sm:pb-16
          sm:pt-32
          lg:px-8
          lg:pb-20
          lg:pt-40
        "
      >
        {/* EYEBROW */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-10
              bg-text-primary
            "
          />

          <span
            className="
              font-roboto
              text-[9px]
              font-medium
              uppercase
              tracking-[0.24em]
              text-text-muted
            "
          >
            Your collection
          </span>
        </div>

        {/* TITLE + DESCRIPTION */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <h1
            className="
              font-notoSerif
              text-background-box
              text-[56px]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
              sm:text-[72px]
              lg:text-[96px]
            "
          >
            Wishlist
          </h1>

          {/* DESCRIPTION */}

          <div
            className="
              max-w-[420px]
              lg:pb-1
            "
          >
            <p
              className="
                font-roboto
                text-[11px]
                font-light
                leading-6
                text-text-muted
              "
            >
              Fragrances worth remembering,
              collected in one place.
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
                  w-7
                  bg-text-primary/30
                "
              />

              <span
                className="
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                "
              >
                Saved fragrances
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <section
        className="
          pb-24
          sm:pb-28
          lg:pb-36
        "
      >

        {/* ==================================================
            TOP BORDER
        ================================================== */}

        <div
          className="
            border-t
            border-text-primary/10
          "
        />

        {/* ==================================================
            WISHLIST HEADER
            FULL WIDTH BACKGROUND
        ================================================== */}

        <section
          className="
            w-full
            border-b
            border-border/20
            bg-text-primary/95
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
            {/* LEFT */}

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
                {wishlistIds.length}
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
                  text-white/45
                "
              >
                Wishlist
              </span>
            </div>

            {/* RIGHT */}

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
            WISHLIST CONTENT CONTAINER
        ================================================== */}

        <div
          className="
            layout-container
            px-5
            sm:px-6
            lg:px-8
          "
        >

          {/* ==================================================
              EMPTY STATE
          ================================================== */}

          {products.length === 0 ? (
            <div
              className="
                flex
                min-h-[420px]
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <span
                className="
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-text-muted
                "
              >
                Nothing saved yet
              </span>

              <h2
                className="
                  mt-5
                  max-w-[520px]
                  font-notoSerif
                  text-[34px]
                  font-light
                  leading-tight
                  tracking-[-0.025em]
                  sm:text-[42px]
                "
              >
                Your next signature scent
                could be here.
              </h2>

              <p
                className="
                  mt-4
                  max-w-[330px]
                  font-roboto
                  text-[10px]
                  font-light
                  leading-5
                  text-text-muted
                "
              >
                Save fragrances you love and
                return to them whenever you like.
              </p>

              <Link
                to="/products"
                className="
                  group
                  mt-8
                  flex
                  items-center
                  gap-3
                  border-b
                  border-text-primary/25
                  pb-2
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-text-primary
                  transition-opacity
                  duration-300
                  hover:opacity-55
                "
              >
                Explore fragrances

                <ArrowRight
                  size={12}
                  strokeWidth={1.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          ) : (

            /* ==================================================
               WISHLIST ITEMS
            ================================================== */

            <div
              className="
                divide-y
                divide-text-primary/10
              "
            >

              {products.map((product) => {
                const primaryImage =
                  product.images[0]?.url;

                const secondaryImage =
                  product.images[1]?.url;

                return (
                  <article
                    key={product.id}
                    className="
                      group
                      py-8
                      sm:py-10
                      lg:py-12
                    "
                  >

                    {/* ==================================================
                        ITEM
                    ================================================== */}

                    <div
                      className="
                        grid
                        grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
                        gap-5
                        sm:grid-cols-[220px_minmax(0,1fr)]
                        sm:gap-8
                        lg:grid-cols-[280px_minmax(0,1fr)]
                        lg:gap-12
                        xl:grid-cols-[320px_minmax(0,1fr)]
                      "
                    >

                      {/* ==================================================
                          IMAGE — LEFT
                      ================================================== */}

                      <div
                        className="
                          relative
                          aspect-square
                          overflow-hidden
                          bg-background-soft
                        "
                      >

                        <Link
                          to={`/products/${product.slug}`}
                          aria-label={`View ${product.name}`}
                          className="
                            relative
                            block
                            h-full
                            w-full
                          "
                        >

                          {/* PRIMARY IMAGE */}

                          {primaryImage && (
                            <img
                              src={primaryImage}
                              alt={product.name}
                              loading="lazy"
                              className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-contain
                                p-5
                                transition-all
                                duration-700
                                ease-out
                                md:group-hover:scale-[1.03]
                                md:group-hover:opacity-0
                              "
                            />
                          )}

                          {/* SECONDARY IMAGE */}

                          {secondaryImage && (
                            <img
                              src={secondaryImage}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                              className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-contain
                                p-5
                                opacity-0
                                transition-all
                                duration-700
                                ease-out
                                md:group-hover:scale-[1.03]
                                md:group-hover:opacity-100
                              "
                            />
                          )}

                        </Link>
                      </div>

                      {/* ==================================================
                          INFORMATION — RIGHT
                      ================================================== */}

                      <div
                        className="
                          flex
                          min-w-0
                          flex-col
                          justify-between
                        "
                      >

                        {/* ==================================================
                            TOP INFORMATION
                        ================================================== */}

                        <div>

                          {/* LABEL */}

                          <p
                            className="
                              font-roboto
                              text-[7px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-text-muted
                            "
                          >
                            Saved fragrance
                          </p>

                          {/* NAME */}

                          <h2
                            className="
                              mt-2
                              font-notoSerif
                              text-[20px]
                              font-light
                              leading-tight
                              tracking-[-0.02em]
                              text-text-primary
                              sm:text-[25px]
                              lg:text-[32px]
                            "
                          >
                            {product.name}
                          </h2>

                          {/* DESCRIPTION */}

                          <p
                            className="
                              mt-4
                              max-w-[390px]
                              font-roboto
                              text-[9px]
                              font-light
                              leading-5
                              text-text-muted
                              sm:text-[10px]
                              sm:leading-6
                            "
                          >
                            {product.description}
                          </p>

                          {/* DETAILS */}

                          <div
                            className="
                              mt-5
                              flex
                              flex-wrap
                              items-center
                              gap-x-3
                              gap-y-2
                              border-t
                              border-text-primary/10
                              pt-4
                            "
                          >

                            <span
                              className="
                                font-roboto
                                text-[7px]
                                uppercase
                                tracking-[0.14em]
                                text-text-muted
                              "
                            >
                              {product.gender}
                            </span>

                            <span
                              className="
                                h-3
                                w-px
                                bg-text-primary/10
                              "
                            />

                            <span
                              className="
                                font-roboto
                                text-[7px]
                                uppercase
                                tracking-[0.14em]
                                text-text-muted
                              "
                            >
                              {product.concentration}
                            </span>

                            <span
                              className="
                                h-3
                                w-px
                                bg-text-primary/10
                              "
                            />

                            <span
                              className="
                                font-roboto
                                text-[7px]
                                uppercase
                                tracking-[0.14em]
                                text-text-muted
                              "
                            >
                              {product.volume}ml
                            </span>

                          </div>

                        </div>

                        {/* ==================================================
                            PRICE + ACTIONS
                        ================================================== */}

                        <div
                          className="
                            mt-8
                            sm:mt-10
                          "
                        >

                          {/* PRICE */}

                          <div
                            className="
                              mb-4
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
                                tracking-[0.18em]
                                text-text-muted
                              "
                            >
                              Price
                            </span>

                            <span
                              className="
                                font-roboto
                                text-[11px]
                                font-medium
                                text-text-primary
                              "
                            >
                              {product.price} €
                            </span>
                          </div>

                          {/* ==================================================
                              ACTIONS
                          ================================================== */}

                          <div
                            className="
                              grid
                              grid-cols-2
                              sm:max-w-[430px]
                              sm:grid-cols-3
                            "
                          >

                            {/* ==================================================
                                ADD TO BAG
                            ================================================== */}

                            <button
                              type="button"
                              className="
                                flex
                                h-11
                                items-center
                                justify-center
                                gap-2
                                border
                                border-text-primary
                                bg-background-box
                                px-4
                                font-roboto
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                                text-background-main
                                transition-all
                                duration-300
                                hover:bg-text-primary/90
                                active:scale-[0.96]
                                active:opacity-90
                                sm:h-12
                              "
                            >
                              <ShoppingBag
                                size={13}
                                strokeWidth={1.25}
                              />

                              <span>
                                Bag
                              </span>
                            </button>

                            {/* ==================================================
                                DELETE
                            ================================================== */}

                            <button
                              type="button"
                              onClick={() =>
                                handleRemove(product.id)
                              }
                              aria-label={`Remove ${product.name} from wishlist`}
                              className="
                                flex
                                h-11
                                items-center
                                justify-center
                                gap-2
                                border
                                border-l-0
                                border-text-primary/20
                                bg-background-main
                                px-4
                                font-roboto
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                                text-text-primary
                                transition-all
                                duration-300
                                hover:bg-background-soft
                                active:scale-[0.96]
                                active:opacity-90
                                sm:h-12
                                sm:border-l
                              "
                            >
                              <Trash2
                                size={13}
                                strokeWidth={1.25}
                              />

                              <span>
                                Delete
                              </span>
                            </button>

                            {/* ==================================================
                                DISCOVER
                            ================================================== */}

                            <Link
                              to={`/products/${product.slug}`}
                              className="
                                group/discover
                                col-span-2
                                flex
                                h-11
                                items-center
                                justify-center
                                gap-2
                                border
                                border-t-0
                                border-text-primary/20
                                bg-background-main
                                px-4
                                font-roboto
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                                text-text-primary
                                transition-all
                                duration-300
                                hover:bg-background-soft
                                active:scale-[0.96]
                                active:opacity-90
                                sm:h-12
                              "
                            >
                              <span>
                                Discover
                              </span>

                              <ArrowRight
                                size={12}
                                strokeWidth={1.2}
                                className="
                                  transition-transform
                                  duration-300
                                  group-hover/discover:translate-x-1
                                "
                              />
                            </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

            </div>
          )}

        </div>
      </section>
    </main>
  );
}