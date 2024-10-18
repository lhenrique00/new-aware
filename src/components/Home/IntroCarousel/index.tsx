import Base from '@/templates/Base'
import * as S from './styles'
import { useState, useRef, useEffect } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import { useDrag } from '@use-gesture/react'
import Image from 'next/image'
import { ArrowUp } from '@styled-icons/fluentui-system-regular/ArrowUp'
import { ArrowDown } from '@styled-icons/fluentui-system-regular/ArrowDown'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import { item } from './mock'

const IntroCarousel = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(1)
  const isDragging = useRef(false) // Lock dragging to prevent jumps

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
    items: item.map((i) => ({
      id: i.id,
      renderItem: (
        <S.Item isActive={activeItemId === i.id} key={i.id}>
          <S.InfoWrapper>
            <S.InfoTitle>{i.title}</S.InfoTitle>
            <S.InfoDescription>{i.description}</S.InfoDescription>
            <S.Button>
              <ArrowRight />
            </S.Button>
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
    </Base>
  )
}

export default IntroCarousel
