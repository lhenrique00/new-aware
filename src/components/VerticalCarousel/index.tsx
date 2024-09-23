import { useRef } from 'react'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import SlickSlider from 'react-slick'
import Slider, { SliderSettings } from '@/components/Slider'

import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: true,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,

  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  speed: 900
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
