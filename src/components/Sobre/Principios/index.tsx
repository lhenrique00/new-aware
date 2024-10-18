import Base from '@/templates/Base'
import { useInView, animated } from '@react-spring/web'
import * as S from './styles'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import Counter from '@/components/Counter'

const SobrePrincipios = () => {
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

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <animated.div ref={ref} style={springs}>
            <S.Title>Princípios</S.Title>
            <S.Description>
              Prezamos pela comunicação transparente e qualidade de trabalho,
              então, seja qual for o serviço que trabalharmos juntos, você
              sempre estará por dentro de todos os processos.
            </S.Description>
            <S.ColumnWrapper>
              <S.Column>
                <S.ValuesTitle>01. Missão </S.ValuesTitle>
                <S.ValuesDescription>
                  Promover a sua empresa no mercado em que está inserida,
                  digitalmente e tecnologicamente.
                </S.ValuesDescription>
              </S.Column>
              <hr />
              <S.Column>
                <S.ValuesTitle>02. Visão </S.ValuesTitle>
                <S.ValuesDescription>
                  Ser referência em qualidade em serviços digitais e
                  tecnológicos, contribuindo para o crescimento, desenvolvimento
                  e consolidação de diversas empresas.
                </S.ValuesDescription>
              </S.Column>
              <hr />
              <S.Column>
                <S.ValuesTitle>03. Valores </S.ValuesTitle>
                <S.ValuesDescription>
                  Transparência
                  <br />
                  Comprometimento
                </S.ValuesDescription>
              </S.Column>
            </S.ColumnWrapper>
          </animated.div>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default SobrePrincipios
