import { useRef } from 'react'

import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import { ArrowLeft } from '@styled-icons/fluentui-system-regular/ArrowLeft'

import SlickSlider from 'react-slick'
import Slider, { SliderSettings } from '@/components/Slider'

import * as S from './styles'

import Image from 'next/image'

export const getStrapiMedia = (url: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
}

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 1900,
      settings: {
        arrows: true,
        slidesToShow: 3,
        draggable: true,
        autoplaySpeed: 4000
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 1,
        draggable: true,
        autoplaySpeed: 4000
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        draggable: true,
        autoplay: false,
        autoplaySpeed: 3000
      }
    }
  ]
}

export type GalleryItem = {
  url: string
}

export type GalleryProps = {
  items: GalleryItem[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((i) => (
          <S.Item key={i.url}>
            <S.ProfileWrapper>
              <S.imageWrapper>
                <Image
                  src={getStrapiMedia(i.url)}
                  alt="Recepção Aware"
                  objectFit="cover"
                  layout="fill"
                  quality={100}
                  priority={true}
                />
              </S.imageWrapper>
            </S.ProfileWrapper>
          </S.Item>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Gallery
