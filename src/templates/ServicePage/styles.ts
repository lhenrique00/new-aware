import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { animated } from '@react-spring/web'
import { motion } from 'framer-motion'

export const BigNumber = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    width: 50%;
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
      margin-bottom: 0;
    `}
  `}
`
export const BigNumberBlack = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
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

export const ContactButtonBlack = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    position: relative; /* Adiciona esta linha para que o after seja posicionado corretamente */
    text-decoration: none;
    transition: all 0.5s ease;
    margin-left: 10rem;
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

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
`

// INTRO

export const IntroSection = styled.div`
  height: 100vh;
`

export const ParallaxWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
  position: absolute;
  display: inline-block;
  white-space: nowrap;
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
  ${media.lessThan('medium')`
    overflow: hidden;

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

// _____________________________________________________
// ANIMATED DESCRIPTION

export const AnimatedDescriptionSection = styled(animated.div)`
  margin-bottom: 0;
`

// _____________________________________________________
// SERVICOS

export const ServicosSection = styled(animated.div)`
  ${({ theme }) => css`
    padding: 10rem;
    background-color: ${theme.colors.primary};
    ${media.lessThan('medium')`
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

// _____________________________________________________
// PERSONALIZED

export const PersonalizedSection = styled(animated.div)`
  margin-top: 10rem;
`

export const PersonalizedTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 80%;
    font-size: 9rem;
    line-height: 9rem;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    padding-left: 10rem;
    ${media.lessThan('huge')`
      font-size: 7rem;
      line-height: 6rem;
    `}
    ${media.lessThan('medium')`
      width: 90%;
      padding-left: 2rem;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const PersonalizedDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 30%;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
    padding-left: 10rem;
    margin-bottom: 5rem;
    ${media.lessThan('medium')`
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      padding-left: 2rem;
      width: 95%;
    `}
  `}
`

export const CTAPersonalizedWrapper = styled.div`
  ${media.lessThan('medium')`
    padding-left: 2rem;
  `}
`

export const CTAPersonalizedDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 30%;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
    padding-left: 10rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    ${media.lessThan('medium')`
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      padding-left: 0;
      width: 95%;
    `}
  `}
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
    grid-template-columns: 20% 80%;
    padding: 2rem;
  `}
`

export const ListMaiorQue = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const ListItemMaiorQue = styled.div`
  width: 50%;
  display: inline-flex;
  padding: 2rem 2rem 2rem 10rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  ${media.lessThan('huge')`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    padding: 2rem;
  `}
`

export const InfoDescriptionMaiorQue = styled(animated.h2)`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      width: 100%;
    `}
    ${media.lessThan('medium')`
      width: 100%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      margin-top: 0;
    `}
  `}
`

export const InfoTitleMaiorQue = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: ${theme.font.sizes.huge};
    padding-top: 0;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 0;
    `}
  `}
`

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListNumber = styled(animated.h2)`
  ${({ theme }) => css`
    width: 18rem;
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
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 0;
    `}
  `}
`

export const InfoDescription = styled(animated.h2)`
  ${({ theme }) => css`
    width: 60%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      width: 80%;
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      margin-top: 0;
    `}
  `}
`

// _____________________________________________________
// GALLERY

export const GallerySection = styled(animated.div)``

export const GalleryTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
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

// _____________________________________________________
// FAQ

export const FAQSection = styled(animated.div)`
  margin-bottom: 10rem;
`

export const FAQWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`

export const FAQColumn = styled.div`
  width: 100%;
`

export const FAQTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
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

export const FAQDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50%;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
  `}
`

// _____________________________________________________
// LOCATION

export const LocationSection = styled(animated.div)`
  margin-bottom: 10rem;
`

export const LocationTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
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

export const LocationDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50rem;
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 95%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const LocationWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

export const LocationInfoDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.extraBold};
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 95%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const LocationButtonWrapper = styled(animated.div)`
  display: inline-flex;
  margin-right: 5rem;
`
export const HorariosWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

export const LocationHourTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 100%;
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: 1rem;
    margin-top: 4rem;
    transition: all 0.5s ease;
  `}
`

export const imageLocationWrapper = styled(animated.div)`
  position: relative;
  width: 95%;
  height: 90rem;
  margin-top: 4rem;
  ${media.lessThan('huge')`
    height: 40rem;
  `}
  ${media.lessThan('medium')`
    width: auto;
    height: 28rem;
    width: 95%;
  `}
`

// _____________________________________________________
// ANIMATED PLATFORM

export const PlatformSection = styled(animated.div)`
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-bottom: 0;
  `}
`

export const PlatformTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
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

export const PlatformDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50%;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
  `}
`

export const PlatformInfoDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
  `}
`

export const PlatformInfoTitle = styled(animated.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 100%;
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: 1.5rem;
    padding-top: 0;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 0;
    `}
  `}
`

