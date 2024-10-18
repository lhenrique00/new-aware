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

const Equipe = () => {
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

  const [equipeRef, equipeSprings] = useInView(
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
          <S.Title>Nossa equipe</S.Title>
          <S.imageWrapper ref={imageRef} style={imageSprings}>
            <Image
              src="/images/equipe.jpg"
              alt="Recepção Aware"
              objectFit="cover"
              layout="fill"
              quality={100}
              priority={true}
            />
          </S.imageWrapper>
        </animated.div>

        <S.equipeWrapper ref={equipeRef} style={equipeSprings}>
          <S.equipeItem>
            <S.equipeImageWrapper ref={imageRef} style={imageSprings}>
              <Image
                src="/images/equipe/victor.jpg"
                alt="Recepção Aware"
                objectFit="cover"
                layout="fill"
                quality={100}
                priority={true}
              />
            </S.equipeImageWrapper>
            <S.equipePerson>João Victor Coito</S.equipePerson>
            <S.equipeDescription>
              Social Media <br />
              Designer
            </S.equipeDescription>
          </S.equipeItem>
          <S.equipeItem>
            <S.equipeImageWrapper ref={imageRef} style={imageSprings}>
              <Image
                src="/images/equipe/andrey.jpg"
                alt="Recepção Aware"
                objectFit="cover"
                layout="fill"
                quality={100}
                priority={true}
              />
            </S.equipeImageWrapper>
            <S.equipePerson>Andrey Ricardo Schmidt</S.equipePerson>
            <S.equipeDescription>Técnico de informática</S.equipeDescription>
          </S.equipeItem>
          <S.equipeItem>
            <S.equipeImageWrapper ref={imageRef} style={imageSprings}>
              <Image
                src="/images/equipe/joao.jpg"
                alt="Recepção Aware"
                objectFit="cover"
                layout="fill"
                quality={100}
                priority={true}
              />
            </S.equipeImageWrapper>
            <S.equipePerson>João Victor Rockenbach</S.equipePerson>
            <S.equipeDescription>
              Sócio Administrador
              <br />
              Gestor de tráfego
            </S.equipeDescription>
          </S.equipeItem>
          <S.equipeItem>
            <S.equipeImageWrapper ref={imageRef} style={imageSprings}>
              <Image
                src="/images/equipe/hnrq.jpg"
                alt="Recepção Aware"
                objectFit="cover"
                layout="fill"
                quality={100}
                priority={true}
              />
            </S.equipeImageWrapper>
            <S.equipePerson>Luiz Henrique Cardoso</S.equipePerson>
            <S.equipeDescription>
              Fundador
              <br />
              Webdesigner
              <br />
              Programador fullstack
            </S.equipeDescription>
          </S.equipeItem>
          <S.equipeItem>
            <S.equipeImageWrapper ref={imageRef} style={imageSprings}>
              <Image
                src="/images/equipe/gustavo.jpg"
                alt="Recepção Aware"
                objectFit="cover"
                layout="fill"
                quality={100}
                priority={true}
              />
            </S.equipeImageWrapper>
            <S.equipePerson>Gustavo Brisola</S.equipePerson>
            <S.equipeDescription>
              Social Media <br />
              Designer
            </S.equipeDescription>
          </S.equipeItem>
        </S.equipeWrapper>
      </Container>
    </Base>
  )
}

export default Equipe
