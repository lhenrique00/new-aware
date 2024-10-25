import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const Wrapper = styled.div`
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-bottom: 0;
  `}
`

export const ColumnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;
  hr {
    margin-right: 10rem;
  }
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    hr {
      margin-right: 0;
    }
  `}
`

export const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding-bottom: 2rem;
  padding-top: 2rem;
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-size: 9rem;
    line-height: auto;
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 7rem;
      line-height: 6rem;
    `}
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
    width: 40%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: auto;
    transition: all 0.5s ease;
    margin-bottom: 5rem;

    ${media.lessThan('medium')`
      width: 90%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      margin-top: 1rem;
    `}
  `}
`

export const ValuesTitle = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-size: 5rem;
    line-height: auto;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 7rem;
      line-height: 6rem;
    `}
    ${media.lessThan('medium')`
      margin-bottom: 0;
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 0;
    `}
  `}
`

export const ValuesDescription = styled(animated.h2)`
  ${({ theme }) => css`
    width: 80%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