export const PlatformInfoWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
`

export const PlatformItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
`

export const platformImageWrapper = styled.div`
  width: 2rem;
  margin-bottom: 1rem;
`

// _____________________________________________________
// PORTFOLIO

export const PortfolioSection = styled(animated.div)``

export const PortfolioTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 100%;
    font-size: 9rem;
    line-height: 8rem;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 7rem;
      line-height: 6rem;
    `}
    ${media.lessThan('medium')`
      width: 100%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const PortfolioDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50rem;
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      width: 100%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

// _____________________________________________________
// NOSSO PROCESSO - OUR PROCESS

export const OurProcessSection = styled(animated.div)`
  position: relative;
  height: auto;
`

export const imageOurProcessWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 60vh;
  object-fit: cover;
  top: 0;
  right: 0;
  z-index: -1;
  ${media.lessThan('medium')`
    width: 45%;
  `}
`

export const OurProcessInfo = styled.div`
  position: relative;
`

export const OurProcessTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
    font-size: 9rem;
    line-height: 8rem;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 7rem;
      line-height: 6rem;
    `}
    ${media.lessThan('medium')`
      width: 50%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const OurProcessDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50%;
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const InfoOurProcessWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 4rem;
    bottom: 0;
    margin-top: 15rem;
    margin-right: 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: ${theme.colors.primary};
    ${media.lessThan('medium')`
      margin-top: 5rem;
      margin-right: 2rem;
      padding: 2rem;
    `}
  `}
`

export const InfoOurProcessItem = styled.div`
  width: calc(85% / 4);
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  margin-right: 4rem;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const OurProcessInfoTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    width: 100%;
    font-size: ${theme.font.sizes.large};
    margin-bottom: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      margin-bottom: 1rem;
      margin-top: 1rem;
    `}
  `}
`

export const OurProcessInfoDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    transition: all 0.5s ease;
  `}
`

// _____________________________________________________
// WEBSITE SERVICES

export const WebsiteServicesSection = styled(animated.div)``

export const WebsiteServicesTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
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

export const WebsiteServicesDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50%;
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
    margin-bottom: 4rem;
    ${media.lessThan('medium')`
      width: 95%;
      margin-bottom: 0;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const WebsiteServicesWrapper = styled.div`
  display: flex;
  width: 100%;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  ${media.lessThan('medium')`
    width: 100%;
    display: flex;
    flex-direction: column;
    &:nth-of-type(even) {
      flex-direction: column;
    }
  `}
`

export const WebsiteServicesItemWrapper = styled.div`
  width: 100%;
`

export const WebsiteServicesColumn = styled.div`
  display: flex;
  width: 50%;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const WebsiteServicesImage = styled.div`
  position: relative;
  width: 100%;
  height: 70rem;
  object-fit: contain;
  ${media.lessThan('medium')`
    height: 35rem;
  `}
`

// _____________________________________________________
// INFORMATICA SERVICE

export const informaticaServicesTitle = styled(motion.h1)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    width: 50%;
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

export const informaticaServicesDescription = styled(motion.h2)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 50%;
    font-size: ${theme.font.sizes.large};
    line-height: auto;
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
    margin-bottom: 4rem;
    ${media.lessThan('huge')`
      width: 90%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Container = styled.div`
  display: flex;
  min-height: 200vh;
  padding: 4rem;
`

export const InformaticaServiceSection = styled(animated.div)`
  display: flex;
  position: relative;
  min-height: 100vh;
  width: 100%;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const StickyContainer = styled.div`
  position: sticky;
  top: 5rem; /* Sticky at the top of the viewport */
  flex: 1;
  padding-right: 2rem;
  height: 50vh; /* Full viewport height */
  align-self: flex-start;
`

export const StickyCard = styled(motion.div)`
  position: sticky;
  top: 5rem; /* Fixa no topo enquanto o usuário faz o scroll */
  z-index: 10; /* Garante a sobreposição dos cards */
  margin-bottom: 4rem;
  ${media.lessThan('medium')`
    top: 20rem;
  `}
`

export const CardsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`

export const ServiceCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 2px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: auto;
  min-height: 40rem;
  ${media.lessThan('medium')`
    width: 95%;
    min-height: 50rem;
  `}
`

export const ServiceCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 100%;
  width: 100%;
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

export const ServiceCardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  ${media.lessThan('huge')`
    width: 80%;
  `}
  ${media.lessThan('small')`
    width: 100%;
  `}
`

export const CardInfoWrapper = styled.div`
  padding-left: 5rem;
  width: 100%;
  ${media.lessThan('medium')`
    padding-left: 0;
  `}
`

export const CardInfoItemsWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`

export const CardInfoTitle = styled.h1`
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

export const CardItemTitle = styled(motion.h2)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    transition: all 0.5s ease;
    margin-top: 1rem;
  `}
`
