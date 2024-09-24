import Base from '@/templates/Base'
import { useSpring, useTrail, useChain, useSpringRef } from '@react-spring/web'
import * as S from './styles'
import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/Container'
import { useSpringCarousel } from 'react-spring-carousel'
import { useDrag } from '@use-gesture/react'
import Image from 'next/image'

import { ArrowUp } from '@styled-icons/fluentui-system-regular/ArrowUp'
import { ArrowDown } from '@styled-icons/fluentui-system-regular/ArrowDown'

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
}

const item: CarouselItem[] = [
  {
    id: 1,
    title: 'Design',
    description:
      'Transmita com clareza aquilo que se deseja com nossos serviços de design.',
    image: '/images/design.jpg'
  },
  {
    id: 2,
    title: 'Social Media',
    description:
      'Conecte-se com seu público e aumente seu alcance. No mundo digital de hoje, uma presença forte nas redes sociais é essencial para qualquer negócio que queira se destacar.',
    image: '/images/design2.jpg'
  },
  {
    id: 3,
    title: 'Tráfego pago',
    description:
      'Alcance seu público-alvo com precisão e eficiência com anúncios online. Sabemos que a publicidade online é essencial para alcançar seu público-alvo de maneira eficaz e gerar resultados mensuráveis.',
    image: '/images/design3.jpg'
  },
  {
    id: 4,
    title: 'Websites',
    description:
      'Sabemos que assim como as redes sociais, o website é a vitrine digital do seu negócio. Oferecemos soluções completas para a criação de landing pages e sites institucionais que não apenas impressionam visualmente, mas também entregam resultados significativos.',
    image: '/images/design.jpg'
  },
  {
    id: 5,
    title: 'Informática',
    description:
      'Entendemos a importância de manter seus equipamentos de informática funcionando de maneira eficiente e sem interrupções. Oferecemos serviços completos de assistência técnica para computadores, notebooks, impressoras e servidores, garantindo que sua infraestrutura tecnológica esteja sempre em perfeito estado.',
    image: '/images/design.jpg'
  }
]

const Home = () => {
  const [open, setOpen] = useState(true)
  const [activeItemId, setActiveItemId] = useState<number | null>(1)
  const isDragging = useRef(false) // Lock dragging to prevent jumps

  // Create references for each animation
  const titleRef = useSpringRef()
  const subtitleRef = useSpringRef()
  const descriptionRef = useSpringRef()

  // Animation for the Title
  const titleSpring = useSpring({
    ref: titleRef,
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: { duration: 1000 }
  })

  // Animation for the Subtitle
  const subtitleSpring = useSpring({
    ref: subtitleRef,
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: { duration: 1000 }
  })

  // Animation for the Description
  const descriptionSpring = useSpring({
    ref: descriptionRef,
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: { duration: 200 }
  })

  // Chain the animations: Title -> Subtitle -> Description
  useChain(
    open
      ? [titleRef, subtitleRef, descriptionRef]
      : [descriptionRef, subtitleRef, titleRef],
    [0, 0.4, 1] // Set delay between the animations
  )

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    getCurrentActiveItem
  } = useSpringCarousel({
    carouselSlideAxis: 'y',
    withLoop: true,
    itemsPerSlide: 3,
    toPrevItemSpringProps: {
      initial: {
        transform: 'translateX(0%)',
        position: 'absolute'
      },
      from: {
        transform: 'translateX(-100%)',
        position: 'absolute'
      },
      enter: {
        transform: 'translateX(0%)',
        position: 'absolute'
      },
      leave: {
        transform: 'translateX(100%)',
        position: 'absolute'
      }
    },
    toNextItemSpringProps: {
      initial: {
        transform: 'translateX(0%)',
        position: 'absolute'
      },
      from: {
        transform: 'translateX(100%)',
        position: 'absolute'
      },
      enter: {
        transform: 'translateX(0%)',
        position: 'absolute'
      },
      leave: {
        transform: 'translateX(-100%)',
        position: 'absolute'
      }
    },
    items: item.map((i, index) => ({
      id: i.id,
      renderItem: (
        <S.Item isActive={activeItemId === i.id} key={i.id}>
          <S.InfoWrapper>
            <S.InfoTitle>{i.title}</S.InfoTitle>
            <S.InfoDescription>{i.description}</S.InfoDescription>
          </S.InfoWrapper>
          <S.Overlay />
          <S.imageWrapper>
            <Image
              src={i.image}
              alt={i.title}
              objectFit="cover"
              layout="fill"
              quality={100}
              priority={true}
            />
          </S.imageWrapper>
        </S.Item>
      )
    }))
  })

  const updateActiveItem = () => {
    const activeItem = getCurrentActiveItem()
    if (activeItem) {
      setActiveItemId(activeItem.id)
    }
  }

  useEffect(() => {
    updateActiveItem()
  }, [getCurrentActiveItem])

  // Handle drag gestures
  const bind = useDrag(
    ({ direction: [, yDir], distance: [, yDist], last }) => {
      if (isDragging.current) return // Prevents dragging multiple times

      if (last && yDist > 0) {
        // Adjust drag threshold for more control
        isDragging.current = true
        console.log(yDir, yDist)
        if (yDir > 0) {
          console.log(`prev ${yDir}`)
          slideToPrevItem()
          updateActiveItem()
        } else if (yDir < 0) {
          console.log(`next ${yDir}`)
          slideToNextItem()
          updateActiveItem()
        }
        updateActiveItem() // Update the active item
        setTimeout(() => {
          isDragging.current = false // Unlock after transition completes
        }, 10) // Lock for the duration of the transition
      }
    },
    { axis: 'y' } // Restrict drag to vertical axis
  )

  return (
    <Base>
      <Container>
        <S.ColumnWrapper>
          <S.Column>
            {/* Animated Title */}
            <S.Title style={titleSpring}>Aware </S.Title>

            {/* Animated Subtitle */}
            <S.SubTitle style={subtitleSpring}>Soluções</S.SubTitle>

            {/* Animated Description */}
            <S.Description style={descriptionSpring}>
              <b>Transparência</b> e <b>comprometimento</b> com <b>você</b> e
              sua <b>empresa</b>
            </S.Description>
          </S.Column>
        </S.ColumnWrapper>
      </Container>
      <S.CarouselWrapper>
        <S.ArrowWrapper>
          <S.PrevButton
            onClick={() => {
              slideToPrevItem()
              updateActiveItem()
            }}
          >
            <ArrowUp />
          </S.PrevButton>
          <p>{activeItemId}</p>
          <S.NextButton
            onClick={() => {
              slideToNextItem()
              updateActiveItem()
            }}
          >
            <ArrowDown />
          </S.NextButton>
        </S.ArrowWrapper>
        <S.CarouselDiv {...bind()}>
          <S.ItemsWrapper>{carouselFragment}</S.ItemsWrapper>
        </S.CarouselDiv>
      </S.CarouselWrapper>
      <hr />
      <Container>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
      </Container>
    </Base>
  )
}

export default Home
