import Banner, { BannerProps } from '@/components/Banner'
import SliderVertical, { SliderSettings } from '@/components/SliderVertical'

import * as S from './styles'

import { ArrowUp } from '@styled-icons/fluentui-system-regular/ArrowUp'
import { ArrowDown } from '@styled-icons/fluentui-system-regular/ArrowDown'

export type BannerSliderProps = {
  items: BannerProps[]
}

const commonSettings: SliderSettings = {
  nextArrow: <ArrowDown aria-label="next image" />,
  prevArrow: <ArrowUp aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  dots: false,
  arrows: true,
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 2.4,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows: false,
        vertical: false,
        slidesToShow: 1,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 760,
      settings: {
        arrows: false,
        vertical: false,
        slidesToShow: 1,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <SliderVertical settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </SliderVertical>
  </S.Wrapper>
)

export default BannerSlider
