import { LOCATION } from '../data/products'

export function Footer({ whatsappUrl }: { whatsappUrl: string }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-kika-brown/10 bg-kika-cream py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-kika-yellow text-sm">
              😊
            </span>
            <span className="font-display text-xl font-bold text-kika-brown">KIKA</span>
          </div>

          <p className="text-center text-sm text-kika-brown/60">
            Batatas artesanais · {LOCATION}
            <br />
            <span className="text-xs">Atendemos toda a Região</span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-kika-red transition-colors hover:text-kika-red-dark"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-kika-brown/40">
          © {year} Kika Batatas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
