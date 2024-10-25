import * as S from './styles'
import { useInView, animated } from '@react-spring/web'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import Image from 'next/image'
import MediaMatch from '@/components/MediaMatch'

export type ServicePageIntroProps = {
  title: string
  description: string
  cover_image: string
}

interface ParallaxProps {
  children: string | JSX.Element | JSX.Element[]
  baseVelocity: number
}

export const getStrapiMedia = (url: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
}

const Intro = ({ title, description, cover_image }: ServicePageIntroProps) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      reverse: true,
      config: { duration: 800 }
    }),
    {
      rootMargin: '-20% 0%'
    }
  )

  function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    })

    const x = useTransform(baseX, (v) => `${wrap(0, -200, v)}%`)

    const directionFactor = useRef<number>(1)

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get()

      baseX.set(baseX.get() + moveBy)

      // Faz com que o movimento continue de forma contínua e infinita
      if (baseX.get() > 100) {
        baseX.set(-100)
      } else if (baseX.get() < -100) {
        baseX.set(100)
      }
    })

    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children}</span>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <animated.div ref={ref} style={springs}>
        <S.IntroSection>
          <S.imageWrapper>
            <Image
              src={getStrapiMedia(cover_image)}
              alt="Recepção Aware"
              objectFit="cover"
              layout="fill"
              quality={100}
              priority={true}
            />
          </S.imageWrapper>
          <S.Mask />
          <S.ParallaxWrapper>
            <MediaMatch greaterThan="medium">
              <ParallaxText baseVelocity={4}>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
              </ParallaxText>
            </MediaMatch>
            <MediaMatch lessThan="medium">
              <ParallaxText baseVelocity={20}>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
                <h1>
                  <span>●</span>
                  {title}
                </h1>
              </ParallaxText>
            </MediaMatch>
          </S.ParallaxWrapper>
          <S.IntroInfo>
            <S.IntroInfoWrapper>
              <h1>{title}</h1>
              <h3>{description}</h3>
              <Link href="/contato">
                <S.ContactButton>
                  <p>Entrar em contato</p>
                  <ArrowRight />
                </S.ContactButton>
              </Link>
            </S.IntroInfoWrapper>
          </S.IntroInfo>
        </S.IntroSection>
      </animated.div>
    </>
  )
}

export default Intro
