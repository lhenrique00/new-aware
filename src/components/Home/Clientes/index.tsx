import Base from '@/templates/Base'
import * as S from './styles'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { useRef } from 'react'
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

interface ParallaxProps {
  children: string | JSX.Element | JSX.Element[]
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 180 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1800], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(0, -137, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1800)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (180% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children}</span>
      </motion.div>
    </div>
  )
}

const HomeClientes = () => {
  return (
    <Base>
      <S.Wrapper>
        <Container>
          <S.Title>Empresas que confiam em nossos serviços </S.Title>
          <S.Description>
            Temos orgulho em ter a confiança de cada uma dessas empresas
            fornecendo serviços personalizados para cada uma delas.
            <br />
            <br />
            Essas colaborações refletem nosso compromisso com a excelência e o
            comprometimento que temos com o cliente, garantindo resultados
            excepcionais em todos os projetos.
          </S.Description>
        </Container>
        <S.ParallaxWrapper>
          <hr />
          <ParallaxText baseVelocity={10}>
            <Image
              alt="teste"
              src="/images/clientes/1.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/2.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/3.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/4.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/5.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/6.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/7.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/8.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/9.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/10.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/11.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/12.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/1.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/2.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/3.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/4.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/5.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/6.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/7.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/8.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/9.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/10.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/11.png"
              width={180}
              height={90}
            />
            <Image
              alt="teste"
              src="/images/clientes/12.png"
              width={180}
              height={90}
            />
          </ParallaxText>
        </S.ParallaxWrapper>
        <hr />
      </S.Wrapper>
    </Base>
  )
}

export default HomeClientes
