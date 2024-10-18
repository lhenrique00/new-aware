import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const Wrapper = styled.div`
  margin-bottom: 20rem;
`

export const Body = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    height: 200vh;
    width: 100%;
    overflow: hidden;
  `}
`

export const FullPage = styled.div`
  width: 100vw;
  height: 200vh;
`

export const AnimatedLayers = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  inset: 0;
  pointer-events: none;
  z-index: 0;

  & > * {
    pointer-events: none;
    width: 200%;
    height: 200%;
    position: relative;
    inset: 0;
  }
`

export const Dot = styled(animated.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; // Para garantir que o círculo possa cobrir toda a viewport
    height: 100%; // Para cobrir toda a altura da viewport
  `}
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    width: 80rem;
    color: ${theme.colors.white};
    position: absolute;
    font-size: 5rem;
    padding-left: 8vw;
    left: 0%;
    top: 25%;
    & > span {
      display: block;
      overflow: hidden;

      & > span {
        display: block;
      }
    }
  `}
`

export const Title2 = styled(animated.h1)`
  ${({ theme }) => css`
    width: 90rem;
    color: ${theme.colors.white};
    position: absolute;
    font-size: 5rem;
    padding-left: 8vw;
    left: 20%;
    top: 55%;
    & > span {
      display: block;
      overflow: hidden;

      & > span {
        display: block;
      }
    }
  `}
`
