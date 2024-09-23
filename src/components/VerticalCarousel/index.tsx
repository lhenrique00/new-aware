import { useRef } from 'react'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import SlickSlider from 'react-slick'
import Slider, { SliderSettings } from '@/components/Slider'

import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 900,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        draggable: true,
        autoplaySpeed: 4000
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        draggable: true,
        autoplaySpeed: 4000
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 6000
      }
    }
  ]
}

export type VerticalCardCarouselSliderProps = {
  children: React.ReactNode
}

const VerticalCarousel = ({ children }: VerticalCardCarouselSliderProps) => {
  const slider = useRef<SlickSlider>(null)
  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {children}
      </Slider>
    </S.Wrapper>
  )
}

export default VerticalCarousel
