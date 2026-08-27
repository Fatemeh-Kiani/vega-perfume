import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    // Authentication will be connected here later.
  }

  return (
    <main className="min-h-screen bg-background-main text-text-primary">

      {/* ==================================================
          INTRO
      ================================================== */}

      <section
        className="
          layout-container
          px-4
          pb-10
          pt-8
          sm:px-5
          sm:pb-12
          sm:pt-18
          lg:px-5
          lg:pb-14
          lg:pt-18
        "
      >

        {/* BACK */}

        <Link
          to="/account"
          className="
            group
            inline-flex
            items-center
            gap-2
            font-roboto
            text-[8px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-text-muted
            transition-colors
            duration-300
            hover:text-text-primary
          "
        >
          <ArrowLeft
            size={12}
            strokeWidth={1.2}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to account
        </Link>


        {/* TITLE */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-7
          "
        >

          <h1
            className="
              font-notoSerif
              text-background-box
              text-[54px]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
              sm:text-[72px]
              lg:text-[96px]
            "
          >
            Create
          </h1>

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
              Create your VEGA account to keep
              your orders, saved fragrances and
              preferences in one place.
            </p>
          </div>

        </div>

      </section>


      {/* ==================================================
          REGISTER CONTENT
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

            {/* ==================================================
                HEADER
            ================================================== */}

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
                Welcome to VEGA
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
                Create an account
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
                Save your details and make
                every VEGA visit easier.
              </p>

            </div>


            {/* ==================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-7
                flex
                flex-col
                gap-5
              "
            >

              {/* ==================================================
                  FIRST NAME
              ================================================== */}

              <div>

                <label
                  htmlFor="firstName"
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
                  First name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  required
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


              {/* ==================================================
                  LAST NAME
              ================================================== */}

              <div>

                <label
                  htmlFor="lastName"
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
                  Last name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name"
                  required
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


              {/* ==================================================
                  EMAIL
              ================================================== */}

              <div>

                <label
                  htmlFor="register-email"
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
                  id="register-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  required
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


              {/* ==================================================
                  PASSWORD
              ================================================== */}

              <div>

                <label
                  htmlFor="register-password"
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
                  Password
                </label>

                <div className="relative">

                  <input
                    id="register-password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    placeholder="Create a password"
                    required
                    minLength={8}
                    className="
                      h-11
                      w-full
                      border
                      border-text-primary/15
                      bg-background-main
                      px-3
                      pr-10
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

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current,
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="
                      absolute
                      right-0
                      top-0
                      flex
                      h-11
                      w-10
                      items-center
                      justify-center
                      text-text-muted
                      transition-colors
                      duration-300
                      hover:text-text-primary
                    "
                  >
                    {showPassword ? (
                      <EyeOff
                        size={14}
                        strokeWidth={1.2}
                      />
                    ) : (
                      <Eye
                        size={14}
                        strokeWidth={1.2}
                      />
                    )}
                  </button>

                </div>

                <p
                  className="
                    mt-2
                    font-roboto
                    text-[7px]
                    leading-4
                    text-text-muted/70
                  "
                >
                  Use at least 8 characters.
                </p>

              </div>


              {/* ==================================================
                  CONFIRM PASSWORD
              ================================================== */}

              <div>

                <label
                  htmlFor="confirm-password"
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
                  Confirm password
                </label>

                <div className="relative">

                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    placeholder="Repeat your password"
                    required
                    minLength={8}
                    className="
                      h-11
                      w-full
                      border
                      border-text-primary/15
                      bg-background-main
                      px-3
                      pr-10
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

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current,
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="
                      absolute
                      right-0
                      top-0
                      flex
                      h-11
                      w-10
                      items-center
                      justify-center
                      text-text-muted
                      transition-colors
                      duration-300
                      hover:text-text-primary
                    "
                  >
                    {showConfirmPassword ? (
                      <EyeOff
                        size={14}
                        strokeWidth={1.2}
                      />
                    ) : (
                      <Eye
                        size={14}
                        strokeWidth={1.2}
                      />
                    )}
                  </button>

                </div>

              </div>


              {/* ==================================================
                  TERMS
              ================================================== */}

              <label
                className="
                  mt-1
                  flex
                  items-start
                  gap-3
                "
              >

                <input
                  type="checkbox"
                  required
                  className="
                    mt-[1px]
                    h-3
                    w-3
                    shrink-0
                    accent-text-primary
                  "
                />

                <span
                  className="
                    font-roboto
                    text-[8px]
                    font-light
                    leading-4
                    text-text-muted
                  "
                >
                  I agree to the VEGA terms and
                  privacy policy.
                </span>

              </label>


              {/* ==================================================
                  CREATE ACCOUNT BUTTON
              ================================================== */}

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
                Create account

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


            {/* ==================================================
                SIGN IN
            ================================================== */}

            <div
              className="
                mt-7
                border-t
                border-text-primary/10
                pt-6
                text-center
              "
            >

              <p
                className="
                  font-roboto
                  text-[9px]
                  font-light
                  text-text-muted
                "
              >
                Already have an account?
              </p>

              <Link
                to="/account"
                className="
                  group
                  mt-3
                  inline-flex
                  items-center
                  gap-2
                  font-roboto
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-text-primary
                  transition-opacity
                  duration-300
                  hover:opacity-55
                "
              >
                Sign in

                <ArrowRight
                  size={11}
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

        </div>

      </section>

    </main>
  );
}