import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'
import { SocialProps } from '@/components/Social'

export const ContactWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 10rem;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`
export const ContactColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const InfoWrapper = styled.div`
  padding: 15rem 0 0 10rem;
  ${media.lessThan('huge')`
    padding: 17rem 0 0 10rem;
  `}
  ${media.lessThan('medium')`
    padding: 12rem 0 0 2rem;
    width: 100%;
  `}
`

export const Title = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 12rem;
    line-height: 3rem;
    padding-top: 7rem;
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 6rem;
      line-height: 1rem;
      padding-top: 0;
    `}
    ${media.lessThan('small')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 4rem;
    `}
  `}
`

export const ContactItemTitle = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: ${theme.font.sizes.xxlarge};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: ${theme.font.sizes.xlarge};
      font-size: ${theme.font.sizes.xlarge};
    `}
    ${media.lessThan('small')`
      width: 90%;
      font-size: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.large};
      margin-top: 4rem;
    `}
  `}
`
export const ContactItemDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: 0;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: ${theme.font.sizes.medium};
      font-size: ${theme.font.sizes.large};
    `}
    ${media.lessThan('small')`
      width: 90%;
      font-size: ${theme.font.sizes.medium};
      margin-top: 1rem;
    `}
  `}
`
export const ContactItemLocationDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: 2rem;
    margin-top: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: ${theme.font.sizes.medium};
      font-size: ${theme.font.sizes.large};
    `}
    ${media.lessThan('small')`
      width: 90%;
      font-size: ${theme.font.sizes.medium};
      margin-top: 2rem;
    `}
  `}
`

export const Description = styled(animated.h2)`
  ${({ theme }) => css`
    width: 80%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    margin-top: 4rem;
    margin-left: 1rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      margin-left: 0;
      margin-top: 3rem;
    `}
    ${media.lessThan('small')`
      width: 80%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      margin-top: 2rem;
    `}
  `}
`

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
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
`

export const ContactItem = styled.div`
  margin-top: 5rem;
  width: 90%;
  iframe {
    width: 100%;
    margin-bottom: 2rem;
  }
  ${media.lessThan('huge')`
    margin-top: 3rem;
  `}
`

export const Social = styled.div<SocialProps>`
  ${({ theme, color }) => css`
    margin-top: 0.5rem;
    position: relative;
    display: inline-flex;
    z-index: 999;
    a {
      margin-right: 0.5rem;
      border-radius: 2px;
      background-color: transparent;
      padding: 0.4rem 0.6rem 0rem 0.6rem;
      transition: all 0.5s ease;
      svg {
        width: 2.3rem;
        fill: ${theme.colors[color!]};
      }
      &:hover {
        background-color: ${color == 'primary'
          ? `${theme.colors.primary}`
          : 'white'};
        transition: all 0.5s ease;
        svg {
          fill: ${color == 'primary' ? 'white' : `${theme.colors.primary}`};
          transition: all 0.5s ease;
        }
      }
    }
  `}
`

export const ButtonBlack = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    position: relative; /* Adiciona esta linha para que o after seja posicionado corretamente */
    text-decoration: none;
    transition: all 0.5s ease;
    p {
      margin-right: 3rem;
      color: ${theme.colors.primary};
      text-transform: uppercase;
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
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
      width: 100%; /* Agora cobre toda a largura do botão */
      height: 2px;
      transform: scaleX(0); /* Começa invisível */
      transition: transform 0.3s ease-in-out; /* Transição suave para o efeito hover */
      transform-origin: left;
    }

    &:hover:after {
      transform: scaleX(1); /* Expande a borda no hover */
    }

    ${media.lessThan('small')`
      margin-left: 0;
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
