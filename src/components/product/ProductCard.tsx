import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group w-[280px] shrink-0">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-background-soft">
        <img
          src={product.image}
          alt={product.name}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain
            transition-opacity
            duration-500
            group-hover:opacity-0
          "
        />

        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />
        )}
      </div>

      {/* Information */}
      <div className="mt-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-text-muted">
          {product.name}
        </p>

        <p className="mt-1 text-sm text-text-primary">
          {product.price} €
        </p>
      </div>
    </article>
  );
}