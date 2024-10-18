import Base from '@/templates/Base'
import { useSpring, useChain, useSpringRef } from '@react-spring/web'
import * as S from './styles'
import { useState } from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import Social from '@/components/Social'
import IntroCarousel from '../IntroCarousel'

export type IntroProps = {
  color?: 'white' | 'primary'
}

const HomeIntro = ({ color = 'primary' }: IntroProps) => {
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
              <b>Transparência</b> e <b>comprometimento</b> com <b>você</b> e
              sua <b>empresa.</b>
            </S.Description>
            <Link href="/contato">
              <S.ContactButton>
                <p>Entrar em contato</p>
                <ArrowRight />
              </S.ContactButton>
            </Link>
          </S.Column>
          <S.Column>
            <IntroCarousel />
          </S.Column>
        </S.ColumnWrapper>
      </Container>

      <hr />
      <S.SocialWrapper>
        <Social color={color} />
      </S.SocialWrapper>
    </Base>
  )
}

export default HomeIntro
