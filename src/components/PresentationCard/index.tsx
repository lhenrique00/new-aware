import * as S from './styles'
import { useRef, useState } from 'react'
import Card, { CardProps } from '@/components/Card'

import { ArrowLeft } from '@styled-icons/fluentui-system-regular/ArrowLeft'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'

import SlickSlider from 'react-slick'
import Slider, { SliderSettings } from '@/components/Slider'
import MediaMatch from '@/components/MediaMatch'
import { useAnimationControls } from 'framer-motion'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

export type PresentationCardInfoProps = {
  id: string
  title: string
  description: string
  service: CardProps[]
}

export type PresentationCardProps = {
  items: PresentationCardInfoProps[]
}

const PresentationCard = ({ items }: PresentationCardProps) => {
  const slider = useRef<SlickSlider>(null)

  const [selectedButton, setSelectedButton] = useState(0)
  const [selectedItems, setSelectedItems] = useState(items[0].service)
  const [selectedDescription, setSelectedDescription] = useState(
    items[0].description
  )
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [sliderKey, setSliderKey] = useState(Math.random())

  const settings: SliderSettings = {
    ...commonSettings,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: selectedSlide,
    dots: false,
    infinite: false,
    autoplay: false,
    draggable: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          arrows: true,
          slidesToShow: 3.4,
          draggable: true
        }
      },
      {
        breakpoint: 1600,
        settings: {
          arrows: true,
          slidesToShow: 3.2,
          draggable: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          slidesToShow: 3.2,
          draggable: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1.4,
          draggable: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          arrows: false,
          slidesToShow: 1.1,
          draggable: true
        }
      }
    ]
  }

  // ANIMAÇÃO
  const [conditionIsMet, setConditionIsMet] = useState(false)
  const animation = useAnimationControls()

  async function sequence() {
    await animation.start({ opacity: 0 })
    animation.start({ opacity: 1 })
  }

  return (
    <S.SectionServicos>
      <S.ProccessContent>
        <S.CategoriesWrapper>
          <S.ButtonsWrapper>
            {items.map((item, index) => (
              <>
                <S.Button
                  key={`thumb-${index}`}
                  onClick={() => {
                    setSelectedButton(index)
                    setTimeout(() => {
                      setSelectedItems(item.service)
                      setSelectedDescription(item.description)
                      setConditionIsMet(!conditionIsMet)
                      setSelectedSlide(0)

                      // Forçar a re-renderização do Slider
                      setSliderKey(Math.random())
                    }, 500)
                  }}
                  onTap={sequence}
                  style={{
                    backgroundColor:
                      selectedButton === index ? 'white' : '#262626'
                  }}
                >
                  <S.Text
                    style={{
                      fontWeight: selectedButton === index ? 'bold' : 'normal',
                      color: selectedButton === index ? '#262626' : 'white'
                    }}
                  >
                    {item.title}
                  </S.Text>
                </S.Button>
              </>
            ))}
          </S.ButtonsWrapper>
        </S.CategoriesWrapper>
        <S.CategoriesWrapper>
          <MediaMatch greaterThan="medium">
            {!!selectedItems && (
              <>
                <S.Phrase2>{selectedDescription}</S.Phrase2>
                <S.SliderWrapper
                  animate={animation}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Slider key={sliderKey} ref={slider} settings={settings}>
                    {selectedItems.map((i) => (
                      <Card
                        key={i.id}
                        description={i.description}
                        title={i.title}
                        id={i.id}
                        bg_img={i.bg_img}
                        // contactButton={i.contactButton}
                        // detailsButton={i.detailsButton}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper>
              </>
            )}
          </MediaMatch>
          <MediaMatch lessThan="medium">
            {!!selectedItems && (
              <>
                <S.SliderWrapper
                  animate={animation}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <S.Phrase2>{selectedDescription}</S.Phrase2>
                  <Slider key={sliderKey} ref={slider} settings={settings}>
                    {selectedItems.map((i) => (
                      <Card
                        key={i.id}
                        description={i.description}
                        title={i.title}
                        id={i.id}
                        bg_img={i.bg_img}
                        // contactButton={i.contactButton}
                        // detailsButton={i.detailsButton}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper>
              </>
            )}
          </MediaMatch>
        </S.CategoriesWrapper>
      </S.ProccessContent>
    </S.SectionServicos>
  )
}

export default PresentationCard
