import { useInView } from '@react-spring/web'
import { useState, useEffect } from 'react'
import * as S from './styles'
import Base from '@/templates/Base'

// Tipos ajustados para refletir a estrutura correta
export type MessageProps = {
  id: string
  bold: boolean
  text: string
}

export type AnimatedDescriptionProps = {
  id: string
  first_message: MessageProps[] // Agora as mensagens são opcionais
  second_message: MessageProps[]
  third_message: MessageProps[]
}

const AnimatedDescription = ({
  id,
  first_message,
  second_message,
  third_message
}: AnimatedDescriptionProps) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState<React.ReactNode[]>([])
  const [secondIndex, setSecondIndex] = useState(0)
  const [secondText, setSecondText] = useState<React.ReactNode[]>([])
  const [thirdIndex, setThirdIndex] = useState(0)
  const [thirdText, setThirdText] = useState<React.ReactNode[]>([])

  const [ref, inView] = useInView({
    once: true
  })

  // Função para renderizar letra por letra e gerenciar as partes em negrito
  const typeEffect = (
    message: MessageProps[] | undefined,
    currentIndex: number,
    setText: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
    setIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!message) return // Se a mensagem não existir, saia da função
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

  // Efeito de digitação para a primeira mensagem
  useEffect(() => {
    if (
      inView &&
      first_message &&
      index < first_message.reduce((acc, cur) => acc + cur.text.length, 0)
    ) {
      const timeout = setTimeout(() => {
        typeEffect(first_message, index, setText, setIndex)
      }, 25)
      return () => clearTimeout(timeout)
    }
  }, [index, inView, first_message])

  // Efeito de digitação para a segunda mensagem após a primeira terminar
  useEffect(() => {
    if (
      inView &&
      first_message &&
      index === first_message.reduce((acc, cur) => acc + cur.text.length, 0) &&
      second_message &&
      secondIndex <
        second_message.reduce((acc, cur) => acc + cur.text.length, 0)
    ) {
      const timeout = setTimeout(() => {
        typeEffect(second_message, secondIndex, setSecondText, setSecondIndex)
      }, 25)
      return () => clearTimeout(timeout)
    }
  }, [secondIndex, inView, index, first_message, second_message])

  // Efeito de digitação para a terceira mensagem após a segunda terminar
  useEffect(() => {
    if (
      inView &&
      second_message &&
      secondIndex ===
        second_message.reduce((acc, cur) => acc + cur.text.length, 0) &&
      third_message &&
      thirdIndex < third_message.reduce((acc, cur) => acc + cur.text.length, 0)
    ) {
      const timeout = setTimeout(() => {
        typeEffect(third_message, thirdIndex, setThirdText, setThirdIndex)
      }, 25)
      return () => clearTimeout(timeout)
    }
  }, [thirdIndex, inView, secondIndex, second_message, third_message])

  return (
    <Base>
      <S.Wrapper>
        <S.WrapperPorque ref={ref}>
          {first_message && <S.Description>{text}</S.Description>}
          {second_message && <S.Description>{secondText}</S.Description>}
          {third_message && <S.Description>{thirdText}</S.Description>}
        </S.WrapperPorque>
      </S.Wrapper>
    </Base>
  )
}

export default AnimatedDescription
