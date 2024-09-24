import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

interface ItemProps {
  isActive: boolean
}

export const ColumnWrapper = styled.div`
  display: flex;
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;
`

export const CarouselWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: 45%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    .use-spring-carousel-item {
      flex: 3 !important;
    }
  `}
`

export const InfoWrapper = styled.div`
  padding: 4rem;
  z-index: 11;
  height: 100%;
  ${media.lessThan('large')`
    padding: 1rem;
  `}
`

export const InfoTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 3vw;
    line-height: auto;
    padding-top: 0;
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('large')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const InfoDescription = styled.h2`
  ${({ theme }) => css`
    width: 60%;
    position: absolute;
    bottom: -14rem;
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.medium};
    line-height: auto;
    margin-top: 4rem;
    transition: all 0.5s ease;
    ${media.lessThan('large')`
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
  bottom: 2rem;
  left: -5rem;
  p {
    text-align: center;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  svg {
    width: 2rem;
  }
`

export const PrevButton = styled.div`
  position: relative;
  z-index: 999;
`

export const NextButton = styled.div`
  position: relative;
  z-index: 999;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
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
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 14rem;
    line-height: 6rem;
    padding-top: 4rem;
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('large')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const SubTitle = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    font-size: 9.23rem;
    line-height: 6rem;
    padding-top: 0;
    margin-top: 5rem;
    transition: all 0.5s ease;
    ${media.lessThan('large')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const Description = styled(animated.h2)`
  ${({ theme }) => css`
    width: 55%;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    margin-top: 4rem;
    transition: all 0.5s ease;
    ${media.lessThan('large')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const imageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  ${media.lessThan('huge')`
    height: 40rem;
  `}
  ${media.lessThan('large')`
    width: auto;
    height: 28rem;
    width: 100%;
  `}
`
