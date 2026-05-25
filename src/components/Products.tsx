import { products } from '../data/products'
import { ProductCard } from './ProductCard'
import { useInView } from '../hooks/useInView'

export function Products() {
  const { ref, isVisible } = useInView()

  return (
    <section id="produtos" className="bg-kika-cream py-20 md:py-28">
      <div
        ref={ref}
        className={`fade-in mx-auto max-w-6xl px-6 ${isVisible ? 'visible' : ''}`}
      >
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-kika-red uppercase">
            Nossos produtos
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-kika-brown md:text-5xl">
            Sabores que conquistam
          </h2>
          <p className="mx-auto max-w-2xl text-kika-brown/70">
            Da batata palha fininha ao salgadinho sabor bacon — cada produto Kika é
            feito com batatas selecionadas e muito carinho.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
