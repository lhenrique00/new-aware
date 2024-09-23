import Base from '@/templates/Base'
import { useSpring, useTrail, useChain, useSpringRef } from '@react-spring/web'
import * as S from './styles'
import { useState, useRef } from 'react'
import { Container } from '@/components/Container'
import VerticalCarousel from '@/components/VerticalCarousel'

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
          <S.Column>
            <VerticalCarousel>
              <S.Item>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
              </S.Item>
              <S.Item>
                <h1>2</h1>
                <h1>2</h1>
                <h1>2</h1>
                <h1>2</h1>
              </S.Item>
              <S.Item>
                <h1>3</h1>
                <h1>3</h1>
                <h1>3</h1>
                <h1>3</h1>
              </S.Item>
              <S.Item>
                <h1>4</h1>
                <h1>4</h1>
                <h1>4</h1>
                <h1>4</h1>
                <h1>4</h1>
              </S.Item>
              <S.Item>
                <h1>5</h1>
                <h1>5</h1>
                <h1>5</h1>
                <h1>5</h1>
                <h1>5</h1>
              </S.Item>
              <S.Item>
                <h1>6</h1>
                <h1>6</h1>
                <h1>6</h1>
                <h1>6</h1>
              </S.Item>
            </VerticalCarousel>
          </S.Column>
        </S.ColumnWrapper>
      </Container>
    </Base>
  )
}

export default Home
