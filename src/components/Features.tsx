import { features } from '../data/products'
import { useInView } from '../hooks/useInView'

function FeatureIcon({ type }: { type: 'potato' | 'crunch' | 'heart' }) {
  const icons = {
    potato: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <ellipse cx="12" cy="13" rx="7" ry="9" />
        <circle cx="9" cy="11" r="0.8" fill="currentColor" />
        <circle cx="14" cy="9" r="0.8" fill="currentColor" />
        <circle cx="13" cy="15" r="0.8" fill="currentColor" />
      </svg>
    ),
    crunch: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path d="M4 12c2-4 4-6 8-6s6 2 8 6" strokeLinecap="round" />
        <path d="M6 16c1.5-2 3.5-3 6-3s4.5 1 6 3" strokeLinecap="round" />
        <path d="M8 20c1-1 2.5-1.5 4-1.5s3 .5 4 1.5" strokeLinecap="round" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  }

  return icons[type]
}

export function Features() {
  const { ref, isVisible } = useInView()

  return (
    <section className="bg-kika-red py-20 md:py-28">
      <div
        ref={ref}
        className={`fade-in mx-auto max-w-6xl px-6 ${isVisible ? 'visible' : ''}`}
      >
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-kika-yellow uppercase">
            Por que Kika?
          </span>
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            Qualidade em cada mordida
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition-transform hover:scale-105"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-kika-yellow text-kika-brown">
                <FeatureIcon type={feature.icon} />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
