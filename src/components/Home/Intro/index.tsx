import Base from '@/templates/Base'
import { useSpring, useChain, useSpringRef } from '@react-spring/web'
import * as S from './styles'
import { useState } from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import Social from '@/components/Social'
import BannerSlider from '@/components/Home/BannerSlider'
import { BannerProps } from '@/components/Banner'
import MediaMatch from '@/components/MediaMatch'

export type IntroProps = {
  color?: 'white' | 'primary'
  banners: BannerProps[]
}

const HomeIntro = ({ color = 'primary', banners }: IntroProps) => {
  const [open] = useState(true)

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
            <S.Title style={titleSpring}>Aware </S.Title>
            <S.SubTitle style={subtitleSpring}>Soluções</S.SubTitle>
            <S.Description style={descriptionSpring}>
              <b>Transparência</b> e <b>comprometimento</b> com <b>você</b> e
              sua <b>empresa.</b>
            </S.Description>
            <MediaMatch greaterThan="small">
              <Link href="/contato">
                <S.ContactButton>
                  <p>Entrar em contato</p>
                  <ArrowRight />
                </S.ContactButton>
              </Link>
            </MediaMatch>
          </S.Column>
          <S.Column>
            <BannerSlider items={banners} />
          </S.Column>
        </S.ColumnWrapper>
        <MediaMatch lessThan="small">
          <Link href="/contato">
            <S.ContactButton>
              <p>Entrar em contato</p>
              <ArrowRight />
            </S.ContactButton>
          </Link>
        </MediaMatch>
      </Container>
      <hr />
      <S.SocialWrapper>
        <Social color={color} />
      </S.SocialWrapper>
    </Base>
  )
}

export default HomeIntro
