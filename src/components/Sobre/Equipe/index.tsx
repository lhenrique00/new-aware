import Base from '@/templates/Base'
import { useInView, animated } from '@react-spring/web'
import * as S from './styles'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { useState } from 'react'
import { PlusCircle } from '@styled-icons/feather/PlusCircle'

export type EquipeCardProps = {
  id: string
  nome: string
  img: string
  cargo1: string
  cargo2: string
  cargo3: string
  cargo4: string
}

export type EquipeComponentProps = {
  items: EquipeCardProps[]
}

const Equipe = ({ items }: EquipeComponentProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [editing, setEditing] = useState(new Set())

  const handleExpand = (id: string) => {
    setEditing((editing) => {
      // Copy the set
      editing = new Set(editing)
      if (editing.has(id)) {
        // Already editing, stop editing
        editing.delete(id)
      } else {
        // Not editing, start
        editing.add(id)
      }
      return editing
    })
  }

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
          <S.imageWrapper>
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
          {items.map(({ id, nome, img, cargo1, cargo2, cargo3, cargo4 }) => (
            <S.CardWrapper key={id}>
              <div className="our-team">
                <S.IconWrapper
                  key={`thumb-${id}`}
                  onClick={() => {
                    handleExpand(id)
                    setIsOpen(true)
                  }}
                  aria-hidden={!isOpen}
                  isOpen={isOpen}
                >
                  {editing.has(id) ? (
                    <PlusCircle
                      aria-label="Open Modal"
                      style={{ rotate: '45deg', color: '#323739' }}
                    />
                  ) : (
                    <PlusCircle aria-label="Open Modal" />
                  )}
                </S.IconWrapper>
                <div
                  className="picture"
                  onClick={() => {
                    handleExpand(id)
                    setIsOpen(true)
                  }}
                >
                  <Image
                    alt={nome}
                    src={img}
                    objectFit="cover"
                    layout="fill"
                    quality={100}
                    priority={true}
                  />
                </div>
                {editing.has(id) && (
                  <S.CardFull aria-hidden={!isOpen} isOpen={isOpen}>
                    <S.MenuNav>
                      <S.equipePerson>{nome}</S.equipePerson>
                      <S.Cargo>{cargo1}</S.Cargo>
                      <S.Cargo>{cargo2}</S.Cargo>
                      <S.Cargo>{cargo3}</S.Cargo>
                      <S.Cargo>{cargo4}</S.Cargo>
                    </S.MenuNav>
                  </S.CardFull>
                )}
              </div>
            </S.CardWrapper>
          ))}
        </S.equipeWrapper>
      </Container>
    </Base>
  )
}

export default Equipe
