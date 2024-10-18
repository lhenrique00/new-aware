import Base from '@/templates/Base'
import { useInView, animated } from '@react-spring/web'
import * as S from './styles'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Counter from '@/components/Counter'

const SobreIntro = () => {
  // Animate useinview
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 10
      },
      to: {
        opacity: 1,
        y: 0
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
        y: 10
      },
      to: {
        opacity: 1,
        y: 0
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
        y: 10
      },
      to: {
        opacity: 1,
        y: 0
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
        <S.Wrapper>
          <animated.div ref={ref} style={springs}>
            <S.ColumnWrapper>
              <S.Column>
                <S.Title>Quem somos </S.Title>
              </S.Column>
              <S.Column>
                <S.Description>
                  <b>Com fundação no início de 2021</b>, a Aware Soluções é uma
                  empresa localizada em Porto União - SC que{' '}
                  <b>
                    presta serviços de design, social media, websites, tráfego
                    pago e informática.
                  </b>
                </S.Description>
              </S.Column>
              <S.Column>
                <S.AutorityWrapper ref={autorityRef} style={autoritySprings}>
                  <S.AutorityItem>
                    <S.AutorityNumber>
                      +<Counter from={0} to={50} />
                    </S.AutorityNumber>
                    <S.AutorityDescription>
                      Empresas atendidas
                    </S.AutorityDescription>
                  </S.AutorityItem>
                  <S.AutorityItem>
                    <S.AutorityNumber>
                      +<Counter from={0} to={3} />
                    </S.AutorityNumber>
                    <S.AutorityDescription>
                      Anos no mercado
                    </S.AutorityDescription>
                  </S.AutorityItem>
                  <S.AutorityItem>
                    <S.AutorityNumber>
                      +<Counter from={0} to={100} />
                    </S.AutorityNumber>
                    <S.AutorityDescription>
                      Projetos Finalizados
                    </S.AutorityDescription>
                  </S.AutorityItem>
                  <S.AutorityItem>
                    <S.AutorityNumber>
                      +<Counter from={0} to={500} />
                    </S.AutorityNumber>
                    <S.AutorityDescription>
                      Clientes satisfeitos
                    </S.AutorityDescription>
                  </S.AutorityItem>
                </S.AutorityWrapper>
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
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default SobreIntro
