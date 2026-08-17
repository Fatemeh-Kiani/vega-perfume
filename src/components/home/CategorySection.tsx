import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
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
    useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 18,
    mass: 0.7,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 18,
    mass: 0.7,
  });

  const categories: CategoryItem[] = getCategories()
    .slice(0, 4)
    .map((category) => {
      const categoryMedia = media.find(
        (item) => item.id === category.imageId
      );

      return {
        id: category.id,
        name: category.name,
        slug: category.slug,
        description:
          category.description ??
          "Discover our curated collection.",
        image: categoryMedia?.url ?? "",
        alt:
          categoryMedia?.alt ?? category.name,
      };
    });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const element =
      event.currentTarget;

    const rect =
      element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x * 18);
    mouseY.set(y * 18);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActiveIndex(null);
  };

  if (!categories.length) {
    return null;
  }

  return (
    <section
      className="
        layout-container
        py-10
        sm:py-14
        lg:py-16
      "
    >
      {/* ==================================================
          SECTION INTRO
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
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
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-8
          flex
          items-end
          justify-between
          sm:mb-10
        "
      >
        <div>
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                block
                h-px
                w-8
                bg-text-muted/70
              "
            />

            <p
              className="
                font-roboto
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-text-muted
              "
            >
              The collection
            </p>
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
            Explore your world
          </h2>
        </div>

        <span
          className="
            hidden
            font-roboto
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-text-muted
            sm:block
          "
        >
          04 collections
        </span>
      </motion.div>

      {/* ==================================================
          ONE SINGLE RESPONSIVE GALLERY
      ================================================== */}

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          w-full
        "
      >
        <div
          className="
            flex
            w-full
            gap-3
            overflow-x-auto
            overscroll-x-contain
            snap-x
            snap-mandatory
            pb-2

            sm:grid
            sm:grid-cols-4
            sm:gap-2
            sm:overflow-visible
            sm:pb-0

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {categories.map(
            (category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
                visible={visible}
                activeIndex={activeIndex}
                setActiveIndex={
                  setActiveIndex
                }
                smoothX={smoothX}
                smoothY={smoothY}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   CATEGORY CARD
======================================================== */

function CategoryCard({
  category,
  index,
  visible,
  activeIndex,
  setActiveIndex,
  smoothX,
  smoothY,
}: {
  category: CategoryItem;
  index: number;
  visible: boolean;
  activeIndex: number | null;
  setActiveIndex: (
    index: number | null
  ) => void;
  smoothX: any;
  smoothY: any;
}) {
  const isActive =
    activeIndex === index;

  const anotherCardIsActive =
    activeIndex !== null &&
    !isActive;

  const imageX = useTransform(
    smoothX,
    [-18, 18],
    [-5, 5]
  );

  const imageY = useTransform(
    smoothY,
    [-18, 18],
    [-5, 5]
  );

  return (
    <motion.a
      href={`/category/${category.slug}`}
      initial={{
        opacity: 0,
        y: 55,
        scale: 0.97,
      }}
      animate={
        visible
          ? {
              opacity:
                anotherCardIsActive
                  ? 0.48
                  : 1,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      transition={{
        opacity: {
          duration: 0.35,
          ease: "easeOut",
        },

        y: {
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        },

        scale: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      onMouseEnter={() =>
        setActiveIndex(index)
      }
      onFocus={() =>
        setActiveIndex(index)
      }
      className="
        group
        relative
        block
        h-[430px]
        min-w-[78vw]
        snap-center
        overflow-hidden
        bg-[#E8E2D8]

        sm:h-[500px]
        sm:min-w-0
        sm:snap-none

        lg:h-[580px]
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
          scale: isActive
            ? 1.018
            : 1,
        }}
        transition={{
          duration: 1.05,
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
          STATIC GRADIENT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/55
          via-black/10
          to-transparent
        "
      />

      {/* ==================================================
          NUMBER
      ================================================== */}

      <span
        className="
          absolute
          left-4
          top-4
          z-20
          font-roboto
          text-[8px]
          tracking-[0.2em]
          text-white/65
        "
      >
        0{index + 1}
      </span>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          px-4
          pb-5
          lg:px-5
          lg:pb-6
        "
      >
        <div
          className="
            flex
            min-h-[112px]
            flex-col
            justify-end
          "
        >
          {/* NAME */}

          <motion.div
            animate={{
              y: isActive ? 0 : 9,
              opacity:
                isActive ? 1 : 0.86,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                font-roboto
                text-[7px]
                uppercase
                tracking-[0.25em]
                text-white/60
              "
            >
              Discover
            </p>

            <h3
              className="
                mt-1
                whitespace-nowrap
                font-notoSerif
                text-[18px]
                font-light
                leading-tight
                tracking-[-0.025em]
                text-white

                sm:text-[19px]
                lg:text-[21px]
              "
            >
              {category.name}
            </h3>
          </motion.div>

          {/* DESCRIPTION */}

          <motion.p
            initial={false}
            animate={{
              opacity:
                isActive ? 0.78 : 0,
              y:
                isActive ? 0 : 12,
            }}
            transition={{
              duration: 0.72,
              delay: isActive
                ? 0.08
                : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-2
              min-h-[40px]
              max-w-[190px]
              font-roboto
              text-[10px]
              font-light
              leading-[1.7]
              text-white
            "
          >
            {category.description}
          </motion.p>
        </div>

        {/* ARROW */}

        <motion.div
          animate={{
            opacity:
              isActive ? 1 : 0.55,
            x:
              isActive ? 0 : -3,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-6
            right-5
            text-white
          "
        >
          <ArrowUpRight
            size={15}
            strokeWidth={1}
          />
        </motion.div>
      </div>
    </motion.a>
  );
}