import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  text-transform: none;
  width: 100%;
`

export const Column = styled.div`
  ${({ theme }) => css`
    padding-top: 2rem;
    padding-bottom: 2rem;
    a,
    span {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Card = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 3rem;
  height: 45rem;
  ${media.lessThan('large')`
    padding: 2rem;
    height: 45rem;
  `}
`

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.huge};
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

export const CardDescription = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    text-align: justify;
    hyphens: auto;
    color: ${theme.colors.white};
    margin-bottom: 2rem;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.sizes.large};
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  bottom: 3rem;
  left: auto;
`

export const InfoWrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const imageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`
