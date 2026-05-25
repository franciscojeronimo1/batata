import type { Product } from '../data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-kika-brown/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-stone-200/80 via-stone-100 to-kika-cream">
        <img
          key={product.id}
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kika-brown/10 via-transparent to-transparent" />
        {product.badge && (
          <span className="absolute top-3 right-3 rounded-full bg-kika-red px-3 py-1 text-xs font-bold text-white uppercase shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug font-bold text-kika-brown sm:text-xl">
            {product.name}
          </h3>
          <span className="shrink-0 rounded-full bg-kika-yellow px-3 py-1 text-xs font-bold text-kika-brown">
            {product.weight}
          </span>
        </div>
        <p className="mb-2 text-sm font-semibold text-kika-red">{product.tagline}</p>
        <p className="mt-auto text-sm leading-relaxed text-kika-brown/70">{product.description}</p>
      </div>
    </article>
  )
}
