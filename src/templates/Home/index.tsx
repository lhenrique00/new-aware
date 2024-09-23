import Base from '@/templates/Base'
import { useSpring, useTrail, useChain, useSpringRef } from '@react-spring/web'
import * as S from './styles'
import { useState, useRef } from 'react'
import { Container } from '@/components/Container'
import VerticalCarousel from '@/components/VerticalCarousel'
import Image from 'next/image'
import { useSpringCarousel } from 'react-spring-carousel'
const Home = () => {
  const [open, setOpen] = useState(true)

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

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      carouselSlideAxis: 'y',
      withLoop: true,
      itemsPerSlide: 1,
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
              Transparência e comprometimento com você e sua empresa
            </S.Description>
          </S.Column>
        </S.ColumnWrapper>
      </Container>
      <S.CarouselWrapper>
        <S.PrevButton onClick={slideToPrevItem}>Prev item</S.PrevButton>
        <S.NextButton onClick={slideToNextItem}>Next item</S.NextButton>
        <S.CarouselDiv>
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
