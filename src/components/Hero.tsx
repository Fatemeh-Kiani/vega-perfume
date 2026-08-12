import { motion, useScroll, useTransform } from "motion/react";
import heroImage from "../assets/images/hero/hero.jpg";



export default function Hero() {

  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 900], [0, -100]);
  const textOpacity = useTransform(scrollY, [0, 700], [1, 0]);


  return (
    <section className="sticky top-0 h-screen overflow-hidden">

<motion.img
  src={heroImage}
  alt="VEGA Hero"
  className="absolute inset-0 h-full w-full object-cover "
/>


 <motion.div
  style={{
    y: textY,
    opacity: textOpacity,
  }}
  className="absolute left-20 top-30 z-10"
>

  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        delay: 0.2,
      duration: 2,
      ease: "easeIn",
    }}
    className="font-notoSerif text-8xl text-text-primary "
  >
    VEGA
  </motion.h1>

<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 1.6,
    duration: 1,
  }}
  className="mt-4 text-xl  leading-8  font-notoSerif text-text-primary "
>
  {["A", "curated", "world", "of", "timeless" ,"fragrances"].map((word, index) => (
    <motion.span
      key={word}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.6 + index * 0.2,
        duration: 0.5,
      }}
      className="mr-2 inline-block"
    >
      {word}
    </motion.span>
  ))}
</motion.h2>
  
  <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 2.6,
    duration: 1,
  }}
  className="mt-6 max-w-xl text-base leading-8  text-text-muted "
>
  Curated fragrances from the world's most iconic perfume houses.
  Timeless scents for every style and every moment.
</motion.p>
  <motion.button
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 3,
    duration: 0.8,
  }}
onClick={() =>
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  })
}
  className="
    mt-10
    border
    border-text-primary
    px-8
    py-4
    text-sm
    uppercase
    tracking-[0.25em]
    text-text-primary
    transition-all
    duration-500
    hover:bg-text-primary
    hover:text-accent
    hover:border-text-primary
  "
>
  Explore Collection
</motion.button>
</motion.div>
    </section>
  );
}