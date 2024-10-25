import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const PulseText = styled(animated.h2)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    font-size: 5rem;
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

export const ServicosSection = styled(animated.div)`
  ${({ theme }) => css`
    padding: 10rem;
    background-color: ${theme.colors.primary};
    margin-bottom: 20rem;
    ${media.lessThan('medium')`
      margin-bottom: 10rem;
      padding: 5rem 0rem 5rem 2rem;
    `}
  `}
`

export const ServicesTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    width: 50%;
    font-size: 9rem;
    line-height: 8rem;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`
