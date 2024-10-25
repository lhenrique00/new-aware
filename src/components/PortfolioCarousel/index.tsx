import { useRef } from 'react'

import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import { ArrowLeft } from '@styled-icons/fluentui-system-regular/ArrowLeft'

import SlickSlider from 'react-slick'
import Slider, { SliderSettings } from '@/components/Slider'

import * as S from './styles'

import Image from 'next/image'
import Link from 'next/link'

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
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
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

export type CattegoryProps = {
  id: string
  title: string
}

export type ImageProps = {
  url: string
}

export type PortfolioItem = {
  id: string
  title: string
  image: ImageProps
  cattegory: CattegoryProps[]
}

export type PortfolioCarouselProps = {
  items: PortfolioItem[]
}

const PortfolioCarousel = ({ items }: PortfolioCarouselProps) => {
  const slider = useRef<SlickSlider>(null)
  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((i) => (
          <S.Item key={i.id}>
            <S.ProfileWrapper>
              <S.imageWrapper>
                <Image
                  src={getStrapiMedia(i.image.url)}
                  alt="Recepção Aware"
                  objectFit="cover"
                  layout="fill"
                  quality={100}
                  priority={true}
                />
              </S.imageWrapper>
              <S.Mask />
              <S.ProfileInfoWrapper>
                <S.ProfileTitle>{i.title}</S.ProfileTitle>
                <S.CattegoryWrapper>
                  {i.cattegory.map((c) => (
                    <>
                      <S.CattegoryTitle key={c.id}>{c.title}</S.CattegoryTitle>
                    </>
                  ))}
                </S.CattegoryWrapper>
                <S.SocialWrapper>
                  <S.SocialItem>
                    <Link href="#" target="_blank">
                      <svg viewBox="0 0 50 50">
                        <path d="M34 3H16C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13zm-9 33c-6.07 0-11-4.93-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm12-21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                        <path d="M34 25c0 4.96-4.04 9-9 9s-9-4.04-9-9 4.04-9 9-9 9 4.04 9 9z" />
                      </svg>
                    </Link>
                  </S.SocialItem>

                  {/* Facebook */}
                  <S.SocialItem>
                    <Link href="#" target="_blank">
                      <svg viewBox="0 0 50 50">
                        <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm-4 15h-2c-2.14 0-3 .5-3 2v3h5l-1 5h-4v15h-5V29h-4v-5h4v-3c0-4 2-7 6-7 2.9 0 4 1 4 1v4z" />
                      </svg>
                    </Link>
                  </S.SocialItem>
                  <S.SocialItem>
                    <Link href="#" target="_blank">
                      <svg viewBox="0 0 50 50">
                        <path d="M25.997 48C13.312 48 2.992 37.683 2.992 25c0-12.682 10.32-23 23.005-23a22.95 22.95 0 0 1 15.491 5.997l.774.706-7.588 7.585-.703-.602a12.274 12.274 0 0 0-7.975-2.956c-6.767 0-12.273 5.504-12.273 12.27s5.506 12.27 12.273 12.27c4.879 0 8.733-2.491 10.549-6.737H24.997V20.176l22.549.031.167.793c1.179 5.582.235 13.793-4.528 19.667C39.238 45.533 33.456 48 25.997 48z" />
                      </svg>
                    </Link>
                  </S.SocialItem>
                </S.SocialWrapper>
              </S.ProfileInfoWrapper>
            </S.ProfileWrapper>
          </S.Item>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default PortfolioCarousel
