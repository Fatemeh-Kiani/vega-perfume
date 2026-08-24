import {
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Search,
  X,
} from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { getProducts } from "../../services/productService";
import { searchProducts } from "../../utils/searchProducts";

import type { Product } from "../../types/product";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const historyStateRef =
    useRef(false);

  const [query, setQuery] =
    useState("");

  const [products, setProducts] =
    useState<Product[]>([]);

  const [isLoading, setIsLoading] =
    useState(false);

  /*
   * ==================================================
   * LOAD PRODUCTS
   * ==================================================
   */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let mounted = true;

    async function loadProducts() {
      setIsLoading(true);

      try {
        const data =
          await getProducts();

        if (!mounted) {
          return;
        }

        setProducts(data);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, [isOpen]);

  /*
   * ==================================================
   * SEARCH RESULTS
   * ==================================================
   */

  const results = query.trim()
    ? searchProducts(
        products,
        query,
      )
    : [];

  const visibleResults =
    results.slice(0, 8);

  /*
   * ==================================================
   * BODY SCROLL LOCK
   * ==================================================
   */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [isOpen]);

  /*
   * ==================================================
   * HISTORY / MOBILE BACK
   * ==================================================
   */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    window.history.pushState(
      {
        ...window.history.state,
        vegaSearchOverlay: true,
      },
      "",
      window.location.href,
    );

    historyStateRef.current =
      true;

    function handlePopState() {
      if (
        !historyStateRef.current
      ) {
        return;
      }

      historyStateRef.current =
        false;

      setQuery("");
      onClose();
    }

    window.addEventListener(
      "popstate",
      handlePopState,
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState,
      );
    };
  }, [isOpen, onClose]);

  /*
   * ==================================================
   * AUTO FOCUS
   * ==================================================
   */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timeout =
      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 180);

    return () => {
      window.clearTimeout(
        timeout,
      );
    };
  }, [isOpen]);

  /*
   * ==================================================
   * ESCAPE
   * ==================================================
   */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (
        event.key === "Escape"
      ) {
        handleClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen]);

  /*
   * ==================================================
   * CLOSE
   * ==================================================
   */

  const handleClose = () => {
    setQuery("");

    if (
      historyStateRef.current
    ) {
      historyStateRef.current =
        false;

      window.history.back();

      return;
    }

    onClose();
  };

  /*
   * ==================================================
   * VIEW ALL
   * ==================================================
   */

  const handleViewAll = () => {
    const value =
      query.trim();

    if (!value) {
      return;
    }

    handleClose();

    navigate(
      `/products?search=${encodeURIComponent(
        value,
      )}`,
    );
  };

  /*
   * ==================================================
   * SUBMIT
   * ==================================================
   */

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    handleViewAll();
  };

  /*
   * ==================================================
   * SUGGESTIONS
   * ==================================================
   */

  const suggestions = [
    "Chanel",
    "Dior",
    "Le Labo",
    "Tom Ford",
    "Woody",
    "Floral",
  ];

  /*
   * ==================================================
   * RENDER
   * ==================================================
   */

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.28,
            ease: "easeOut",
          }}
          className="
            fixed
            inset-0
            z-[100]
            overflow-y-auto
            bg-background-main
            font-roboto
          "
        >
          {/* ==================================================
              HEADER
          ================================================== */}

          <header
            className="
              border-b
              border-border/20
            "
          >
      <div
  className="
    layout-container
    relative
    flex
    h-[72px]
    items-center
    justify-between
  "
>
  {/* BACK */}

  <button
    type="button"
    onClick={handleClose}
    aria-label="Back"
    className="
      group
      flex
      items-center
      gap-1.5
      text-text-secondary
      transition-colors
      duration-300
      hover:text-text-primary
    "
  >
    <ArrowRight
      size={13}
      strokeWidth={1.2}
      className="
        rotate-180
        transition-transform
        duration-300
        group-hover:-translate-x-0.5
      "
    />

    <span
      className="
        font-roboto
        text-[10px]
        font-normal
        uppercase
        tracking-[0.2em]
      "
    >
      Back
    </span>
  </button>

  {/* VEGA */}

  <span
    className="
      absolute
      left-1/2
      -translate-x-1/2
      font-notoSerif
      text-[22px]
      font-light
      tracking-[0.22em]
      text-text-primary
    "
  >
    VEGA
  </span>
</div>
          </header>

          {/* ==================================================
              CONTENT
          ================================================== */}

          <main
            className="
              layout-container
              pb-20
              pt-12
              sm:pt-16
              lg:pt-20
            "
          >
            {/* ==================================================
                SEARCH LABEL
            ================================================== */}

            <p
              className="
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-text-secondary
              "
            >
              Search VEGA
            </p>

            {/* ==================================================
                SEARCH FORM
            ================================================== */}

            <form
              onSubmit={
                handleSubmit
              }
              className="
                mt-7
                sm:mt-9
              "
            >
              <div
                className="
                  flex
                  items-center
                  border-b
                  border-border/20
                  pb-1
                  transition-colors
                  duration-500
                  focus-within:border-border/20
                  sm:pb-4
                "
              >
                <Search
                  size={17}
                  strokeWidth={1.15}
                  className="
                    
                    shrink-0
                    text-text-secondary
                  "
                />

 <input
  ref={inputRef}
  type="search"
  value={query}
  onChange={(event) =>
    setQuery(
      event.target.value,
    )
  }
  placeholder="Search fragrances, brands..."
  aria-label="Search products"
  className="
    px-2
    min-w-0
    flex-1
    bg-transparent
    font-roboto
    text-[14px]
    font-light
    tracking-[-0.01em]
    text-text-primary
    outline-none
    placeholder:text-text-secondary/40
    sm:text-[16px]
    lg:text-[18px]
    [&::-webkit-search-cancel-button]:appearance-none
    [&::-webkit-search-decoration]:appearance-none
  "
