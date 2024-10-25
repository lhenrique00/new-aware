import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const IntroSection = styled.div`
  height: 100vh;
`

export const ParallaxWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
  position: absolute;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  h1 {
    display: inline-flex !important;
    margin-right: 5rem;
    font-size: 16rem;
    color: white;
    text-transform: uppercase;
    margin-top: 15vh;
    span {
      margin-top: 8rem;
      margin-right: 5rem;
      font-size: 3rem;
    }
  }
  span {
    display: inline-block !important;
    width: 100%;
  }
  ${media.lessThan('huge')`
    h1 {
      font-size: 10rem;
    }

  `}
  ${media.lessThan('medium')`
    overflow: hidden;
    h1 {
      font-size: 10rem;
      span {
        margin-top: 4rem;
        margin-right: 5rem;
        font-size: 3rem;
      }
    }

  `}
`

export const imageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  top: 0;
  left: 0;
`

export const IntroInfo = styled.div`
  position: relative;
  bottom: 0;
  height: 100%;
  h1 {
    text-transform: uppercase;
    left: 10rem;
    color: white;
    margin-bottom: 2rem;
  }
  h3 {
    left: 10rem;
    color: white;
    width: 50rem;
    font-weight: 200;
    margin-bottom: 2rem;
  }
  ${media.lessThan('medium')`
    h3 {
      left: 0;
    width: 90%;
  }
  `}
`

export const IntroInfoWrapper = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 10rem;
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    position: absolute;
    bottom: 5rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
  `}
`

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
`

export const ContactButton = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    text-decoration: none;
    transition: all 0.5s ease;
    p {
      margin-right: 3rem;
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      line-height: auto;
    }
    svg {
      width: 1.5rem;
      fill: white;
    }
    &:after {
      content: '';
      background: ${theme.colors.white};
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
      width: 45%;
    }
    ${media.lessThan('small')`
      margin-left: 0;
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
