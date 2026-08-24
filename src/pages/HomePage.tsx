import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
} from "motion/react";
import Footer from "../components/Footer/Footer";
import HomeScrollController from "../components/home/HomeScrollController";
import Hero from "../components/Hero";
import Header from "../components/navigation/Header";
import FragranceSection from "../components/home/FragranceSection";
import CategorySection from "../components/home/CategorySection";
import BestSellersSection from "../components/home/BestSellersSection";

export default function HomePage() {
  const homeRef = useRef<HTMLElement>(null);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const homeY = useMotionValue("100%");

  return (
    <main
      className="
        relative
        min-h-screen

      "
    >
      <HomeScrollController
        homeRef={homeRef}
        homeY={homeY}
      >
        {/* HERO */}

        <Hero />

        {/* HOME */}

        <motion.section
          ref={homeRef}
          style={{
            y: homeY,
          }}
          data-home-scroll
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
            {/* MENU OVERLAY */}

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

            <CategorySection />

            <BestSellersSection />

            <Footer />

            <div />
          </div>
        </motion.section>
      </HomeScrollController>
    </main>
  );
}