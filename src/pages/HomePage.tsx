import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
} from "motion/react";

import Hero from "../components/Hero";
import Header from "../components/navigation/Header";
import FragranceSection from "../components/home/FragranceSection";
import CategorySection from "../components/home/CategorySection";
import BestSellersSection from "../components/home/BestSellersSection";

export default function HomePage() {
  const homeRef = useRef<HTMLElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeVisible, setIsHomeVisible] =
    useState(false);

  const isAnimating = useRef(false);

  const wasAtTop = useRef(false);

  const homeY = useMotionValue("100%");

  /* --------------------------------
     SHOW HOME
  -------------------------------- */

  const showHome = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    setIsHomeVisible(true);

    animate(homeY, "0%", {
      duration: 0.5,
      ease: [0.75, 0.75, 0.75, 0.75],

      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  /* --------------------------------
     SHOW HERO
  -------------------------------- */

  const showHero = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    animate(homeY, "100%", {
      duration: 0.5,
      ease: [0.75, 0.75, 0.75, 0.75],

      onComplete: () => {
        setIsHomeVisible(false);

        isAnimating.current = false;
      },
    });
  };

  /* --------------------------------
     WHEEL CONTROL
  -------------------------------- */

  useEffect(() => {
    const handleExploreCollection = () => {
      showHome();
    };

    const handleWheel = (event: WheelEvent) => {
      if (isAnimating.current) {
        event.preventDefault();
        return;
      }

      /* --------------------------------
         HERO → HOME
      -------------------------------- */

      if (!isHomeVisible) {
        if (event.deltaY > 30) {
          event.preventDefault();

          showHome();
        }

        return;
      }

      const home = homeRef.current;

      if (!home) return;


      const isAtTop = home.scrollTop <= 2;

      if (isAtTop && event.deltaY < -30) {
        if (!wasAtTop.current) {
          wasAtTop.current = true;
          return;
        }

        event.preventDefault();

        wasAtTop.current = false;

        showHero();

        return;
      }

      if (!isAtTop) {
        wasAtTop.current = false;
      }
    };

    window.addEventListener(
      "vega:open-home",
      handleExploreCollection
    );

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener(
        "vega:open-home",
        handleExploreCollection
      );

      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [isHomeVisible]);

  return (
    <main
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      {/* HERO*/}

      <Hero />

      {/* HOME*/}

      <motion.section
        ref={homeRef}
        style={{
          y: homeY,
        }}
        className="
          fixed
          inset-0
          z-20
          h-screen
          overflow-y-auto
          overscroll-contain
          bg-background-main
          shadow-[0_-30px_80px_rgba(0,0,0,0.20)]
        "
      >
        <Header
          onMenuOpenChange={setIsMenuOpen}
        />

        <div className="relative">
          {/* --------------------------------
              MENU OVERLAY
          -------------------------------- */}

          {isMenuOpen && (
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-30
                bg-black/35
              "
            />
          )}


          <FragranceSection />
          <CategorySection/>
          <BestSellersSection />

          <div className="h-[3000px]" />
        </div>
      </motion.section>
    </main>
  );
}