/>
                {query && (
                  <button
                    type="button"
                    onClick={() =>
                      setQuery("")
                    }
                    aria-label="Clear search"
                    className="
                    group
                      ml-3
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                       border
                       border-border/20
                      text-text-secondary
                      transition-colors
                      hover:border-border/40
                      hover:text-text-primary
                    "
                  >
                    <X
                      size={14}
                      strokeWidth={1.2 }
                        className=" transition-transform
                        duration-300
                        group-hover:scale-100
                        "
                    />
                  </button>
                )}
              </div>
            </form>

            {/* ==================================================
                RESULTS
            ================================================== */}

            {query.trim() && (
              <motion.section
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  mt-10
                  sm:mt-12
                "
              >

                {/* EMPTY */}

                {!isLoading &&
                  results.length ===
                    0 && (
                    <div
                      className="
                        flex
                        min-h-[220px]
                        items-center
                        justify-center
                        bg-background-soft
                      "
                    >
                      <div className="text-center">
                        <p
                          className="
                            font-notoSerif
                            text-[30px]
                            font-light
                            tracking-[-0.01em]
                            text-text-primary
                          "
                        >
                          Nothing found
                        </p>

                        <p
                          className="
                            mt-2
                            font-roboto
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            text-text-secondary
                          "
                        >
                          Try another
                          fragrance
                        </p>
                      </div>
                    </div>
                  )}

                {/* PRODUCT RESULTS */}

                {!isLoading &&
                  visibleResults.length >
                    0 && (
                    <>
                      <div
                        className="
                          grid
                          grid-cols-2
                          gap-x-4
                          gap-y-9
                          sm:grid-cols-3
                          sm:gap-x-6
                          sm:gap-y-12
                          lg:grid-cols-4
                          lg:gap-x-7
                          lg:gap-y-14
                        "
                      >
                        {visibleResults.map(
                          (
                            product,
                            index,
                          ) => (
                            <motion.div
                              key={
                                product.id
                              }
                              initial={{
                                opacity: 0,
                                y: 10,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration:
                                  0.3,
                                delay:
                                  index *
                                  0.03,
                              }}
                            >
                              <Link
                                to={`/products/${product.slug}`}
                                onClick={
                                  handleClose
                                }
                                className="
                                  group
                                  block
                                "
                              >
                                {/* IMAGE */}

                                <div
                                  className="
                                    aspect-[4/5]
                                    overflow-hidden
                                    bg-background-soft
                                  "
                                >
                                  <img
                                    src={
                                      product
                                        .images?.[0]
                                        ?.url ??
                                      ""
                                    }
                                    alt={
                                      product
                                        .images?.[0]
                                        ?.alt ??
                                      product.name
                                    }
                                    className="
                                      h-full
                                      w-full
                                      object-cover
                                      transition-transform
                                      duration-700
                                      ease-out
                                      group-hover:scale-[1.02]
                                    "
                                  />
                                </div>

                                {/* INFO */}

                                <div
                                  className="
                                    mt-3
                                  "
                                >
                                  <p
                                    className="
                                      font-notoSerif
                                      text-[12px]
                                      font-light
                                      leading-tight
                                      text-text-primary
                                      sm:text-[13px]
                                    "
                                  >
                                    {
                                      product.name
                                    }
                                  </p>

                                  <p
                                    className="
                                      mt-1.5
                                      font-roboto
                                      text-[7px]
                                      uppercase
                                      tracking-[0.15em]
                                      text-text-secondary
                                    "
                                  >
                                    $
                                    {
                                      product.price
                                    }
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ),
                        )}
                      </div>

                      {/* VIEW ALL */}

                      {results.length >
                        8 && (
                        <button
                          type="button"
                          onClick={
                            handleViewAll
                          }
                          className="
                            group
                            mt-12
                            flex
                            w-full
                            items-center
                            justify-between
                            border-y
                            border-border/20
                            py-4
                            text-left
                            transition-colors
                            duration-300
                            hover:bg-background-soft
                          "
                        >
                          <span
                            className="
                              font-roboto
                              text-[7px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-text-primary
                            "
                          >
                            View all{" "}
                            {
                              results.length
                            }{" "}
                            results
                          </span>

                          <span
                            className="
                              flex
                              items-center
                              gap-2
                              font-roboto
                              text-[7px]
                              uppercase
                              tracking-[0.15em]
                              text-text-primary
                            "
                          >
                            Explore

                            <ArrowRight
                              size={
                                13
                              }
                              strokeWidth={
                                1.1
                              }
                              className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                              "
                            />
                          </span>
                        </button>
                      )}
                    </>
                  )}
              </motion.section>
            )}

            {/* ==================================================
                SUGGESTIONS
            ================================================== */}

            {!query.trim() && (
              <motion.section
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.12,
                  duration: 0.35,
                }}
                className="
                  mt-10
                  pt-5
                  sm:mt-10
                  sm:pt-6
                "
              >
                <p
                  className="
                    font-roboto
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.24em]
                    text-text-secondary
                  "
                >
                  Suggested
                </p>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-x-6
                    gap-y-3
                  "
                >
                  {suggestions.map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setQuery(
                            item,
                          )
                        }
                        className="
                          group
                          relative
                          font-notoSerif
                          text-[13px]
                          font-light
                          text-text-primary
                        "
                      >
                        {item}

                        <span
                          className="
                            absolute
                            -bottom-0.5
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
                      </button>
                    ),
                  )}
                </div>
              </motion.section>
            )}
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}