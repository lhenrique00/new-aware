import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'

export const ColumnWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  height: auto;
  position: relative;
  ${media.lessThan('huge')`
    height: auto;
    `}
`

export const SocialWrapper = styled.div`
  position: relative;
  margin-left: 9.1rem;
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
    bottom: 1.5rem;
    left: 0;
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
      fill: ${theme.colors.primary};
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
    ${media.lessThan('small')`
      margin-left: 0;
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 14rem;
    line-height: 6rem;
    padding-top: 8rem;
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 10rem;
    line-height: 3rem;
    padding-top: 0rem;
    `}
    ${media.lessThan('small')`
      width: 90%;
      padding-top: 8rem;
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
    ${media.lessThan('huge')`
      font-size: 6.6rem;
      line-height: 3rem;
    `}
    ${media.lessThan('small')`
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
    ${media.lessThan('huge')`
      font-size: ${theme.font.sizes.medium};
      width: 37rem;
    `}
    ${media.lessThan('small')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`
