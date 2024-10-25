import Base from '@/templates/Base'
import { useSpring, useChain, useSpringRef } from '@react-spring/web'
import * as S from './styles'
import { useState } from 'react'
import { Container } from '@/components/Container'
import { useSpringCarousel } from 'react-spring-carousel'
import { item } from './mock'
import { ArrowLeft } from '@styled-icons/fluentui-system-regular/ArrowLeft'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'

const HomeDeoimentos = () => {
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

  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
      items: item.map((item) => ({
        id: item.id,
        renderItem: (
          <S.ItemWrapper key={item.id}>
            <S.CarouselDescription>{item.description}</S.CarouselDescription>
            <hr />
            <S.Person>{item.person}</S.Person>
            <S.CarouselDescription>{item.company}</S.CarouselDescription>
          </S.ItemWrapper>
        )
      })),
      withLoop: true,
      itemsPerSlide: 1
    })

  return (
    <Base>
      <S.Wrapper>
        <Container>
          <S.ColumnWrapper>
            <S.Column>
              <S.Title style={titleSpring}>DEPOIMENTOS</S.Title>
              <S.Description style={descriptionSpring}>
                Veja o que nossos clientes falam sobre a gente.
              </S.Description>
            </S.Column>
            <S.Column>
              <S.CarouselWrapper>
                <S.PrevButton
                  onClick={() => {
                    slideToPrevItem()
                  }}
                >
                  <ArrowLeft />
                </S.PrevButton>
                <S.ItemsWrapper>{carouselFragment}</S.ItemsWrapper>
                <S.NextButton
                  onClick={() => {
                    slideToNextItem()
                  }}
                >
                  <ArrowRight />
                </S.NextButton>
              </S.CarouselWrapper>
            </S.Column>
          </S.ColumnWrapper>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default HomeDeoimentos
