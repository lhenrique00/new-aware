import Base from '@/templates/Base'
import { useInView, animated, useSpring } from '@react-spring/web'
import * as S from './styles'
import { useEffect, useRef, useState } from 'react'

const PAGE_COUNT = 5

const NossaProposta = () => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState<React.ReactNode[]>([])
  const [secondIndex, setSecondIndex] = useState(0)
  const [secondText, setSecondText] = useState<React.ReactNode[]>([])
  const cref = useRef<HTMLDivElement>(null!)
  const [scrollProgress, setScrollProgress] = useState(0)
  // Função para calcular o progresso do scroll
  // Function to calculate scroll progress
  const handleScroll = () => {
    if (cref.current) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / scrollHeight
      setScrollProgress(progress) // Update the scroll progress state
    }
  }

  // Listener to monitor the scroll
  useEffect(() => {
    const updateScroll = () => {
      requestAnimationFrame(handleScroll) // Use requestAnimationFrame to make the scroll smoother
    }
    window.addEventListener('scroll', updateScroll)
    return () => {
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  // Smooth the scroll progress using useSpring
  const springProps = useSpring({
    scrollProgress, // Bind to the scroll progress state
    config: { tension: 120, friction: 40 } // Adjust these values to control the smoothness
  })

  // Break down the message into sections with bold markers
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const message1 = [
    {
      text: 'NOSSA PROPOSTA NÃO É APENAS AJUDAR COM A MANUTENÇÃO E MELHOR FUNCIONAMENTO DA PARTE TECNOLÓGICA DA SUA EMPRESA',
      bold: false
    }
  ]

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const message2 = [
    {
      text: 'MAS SIM FAZER COM QUE ELA CRESÇA, SEJA CADA VEZ MAIS BEM-SUCEDIDA E SE TORNE REFERÊNCIA NO MERCADO EM QUE ATUA . ',
      bold: false
    }
  ]

  const [ref, inView] = useInView({
    once: false,
    rootMargin: '90% 0%'
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
      }, 20)
      return () => clearTimeout(timeout)
    }
  }, [index, inView, message1])

  // Typing effect for the second message after the first is finished
  useEffect(() => {
    if (
      inView &&
      index === message1.reduce((acc, cur) => acc + cur.text.length, 0) &&
      secondIndex < message2.reduce((acc, cur) => acc + cur.text.length, 0)
    ) {
      const timeout = setTimeout(() => {
        typeEffect(message2, secondIndex, setSecondText, setSecondIndex)
      }, 20)
      return () => clearTimeout(timeout)
    }
  }, [secondIndex, inView, index, message1, message2])

  // EFEITO DO CIRCULO

  return (
    <Base>
      <S.Wrapper ref={cref}>
        <S.Body>
          <S.AnimatedLayers>
            <S.Dot
              style={{
                clipPath: springProps.scrollProgress.to((val) => {
                  // Dot grows until 30% progress, stays fully open, then shrinks at 70% progress
                  if (val < 0.3) {
                    // Growing phase (up to 30% scroll progress)
                    return `circle(${val * 200}% at 50% 50%)` // Grow from 0% to 100% based on scroll
                  } else if (val >= 0.1 && val <= 0.5) {
                    // Stay open phase (between 30% and 70% scroll progress)
                    return `circle(100% at 50% 50%)` // Stay fully open
                  } else {
                    // Shrinking phase (after 70% scroll progress)
                    return `circle(${(1 - val) * 250}% at 80% 30%)` // Shrink back from 100% to 0%
                  }
                })
              }}
            >
              <S.Title ref={ref}>
                <span>
                  <animated.span>{text}</animated.span>
                </span>
              </S.Title>
              <S.Title2 ref={ref}>
                <span>
                  <animated.span>{secondText}</animated.span>
                </span>
              </S.Title2>
            </S.Dot>
            {new Array(PAGE_COUNT).fill(null).map((_, index) => (
              <S.FullPage key={index} />
            ))}
          </S.AnimatedLayers>
        </S.Body>
      </S.Wrapper>
    </Base>
  )
}

export default NossaProposta
