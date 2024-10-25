import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const Wrapper = styled.div`
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-bottom: 10rem;
  `}
`

export const ColumnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  position: relative;
`

export const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  height: auto;
  justify-content: center;
  ${media.lessThan('medium')`
    flex-direction: row;
    width: 100%;
    justify-content: start;
  `}
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: 9rem;
    line-height: 8rem;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 6rem;
      line-height: 5rem;
    `}
    ${media.lessThan('medium')`
      width: auto;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const Description = styled(animated.h2)`
  ${({ theme }) => css`
    width: 90%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 50%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

// CARROSSEL __________________________________________________________

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 2rem;
  .use-spring-carousel-item {
    position: relative !important;
    display: block !important;
    width: 100% !important;
  }
  .use-spring-carousel-main-wrapper {
    width: 60rem !important;
  }
  ${media.lessThan('medium')`
      margin: 0;
      margin-top: 4rem;
    .use-spring-carousel-item {
      position: relative !important;
      display: block !important;
      width: 100% !important;
    }
    .use-spring-carousel-main-wrapper {
      width: 36rem !important;
    }
  `}
`

export const CarouselDescription = styled.h2`
  ${({ theme }) => css`
    width: 80%;
    position: relative;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      margin-top: 0;
    `}
  `}
`

export const Person = styled.h2`
  ${({ theme }) => css`
    width: 80%;
    position: relative;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.extraBold};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 0;
    `}
  `}
`

export const ArrowWrapper = styled.div`
  p {
    font-weight: bold;
    text-align: center;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
  svg {
    width: 2rem;
  }
`

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10; /* Certifique-se de que o botão fique acima do conteúdo */

  svg {
    width: 2rem;
    height: 2rem;
    color: black;
  }
`

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10; /* Certifique-se de que o botão fique acima do conteúdo */

  svg {
    width: 2rem;
    height: 2rem;
    color: black;
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
  position: relative;

  cursor: grab;

  ${media.lessThan('medium')`
    width: 80%;
  `}
`

export const Item = styled.div`
  display: flex;

  padding: 10rem;
  flex-direction: column;
  width: 60rem;
  height: auto;
  background-color: red;

  ${media.lessThan('medium')`
    width: 40rem;
  `}
`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: black;
    width: 80%;
  }
  ${media.lessThan('medium')`
    hr {
      width: 100%;
    }
  `}
`
