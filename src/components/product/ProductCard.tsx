import {
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { brands } from "../../data/brands";
import type { Product } from "../../types/product";
import ProductWishlistButton from "./ProductWishlistButton.tsx";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {


  const primaryImage = product.images[0]?.url;
  const secondaryImage = product.images[1]?.url;

  const productUrl = `/products/${product.slug}`;

  const brand = brands.find(
    (item) => item.id === product.brandId,
  );


  return (
    <article className="group w-full">
      {/* ==================================================
          IMAGE
      ================================================== */}

      <div
        className="
          relative
          mx-auto
          aspect-square
          w-[90%]
          overflow-hidden
          border
          border-border/20
          bg-background-soft
          sm:w-[88%]
          lg:w-[92%]
        "
      >
        {/* ==================================================
            PRIMARY IMAGE
        ================================================== */}

        {primaryImage && (
          <img
            src={primaryImage}
            alt={product.name}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
              p-4
              transition-all
              duration-[1100ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              md:group-hover:scale-[1.06]
              md:group-hover:-translate-y-1
              md:group-hover:opacity-0
            "
          />
        )}

        {/* ==================================================
            SECONDARY IMAGE
        ================================================== */}

        {secondaryImage && (
          <img
            src={secondaryImage}
            alt={`${product.name} alternate view`}
            className="
              absolute
              inset-0
              h-full
              w-full
              scale-[1.02]
              object-contain
              p-4
              opacity-0
              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              md:group-hover:scale-[1.06]
              md:group-hover:-translate-y-1
              md:group-hover:opacity-100
            "
          />
        )}

        {/* ==================================================
            IMAGE SHINE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-[-100%]
            z-10
            w-1/2
            skew-x-[-15deg]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:group-hover:translate-x-[400%]
          "
        />
<ProductWishlistButton
  productId={product.id}
  productName={product.name}
/>
      </div>

      {/* ==================================================
          PRODUCT INFORMATION
      ================================================== */}

      <div className="mt-1 w-full">
        {/* ==================================================
            LINE
        ================================================== */}

        <div
          className="
            h-px
            w-full
            bg-border/20
          "
        />

        {/* ==================================================
            BRAND
        ================================================== */}

        <div className="pt-3">
          <span
            className="
              font-roboto
              text-[8px]
              font-medium
              uppercase
              tracking-[0.11em]
              text-text-secondary
            "
          >
            {brand?.name}
          </span>
        </div>

        {/* ==================================================
            PRODUCT NAME
        ================================================== */}

        <div className="mt-2">
          <h3
            className="
              font-notoSerif
              text-[15px]
              font-light
              leading-[1.15]
              tracking-[-0.01em]
              text-text-primary
              sm:text-[15px]
              lg:text-[18px]
            "
          >
            {product.name}
          </h3>
        </div>

        {/* ==================================================
            PRICE
        ================================================== */}

        <div className="mt-2">
          <span
            className="
              font-roboto
              text-[11px]
              font-medium
              tracking-[0.02em]
              text-text-primary
            "
          >
            {product.price} €
          </span>
        </div>

        {/* ==================================================
            ACTIONS
        ================================================== */}

        <div className="mt-4 flex w-full">
          {/* DISCOVER */}

          <Link
            to={productUrl}
            className="
              group/discover
              relative
              flex
              h-9
              flex-1
              items-center
              justify-center
              overflow-hidden
              border
              border-border/25
              bg-background-main
              text-text-primary
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:border-border/40
              hover:bg-background-soft
              active:scale-[0.97]
              active:opacity-80
              sm:h-10
              lg:h-11
            "
          >
            <span
              className="
                relative
                z-10
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.22em]
              "
            >
              Discover
            </span>

            {/* subtle shine */}

            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[-80%]
                w-1/2
                skew-x-[-15deg]
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover/discover:translate-x-[360%]
              "
            />
          </Link>

          {/* ADD TO BAG */}

          <button
            type="button"
            className="
              group/bag
              flex
              h-9
              flex-1
              w-[105px]
              shrink-0
              items-center
              justify-center
              gap-2
              border-y
              border-r
              border-background-box
              bg-background-box
              text-background-main
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:bg-text-primary
              active:scale-[0.97]
               sm:h-10
               lg:h-11
            "
          >
            <span
              className="
                font-roboto
                text-[8px]
                font-medium
                uppercase
                tracking-[0.22em]
              "
            >
              + Bag
            </span>

            <ShoppingBag
              size={13}
              strokeWidth={1.25}
              className="
                transition-transform
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover/bag:-translate-y-[1px]
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}