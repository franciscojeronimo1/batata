import type { Product } from '../data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-4 right-4 rounded-full bg-kika-red px-3 py-1 text-xs font-bold text-white uppercase">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-kika-brown">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-kika-yellow/20 px-3 py-1 text-sm font-semibold text-kika-brown">
            {product.weight}
          </span>
        </div>
        <p className="mb-2 text-sm font-semibold text-kika-red">{product.tagline}</p>
        <p className="text-sm leading-relaxed text-kika-brown/70">{product.description}</p>
      </div>
    </article>
  )
}
