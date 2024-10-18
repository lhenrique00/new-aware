import Base from '@/templates/Base'
import { useInView } from '@react-spring/web'
import * as S from './styles'
import { useState, useEffect } from 'react'

const HomePorque = () => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState<React.ReactNode[]>([])
  const [secondIndex, setSecondIndex] = useState(0)
  const [secondText, setSecondText] = useState<React.ReactNode[]>([])

  // Break down the message into sections with bold markers
  const message1 = [
    { text: 'Por que a ', bold: false },
    { text: 'Aware?', bold: false }
  ]

  const message2 = [
    { text: 'Tenha ', bold: false },
    { text: 'uma única empresa ', bold: true },
    { text: 'que cuida da parte digital e tecnológica do seu ', bold: false },
    { text: 'negócio.', bold: true }
  ]

  const [ref, inView] = useInView({
    once: true
  })

  // Function to render letters one by one and manage bolded sections
  const typeEffect = (
    message: { text: string; bold: boolean }[],
    currentIndex: number,
    setText: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
    setIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let totalLetters = 0
    for (const section of message) {
      totalLetters += section.text.length
    }

    if (currentIndex < totalLetters) {
      let runningLength = 0
      for (const section of message) {
        if (currentIndex < runningLength + section.text.length) {
          const char = section.text[currentIndex - runningLength]
          setText((prev) => [
            ...prev,
            section.bold ? <b key={currentIndex}>{char}</b> : char
          ])
          setIndex((prev) => prev + 1)
          break
        }
        runningLength += section.text.length
      }
    }
  }

  // Typing effect for the first message
  useEffect(() => {
    if (
      inView &&
      index < message1.reduce((acc, cur) => acc + cur.text.length, 0)
    ) {
      const timeout = setTimeout(() => {
        typeEffect(message1, index, setText, setIndex)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index, inView])

  // Typing effect for the second message after the first is finished
  useEffect(() => {
    if (
      inView &&
      index === message1.reduce((acc, cur) => acc + cur.text.length, 0) &&
      secondIndex < message2.reduce((acc, cur) => acc + cur.text.length, 0)
    ) {
      const timeout = setTimeout(() => {
        typeEffect(message2, secondIndex, setSecondText, setSecondIndex)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [secondIndex, inView, index])

  return (
    <Base>
      <S.Wrapper>
        <S.WrapperPorque ref={ref}>
          <S.Title>{text}</S.Title>
          <S.Description>{secondText}</S.Description>
        </S.WrapperPorque>
        <S.List>
          <hr />
          <S.ListItem>
            <S.ListNumber>01</S.ListNumber>
            <S.ListInfo>
              <S.InfoTitle>Design</S.InfoTitle>
              <S.InfoDescription>
                <b>Criação ou divulgação</b> da sua marca utilizando nossos
                serviços de <b>design.</b>
              </S.InfoDescription>
            </S.ListInfo>
          </S.ListItem>
          <hr />
          <S.ListItem>
            <S.ListNumber>02</S.ListNumber>
            <S.ListInfo>
              <S.InfoTitle>Social Media</S.InfoTitle>
              <S.InfoDescription>
                <b>Estabelecimento e divulgação</b> da <b>sua marca</b> com o
                nosso serviço de <b>social media.</b>
              </S.InfoDescription>
            </S.ListInfo>
          </S.ListItem>
          <hr />
          <S.ListItem>
            <S.ListNumber>03</S.ListNumber>
            <S.ListInfo>
              <S.InfoTitle>Tráfego pago</S.InfoTitle>
              <S.InfoDescription>
                <b>Maior fluxo de potenciais clientes</b> com o nosso serviço de{' '}
                <b>gestão de tráfego.</b>
              </S.InfoDescription>
            </S.ListInfo>
          </S.ListItem>
          <hr />
          <S.ListItem>
            <S.ListNumber>04</S.ListNumber>
            <S.ListInfo>
              <S.InfoTitle>Websites</S.InfoTitle>
              <S.InfoDescription>
                <b>Mais autoridade e divulgação</b> utilizando nossos serviços
                de <b>website.</b>
              </S.InfoDescription>
            </S.ListInfo>
          </S.ListItem>
          <hr />
          <S.ListItem>
            <S.ListNumber>05</S.ListNumber>
            <S.ListInfo>
              <S.InfoTitle>Informática</S.InfoTitle>
              <S.InfoDescription>
                <b>Trabalhe de forma mais eficiente</b> com os nossos serviços
                de <b>informática.</b>
              </S.InfoDescription>
            </S.ListInfo>
          </S.ListItem>
          <hr />
        </S.List>
      </S.Wrapper>
    </Base>
  )
}

export default HomePorque
