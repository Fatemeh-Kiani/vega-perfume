import {
  ArrowLeft,
  Lock,
  ArrowRight,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useEffect, useMemo, useState } from "react";

import Footer from "../components/Footer/Footer";

import { useCart } from "../hooks/useCart";
import { getProducts } from "../services/productService";

import type { Product } from "../types/product";

export default function PaymentPage() {
  const navigate = useNavigate();

  const { cartItems } = useCart();

  const [products, setProducts] =
    useState<Product[]>([]);

  /*
   * ==================================================
   * FORM
   * ==================================================
   */

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  /*
   * ==================================================
   * LOAD PRODUCTS
   * ==================================================
   */

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      const data = await getProducts();

      if (!mounted) return;

      setProducts(data);
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * ==================================================
   * ORDER
   * ==================================================
   */

  const orderItems = useMemo(() => {
    return cartItems
      .map((item) => {
        const product =
          products.find(
            (product) =>
              product.id ===
              item.productId,
          );

        if (!product) return null;

        return {
          product,
          quantity: item.quantity,
        };
      })
      .filter(
        (
          item,
        ): item is {
          product: Product;
          quantity: number;
        } => item !== null,
      );
  }, [cartItems, products]);

  const subtotal =
    orderItems.reduce(
      (total, item) =>
        total +
        item.product.price *
          item.quantity,
      0,
    );

  const shipping =
    subtotal >= 150 ? 0 : 12;

  const total =
    subtotal + shipping;

  /*
   * ==================================================
   * EMPTY CART PROTECTION
   * ==================================================
   */

  if (cartItems.length === 0) {
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
            min-h-screen
            flex-col
            items-center
            justify-center
            px-5
            text-center
          "
        >
          <span
            className="
              font-roboto
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-text-muted
            "
          >
            Empty order
          </span>

          <h1
            className="
              mt-5
              font-notoSerif
              text-[42px]
              font-light
              leading-none
              tracking-[-0.04em]
            "
          >
            Your bag is empty.
          </h1>

          <Link
            to="/products"
            className="
              mt-8
              flex
              items-center
              gap-2
              border-b
              border-text-primary/20
              pb-2
              font-roboto
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
            "
          >
            Explore fragrances
          </Link>
        </section>
      </main>
    );
  }

  /*
   * ==================================================
   * INPUT HANDLER
   * ==================================================
   */

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } =
      event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  /*
   * ==================================================
   * SUBMIT
   * ==================================================
   */

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    /*
     * This is currently only the
     * frontend checkout flow.
     *
     * Real payment processing will
     * be connected later through backend
     * + payment provider.
     */

    navigate("/payment/success");
  }

  /*
   * ==================================================
   * RENDER
   * ==================================================
   */

  return (
    <main
      className="
        min-h-screen
        bg-background-main
        text-text-primary
      "
    >
      {/* ==================================================
          HEADER
      ================================================== */}

      <header
        className="
          layout-container
          px-5
          pb-7
          pt-28
          sm:px-6
          sm:pt-32
          lg:px-8
          lg:pt-36
        "
      >
        <Link
          to="/cart"
          className="
            group
            inline-flex
            items-center
            gap-2
            font-roboto
            text-[8px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-text-secondary
            transition-colors
            hover:text-text-primary
          "
        >
          <ArrowLeft
            size={13}
            strokeWidth={1}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to cart
        </Link>

        <div
          className="
            mt-7
            flex
            items-end
            justify-between
            gap-6
          "
        >
          <h1
            className="
              font-notoSerif
              text-[48px]
              font-light
              leading-none
              tracking-[-0.05em]
              sm:text-[64px]
              lg:text-[80px]
            "
          >
            Payment
          </h1>

          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            <Lock
              size={12}
              strokeWidth={1.2}
              className="text-text-muted"
            />

            <span
              className="
                font-roboto
                text-[7px]
                uppercase
                tracking-[0.18em]
                text-text-muted
              "
            >
              Secure checkout
            </span>
          </div>
        </div>
      </header>

      {/* ==================================================
          CHECKOUT
      ================================================== */}

      <section
        className="
          layout-container
          grid
          gap-12
          px-5
          pb-24
          sm:px-6
          lg:grid-cols-[1fr_360px]
          lg:gap-16
          lg:px-8
          lg:pb-36
        "
      >
        {/* ==================================================
            FORM
        ================================================== */}

        <form
          onSubmit={handleSubmit}
          className="
            min-w-0
          "
        >
          {/* CUSTOMER */}

          <section
            className="
              border-t
              border-text-primary/10
              pt-7
            "
          >
            <div
              className="
                flex
                items-baseline
                justify-between
              "
            >
              <h2
                className="
                  font-notoSerif
                  text-[27px]
                  font-light
                "
              >
                Contact
              </h2>

              <span
                className="
                  font-roboto
                  text-[7px]
                  uppercase
                  tracking-[0.16em]
                  text-text-muted
                "
              >
                01
              </span>
            </div>

            <div
              className="
                mt-6
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              <Input
                label="First name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />

              <Input
                label="Last name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />

              <div className="sm:col-span-2">
                <Input
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* SHIPPING */}

          <section
            className="
              mt-12
              border-t
              border-text-primary/10
              pt-7
            "
          >
            <div
              className="
                flex
                items-baseline
                justify-between
              "
            >
              <h2
                className="
                  font-notoSerif
                  text-[27px]
                  font-light
                "
              >
                Shipping
              </h2>

              <span
                className="
                  font-roboto
                  text-[7px]
                  uppercase
                  tracking-[0.16em]
                  text-text-muted
                "
              >
                02
              </span>
            </div>

            <div
              className="
                mt-6
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              <div className="sm:col-span-2">
                <Input
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />

              <Input
                label="Postal code"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                required
              />

              <div className="sm:col-span-2">
                <Input
                  label="Country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* PAYMENT */}

          <section
            className="
              mt-12
              border-t
              border-text-primary/10
              pt-7
            "
          >
            <div
              className="
                flex
                items-baseline
                justify-between
              "
            >
              <h2
                className="
                  font-notoSerif
                  text-[27px]
                  font-light
                "
              >
                Payment details
              </h2>

              <span
                className="
                  font-roboto
                  text-[7px]
                  uppercase
                  tracking-[0.16em]
                  text-text-muted
                "
              >
                03
              </span>
            </div>

            <div
              className="
                mt-6
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              <div className="sm:col-span-2">
                <Input
                  label="Card number"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  inputMode="numeric"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </div>

              <Input
                label="Expiry"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM / YY"
                required
              />

              <Input
                label="CVC"
                name="cvc"
                value={form.cvc}
                onChange={handleChange}
                inputMode="numeric"
                placeholder="000"
                required
              />
            </div>
          </section>

          {/* SUBMIT */}

          <button
            type="submit"
            className="
              group
              mt-10
              flex
              h-13
              w-full
              items-center
              justify-center
              gap-3
              bg-background-box
              font-roboto
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-background-main
              transition-all
              duration-300
              hover:bg-text-primary/90
              active:scale-[0.985]
            "
          >
            Complete order

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
            ORDER SUMMARY
        ================================================== */}

        <aside
          className="
            h-fit
            border
            border-text-primary/15
            bg-background-soft
            p-6
            lg:sticky
            lg:top-28
            lg:p-7
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
            Your order
          </p>

          <div
            className="
              mt-6
              divide-y
              divide-text-primary/10
              border-y
              border-text-primary/10
            "
          >
            {orderItems.map(
              ({
                product,
                quantity,
              }) => (
                <div
                  key={product.id}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    py-4
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        font-notoSerif
                        text-[16px]
                        font-light
                      "
                    >
                      {product.name}
                    </p>

                    <span
                      className="
                        font-roboto
                        text-[7px]
                        uppercase
                        tracking-[0.14em]
                        text-text-muted
                      "
                    >
                      Qty {quantity}
                    </span>
                  </div>

                  <span
                    className="
                      shrink-0
                      font-roboto
                      text-[9px]
                      font-medium
                    "
                  >
                    {(
                      product.price *
                      quantity
                    ).toFixed(2)}{" "}
                    €
                  </span>
                </div>
              ),
            )}
          </div>

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                font-roboto
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-text-muted
              "
            >
              Subtotal
            </span>

            <span
              className="
                font-roboto
                text-[10px]
                font-medium
              "
            >
              {subtotal.toFixed(2)} €
            </span>
          </div>

          <div
            className="
              mt-4
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                font-roboto
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-text-muted
              "
            >
              Shipping
            </span>

            <span
              className="
                font-roboto
                text-[10px]
                font-medium
              "
            >
              {shipping === 0
                ? "Free"
                : `${shipping.toFixed(
                    2,
                  )} €`}
            </span>
          </div>

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              border-t
              border-text-primary/10
              pt-5
            "
          >
            <span
              className="
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
              "
            >
              Total
            </span>

            <span
              className="
                font-roboto
                text-[14px]
                font-medium
              "
            >
              {total.toFixed(2)} €
            </span>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}

/*
 * ==================================================
 * INPUT COMPONENT
 * ==================================================
 */

type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  inputMode?:
    | "text"
    | "numeric"
    | "email"
    | "tel"
    | "search"
    | "url"
    | "decimal"
    | "none";
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

function Input({
  label,
  name,
  type = "text",
  value,
  placeholder,
  inputMode,
  required,
  onChange,
}: InputProps) {
  return (
    <label className="block">
      <span
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
        {label}
      </span>

      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        required={required}
        onChange={onChange}
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
    </label>
  );
}