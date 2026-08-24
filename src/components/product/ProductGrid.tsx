import type { Product } from "../../types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div
        className="
          flex
          min-h-[420px]
          items-center
          justify-center
          border-y
          border-border/20
        "
      >
        <div className="text-center">
          <p
            className="
              font-notoSerif
              text-3xl
              font-light
              tracking-[-0.02em]
              text-text-primary
            "
          >
            Nothing found
          </p>

          <p
            className="
              mt-3
              font-roboto
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-text-secondary
            "
          >
            Try adjusting your filters
          </p>
        </div>
      </div>
    );
  }

  return (
    <section>
      {/* PRODUCTS */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-4
          gap-y-10
          sm:grid-cols-3
          sm:gap-x-6
          sm:gap-y-14
          lg:grid-cols-4
          lg:gap-x-7
          lg:gap-y-16
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}