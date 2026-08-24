import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getCategories } from "../../services/categoryService";
import { media } from "../../data/media";

type CategoryItem = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
};

export default function CategorySection() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] =
    useState(0);

  const categories: CategoryItem[] =
    getCategories()
      .slice(0, 4)
      .map((category) => {
        const categoryMedia = media.find(
          (item) =>
            item.id === category.imageId,
        );

        return {
          id: category.id,
          name: category.name,
          slug: category.slug,
          description:
            category.description ??
            "Discover our curated collection.",
          image:
            categoryMedia?.url ?? "",
          alt:
            categoryMedia?.alt ??
            category.name,
        };
      });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 120);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!categories.length) {
    return null;
  }

  return (
    <section
      className="
        layout-container
        py-16
        sm:py-20
        lg:py-28
      "
    >
      {/* ==================================================
          HEADER
      ================================================== */}

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
            : undefined
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-8
          flex
          items-end
          justify-between
          sm:mb-10
          lg:mb-12
        "
      >
        <div>
          <div
            className="
              mb-3
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[#171717]
              "
            />

            <span
              className="
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#777]
              "
            >
              The collection
            </span>
          </div>

          <h2
            className="
              font-notoSerif
              text-[30px]
              font-light
              leading-none
              tracking-[-0.04em]
              text-[#171717]
              sm:text-[36px]
              lg:text-[42px]
            "
          >
            Explore your world
          </h2>
        </div>

        <span
          className="
            hidden
            font-roboto
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-[#888]
            sm:block
          "
        >
          04 collections
        </span>
      </motion.div>

      {/* ==================================================
          DESKTOP ACCORDION
      ================================================== */}

      <div
        className="
          hidden
          h-[570px]
          w-full
          gap-1
          overflow-hidden
          lg:flex
        "
      >
        {categories.map(
          (category, index) => (
            <DesktopPanel
              key={category.id}
              category={category}
              index={index}
              active={activeIndex === index}
              onActivate={() =>
                setActiveIndex(index)
              }
            />
          ),
        )}
      </div>

      {/* ==================================================
          MOBILE / TABLET ACCORDION
      ================================================== */}
<div
  className="
    flex
    gap-2
    overflow-x-auto
    overscroll-x-contain
    snap-x
    snap-mandatory
    pb-2
    lg:hidden

    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
>
  {categories.map(
    (category, index) => (
      <MobilePanel
        key={category.id}
        category={category}
        index={index}
      />
    ),
  )}
</div>
    </section>
  );
}

/* ========================================================
   DESKTOP PANEL
======================================================== */

function DesktopPanel({
  category,
  index,
  active,
  onActivate,
}: {
  category: CategoryItem;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  const imageX = useTransform(
    springX,
    [-0.5, 0.5],
    [-5, 5],
  );

  const imageY = useTransform(
    springY,
    [-0.5, 0.5],
    [-5, 5],
  );

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>,
  ) {
    onActivate();

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseEnter={onActivate}
      animate={{
        flexGrow: active ? 3.2 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        min-w-0
        overflow-hidden
        bg-[#E8E5DF]
      "
    >
      <Link
          to={`/products?category=${category.slug}`}
        className="block h-full"
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
            relative
            h-full
            w-full
            overflow-hidden
          "
        >
          {/* ==================================================
              IMAGE
          ================================================== */}

          <motion.img
            src={category.image}
            alt={category.alt}
            style={{
              x: imageX,
              y: imageY,
            }}
            animate={{
              scale: active ? 1.07 : 1.02,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* ==================================================
              GRADIENT
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-black/5
            "
          />

          {/* ==================================================
              NUMBER
          ================================================== */}

          <div
            className="
              absolute
              left-5
              top-5
              z-20
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                font-roboto
                text-[8px]
                font-medium
                tracking-[0.2em]
                text-white
              "
            >
              0{index + 1}
            </span>

            <span
              className="
                h-px
                w-7
                bg-white/60
              "
            />
          </div>

          {/* ==================================================
              VERTICAL TITLE
              inactive
          ================================================== */}

          <motion.div
            animate={{
              opacity: active ? 0 : 1,
              x: active ? -10 : 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              absolute
              bottom-6
              left-5
              z-20
              origin-left
              -rotate-90
            "
          >
            <span
              className="
                whitespace-nowrap
                font-notoSerif
                text-[21px]
                font-light
                text-white
              "
            >
              {category.name}
            </span>
          </motion.div>

          {/* ==================================================
              ACTIVE CONTENT
          ================================================== */}

          <motion.div
            initial={false}
            animate={{
              opacity: active ? 1 : 0,
              y: active ? 0 : 25,
            }}
            transition={{
              duration: 0.6,
              delay: active ? 0.12 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20
              p-7
            "
          >
            <div
              className="
                mb-4
                h-px
                w-12
                bg-white
              "
            />

            <span
              className="
                font-roboto
                text-[7px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/65
              "
            >
              Collection
            </span>

            <h3
              className="
                mt-2
                font-notoSerif
                text-[34px]
                font-light
                leading-none
                tracking-[-0.04em]
                text-white
              "
            >
              {category.name}
            </h3>

            <p
              className="
                mt-3
                max-w-[300px]
                font-roboto
                text-[9px]
                font-light
                leading-[1.7]
                text-white/75
              "
            >
              {category.description}
            </p>

            {/* BUTTON */}

            <div
              className="
                pointer-events-auto
                mt-5
                inline-flex
              "
            >
              <span
                className="
                  flex
                  h-10
                  items-center
                  gap-3
                  border
                  border-white
                  px-5
                  text-white
                  transition-all
                  duration-500
                  hover:bg-[#FCFBF8]
                  hover:text-[#1A1A1A]
                "
              >
                <span
                  className="
                    font-roboto
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Explore
                </span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.2}
                />
              </span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ========================================================
   MOBILE PANEL
======================================================== */
function MobilePanel({
  category,
  index,
}: {
  category: CategoryItem;
  index: number;
}) {
  return (
    <Link
        to={`/products?category=${category.slug}`}
      className="
        group
        relative
        block
        h-[430px]
        w-[82vw]
        max-w-[360px]
        shrink-0
        snap-center
        overflow-hidden
        bg-[#E8E5DF]
      "
    >
      {/* IMAGE */}

      <motion.img
        src={category.image}
        alt={category.alt}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* GRADIENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/15
          to-transparent
        "
      />

      {/* NUMBER */}

      <div
        className="
          absolute
          left-5
          top-5
          z-10
          flex
          items-center
          gap-3
        "
      >
        <span
          className="
            font-roboto
            text-[8px]
            font-medium
            tracking-[0.2em]
            text-white
          "
        >
          0{index + 1}
        </span>

        <span
          className="
            h-px
            w-7
            bg-white/60
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-5
        "
      >
        <div
          className="
            mb-3
            h-px
            w-8
            bg-white
          "
        />

        <span
          className="
            font-roboto
            text-[7px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-white/65
          "
        >
          Collection
        </span>

        <h3
          className="
            mt-1.5
            font-notoSerif
            text-[23px]
            font-light
            leading-none
            tracking-[-0.03em]
            text-white
          "
        >
          {category.name}
        </h3>

        <p
          className="
            mt-3
            max-w-[270px]
            font-roboto
            text-[9px]
            font-light
            leading-[1.7]
            text-white/75
          "
        >
          {category.description}
        </p>

        {/* EXPLORE */}

        <span
          className="
            mt-5
            inline-flex
            h-9
            items-center
            gap-3
            border
            border-white
            bg-transparent
            px-4
            font-roboto
            text-[7px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-white
          "
        >
          Explore

          <ArrowUpRight
            size={12}
            strokeWidth={1.2}
          />
        </span>
      </div>
    </Link>
  );
}