import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-background-main text-text-primary">

      {/* ==================================================
          INTRO
      ================================================== */}

      <section
        className="
          layout-container
          px-4
          pb-8
          pt-8
          sm:px-5
          sm:pb-10
          sm:pt-18
          lg:px-5
          lg:pb-10
          lg:pt-18
        "
      >
  

        {/* TITLE + DESCRIPTION */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-7
            
            
          "
        >

          <h1
            className="
              font-notoSerif
              text-background-box
              text-[56px]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
              sm:text-[72px]
              lg:text-[96px]
            "
          >
            Account
          </h1>

          {/* DESCRIPTION */}

          <div
            className="
              max-w-[420px]
              lg:pb-1
            "
          >
            <p
              className="
                font-roboto
                text-[11px]
                font-light
                leading-6
                text-text-muted
               lg:px-14
              "
            >
              Manage your details, orders and
              preferences in one place.
            </p>

          </div>

        </div>
      </section>


      {/* ==================================================
          ACCOUNT CONTENT
      ================================================== */}

      <section
        className="
          px-5
          pb-24
          sm:px-6
          sm:pb-28
          lg:px-8
          lg:pb-36
        "
      >

        {/* CENTERED ACCOUNT CARD */}

        <div
          className="
            mx-auto
            w-full
            max-w-[470px]
          "
        >

          <div
            className="
              border
              border-text-primary/15
              bg-background-soft
              px-6
              py-8
              sm:px-10
              sm:py-10
            "
          >

            {/* CARD HEADER */}

            <div
              className="
                border-b
                border-text-primary/10
                pb-6
              "
            >

              <p
                className="
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-text-muted
                "
              >
                Welcome back
              </p>

              <h2
                className="
                  mt-3
                  font-notoSerif
                  text-[30px]
                  font-light
                  leading-none
                  tracking-[-0.025em]
                  text-text-primary
                  sm:text-[34px]
                "
              >
                Sign in to your account
              </h2>

              <p
                className="
                  mt-4
                  font-roboto
                  text-[10px]
                  font-light
                  leading-5
                  text-text-muted
                "
              >
                Access your orders, saved fragrances
                and account preferences.
              </p>

            </div>


            {/* FORM */}

            <form
              className="
                mt-7
                flex
                flex-col
                gap-5
              "
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    font-roboto
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-text-muted
                  "
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="
                    h-11
                    w-full
                    border
                    border-text-primary/15
                    bg-background-main
                    px-3
                    font-roboto
                    text-[11px]
                    text-text-primary
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-text-muted/45
                    focus:border-text-primary/45
                  "
                />
              </div>


              {/* PASSWORD */}

              <div>
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                  "
                >
                  <label
                    htmlFor="password"
                    className="
                      font-roboto
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-text-muted
                    "
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="
                      font-roboto
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-text-muted
                      transition-colors
                      duration-300
                      hover:text-text-primary
                    "
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="
                    h-11
                    w-full
                    border
                    border-text-primary/15
                    bg-background-main
                    px-3
                    font-roboto
                    text-[11px]
                    text-text-primary
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-text-muted/45
                    focus:border-text-primary/45
                  "
                />
              </div>


              {/* SIGN IN */}

              <button
                type="submit"
                className="
                  group
                  mt-2
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  border-text-primary
                  bg-background-box
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-background-main
                  transition-all
                  duration-300
                  hover:bg-text-primary/90
                  active:scale-[0.98]
                "
              >
                Sign in

                <ArrowRight
                  size={12}
                  strokeWidth={1.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </form>


            {/* DIVIDER */}

            <div
              className="
                my-7
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  flex-1
                  bg-text-primary/10
                "
              />

              <span
                className="
                  font-roboto
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-text-muted/60
                "
              >
                New to VEGA?
              </span>

              <span
                className="
                  h-px
                  flex-1
                  bg-text-primary/10
                "
              />
            </div>


            {/* CREATE ACCOUNT */}

            <Link
              to="/account/register"
              className="
                group
                flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                border
                border-text-primary/20
                bg-background-main
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-text-primary
                transition-all
                duration-300
                hover:border-text-primary/45
                hover:bg-background-soft
                active:scale-[0.98]
              "
            >
              Create an account

              <ArrowRight
                size={12}
                strokeWidth={1.2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}