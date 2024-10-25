import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 0;
  ${media.lessThan('huge')`
    margin-bottom: 0;
  `}
`
export const WrapperPorque = styled.div`
  width: auto;
  margin: auto;
  height: auto;
  text-align: left;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  hr {
    color: black;
  }
`

export const ListItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
  padding: 2rem 10rem 2rem 10rem;
  ${media.lessThan('huge')`
    grid-template-columns: 30% 70%;
  `}
`

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListNumber = styled(animated.h2)`
  ${({ theme }) => css`
    width: 20rem;
    margin-right: 10rem;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.extraBold};
    font-size: 15rem;
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      width: 33rem;
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const InfoTitle = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: ${theme.font.sizes.huge};
    margin-bottom: 1.5rem;
    padding-top: 0;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const InfoDescription = styled(animated.h2)`
  ${({ theme }) => css`
    width: 80%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    text-transform: uppercase;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      width: 80%;

    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 14rem;
    line-height: 12rem;
    width: 60rem;
    margin: auto;
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
    width: 60%;
    margin: auto;
    margin-bottom: 10rem;
    text-align: left;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: 5rem;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 0;
      margin-bottom: 5rem;

    `}
  `}
`
