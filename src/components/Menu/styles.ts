import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 0;
    position: relative;
    z-index: ${theme.layers.menu};
    ${media.lessThan('large')`
      margin-left: 0;
      padding: 2rem;

    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    margin-top: 4rem;
    margin-bottom: 2rem;
    margin-left: ${theme.spacings.small};
    ${media.lessThan('large')`
      margin-top: 1rem;
      margin-top: 0;
      margin-bottom: 1rem;
      margin-left: 0;
    `}
  `}
`

export const LogoWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 10rem;
  z-index: 997;
  ${media.lessThan('large')`
    top: 2rem;
    left: 2rem;
    z-index: 0;
  `}
`

export const MenuGroup = styled.div`
  position: absolute;
  left: 27rem;
  top: 6rem;
  margin: 0;
  width: auto;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  a {
    text-decoration: none;
  }
`

export const MenuLink = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    margin: 0 ${theme.spacings.medium} 0;
    text-decoration: none;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    transition: all 0.5s ease;
    ${media.lessThan('large')`
      margin-left: 0;
      font-size: ${theme.font.sizes.small};
    `}
    &:after {
      content: '';
      background: ${theme.colors.primary};
      display: block;
      position: relative;
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
  `}
`

export const MenuSubLink = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    margin: 0 ${theme.spacings.xsmall} 0;
    text-decoration: none;
    font-weight: ${theme.font.normal};
    text-transform: uppercase;
    ${media.lessThan('large')`
      margin-left: 0;
      font-size: ${theme.font.sizes.large};
    `}
    &:after {
      content: '';
      background: ${theme.colors.white};
      display: block;
      position: relative;
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
  `}
`

export const MenuNav = styled.div`
  width: 100%;
  ${media.greaterThan('large')`
    width: 65%;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

type MenuHeaderFullProps = {
  ToggleOpen: boolean
}

export const DropDownListContainer = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  padding-bottom: 1rem;
  padding-left: 0.8rem;
  ${media.lessThan('medium')`
    padding-left: 0rem;
    text-align: center;
  `}
`

export const DropDownList = styled.ul`
  ${({ theme }) => css`
    margin: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    &:first-child {
      margin-top: 0rem;
    }
  `}
`

export const IconHeader = styled.div`
  position: absolute;
  width: 2.5rem;
  opacity: 0.8;
  margin-left: 20rem;
  margin-top: -3.5rem;
`

export const DropDownHeader = styled.h2<MenuHeaderFullProps>`
  ${({ theme, ToggleOpen }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-transform: uppercase;
    margin-top: 4rem;
    margin-bottom: 2rem;
    margin-left: ${theme.spacings.small};
    ${IconHeader} {
      transform: ${ToggleOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
      transition: transform 0.3s ease-in-out;
    }
    ${media.lessThan('medium')`
      margin-top: 0;
      margin-bottom: 2rem;
      margin-left: 0;
    `}
  `}
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 8rem;
  top: 6.2rem;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  ${media.lessThan('large')`
    top: 3rem;
    right: 2rem;
  `}
`

export const IconMenu = styled.div<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    width: 35px;
    height: 15px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    z-index: 999;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      background: ${isOpen ? '#2E173A !important' : ''};
      height: 3px;
      width: 100%;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
    span:first-child {
      top: ${isOpen ? '5px' : '2px'};
      left: ${isOpen ? '0' : '0'};
      -webkit-transform: ${isOpen ? 'rotate(45deg)' : 'left center'};
      -moz-transform: ${isOpen ? 'rotate(45deg)' : 'left center'};
      -o-transform: ${isOpen ? 'rotate(45deg)' : 'left center'};
      transform: ${isOpen ? 'rotate(45deg)' : 'left center'};
    }

    span:nth-child(2) {
      top: ${isOpen ? '5px' : '12px'};
      left: ${isOpen ? '0' : '0'};
      -webkit-transform: ${isOpen ? 'rotate(-45deg)' : 'left center'};
      -moz-transform: ${isOpen ? 'rotate(-45deg)' : 'left center'};
      -o-transform: ${isOpen ? 'rotate(-45deg)' : 'left center'};
      transform: ${isOpen ? 'rotate(-45deg)' : 'left center'};
    }
    ${media.lessThan('large')`
      width: 25px;
      height: 10px;
      span {
        height: 2px;

      background: ${theme.colors.primary};

      }
      span:first-child {
      top: ${isOpen ? '5px' : '4px'};
    }
      span:nth-child(2) {
        top: ${isOpen ? '5px' : '10px'};
      }
    `}
  `}
`

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    width: ${isOpen ? '100%' : '0%'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.mainBg};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    transition: ease-in-out 0.3s;
    pointer-events: ${isOpen ? 'all' : 'none'};
    ${MenuNav} {
      display: grid;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      grid-template-columns: repeat(2, 2fr);
      ${media.lessThan('large')`
      display: flex;
      flex-direction: column;
        top: 15rem;
        left: 2rem;
        width: 90%;
        transform: translate(0, 0);
      `}
    }
    a {
      display: inline-flex;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.large};
      margin: 0 0 1rem 0;
      text-decoration: none;
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      ${media.lessThan('large')`
        font-size: ${theme.font.sizes.small};
      `}
    }
    ${media.lessThan('large')`
      width: 100%;
      height: ${isOpen ? '100%' : '0%'};
    `}
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    margin-right: 2.5rem;
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 5rem;
    border-radius: 2px;
    cursor: pointer;
    display: inline-flex;
    width: 18rem;
    padding: 0.5rem;
    background-color: ${theme.colors.primary};
    align-items: center;
    text-align: center;
    max-height: 4rem;
    max-width: 35rem;
    margin-top: 0;
    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      margin: auto;
    }
    ${media.lessThan('large')`
      position: relative;
      width: auto;
      right: 0;
      padding: 0.8rem;
      padding-left: 2rem;
      padding-right: 2rem;
      margin-top: 5rem;
      margin-bottom: 20rem;
      p {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.white};
        font-weight: ${theme.font.normal};
        text-transform: uppercase;
        margin: auto;
      }
      svg {
        fill: white;
        width: 2.5rem;
        rotate: 180deg;
        margin-left: 2rem;
      }
    `}
  `}
`
export const StyledLi = styled.div`
  margin: 0rem;
`

export const DropDownLi = styled(StyledLi)`
  ${({ theme }) => css`
    display: inline-block;
    ${MenuSubLink} {
      color: ${theme.colors.primary};
    }
    &:hover {
      cursor: pointer;
    }
    &:hover ${DropDownContent} {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-top: 2rem;
      padding-bottom: 1rem;
      a {
        text-align: left;
        margin-bottom: 1rem;
        font-size: ${theme.font.sizes.medium};
        &:hover {
          &::after {
            content: '';
            position: absolute;
            left: 1.6rem;
            display: block;
            height: 0.1rem;
            background-color: ${theme.colors.primary};
            animation: hoverAnimation 0.2s forwards;
          }
          @keyframes hoverAnimation {
            from {
              width: 0;
            }
            to {
              width: 80%;
            }
          }
        }
      }
    }
  `}
`

export const DropDownContent = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    background-color: ${theme.colors.mainBg};
    min-width: 160px;
    z-index: 999;
  `}
`
