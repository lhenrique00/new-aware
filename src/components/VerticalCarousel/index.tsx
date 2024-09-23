import * as S from './styles'
import { useSpringCarousel } from 'react-spring-carousel'

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
}

const item: CarouselItem[] = [
  {
    id: 1,
    title: 'DESIGN',
    description:
      'Transmita com clareza aquilo que se deseja com nossos serviços de design.',
    image: '/images/design.jpg'
  },
  {
    id: 2,
    title: 'BRANDING',
    description: 'Construímos a identidade visual perfeita para sua marca.',
    image: '/images/design2.jpg'
  },
  {
    id: 3,
    title: 'MARKETING',
    description:
      'Nossa equipe é especializada em soluções de marketing digital.',
    image: '/images/design3.jpg'
  },
  {
    id: 4,
    title: 'DESIGN',
    description: 'Outro serviço de design criativo.',
    image: '/images/design4.jpg'
  }
]

const VerticalCarousel = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      carouselSlideAxis: 'y',
      withLoop: true,
      items: [
        {
          id: 'item-1',
          renderItem: (
            <S.Item>
              <h1>Item 1</h1>
            </S.Item>
          )
        },
        {
          id: 'item-2',
          renderItem: (
            <S.Item>
              <h1>Item 2</h1>
            </S.Item>
          )
        },
        {
          id: 'item-3',
          renderItem: (
            <S.Item>
              <h1>Item 3</h1>
            </S.Item>
          )
        },
        {
          id: 'item-4',
          renderItem: (
            <S.Item>
              <h1>Item 4</h1>
            </S.Item>
          )
        },
        {
          id: 'item-5',
          renderItem: (
            <S.Item>
              <h1>Item 5</h1>
            </S.Item>
          )
        }
      ]
    })
  return (
    <S.Wrapper>
      <S.Teste>
        {carouselFragment}
        <button onClick={slideToPrevItem}>Prev item</button>
        <button onClick={slideToNextItem}>Next item</button>
      </S.Teste>
    </S.Wrapper>
  )
}

export default VerticalCarousel
