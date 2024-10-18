import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

interface ItemProps {
  isActive: boolean
}

export const CarouselWrapper = styled.div`
  position: relative;
  margin-top: -15rem;
  right: 0;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  .use-spring-carousel-item {
    flex: 3 !important;
  }
`

export const InfoWrapper = styled.div`
  padding: 4rem;
  z-index: 11;
  height: 100%;
  ${media.lessThan('small')`
    padding: 2rem;
  `}
`

export const InfoTitle = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 3vw;
    line-height: auto;
    padding-top: 0;
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('small')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const InfoDescription = styled.h2`
  ${({ theme }) => css`
    width: 34%;
    position: absolute;
    bottom: -14rem;
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    margin-top: 4rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      width: 45%;
      bottom: -8rem;
    `}
    ${media.lessThan('small')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom: 4px solid ${theme.colors.mainBg};
    ${media.lessThan('huge')`
      width: 100%;
      height: 100%;
    `}
  `}
`

export const Item = styled.div<ItemProps>`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 1vh;
    border-top: 4px solid ${theme.colors.mainBg};
    margin-top: 20rem;
    margin-bottom: 20rem;
    text-align: left;
    opacity: ${({ isActive }: any) => (isActive ? 1 : 0.5)};
    padding: 0;
    ${Overlay} {
      opacity: ${({ isActive }: any) => (isActive ? 1 : 0)};
    }
    ${InfoWrapper} {
      display: ${({ isActive }: any) => (isActive ? 'flex' : 'none')};
    }
    ${media.lessThan('huge')`
      height: 12vh;
      margin-top: 10rem;
      margin-bottom: 10rem;
    `}
    ${media.lessThan('medium')`
      width: 70%;
      height: 36rem;
      padding-bottom: 4rem;
      margin-right: 0;
      margin-left: 0;
    `}
  `}
`

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: -5rem;
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

export const Button = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -14rem;
    right: 5rem;
    border-radius: 50%;
    padding: 0.7rem;
    opacity: 0.5;
    border: 1px solid ${theme.colors.white};
    background-color: transparent;
    cursor: pointer;
    z-index: 50;
    width: 4rem;
    height: 4rem;
    transition: all 0.2s ease-in;
    &:hover {
      opacity: 1;
    }
    svg {
      color: ${theme.colors.white};
      background-color: transparent;
      border-radius: 50%;
      padding: 0.1rem;
      transition: all 0.2s ease-in;
    }
    ${media.lessThan('huge')`
      bottom: -8rem;
    `}
    ${media.lessThan('small')`
      bottom: 5rem;
      right: 2rem;
      svg {
        border-radius: 50%;
        padding: 0.2rem;
      }
    `}
  `}
`

export const PrevButton = styled.div`
  position: relative;
  z-index: 999;
  cursor: pointer;
`

export const NextButton = styled.div`
  position: relative;
  z-index: 999;
  cursor: pointer;
`

export const CarouselDiv = styled.div`
  overflow: hidden;
  background-color: transparent;
  flex: 1 1;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
  position: relative;

  cursor: grab;
`

export const imageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  ${media.lessThan('huge')`
    height: 100%;
  `}
`
