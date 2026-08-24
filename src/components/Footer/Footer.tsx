import { Link as RouterLink } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";

import {
  footerColumns,
  footerContact,
  footerSocials,
} from "../../data/footer";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="17.3"
        cy="6.7"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

const HOME_SCROLL_KEY =
  "vega-home-scroll-position";

function preserveHomeScroll() {
  const home =
    document.querySelector<HTMLElement>(
      "[data-home-scroll]"
    );

  if (!home) return;

  sessionStorage.setItem(
    HOME_SCROLL_KEY,
    String(home.scrollTop)
  );
}

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#10100F]
        text-[#F1ECE3]
      "
    >
      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <div
        className="
          border-b
          border-white/[0.09]
        "
      >
        <div
          className="
            layout-container
            flex
            items-center
            justify-between
            px-5
            py-4
            sm:px-8
            lg:px-12
          "
        >
          <span
            className="
              font-roboto
              text-[7px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white/35
            "
          >
            VEGA
          </span>

          <span
            className="
              hidden
              font-roboto
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-white/25
              sm:block
            "
          >
            Fragrance · Beauty · Ritual
          </span>

          <span
            className="
              font-roboto
              text-[7px]
              uppercase
              tracking-[0.28em]
              text-white/35
            "
          >
            2026
          </span>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          layout-container
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1fr_2fr_0.8fr]
            lg:gap-20
          "
        >
          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <p
              className="
                mb-6
                font-roboto
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#BEBCA7]
              "
            >
              Contact
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${footerContact.phone}`}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  font-roboto
                  text-[10px]
                  text-white/55
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  size={13}
                  strokeWidth={1.2}
                  className="text-white/25"
                />

                <span>
                  {footerContact.phone}
                </span>
              </a>

              <a
                href={`mailto:${footerContact.email}`}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  font-roboto
                  text-[10px]
                  text-white/55
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={13}
                  strokeWidth={1.2}
                  className="text-white/25"
                />

                <span className="break-all">
                  {footerContact.email}
                </span>
              </a>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  font-roboto
                  text-[10px]
                  text-white/35
                "
              >
                <MapPin
                  size={13}
                  strokeWidth={1.2}
                  className="text-[#BEBCA7]"
                />

                {footerContact.address}
              </div>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-10
              sm:grid-cols-3
            "
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p
                  className="
                    mb-6
                    font-roboto
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#BEBCA7]
                  "
                >
                  {column.title}
                </p>

                <div className="space-y-3.5">
                  {column.links.map((link) => (
                    <RouterLink
                      key={link.label}
                      to={link.href}
                      onClick={
                        preserveHomeScroll
                      }
                      className="
                        group
                        flex
                        w-fit
                        items-center
                        gap-1.5
                        font-roboto
                        text-[10px]
                        font-light
                        text-white/50
                        transition-colors
                        duration-300
                        hover:text-white
                      "
                    >
                      <span>
                        {link.label}
                      </span>

                      <ArrowUpRight
                        size={10}
                        strokeWidth={1}
                        className="
                          -translate-x-1
                          opacity-0
                          text-[#BEBCA7]
                          transition-all
                          duration-300
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </RouterLink>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              SOCIAL
          ================================================= */}

          <div className="sm:col-span-2 lg:col-span-1">
            <p
              className="
                mb-6
                font-roboto
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#BEBCA7]
              "
            >
              Follow
            </p>

            {footerSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  font-roboto
                  text-[10px]
                  text-white/55
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    transition-all
                    duration-300
                    group-hover:border-[#BEBCA7]
                    group-hover:bg-[#BEBCA7]
                    group-hover:text-[#10100F]
                  "
                >
                  <InstagramIcon />
                </span>

                <span>
                  {social.label}
                </span>

                <ArrowUpRight
                  size={11}
                  strokeWidth={1}
                  className="
                    text-white/25
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <div
        className="
          border-y
          border-white/[0.09]
          bg-[#171715]
        "
      >
        <div
          className="
            layout-container
            flex
            flex-col
            gap-7
            px-5
            py-9
            sm:px-8
            sm:py-11
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-12
          "
        >
          <div>
            <p
              className="
                font-roboto
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#BEBCA7]
              "
            >
              Newsletter
            </p>

            <h3
              className="
                mt-2
                font-notoSerif
                text-[21px]
                font-light
                tracking-[-0.03em]
                text-[#F1ECE3]
                sm:text-[24px]
              "
            >
              Stay close to VEGA.
            </h3>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="
              flex
              w-full
              max-w-[420px]
              border-b
              border-white/20
              pb-2.5
              focus-within:border-[#BEBCA7]
            "
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="
                min-w-0
                flex-1
                bg-transparent
                font-roboto
                text-[10px]
                font-light
                text-white
                outline-none
                placeholder:text-white/25
              "
            />

            <button
              type="submit"
              className="
                flex
                items-center
                gap-2
                font-roboto
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/55
                transition-colors
                hover:text-[#BEBCA7]
              "
            >
              Subscribe

              <ArrowUpRight
                size={12}
                strokeWidth={1}
              />
            </button>
          </form>
        </div>
      </div>

      {/* =====================================================
          BOTTOM VEGA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-white/[0.09]
          px-0
          pt-8
          sm:pt-10
          lg:pt-12
        "
      >
        <div
          className="
            flex
            w-full
            justify-center
            overflow-hidden
          "
        >
          <motion.h2
            initial={{
              y: 35,
              opacity: 0.4,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              select-none
              whitespace-nowrap
              font-notoSerif
              text-[31vw]
              font-light
              leading-[0.62]
              tracking-[-0.09em]
              text-[#E9E4DB]
              sm:text-[28vw]
              lg:text-[25vw]
            "
          >
            VEGA
          </motion.h2>
        </div>
      </section>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div
        className="
          layout-container
          flex
          flex-col
          gap-4
          px-5
          py-5
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-8
          lg:px-12
        "
      >
        <p
          className="
            font-roboto
            text-[7px]
            uppercase
            tracking-[0.2em]
            text-white/25
          "
        >
          © 2026 VEGA
        </p>

        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          <RouterLink
            to="/privacy"
            onClick={preserveHomeScroll}
            className="
              font-roboto
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-white/30
              transition-colors
              hover:text-white
            "
          >
            Privacy
          </RouterLink>

          <RouterLink
            to="/terms"
            onClick={preserveHomeScroll}
            className="
              font-roboto
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-white/30
              transition-colors
              hover:text-white
            "
          >
            Terms
          </RouterLink>

          <span
            className="
              font-roboto
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-white/20
            "
          >
            Est. 2026
          </span>
        </div>
      </div>
    </footer>
  );
}