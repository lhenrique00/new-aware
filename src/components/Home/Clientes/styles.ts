import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const Wrapper = styled.div`
  margin-bottom: 0;
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    width: 60%;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: 9rem;
    line-height: 8rem;
    margin-bottom: 5rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 7rem;
      line-height: 6rem;
      margin-bottom: 3rem;
    `}
    ${media.lessThan('medium')`
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
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const Description = styled(animated.h2)`
  ${({ theme }) => css`
    width: 35%;
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

export const ParallaxWrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
  overflow: hidden;
  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  span {
    display: inline-flex !important;
  }
  ${media.lessThan('medium')`
    overflow: hidden;
    span {
      width: 100vh !important;
    }
  `}
`

export const imageWrapper = styled.div`
  width: 1rem;
  height: 10rem;
  margin-top: 2rem;
  ${media.lessThan('huge')`
    height: 40rem;
  `}
  ${media.lessThan('medium')`
    width: auto;
    height: 28rem;
    width: 100%;
  `}
`
