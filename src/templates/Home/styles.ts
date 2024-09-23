import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

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
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 95vh;
  display: flex;
  flex-direction: column;

  .use-spring-carousel-item {
    flex: 3 !important;
  }
`

export const PrevButton = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 999;
  left: -10rem;
`

export const NextButton = styled.div`
  position: absolute;
  bottom: 5rem;
  z-index: 999;
  left: -10rem;
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
    font-weight: ${theme.font.extraBold};
    font-size: 8rem;
    line-height: 6rem;
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

export const SubTitle = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 5.4rem;
    line-height: 6rem;
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

export const Description = styled(animated.h2)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.medium};
    line-height: 6rem;
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

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 36vh;
    text-align: left;
    padding: 0;
    border-radius: 5px;
    margin-bottom: 1rem;
    background-color: ${theme.colors.primary};
    ${media.lessThan('medium')`
      width: 70%;
      height: 36rem;
      padding-bottom: 4rem;
      margin-right: 0;
      margin-left: 0;
    `}
  `}
`

export const InfoWrapper = styled.div`
  padding: 2rem;
  ${media.lessThan('large')`
    padding: 1rem;
  `}
`

export const imageWrapper = styled.div`
  position: relative;
  width: auto;
  height: 40rem;
  margin: auto;
  img {
    border-radius: 5px;
  }
  ${media.lessThan('huge')`
    height: 40rem;
  `}
  ${media.lessThan('large')`
    width: auto;
    height: 28rem;
    width: 100%;
  `}
`
