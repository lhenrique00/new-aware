import Base from '@/templates/Base'
import {
  useSpring,
  useChain,
  useSpringRef,
  useInView,
  animated
} from '@react-spring/web'
import * as S from './styles'
import { useState } from 'react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import Counter from '@/components/Counter'

const HomeSobre = () => {
  // Animate useinview
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: 10
      },
      reverse: true,
      config: { duration: 800 }
    }),
    {
      rootMargin: '-20% 0%'
    }
  )

  const [imageRef, imageSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: 10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-20% 0%'
    }
  )

  const [autorityRef, autoritySprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: 10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-20% 0%'
    }
  )

  return (
    <Base>
      <Container>
        <animated.div ref={ref} style={springs}>
          <S.Title>Sobre </S.Title>

          <S.ColumnWrapper>
            <S.Column>
              {/* Animated Title */}

              {/* Animated Subtitle */}
              <S.Description>
                Fundada em 2021 por Luiz Henrique Cardoso, a Aware Soluções é
                uma agência de publicidade localizada em Porto União - SC.
                <br />
                <br />
                Com mais de três anos de atuação no mercado nos destacamos pela
                nossa abordagem limpa e direta, valorizando a transparência e o
                comprometimento.
              </S.Description>
            </S.Column>
            <S.Column>
              {/* Animated Description */}
              <S.Description>
                A agência busca não apenas atender, mas superar as expectativas
                dos clientes, construindo relações de confiança e parcerias
                duradouras.
                <br />
                <br />
                Aqui acreditamos que cada cliente merece um atendimento
                personalizado e um serviço de excelência. Estamos comprometidos
                em transformar a presença digital das empresas, ajudando-as a
                alcançar seus objetivos de negócios com estratégias criativas e
                bem planejadas.
              </S.Description>
            </S.Column>
          </S.ColumnWrapper>
        </animated.div>
        <S.imageWrapper ref={imageRef} style={imageSprings}>
          <Image
            src="/images/recepcao.jpg"
            alt="Recepção Aware"
            objectFit="cover"
            layout="fill"
            quality={100}
            priority={true}
          />
        </S.imageWrapper>
        <S.AutorityWrapper ref={autorityRef} style={autoritySprings}>
          <S.AutorityItem>
            <S.AutorityNumber>
              +<Counter from={0} to={50} />
            </S.AutorityNumber>
            <S.AutorityDescription>Empresas atendidas</S.AutorityDescription>
          </S.AutorityItem>
          <S.AutorityItem>
            <S.AutorityNumber>
              +<Counter from={0} to={3} />
            </S.AutorityNumber>
            <S.AutorityDescription>Anos no mercado</S.AutorityDescription>
          </S.AutorityItem>
          <S.AutorityItem>
            <S.AutorityNumber>
              +<Counter from={0} to={100} />
            </S.AutorityNumber>
            <S.AutorityDescription>Projetos Finalizados</S.AutorityDescription>
          </S.AutorityItem>
          <S.AutorityItem>
            <S.AutorityNumber>
              +<Counter from={0} to={500} />
            </S.AutorityNumber>
            <S.AutorityDescription>Clientes satisfeitos</S.AutorityDescription>
          </S.AutorityItem>
          <S.AutorityItem>
            <Link href="/sobre">
              <S.ContactButton>
                <p>Ver mais</p>
                <ArrowRight />
              </S.ContactButton>
            </Link>
          </S.AutorityItem>
        </S.AutorityWrapper>
      </Container>
    </Base>
  )
}

export default HomeSobre
