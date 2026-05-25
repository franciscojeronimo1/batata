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
    id: 'artesanal',
    name: 'Batata Americana com 20 unidades',
    weight: '35g',
    tagline: 'Crocante e saboroso',
    description:
      'Batatas frescas e crocantes, preparadas com batatas selecionadas. O clássico que não pode faltar a qualquer hora.',
    image: '/images/batata-35g-20un.png',
  },
  {
    id: 'pelete-bacon',
    name: 'Pelete de Bacon',
    weight: '125g',
    tagline: 'A Mais Crocante!',
    description:
      'Pelete de bacon ondulado com listras douradas e sabor defumado. Perfeito para petiscar a qualquer hora.',
    image: '/images/pelete-bacon.png',
  },
  {
    id: 'Batata americana',
    name: 'Batata americana',
    weight: '160g',
    tagline: 'Crocante e saboroso',
    description:
      'Batatas frescas e crocantes, preparadas com batatas selecionadas. O clássico que não pode faltar a qualquer hora.',
    image: '/images/batata-americana.png',
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
