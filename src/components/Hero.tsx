import { WhatsAppButton } from './WhatsAppButton'
import { LOCATION } from '../data/products'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="/images/hero-batatas.jpg"
        alt="Batatas artesanais Kika — chips dourados e batata palha"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-kika-brown/80 via-kika-brown/60 to-kika-brown/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <span className="mb-4 inline-block rounded-full bg-kika-yellow/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-kika-yellow uppercase backdrop-blur-sm">
          Artesanal · {LOCATION}
        </span>
        <h1 className="mb-6 font-display text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Batatas artesanais feitas com carinho
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/85 sm:text-xl">
          Chips crocantes, salgadinhos saborosos e batata palha fininha. Produzidas
          artesanalmente em Minas Gerais para você saborear o melhor.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton size="lg" label="Peça pelo WhatsApp" />
          <a
            href="#produtos"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-kika-yellow hover:text-kika-yellow"
          >
            Ver produtos
          </a>
        </div>
      </div>
    </section>
  )
}
