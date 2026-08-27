import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
} from "lucide-react";
import Footer from "../components/Footer/Footer";
import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  Link,
  useParams,
} from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

import { products } from "../data/products";
import { brands } from "../data/brands";

export default function ProductPage() {
  const { slug } = useParams<{
    slug: string;
  }>();

  const [saved, setSaved] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
const [added, setAdded] = useState(false);
  const product = products.find(
    (item) => item.slug === slug,
  );
const {
  addToCart,
} = useCart();
  /*
   * ==================================================
   * PRODUCT NOT FOUND
   * ==================================================
   */

  if (!product) {
    return (
      <main
        className="
          min-h-screen
          bg-background-main
          text-text-primary
        "
      >
        <div
          className="
            layout-container
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            px-5
            text-center
          "
        >
          <span
            className="
              font-roboto
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-text-secondary
            "
          >
            404
          </span>

          <h1
            className="
              mt-4
              font-notoSerif
              text-[44px]
              font-light
              leading-none
              tracking-[-0.05em]
            "
          >
            Product not found
          </h1>

          <p
            className="
              mt-4
              max-w-[340px]
              font-roboto
              text-[11px]
              leading-6
              text-text-secondary
            "
          >
            The product you're looking for
            doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/products"
            className="
              mt-8
              inline-flex
              h-10
              items-center
              justify-center
              border
              border-border/20
              px-6
              font-roboto
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]
              transition-all
              duration-200
              hover:border-text-primary
              hover:bg-background-box
              hover:text-background-main
            "
          >
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const brand = brands.find(
    (item) => item.id === product.brandId,
  );

  const images = product.images;

  const currentImage =
    images[activeImage]?.url ??
    images[0]?.url;

  /*
   * ==================================================
   * IMAGE NAVIGATION
   * ==================================================
   */

  function nextImage() {
    setActiveImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1,
    );
  }

  function previousImage() {
    setActiveImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  }

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
          TOP
      ================================================== */}

      <header
        className="
          layout-container
          px-5
          pb-5
          pt-24
          sm:px-6
          sm:pt-28
          lg:px-8
          lg:pb-6
          lg:pt-30
        "
      >
        <Link
          to="/products"
          className="
            group
            inline-flex
            items-center
            gap-2
            font-roboto
            text-[8px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-text-secondary
            transition-colors
            duration-200
            hover:text-text-primary
          "
        >
          <ArrowLeft
            size={13}
            strokeWidth={1}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to collection
        </Link>
      </header>

      {/* ==================================================
          PRODUCT AREA
      ================================================== */}

      <section
        className="
          layout-container
          grid
          grid-cols-1
          gap-8
          px-5
          pb-20
          sm:px-6
          lg:grid-cols-[1.12fr_0.88fr]
          lg:gap-14
          lg:px-8
          lg:pb-24
        "
      >
        {/* ==================================================
            IMAGE AREA
        ================================================== */}

        <div className="min-w-0">
          {/* ==================================================
              MAIN IMAGE
          ================================================== */}

          <div
            className="
              group
              relative
              min-h-[420px]
              overflow-hidden
              border
              border-border/20
              bg-background-soft
              sm:min-h-[500px]
              lg:min-h-[610px]
            "
          >
         <AnimatePresence
  mode="sync"
  initial={false}
>
  <motion.div
    key={currentImage}
    initial={{
      opacity: 0,
      x: 70,
      scale: 1.055,
      filter: "blur(9px)",
    }}
    animate={{
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    }}
    exit={{
      opacity: 0,
      x: -70,
      scale: 0.985,
      filter: "blur(7px)",
    }}
    transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
    "
  >
    {/* PRODUCT IMAGE */}

    <img
      src={currentImage}
      alt={
        images[activeImage]?.alt ??
        product.name
      }
      className="
        h-full
        w-full
        object-contain
        p-5
        sm:p-7
        lg:p-9
      "
    />

    {/* SHINE */}

    <motion.div
      key={`shine-${currentImage}`}
      initial={{
        x: "-130%",
      }}
      animate={{
        x: "400%",
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        pointer-events-none
        absolute
        inset-y-0
        left-[-100%]
        z-10
        w-1/2
        skew-x-[-15deg]
        bg-gradient-to-r
        from-transparent
        via-white/30
        to-transparent
      "
    />
  </motion.div>
</AnimatePresence>
            {/* ==================================================
                PREVIOUS
            ================================================== */}

            {images.length > 1 && (
              <motion.button
                type="button"
                onClick={previousImage}
                whileHover={{
                  x: -2,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  absolute
                  left-4
                  top-1/2
                  z-20
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  border
                  border-border/20
                  bg-background-main/80
                  text-text-primary
                  opacity-0
                  backdrop-blur-md
                  transition-opacity
                  duration-200
                  group-hover:opacity-100
                "
                aria-label="Previous image"
              >
                <ChevronLeft
                  size={14}
                  strokeWidth={1}
                />
              </motion.button>
            )}

            {/* ==================================================
                NEXT
            ================================================== */}

            {images.length > 1 && (
              <motion.button
                type="button"
                onClick={nextImage}
                whileHover={{
                  x: 2,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  absolute
                  right-4
                  top-1/2
                  z-20
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  border
                  border-border/20
                  bg-background-main/80
                  text-text-primary
                  opacity-0
                  backdrop-blur-md
                  transition-opacity
                  duration-200
                  group-hover:opacity-100
                "
                aria-label="Next image"
              >
                <ChevronRight
                  size={14}
                  strokeWidth={1}
                />
              </motion.button>
            )}

            {/* ==================================================
                IMAGE COUNT
            ================================================== */}

            {images.length > 1 && (
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  z-20
                  border
                  border-border/20
                  bg-background-main/80
                  px-3
                  py-2
                  font-roboto
                  text-[8px]
                  tracking-[0.12em]
                  text-text-secondary
                  backdrop-blur-md
                "
              >
                {String(
                  activeImage + 1,
                ).padStart(2, "0")}{" "}
                /{" "}
                {String(
                  images.length,
                ).padStart(2, "0")}
              </div>
            )}
          </div>

          {/* ==================================================
              THUMBNAILS
          ================================================== */}

          {images.length > 1 && (
            <div
              className="
                mt-3
                grid
                grid-cols-4
                gap-2
                sm:grid-cols-5
              "
            >
              {images
                .slice(0, 5)
                .map(
                  (image, index) => (
                    <motion.button
                      key={image.id}
                      type="button"
                      onClick={() =>
                        setActiveImage(
                          index,
                        )
                      }
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`
                        relative
                        overflow-hidden
                        border
                        border-border/20
                        bg-background-soft
                        transition-opacity
                        duration-200
                        ${
                          activeImage ===
                          index
                            ? "opacity-100"
                            : "opacity-50 hover:opacity-80"
                        }
                      `}
                      aria-label={`View image ${
                        index + 1
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={
                          image.alt ??
                          product.name
                        }
                        className="
                          aspect-square
                          w-full
                          object-contain
                          p-2
                        "
                      />

                      {activeImage ===
                        index && (
                        <motion.span
                          layoutId="activeProductImage"
                          className="
                            absolute
                            inset-x-0
                            bottom-0
                            h-px
                            bg-border
                          "
                        />
                      )}
                    </motion.button>
                  ),
                )}
            </div>
          )}
        </div>

        {/* ==================================================
            PRODUCT INFORMATION
        ================================================== */}

        <div
          className="
            flex
            min-w-0
            flex-col
            lg:sticky
            lg:top-28
            lg:self-start
          "
        >
          {/* BRAND */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.08,
            }}
            className="
              font-roboto
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-text-secondary
            "
          >
            {brand?.name}
          </motion.div>

          {/* NAME */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mt-3
              max-w-[520px]
              font-notoSerif
              text-[40px]
              font-light
              leading-[0.94]
              tracking-[-0.055em]
              sm:text-[48px]
            "
          >
            {product.name}
          </motion.h1>

          {/* PRICE */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
            className="
              mt-5
              flex
              items-baseline
              gap-2
            "
          >
            <span
              className="
                font-roboto
                text-[13px]
                font-medium
                text-text-primary
              "
            >
              {product.price}
            </span>

            <span
              className="
                font-roboto
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-text-secondary
              "
            >
              {product.currency}
            </span>
          </motion.div>

          {/* DESCRIPTION */}

          {product.description && (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.25,
              }}
              className="
                mt-6
                max-w-[500px]
                font-roboto
                text-[11px]
                leading-6
                text-text-secondary
              "
            >
              {product.description}
            </motion.p>
          )}

          {/* ==================================================
              DETAILS TABLE
          ================================================== */}

          <div
            className="
              mt-7
              border-t
              border-border/25
            "
          >
            {[
              [
                "Concentration",
                product.concentration,
              ],
              [
                "Volume",
                product.volume
                  ? `${product.volume} ml`
                  : undefined,
              ],
              [
                "Gender",
                product.gender?.join(
                  " / ",
                ),
              ],
              [
                "Country",
                product.country,
              ],
              [
                "Longevity",
                product.longevity,
              ],
              [
                "Sillage",
                product.sillage,
              ],
              [
                "Fragrance",
                product.fragranceFamilies?.join(
                  " / ",
                ),
              ],
              [
                "Season",
                product.seasons?.join(
                  " / ",
                ),
              ],
            ]
              .filter(
                (item) =>
                  Boolean(item[1]),
              )
              .map(
                ([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay:
                        0.3 +
                        index * 0.035,
                    }}
                    className="
                      grid
                      grid-cols-[115px_1fr]
                      border-b
                      border-border/20
                      py-3
                      sm:grid-cols-[135px_1fr]
                    "
                  >
                    <span
                      className="
                        font-roboto
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-text-secondary
                      "
                    >
                      {label}
                    </span>

                    <span
                      className="
                        font-roboto
                        text-[10px]
                        leading-5
                        text-text-primary
                      "
                    >
                      {value}
                    </span>
                  </motion.div>
                ),
              )}
          </div>

          {/* ==================================================
              ACTIONS
          ================================================== */}

          <div
            className="
              mt-7
              flex
              gap-2
            "
          >
            {/* ADD TO BAG */}

            <motion.button
              type="button"
              onClick={() => 
                {addToCart(product.id);
                setAdded(true);
              setTimeout(() => {
                setAdded(false);
                }, 500);
              }}
             
              whileHover={{
                backgroundColor:
                  "#0F0F0F",
              }}
              whileTap={{
                scale: 0.985,
              }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className="
                flex
                h-11
                flex-1
                items-center
                justify-center
                gap-2
                bg-background-box
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-background-main
                transition-colors
                duration-150
              "
            >
              {added ? "Added" : "Add to bag"}

              <ShoppingBag
                size={13}
                strokeWidth={1}
              />
            </motion.button>

            {/* SAVE */}

            <motion.button
              type="button"
              onClick={() =>
                setSaved(
                  (value) => !value,
                )
              }
              whileHover={{
                backgroundColor:
                  "#FCFCF5",
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                border
                border-border/25
                bg-background-main
                transition-colors
                duration-150
              "
              aria-label="Save product"
            >
              <Heart
                size={15}
                strokeWidth={1}
                className={
                  saved
                    ? "fill-text-primary text-text-primary"
                    : "text-text-secondary"
                }
              />
            </motion.button>
          </div>

          {/* ==================================================
              STOCK
          ================================================== */}

          {typeof product.stock ===
            "number" && (
            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                border-t
                border-border/20
                pt-3
              "
            >
              <span
                className="
                  font-roboto
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-text-secondary
                "
              >
                Availability
              </span>

              <span
                className="
                  font-roboto
                  text-[9px]
                  text-text-secondary
                "
              >
                {product.stock > 0
                  ? "In stock"
                  : "Out of stock"}
              </span>
            </div>
          )}
        </div>
      </section>
       <Footer />
    </main>
  );
}