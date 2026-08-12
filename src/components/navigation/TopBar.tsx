import { motion } from "motion/react";

export default function TopBar() {
  const message =
    "Explore iconic scents crafted with character and elegance";

  const items = Array.from({ length: 4 }, () => message);

  return (
    <div className="h-9">
      <div
        className="
          layout-container
          relative
          h-full
          overflow-hidden
          bg-brand-sage
        "
      >
        <motion.div
          className="
            flex
            h-full
            w-max
            items-center
          "
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...items, ...items].map((item, index) => (
            <p
              key={index}
              className="
                whitespace-nowrap
                px-24
                text-[12px]
                uppercase
                tracking-[0.35em]
                text-accent
                font-explora
              "
            >
              {item}
            </p>
          ))}
        </motion.div>

        {/* Fade left */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            w-20
            bg-gradient-to-r
            from-background-main
            to-transparent
          "
        />

        {/* Fade right */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            w-20
            bg-gradient-to-l
            from-background-main
            to-transparent
          "
        />
      </div>
    </div>
  );
}