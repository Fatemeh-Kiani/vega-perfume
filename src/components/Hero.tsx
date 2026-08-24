import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import heroImage from "../assets/images/hero/hero.jpg";

export default function Hero() {
  const openHome = () => {
    window.dispatchEvent(
      new CustomEvent("vega:open-home")
    );
  };

  return (
    <section
      className="
        fixed
        inset-0
        z-0
        h-screen
        w-full
        overflow-hidden
        bg-background-main
      "
    >
      {/* ==================================================
          HERO IMAGE
      ================================================== */}

      <motion.div
        initial={{
          scale: 1.06,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          inset-0
        "
      >
        <img
          src={heroImage}
          alt="VEGA fragrance collection"
          className="
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>

      {/* ==================================================
          DARK IMAGE TREATMENT
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/15
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/45
          via-black/15
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/65
          via-black/10
          to-transparent
        "
      />

      {/* ==================================================
          EDITORIAL FRAME
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-4
          z-20
          border
          border-white/15
          sm:inset-6
          lg:inset-8
        "
      />

      {/* ==================================================
          TOP INFORMATION
      ================================================== */}

      <div
        className="
          layout-container
          absolute
          inset-x-0
          top-0
          z-30
          flex
          items-start
          justify-between
          pt-8
          sm:pt-10
          lg:pt-12
        "
      >
        {/* COLLECTION */}

        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.9,
          }}
          className="
            flex
            flex-col
            gap-1
          "
        >
          <span
            className="
              font-roboto
              text-[6px]
              uppercase
              tracking-[0.32em]
              text-white/45
            "
          >
            Fragrance House
          </span>

          <span
            className="
              font-roboto
              text-[6px]
              uppercase
              tracking-[0.28em]
              text-white/30
            "
          >
            Collection 01
          </span>
        </motion.div>

        {/* YEAR */}

        <motion.span
          initial={{
            opacity: 0,
            x: 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1.1,
            duration: 0.9,
          }}
          className="
            font-roboto
            text-[6px]
            uppercase
            tracking-[0.3em]
            text-white/35
          "
        >
          VEGA / 2026
        </motion.span>
      </div>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          layout-container
          absolute
          inset-x-0
          bottom-0
          z-30
          pb-24
          sm:pb-28
          lg:pb-32
        "
      >
        <div
          className="
            max-w-[900px]
          "
        >
          {/* ==================================================
              EYEBROW
          ================================================== */}

          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.9,
            }}
            className="
              mb-5
              block
              font-roboto
              text-[7px]
              uppercase
              tracking-[0.35em]
              text-white/55
            "
          >
            The art of wearing scent
          </motion.span>

          {/* ==================================================
              VEGA
          ================================================== */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 1.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-notoSerif
                text-[72px]
                font-light
                leading-[0.78]
                tracking-[-0.075em]
                text-[#E9E4DB]
                sm:text-[100px]
                md:text-[120px]
                lg:text-[clamp(110px,12vw,190px)]
              "
            >
              VEGA
            </motion.h1>
          </div>

          {/* ==================================================
              TITLE
          ================================================== */}

          <div className="mt-6 overflow-hidden">
            <motion.h2
              initial={{
                y: "110%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.15,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-[620px]
                font-notoSerif
                text-[30px]
                font-light
                leading-[0.95]
                tracking-[-0.045em]
                text-[#E9E4DB]
                sm:text-[40px]
                lg:text-[52px]
              "
            >
              A scent worth
              <br />

              <span className="italic">
                remembering.
              </span>
            </motion.h2>
          </div>

          {/* ==================================================
              DESCRIPTION + CTA
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.7,
              duration: 1,
            }}
            className="
              mt-7
              flex
              flex-col
              items-start
              gap-6
              sm:mt-8
            "
          >
            <p
              className="
                max-w-[300px]
                font-roboto
                text-[9px]
                font-light
                leading-5
                text-white/60
                sm:text-[10px]
                sm:leading-6
              "
            >
              An edited world of iconic
              fragrance houses, distinctive
              compositions and scents
              chosen to become part of
              your signature.
            </p>

            {/* ==================================================
                EXPLORE COLLECTION
            ================================================== */}

<a
  href="/products#filters"
  className="
    group
    flex
    h-11
    w-fit
    items-center
    gap-5
    border
    border-white/40
    bg-transparent
    px-7
    font-roboto
    text-[7px]
    font-medium
    uppercase
    tracking-[0.28em]
   text-[#E9E4DB]
    transition-all
    duration-500
    hover:border-background-main
    hover:bg-[#E9E4DB]
    hover:text-text-primary
  "
>
  <span>
    Explore Collection
  </span>

  <ArrowUpRight
    size={13}
    strokeWidth={1}
    className="
      transition-transform
      duration-500
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</a>

              <ArrowUpRight
                size={13}
                strokeWidth={1}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
          </motion.div>
        </div>
      </div>

      {/* ==================================================
          SCROLL TO DISCOVER
      ================================================== */}

      <motion.button
        type="button"
        onClick={openHome}
        aria-label="Scroll to discover VEGA"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2.1,
          duration: 0.9,
        }}
        className="
          absolute
          bottom-12
          left-1/2
          z-40
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          sm:bottom-14
        "
      >
        <span
          className="
            font-roboto
            text-[6px]
            uppercase
            tracking-[0.35em]
            text-white/45
          "
        >
          Scroll to discover
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-black/5
            backdrop-blur-sm
            transition-colors
            duration-300
            hover:border-white/50
          "
        >
          <ArrowDown
            size={12}
            strokeWidth={1}
            className="
              text-white/65
            "
          />
        </motion.span>
      </motion.button>
    </section>
  );
}