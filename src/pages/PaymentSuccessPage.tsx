import {
  ArrowRight,
  Check,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import Footer from "../components/Footer/Footer";

export default function PaymentSuccessPage() {
  return (
    <main
      className="
        min-h-screen
        bg-background-main
        text-text-primary
      "
    >
      <section
        className="
          layout-container
          flex
          min-h-[calc(100vh-180px)]
          flex-col
          items-center
          justify-center
          px-5
          text-center
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            border
            border-text-primary/15
            bg-background-soft
          "
        >
          <Check
            size={20}
            strokeWidth={1}
          />
        </div>

        <span
          className="
            mt-7
            font-roboto
            text-[8px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-text-muted
          "
        >
          Order received
        </span>

        <h1
          className="
            mt-5
            max-w-[620px]
            font-notoSerif
            text-[44px]
            font-light
            leading-[0.95]
            tracking-[-0.045em]
            sm:text-[60px]
          "
        >
          Thank you for choosing VEGA.
        </h1>

        <p
          className="
            mt-5
            max-w-[390px]
            font-roboto
            text-[10px]
            font-light
            leading-6
            text-text-muted
          "
        >
          Your order has been received.
          We'll take care of the rest.
        </p>

        <Link
          to="/products"
          className="
            group
            mt-9
            flex
            items-center
            gap-3
            border-b
            border-text-primary/25
            pb-2
            font-roboto
            text-[8px]
            font-medium
            uppercase
            tracking-[0.2em]
          "
        >
          Continue exploring

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
      </section>

      <Footer />
    </main>
  );
}