import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  padding-top: 15rem;
  padding-left: 10rem;
  margin: auto;
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
