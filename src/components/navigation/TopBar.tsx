import { motion } from "motion/react";

export default function TopBar() {
  const message =
    "Explore iconic scents crafted with character and elegance";

  const items = Array.from(
    { length: 10 },
    (_, index) => ({
      id: index,
      text: message,
    })
  );

  return (
    <div
      className="
        relative
        h-9
        w-full
        overflow-hidden
        border-y
        border-text-primary/10
        bg-background-main
        layout-container 
      "
    >
      {/* ==================================================
          MARQUEE
      ================================================== */}

      <div className="layout-container h-full">
        <div
          className="
            relative
            h-full
            overflow-hidden
          "
        >
          <motion.div
            className="
              absolute
              left-0
              top-0
              flex
              h-full
              w-max
              items-center
            "
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 48,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...items, ...items].map(
              ({ id, text }, index) => (
                <p
                  key={`${id}-${index}`}
                  className="
                    whitespace-nowrap
                    px-16
                    font-notoSerif
                    text-[11px]
                    font-normal
                    tracking-[0.08em]
                    text-text-primary/55
                  "
                >
                  {text}
                </p>
              )
            )}
          </motion.div>

          {/* ==================================================
              LEFT FADE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-24
              bg-gradient-to-r
              from-background-main
              via-background-main
              to-transparent
            "
          />

          {/* ==================================================
              RIGHT FADE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              w-24
              bg-gradient-to-l
              from-background-main
              via-background-main
              to-transparent
            "
          />
        </div>
      </div>
    </div>
  );
}