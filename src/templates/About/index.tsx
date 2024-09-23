import Base from '@/templates/Base'
import { useSpring } from '@react-spring/web'
import * as S from './styles'
import { Container } from '@/components/Container'

const About = () => {
  const props = useSpring({
    loop: false,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
    config: { duration: 1000 }
  })
  return (
    <>
      <Base>
        <Container>
          <S.PulseText style={props}>Sobre</S.PulseText>
        </Container>
      </Base>
    </>
  )
}

export default About
