import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import { useCart } from "../hooks/useCart";
import { getProducts } from "../services/productService";

import type { Product } from "../types/product";
import type { CartItemWithProduct } from "../types/cart";

export default function CartPage() {
  const {
    cartItems,
    itemCount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const [products, setProducts] =
    useState<Product[]>([]);

  /*
   * ==================================================
   * LOAD PRODUCTS
   * ==================================================
   */

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      const data = await getProducts();

      if (!mounted) return;

      setProducts(data);
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * ==================================================
   * CART PRODUCTS
   * ==================================================
   */

  const cartProducts =
    useMemo<CartItemWithProduct[]>(
      () => {
        return cartItems
          .map((item) => {
            const product =
              products.find(
                (product) =>
                  product.id ===
                  item.productId,
              );

            if (!product) {
              return null;
            }

            return {
              ...item,
              product,
            };
          })
          .filter(
            (
              item,
            ): item is CartItemWithProduct =>
              item !== null,
          );
      },
      [cartItems, products],
    );

  /*
   * ==================================================
   * TOTALS
   * ==================================================
   */

  const subtotal =
    cartProducts.reduce(
      (total, item) =>
        total +
        item.product.price *
          item.quantity,
      0,
    );

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 150
        ? 0
        : 12;

  const total =
    subtotal + shipping;

  /*
   * ==================================================
   * RENDER
   * ==================================================
   */

  return (
    <main
      className="
        min-h-screen
        bg-background-main
        text-text-primary
      "
    >
      {/* ==================================================
          INTRO
      ================================================== */}

      <section
        className="
          layout-container
          px-4
          pb-8
          pt-8
          sm:px-5
          sm:pb-10
          sm:pt-18
          lg:px-5
          lg:pb-10
          lg:pt-18
        "
      >

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
            Cart
          </h1>

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
              Review your selected
              fragrances before checkout.
            </p>

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
        {/* TOP BORDER */}

        <div
          className="
            border-t
            border-text-primary/10
          "
        />

        {/* ==================================================
            CART HEADER
        ================================================== */}

        <div
          className="
            w-full
            border-b
            border-border/20
            bg-background-box
            text-background-soft
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
                {itemCount}
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
                Items
              </span>
            </div>

            {cartProducts.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Clear cart
              </button>
            )}
          </div>
        </div>

        {/* ==================================================
            EMPTY CART
        ================================================== */}

        {cartProducts.length === 0 ? (
          <div
            className="
              layout-container
              flex
              min-h-[480px]
              flex-col
              items-center
              justify-center
              px-5
              text-center
            "
          >
            <ShoppingBag
              size={24}
              strokeWidth={1}
              className="text-text-muted/50"
            />

            <span
              className="
                mt-6
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-text-muted
              "
            >
              Your bag is empty
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
              Find something worth
              bringing home.
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
              Explore the VEGA collection
              and add fragrances to your bag.
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
             CART
          ================================================== */

          <div
            className="
              layout-container
              grid
              gap-12
              px-5
              pt-8
              sm:px-6
              sm:pt-10
              lg:grid-cols-[1fr_360px]
              lg:gap-16
              lg:px-8
              lg:pt-12
            "
          >
            {/* ==================================================
                ITEMS
            ================================================== */}

            <div
              className="
                divide-y
                divide-text-primary/10
              "
            >
              {cartProducts.map(
                ({
                  product,
                  quantity,
                }) => {
                  const image =
                    product.images[0]?.url;

                  return (
                    <article
                      key={product.id}
                      className="
                        py-7
                        first:pt-0
                        sm:py-9
                      "
                    >
                      <div
                        className="
                          grid
                          grid-cols-[110px_minmax(0,1fr)]
                          gap-5
                          sm:grid-cols-[150px_minmax(0,1fr)]
                          sm:gap-7
                        "
                      >
                        {/* IMAGE */}

                        <Link
                          to={`/products/${product.slug}`}
                          className="
                            block
                            aspect-square
                            overflow-hidden
                            bg-background-soft
                          "
                        >
                          {image && (
                            <img
                              src={image}
                              alt={
                                product.name
                              }
                              loading="lazy"
                              className="
                                h-full
                                w-full
                                object-contain
                                p-4
                                transition-transform
                                duration-500
                                hover:scale-[1.03]
                              "
                            />
                          )}
                        </Link>

                        {/* INFO */}

                        <div
                          className="
                            flex
                            min-w-0
                            flex-col
                            justify-between
                          "
                        >
                          <div>
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
                              {product
                                .concentration ??
                                "Fragrance"}
                            </p>

                            <Link
                              to={`/products/${product.slug}`}
                              className="
                                mt-2
                                block
                              "
                            >
                              <h2
                                className="
                                  font-notoSerif
                                  text-[21px]
                                  font-light
                                  leading-tight
                                  tracking-[-0.025em]
                                  text-text-primary
                                  sm:text-[27px]
                                "
                              >
                                {
                                  product.name
                                }
                              </h2>
                            </Link>

                            <p
                              className="
                                mt-3
                                max-w-[420px]
                                font-roboto
                                text-[9px]
                                font-light
                                leading-5
                                text-text-muted
                                sm:text-[10px]
                                sm:leading-6
                              "
                            >
                              {
                                product.description
                              }
                            </p>
                          </div>

                          <div
                            className="
                              mt-6
                              flex
                              flex-wrap
                              items-end
                              justify-between
                              gap-4
                            "
                          >
                            {/* QUANTITY */}

                            <div>
                              <span
                                className="
                                  mb-2
                                  block
                                  font-roboto
                                  text-[7px]
                                  font-medium
                                  uppercase
                                  tracking-[0.18em]
                                  text-text-muted
                                "
                              >
                                Quantity
                              </span>

                              <div
                                className="
                                  flex
                                  h-9
                                  items-center
                                  border
                                  border-text-primary/15
                                "
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      product.id,
                                      quantity -
                                        1,
                                    )
                                  }
                                  aria-label="Decrease quantity"
                                  className="
                                    flex
                                    h-full
                                    w-9
                                    items-center
                                    justify-center
                                    text-text-secondary
                                    transition-colors
                                    hover:bg-background-soft
                                    hover:text-text-primary
                                  "
                                >
                                  <Minus
                                    size={
                                      11
                                    }
                                    strokeWidth={
                                      1.2
                                    }
                                  />
                                </button>

                                <span
                                  className="
                                    flex
                                    h-full
                                    min-w-8
                                    items-center
                                    justify-center
                                    border-x
                                    border-text-primary/10
                                    font-roboto
                                    text-[9px]
                                    font-medium
                                  "
                                >
                                  {
                                    quantity
                                  }
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      product.id,
                                      quantity +
                                        1,
                                    )
                                  }
                                  aria-label="Increase quantity"
                                  className="
                                    flex
                                    h-full
                                    w-9
                                    items-center
                                    justify-center
                                    text-text-secondary
                                    transition-colors
                                    hover:bg-background-soft
                                    hover:text-text-primary
                                  "
                                >
                                  <Plus
                                    size={
                                      11
                                    }
                                    strokeWidth={
                                      1.2
                                    }
                                  />
                                </button>
                              </div>
                            </div>

                            {/* PRICE */}

                            <div className="text-right">
                              <span
                                className="
                                  mb-2
                                  block
                                  font-roboto
                                  text-[7px]
                                  font-medium
                                  uppercase
                                  tracking-[0.18em]
                                  text-text-muted
                                "
                              >
                                Total
                              </span>

                              <span
                                className="
                                  font-roboto
                                  text-[12px]
                                  font-medium
                                  text-text-primary
                                "
                              >
                                {(
                                  product.price *
                                  quantity
                                ).toFixed(2)}{" "}
                                €
                              </span>
                            </div>
                          </div>

                          {/* DELETE */}

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                product.id,
                              )
                            }
                            className="
                              mt-5
                              flex
                              w-fit
                              items-center
                              gap-2
                              font-roboto
                              text-[7px]
                              font-medium
                              uppercase
                              tracking-[0.16em]
                              text-text-muted
                              transition-colors
                              duration-300
                              hover:text-text-primary
                            "
                          >
                            <Trash2
                              size={11}
                              strokeWidth={1.2}
                            />

                            Remove
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                },
              )}
            </div>

            {/* ==================================================
                SUMMARY
            ================================================== */}

            <aside
              className="
                h-fit
                border
                border-text-primary/15
                bg-background-soft
                p-6
                lg:sticky
                lg:top-28
                lg:p-7
              "
            >
              <p
                className="
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-text-muted
                "
              >
                Order summary
              </p>

              <h2
                className="
                  mt-3
                  font-notoSerif
                  text-[28px]
                  font-light
                  tracking-[-0.025em]
                "
              >
                Your order
              </h2>

              <div
                className="
                  mt-7
                  border-t
                  border-text-primary/10
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-text-primary/10
                    py-4
                  "
                >
                  <span
                    className="
                      font-roboto
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Subtotal
                  </span>

                  <span
                    className="
                      font-roboto
                      text-[10px]
                      font-medium
                    "
                  >
                    {subtotal.toFixed(2)} €
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-text-primary/10
                    py-4
                  "
                >
                  <span
                    className="
                      font-roboto
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Shipping
                  </span>

                  <span
                    className="
                      font-roboto
                      text-[10px]
                      font-medium
                    "
                  >
                    {shipping === 0
                      ? "Free"
                      : `${shipping.toFixed(
                          2,
                        )} €`}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    py-5
                  "
                >
                  <span
                    className="
                      font-roboto
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Total
                  </span>

                  <span
                    className="
                      font-roboto
                      text-[14px]
                      font-medium
                    "
                  >
                    {total.toFixed(2)} €
                  </span>
                </div>
              </div>

              {subtotal < 150 && (
                <p
                  className="
                    mb-5
                    font-roboto
                    text-[8px]
                    leading-5
                    text-text-muted
                  "
                >
                  Free shipping on orders
                  over €150.
                </p>
              )}

              <Link
                to="/payment"
                className="
                  group
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  bg-background-box
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-background-main
                  transition-all
                  duration-300
                  hover:bg-text-primary/90
                  active:scale-[0.98]
                "
              >
                Proceed to payment

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

              <Link
                to="/products"
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-roboto
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-text-muted
                  transition-colors
                  duration-300
                  hover:text-text-primary
                "
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}