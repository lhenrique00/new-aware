import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;

  ${media.lessThan('large')`

  `}

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 42rem;
    background-color: ${theme.colors.primary};
    position: relative;
    img {
      object-fit: cover;
    }
    ${media.lessThan('medium')`
      height: 30rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: ${theme.spacings.small};
    height: 100%;
    padding: ${theme.spacings.large};
    position: absolute;
    top: 0;
    left: 0;
    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 3vw;
    line-height: auto;
    padding-top: 0;
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('small')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const InfoDescription = styled.h2`
  ${({ theme }) => css`
    position: absolute;
    width: 40%;
    bottom: 5rem;
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    margin-top: 4rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      width: 45%;
      bottom: 1rem;
    `}
    ${media.lessThan('small')`
      width: 70%;
      line-height: ${theme.font.sizes.small};
      font-size: ${theme.font.sizes.xsmall};
      margin-top: 0;
    `}
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    border-radius: 50%;
    padding: 0.7rem;
    opacity: 0.5;
    border: 1px solid ${theme.colors.white};
    background-color: transparent;
    cursor: pointer;
    z-index: 50;
    width: 4rem;
    height: 4rem;
    transition: all 0.2s ease-in;
    &:hover {
      opacity: 1;
    }
    svg {
      color: ${theme.colors.white};
      background-color: transparent;
      border-radius: 50%;
      padding: 0.1rem;
      transition: all 0.2s ease-in;
    }

    ${media.lessThan('small')`
      bottom: 1rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      padding: 0.2rem;
      svg {
        border-radius: 50%;
        width: 1.8rem;
        margin-left: 0.3rem;
      }
    `}
  `}
`
