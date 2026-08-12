import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Hero from "../components/Hero";
import Header from "../components/navigation/Header";


export default function HomePage() {
  const introRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const borderRadius = useTransform(
  scrollYProgress,
  [0, 1],
  [40, 0]
);

  return (
    
    <main className="relative">

      <Hero />
      

      <motion.section
        ref={introRef}
        id="intro"
        style={{
          y,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
 
        className="
          relative
          z-20
          min-h-screen
         bg-background-main
          shadow-2xl
           shadow-[0_-30px_80px_rgba(0,0,0,0.20)]
        "
      >
    <Header />
    <div className="h-[3000px]" />
      </motion.section>
    
    </main>
  );
}