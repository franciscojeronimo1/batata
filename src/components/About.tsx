import { LOCATION } from '../data/products'
import { useInView } from '../hooks/useInView'

function Mascot() {
  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32 drop-shadow-lg" aria-hidden="true">
      <circle cx="60" cy="60" r="55" fill="#F5B800" />
      <circle cx="42" cy="50" r="8" fill="#2D1810" />
      <circle cx="78" cy="50" r="8" fill="#2D1810" />
      <circle cx="44" cy="48" r="3" fill="white" />
      <circle cx="80" cy="48" r="3" fill="white" />
      <path
        d="M40 72 Q60 88 80 72"
        stroke="#2D1810"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M30 30 Q35 10 50 20 Q60 5 70 20 Q85 10 90 30"
        fill="#FFD54F"
      />
    </svg>
  )
}

export function About() {
  const { ref, isVisible } = useInView()

  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`fade-in mx-auto max-w-6xl px-6 ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <Mascot />
          </div>
          <div>
            <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-kika-red uppercase">
              Nossa história
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-kika-brown md:text-4xl">
              Tradição natural de Minas Gerais
            </h2>
            <p className="mb-4 leading-relaxed text-kika-brown/80">
              A Kika nasceu do amor pela batata e pela tradição mineira. Em{' '}
              <strong>{LOCATION}</strong>, preparamos cada pacote com dedicação,
              selecionando as melhores batatas para garantir sabor, crocância e
              qualidade.
            </p>
            <p className="mb-4 leading-relaxed text-kika-brown/80">
              Nossos produtos vão da clássica batata palha fininha e sequinha aos
              chips naturais e salgadinhos sabor bacon — tudo feito com receita
              de família e aquele toque especial que só quem faz com carinho consegue.
            </p>
            <p className="leading-relaxed text-kika-brown/80">
              Experimente e descubra por que somos <em>a mais crocante</em> da região!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
