import { brands } from "../../data/brands";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "motion/react";

import { getProducts } from "../../services/productService";
import type { Product } from "../../types/product";

export default function BestSellers() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [savedProducts, setSavedProducts] = useState<number[]>([]);

  /*
   * =====================================================
   * LOAD BEST SELLERS
   * =====================================================
   */

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      const data = await getProducts();

      if (!mounted) return;

      setProducts(
        data.filter((product) => product.isBestSeller)
      );
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * =====================================================
   * SAVE PRODUCT
   * =====================================================
   */

  const toggleSave = (productId: number) => {
    setSavedProducts((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <section
      className="
        relative
         -translate-y-12
        w-full
        overflow-hidden
        bg-background-main
        py-24
        sm:py-32
        lg:py-40
      "
    >
      {/* ==================================================
          HEADER / INTRO
      ================================================== */}

      <div
        className="
          layout-container
          mb-3
          lg:mb-3
        "
      >
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[minmax(0,1fr)_280px]
            lg:items-end
          "
        >
          {/* TEXT */}

          <div>
            <div
              className="
                mb-2
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-text-primary/25
                "
              />

              <span
                className="
                  font-roboto
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-text-muted
                "
              >
                BESTSELLERS
              </span>
            </div>

            <h2
              className="
                mt-2
                font-notoSerif
                text-[28px]
                font-light
                leading-none
                tracking-[-0.035em]
                text-text-primary
                sm:text-[34px]
              "
            >
              Scents to remember
            </h2>

            {/* DESKTOP CTA */}

            <a
              href="/products"
              className="
                group
                mt-5
                hidden
                w-fit
                items-center
                gap-3
                border-b
                border-text-primary/25
                pb-1
                font-roboto
                text-[7px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-text-primary
                transition-opacity
                duration-300
                hover:opacity-60
                md:flex
              "
            >
              Explore all fragrances

              <ArrowRight
                size={12}
                strokeWidth={1.2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* SIDE LABEL */}

          <div
            className="
              hidden
              lg:block
              lg:pb-2
            "
          >
            <p
              className="
                font-roboto
                text-[8px]
                font-light
                uppercase
                leading-5
                tracking-[0.18em]
                text-text-muted
              "
            >
              A selection of fragrances that became
              icons.
            </p>
          </div>
        </div>
      </div>

      {/* ==================================================
          HORIZONTAL PRODUCT SCROLLER
      ================================================== */}

      <div
        ref={viewportRef}
        className="
          layout-container
          overflow-x-auto
          overflow-y-hidden
          scroll-smooth
          pb-8
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <div
          className="
            flex
            w-max
            items-start
            gap-5
            pr-[12vw]
            sm:gap-6
            lg:gap-8
          "
        >
          {/* ==================================================
              PRODUCT CARDS
          ================================================== */}

          {products.map((product, index) => {
            const isSaved = savedProducts.includes(product.id);

            const brandName =
              brands.find(
                (brand) => brand.id === product.brandId
              )?.name ?? "";

            return (
              <motion.article
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  w-[72vw]
                  shrink-0
                  sm:w-[44vw]
                  md:w-[32vw]
                  lg:w-[25vw]
                  xl:w-[22vw]
                "
              >
                {/* ==================================================
                    IMAGE / PRODUCT LINK
                ================================================== */}

                <div
                  className="
                    relative
                  "
                >
                  <a
                    href={`/products/${product.slug}`}
                    aria-label={`View ${product.name}`}
                    className="
                      group/image
                      relative
                      block
                      aspect-[4/5]
                      overflow-hidden
                      bg-background-soft
                    "
                  >
                    {/* MAIN IMAGE */}

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-opacity
                        duration-500
                        group-hover/image:opacity-0
                      "
                    />

                    {/* HOVER IMAGE */}

                    {product.hoverImage && (
                      <img
                        src={product.hoverImage}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          opacity-0
                          transition-all
                          duration-700
                          ease-out
                          group-hover/image:scale-[1.03]
                          group-hover/image:opacity-100
                        "
                      />
                    )}

                    {/* NUMBER */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-4
                        z-10
                        font-roboto
                        text-[8px]
                        tracking-[0.18em]
                        text-text-primary/45
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* VIEW BUTTON */}

<span
  className="
    pointer-events-none
    absolute
    bottom-4
    left-4
    right-4
    z-20
    flex
    h-10
    translate-y-0
    items-center
    justify-center
    bg-background-main/90
    font-roboto
    text-[8px]
    font-medium
    uppercase
    tracking-[0.2em]
    text-text-primary
    opacity-100
    backdrop-blur-sm
    transition-all
    duration-500
    md:translate-y-2
    md:opacity-0
    md:group-hover/image:translate-y-0
    md:group-hover/image:opacity-100
  "
>
  View fragrance
</span>
       </a>


                  <button
                    type="button"
                    aria-label={
                      isSaved
                        ? `Remove ${product.name} from saved`
                        : `Save ${product.name}`
                    }
                    aria-pressed={isSaved}
                    onClick={() => toggleSave(product.id)}
                    className="
                      absolute
                      right-4
                      top-4
                      z-30
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      bg-background-main/85
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:bg-background-main
                      active:scale-95
                    "
                  >
                    <Heart
                      size={15}
                      strokeWidth={1.2}
                      className={
                        isSaved
                          ? "fill-text-primary text-text-primary"
                          : "text-text-primary/60"
                      }
                    />
                  </button>
                </div>

                {/* ==================================================
                    PRODUCT INFORMATION
                ================================================== */}

                <div className="pt-5">
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    {/* NAME + BRAND */}

                    <div>
                      {/* BRAND */}

                      <p
                        className="
                          mb-2
                          font-roboto
                          text-[7px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-text-muted
                        "
                      >
                        {brandName}
                      </p>

                      {/* PRODUCT NAME */}

                      <h3
                        className="
                          font-notoSerif
                          text-[16px]
                          font-light
                          leading-tight
                          text-text-primary
                        "
                      >
                        {product.name}
                      </h3>
                    </div>

                    {/* PRICE */}

                    <span
                      className="
                        shrink-0
                        font-roboto
                        text-[9px]
                        text-text-primary/65
                      "
                    >
                      ${product.price}
                    </span>
                  </div>

                  {/* ==================================================
                      DETAILS
                  ================================================== */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-3
                      border-t
                      border-text-primary/10
                      pt-3
                    "
                  >
                    {/* GENDER */}

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

                    {/* CONCENTRATION */}

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

                    {/* VOLUME */}

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

                  {/* ==================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      mt-4
                      max-w-[280px]
                      font-roboto
                      text-[8px]
                      font-light
                      leading-5
                      text-text-muted
                    "
                  >
                    {product.description}
                  </p>
                </div>
              </motion.article>
            );
          })}

          {/* ==================================================
              END CARD
          ================================================== */}

          <a
            href="/products"
            className="
              group
              flex
              w-[55vw]
              shrink-0
              flex-col
              items-start
              justify-center
              self-stretch
              sm:w-[32vw]
              lg:w-[24vw]
            "
          >
            <span
              className="
                font-roboto
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-text-muted
              "
            >
              Continue exploring
            </span>

            <span
              className="
                mt-5
                flex
                items-center
                gap-4
                font-notoSerif
                text-[26px]
                font-light
                text-text-primary
              "
            >
              All fragrances

              <ArrowRight
                size={20}
                strokeWidth={1}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-2
                "
              />
            </span>
          </a>
        </div>
      </div>

      {/* ==================================================
          MOBILE FOOTER
      ================================================== */}

      <div
        className="
          layout-container
          mt-2
          flex
          items-center
          justify-between
          gap-6
          sm:hidden
        "
      >
        {/* SWIPE HINT */}

        <span
          className="
            font-roboto
            text-[7px]
            uppercase
            tracking-[0.2em]
            text-text-muted
          "
        >
          Swipe to explore
        </span>

        {/* MOBILE CTA */}

        <a
          href="/products"
          className="
            group
            flex
            shrink-0
            items-center
            gap-2
            border-b
            border-text-primary/25
            pb-1.5
            font-roboto
            text-[7px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-text-primary
            transition-opacity
            duration-300
            active:opacity-50
          "
        >
          View all

          <ArrowRight
            size={12}
            strokeWidth={1.2}
            className="
              transition-transform
              duration-300
              group-active:translate-x-1
            "
          />
        </a>
      </div>
    </section>
  );
}