import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const ColumnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;
`

export const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`

export const ContactButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    display: inline-flex;
    text-decoration: none;
    transition: all 0.5s ease;
    p {
      margin-right: 3rem;
      color: ${theme.colors.primary};
      text-transform: uppercase;
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      line-height: auto;
    }
    svg {
      width: 1.5rem;
    }
    &:after {
      content: '';
      background: ${theme.colors.primary};
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      background-position: 0;
    }

    &:hover::after {
      width: 100%;
    }
    ${media.lessThan('medium')`
      margin-left: 0;
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-size: 9rem;
    line-height: 8rem;
    margin-bottom: 2rem;
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
    width: 90%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const equipeDescription = styled(animated.h2)`
  ${({ theme }) => css`
    width: 90%;
    position: absolute;
    bottom: 0;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const imageWrapper = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 55rem;
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
export const equipeImageWrapper = styled(animated.div)`
  position: relative;
  width: 100%;
  max-width: 25rem;
  height: 30rem;
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

export const equipeWrapper = styled(animated.div)`
  display: inline-flex;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 20rem;
`
export const equipeItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-right: 4rem;
  height: 50rem;
  flex-direction: column;
`

export const equipeNumber = styled(animated.div)`
  ${({ theme }) => css`
    width: 90%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.extraBold};
    font-size: 6rem;
    display: inline-flex;
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 5rem;
      line-height: auto;
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const equipePerson = styled(animated.h2)`
  ${({ theme }) => css`
    width: 90%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.extraBold};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xxlarge};
    line-height: auto;
    margin-top: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: ${theme.font.sizes.small};
      line-height: auto;
    `}
    ${media.lessThan('medium')`
      width: 100%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`
