import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../data/products'
import { WhatsAppIcon } from './WhatsAppButton'

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-kika-brown/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-kika-yellow text-xl shadow-md transition-transform group-hover:scale-110">
            😊
          </span>
          <span className="font-display text-2xl font-bold tracking-wide text-white">KIKA</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-kika-yellow"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe57] hover:scale-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Peça agora
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-kika-brown/98 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white/90 hover:text-kika-yellow"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Peça pelo WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
