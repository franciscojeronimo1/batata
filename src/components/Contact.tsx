import { LOCATION, PHONE_DISPLAY } from '../data/products'
import { WhatsAppButton } from './WhatsAppButton'
import { useInView } from '../hooks/useInView'

export function Contact() {
  const { ref, isVisible } = useInView()

  return (
    <section id="contato" className="bg-kika-brown py-20 md:py-28">
      <div
        ref={ref}
        className={`fade-in mx-auto max-w-3xl px-6 text-center ${isVisible ? 'visible' : ''}`}
      >
        <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-kika-yellow uppercase">
          Faça seu pedido
        </span>
        <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-5xl">
          Peça suas batatas Kika agora
        </h2>
        <p className="mb-8 text-lg text-white/75">
          Entre em contato pelo WhatsApp e garanta seus produtos favoritos.
          Atendemos {LOCATION} e região.
        </p>

        <WhatsAppButton size="lg" label="Peça pelo WhatsApp" className="mb-6" />

        <p className="text-white/60">
          Ou ligue:{' '}
          <a href="tel:+5535999664056" className="font-semibold text-kika-yellow hover:underline">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  )
}
