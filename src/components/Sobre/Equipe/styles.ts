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
    ${media.lessThan('medium')`
      width: 90%;
      position: relative;
      line-height: ${theme.font.sizes.medium};
      font-size: ${theme.font.sizes.medium};
      margin-top: 0;
    `}
  `}
`

export const imageWrapper = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 55rem;
  margin-top: 2rem;

  ${media.lessThan('medium')`
    width: 95%;
    height: 12rem;
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
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
    max-width: 22rem;
    height: 25rem;
    width: 100%;
  `}
`

export const equipeWrapper = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`
export const equipeItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-right: 4rem;
  height: 50rem;
  flex-direction: column;
  ${media.lessThan('medium')`
    height: auto;
    margin-bottom: 4rem;
  `}
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
    width: 100%;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.extraBold};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xxlarge};
    line-height: auto;
    margin-top: 2rem;
    transition: all 0.5s ease;
    ${media.lessThan('medium')`
      margin-top: 2rem;
      margin-bottom: 1rem;
      position: relative;
      width: 100%;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    margin-right: 2rem;
    min-width: 30rem;
    width: 30rem;
    height: auto;
    ${media.greaterThan('huge')`
      min-width: 350px;
    `}
    .our-team {
      margin-bottom: 2rem;
      background-color: ${theme.colors.white};
      text-align: left;
      overflow: hidden;
      position: relative;
      width: 100%;
      height: auto;
      border-radius: 2px;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
      ${media.greaterThan('medium')`
        width: 100%;
        height: 45rem;
        margin-right: 2rem;
      `}
    }

    .our-team .picture {
      cursor: pointer;
      height: 100%;
      width: 100%;
      ${media.lessThan('medium')`
        height: 40rem;
      `}
    }

    .our-team .picture img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-repeat: no-repeat;
      background-size: cover;
      ${media.lessThan('medium')`
        height: 40rem;
      `}
    }

    .our-team:hover {
      box-shadow: 1px 1px 10px 0px;
      object-fit: cover;
    }
    ${media.lessThan('medium')`
      margin: auto;
    `}
  `}
`

type CardFullProps = {
  isOpen: boolean
}

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-left: 2rem;
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const IconWrapper = styled.div<CardFullProps>`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    z-index: 999;
    svg {
      transition: ease 0.3s;
    }
  `}
`

export const CardFull = styled.nav<CardFullProps>`
  ${({ theme, isOpen }) => css`
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    z-index: ${theme.layers.menu};
    bottom: 10px;
    right: 10px;
    border-radius: 2px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    width: 90%;
    height: 95%;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    display: ${isOpen ? 'flex' : 'none'};
    transition: all 0.5s;
    pointer-events: ${isOpen ? 'all' : 'none'};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      color: black
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      flex: 1;
      flex-direction: column;
    }
    ${media.lessThan('medium')`
      bottom: 5px;
      right: 5px;
      border-radius: 3px;
		`}
  `}
`

export const Cargo = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.light};
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: left;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`
