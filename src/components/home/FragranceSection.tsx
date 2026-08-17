import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { getFragrances } from "../../services/fragranceService";

type Fragrance = {
  label: string;
  href: string;
  image: string;
};

const descriptions: Record<string, string> = {
  Floral:
    "Soft petals, delicate blooms, and a romantic character.",

  Woody:
    "Warm woods, rich textures, and a refined depth.",

  Fresh:
    "Clean, airy notes with a crisp and effortless feeling.",

  Citrus:
    "Bright citrus notes with a luminous character.",

  Fruity:
    "Juicy fruits, soft sweetness, and an expressive character.",

  Aquatic:
    "Cool, transparent notes inspired by water.",

  Amber:
    "Warm amber, soft resins, and a sensual golden depth.",
};

const imagePositions: Record<string, string> = {
  Floral: "center center",
  Woody: "20% center",
  Fresh: "18% center",
  Citrus: "left center",
  Fruity: "88% center",
  Aquatic: "62% center",
  Amber: "right center",
};

export default function FragranceSection() {
  const fragrances = getFragrances() as Fragrance[];

  const sectionRef = useRef<HTMLElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const active = fragrances[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!active) return null;

  const activeDescription =
    descriptions[active.label] ??
    "Discover a distinctive fragrance family.";

  const activeImagePosition =
    imagePositions[active.label] ??
    "center center";

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0
        ? fragrances.length - 1
        : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === fragrances.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        layout-container
        py-10
        sm:py-14
        lg:py-16
      "
    >
      {/* =====================================================
          INTRO
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-7
          max-w-[430px]
          pt-4
          sm:mb-8
          sm:pt-0
          lg:mt-0
        "
      >
        <div className="mb-3 flex items-center gap-3">
          <span
            className="
              h-px
              w-8
              bg-text-primary/30
            "
          />

          <span
            className="
              font-roboto
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-text-muted
            "
          >
            Fragrance
          </span>
        </div>

        <h2
          className="
            font-notoSerif
            text-[28px]
            font-light
            leading-[1.08]
            tracking-[-0.035em]
            text-text-primary
            sm:text-[34px]
            lg:text-[38px]
          "
        >
          Explore the language
          <br />
          of scent.
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
          Discover fragrance families through
          their atmosphere, texture and character.
        </p>
      </motion.div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 1.1,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          aspect-[4/3]
          overflow-hidden
          bg-[#E8E3DB]
          sm:aspect-[16/8]
          lg:aspect-[16/7]
        "
      >
<AnimatePresence mode="sync">
  <motion.a
    key={active.label}
    href={active.href}
    initial={{
      opacity: 0.92,
    }}
    animate={{
      opacity: 1,
    }}
    exit={{
      opacity: 0.92,
    }}
    transition={{
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      absolute
      inset-0
      block
      overflow-hidden
    "
  >
            <motion.img
              src={active.image}
              alt={active.label}
              initial={{
                scale: 1.06,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                h-full
                w-full
                object-cover
              "
              style={{
                objectPosition:
                  activeImagePosition,
              }}
            />

            {/* IMAGE OVERLAY */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/35
                via-black/5
                to-transparent
              "
            />

            {/* IMAGE TEXT */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                px-5
                pb-6
                sm:px-8
                sm:pb-8
                lg:px-10
                lg:pb-10
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.label}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    max-w-[320px]
                  "
                >
                  <span
                    className="
                      font-roboto
                      text-[7px]
                      uppercase
                      tracking-[0.3em]
                      text-white/65
                    "
                  >
                    Fragrance family
                  </span>

                  <h3
                    className="
                      mt-2
                      font-notoSerif
                      text-[25px]
                      font-light
                      tracking-[-0.035em]
                      text-white
                      sm:text-[31px]
                    "
                  >
                    {active.label}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[290px]
                      font-roboto
                      text-[11px]
                      font-light
                      leading-5
                      text-white/75
                      sm:text-[12px]
                    "
                  >
                    {activeDescription}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.a>
        </AnimatePresence>

        {/* =================================================
            MOBILE ARROWS
        ================================================= */}

        <div
          className="
            absolute
            bottom-5
            right-5
            z-20
            flex
            items-center
            gap-2
            sm:bottom-7
            sm:right-7
            md:hidden
          "
        >
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous fragrance"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border
              border-white/40
              bg-black/10
              text-white
              backdrop-blur-sm
              transition-colors
              duration-300
              active:bg-white/20
            "
          >
            <ArrowLeft
              size={14}
              strokeWidth={1}
            />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next fragrance"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border
              border-white/40
              bg-black/10
              text-white
              backdrop-blur-sm
              transition-colors
              duration-300
              active:bg-white/20
            "
          >
            <ArrowRight
              size={14}
              strokeWidth={1}
            />
          </button>
        </div>
      </motion.div>

      {/* =====================================================
          DESKTOP FRAGRANCE NAMES
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          delay: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-5
          hidden
          border-t
          border-text-primary/10
          md:block
        "
      >
        <div
          className="
            grid
            grid-cols-7
          "
        >
          {fragrances.map(
            (fragrance, index) => {
              const isActive =
                index === activeIndex;

              return (
                <a
                  key={fragrance.label}
                  href={fragrance.href}
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    justify-center
                    border-r
                    border-text-primary/10
                    px-2
                    last:border-r-0
                  "
                >
                 <span
  className={`
    group
    flex
    items-center
    gap-2
    font-notoSerif
    text-[12px]
    tracking-[-0.01em]
    transition-all
    duration-300
    ${
      isActive
        ? "font-medium text-text-primary"
        : "font-light text-text-muted"
    }
  `}
>
  <span>
    {fragrance.label}
  </span>

  <ArrowRight
    size={11}
    strokeWidth={1.2}
    className={`
      transition-all
      duration-300
      ${
        isActive
          ? "translate-x-0 opacity-100"
          : "-translate-x-1 opacity-0"
      }
    `}
  />
</span>
                </a>
              );
            }
          )}
        </div>
      </motion.div>

      {/* =====================================================
          MOBILE ACTIVE FRAGRANCE NAME
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          delay: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-text-primary/10
          pt-4
          md:hidden
        "
      >
        <a
          href={active.href}
          className="
            font-notoSerif
            text-[15px]
            font-light
            text-text-primary
          "
        >
          {active.label}
        </a>

        <span
          className="
            font-roboto
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-text-muted
          "
        >
          Tap image or name
        </span>
      </motion.div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          visible
            ? {
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="
          mt-4
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            font-roboto
            text-[7px]
            uppercase
            tracking-[0.28em]
            text-text-muted
          "
        >
          Seven families
        </span>

        <a
          href="/fragrances"
          className="
            group
            flex
            items-center
            gap-3
            font-roboto
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-text-primary
          "
        >
          <span>
            Discover all
          </span>

          <span
            className="
              h-px
              w-6
              bg-text-primary/40
              transition-all
              duration-500
              group-hover:w-10
              group-hover:bg-text-primary
            "
          />
        </a>
      </motion.div>
    </section>
  );
}