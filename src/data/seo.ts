import { LOCATION, PHONE_DISPLAY } from './products'

export const SITE_NAME = 'Kika Batatas'
export const SITE_TAGLINE = 'Natural & Crocante'

export const SEO_TITLE =
  'Kika Batatas | Batata Palha, Chips e Salgadinhos em Santana do Jacaré - MG'

export const SEO_DESCRIPTION =
  'Kika Batatas: batata palha fininha, chips naturais crocantes, batata americana e pelete de bacon. Produção em Santana do Jacaré, MG. Peça pelo WhatsApp.'

export const SEO_KEYWORDS = [
  'kika batatas',
  'batata palha',
  'batata palha santana do jacaré',
  'chips batata minas gerais',
  'batata americana',
  'pelete de bacon',
  'salgadinho mg',
  'batata natural',
  'fabricante batata palha',
].join(', ')

export const SEO_LOCALITY = 'Santana do Jacaré'
export const SEO_REGION = 'MG'
export const SEO_COUNTRY = 'BR'
export const SEO_PHONE_E164 = '+5535999664056'
export const SEO_PHONE = PHONE_DISPLAY
export const SEO_LOCATION = LOCATION
export const SEO_OG_IMAGE = '/images/hero-batatas.jpg'

export function getLocalBusinessSchema(siteUrl: string) {
  const base = siteUrl.replace(/\/$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: SITE_NAME,
    description: SEO_DESCRIPTION,
    image: `${base}${SEO_OG_IMAGE}`,
    url: `${base}/`,
    telephone: SEO_PHONE_E164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO_LOCALITY,
      addressRegion: SEO_REGION,
      addressCountry: SEO_COUNTRY,
    },
    areaServed: {
      '@type': 'State',
      name: 'Minas Gerais',
    },
    servesCuisine: 'Brasileira',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [],
  }
}
