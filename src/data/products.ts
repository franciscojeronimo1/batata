export const WHATSAPP_URL =
  'https://wa.me/5535999664056?text=Ol%C3%A1!%20Quero%20pedir%20batatas%20Kika'

export const PHONE_DISPLAY = '(35) 9 9966-4056'

export const LOCATION = 'Santana do Jacaré — MG'

export interface Product {
  id: string
  name: string
  weight: string
  tagline: string
  description: string
  image: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'batata-20un',
    name: 'Batata Americana com 20 unidades',
    weight: '35g cada',
    tagline: 'Crocante e saboroso',
    description:
      'Pacote com 20 saquinhos de batata americana. Batatas selecionadas, ideais para revenda ou festas.',
    image: '/images/batata-35g-20un.png',
  },
  {
    id: 'batata-palha',
    name: 'Batata Palha',
    weight: '120g',
    tagline: 'Fininhas e Sequinhas',
    description:
      'Palha fininha e sequinha, ideal para strogonoff, hot dog e pratos especiais. Batatas selecionadas.',
    image: '/images/batata-palha.png',

  },
  {
    id: 'batata-americana',
    name: 'Batata Americana',
    weight: '160g',
    tagline: 'A Mais Crocante!',
    description:
      'Chips redondos e crocantes em saquinho individual. O clássico que não pode faltar.',
    image: '/images/batata-americana.png',
  },
  {
    id: 'pelete-bacon',
    name: 'Pelete de Bacon',
    weight: '125g',
    tagline: 'Sabor defumado',
    description:
      'Pelete ondulado com listras douradas e sabor defumado de bacon. Perfeito para petiscar.',
    image: '/images/pelete-bacon.png',
  },
]

export const features = [
  {
    title: 'Batatas Selecionadas',
    description: 'Usamos apenas batatas de qualidade para garantir sabor e crocância em cada pacote.',
    icon: 'potato' as const,
  },
  {
    title: 'Ultra Crocantes',
    description: 'Preparadas com cuidado para entregar aquela crocância que só a Kika tem.',
    icon: 'crunch' as const,
  },
  {
    title: '100% Artesanal',
    description: 'Produção artesanal em Santana do Jacaré, com receita de família e muito carinho.',
    icon: 'heart' as const,
  },
]
