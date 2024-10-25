import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    position: relative;
    text-transform: none;
    width: 100%;
    height: auto;
    background-color: ${theme.colors.primary};
    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
  `}
`

export const ContactTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: 10rem;
    line-height: 8.5rem;
    margin-bottom: 1.5rem;
    padding-top: 0;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: 8rem;
      line-height: 8rem;
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 7rem;
      font-size: 7rem;
      margin-top: 0;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.extraBold};
    font-size: ${theme.font.sizes.huge};
    margin-bottom: 1.5rem;
    padding-top: 0;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-weight: ${theme.font.extraBold};
      font-size: ${theme.font.sizes.xxlarge};
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
      margin-top: 0;
    `}
  `}
`

export const SocialWrapper = styled.div`
  margin-left: 9.1rem;
`

export const Hr = styled.hr`
  ${({ theme }) => css`
    width: 90%;
    height: 2px;
    color: ${theme.colors.white};
    margin: auto;
  `}
`

export const ContactContent = styled.div`
  padding-top: 3rem;
  padding-bottom: 6rem;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 40% 50%;
  text-align: left;
  ${media.lessThan('medium')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 5rem;
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: 3.2rem;
    line-height: auto;
    text-align: justify;
    transition: all 0.5s ease;
    ${media.lessThan('huge')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
    ${media.lessThan('medium')`
      width: 90%;
      line-height: ${theme.font.sizes.large};
      font-size: ${theme.font.sizes.medium};
      margin-top: 0;
    `}
  `}
`

export const Content = styled.div`
  padding-top: 3rem;
  padding-bottom: 6rem;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  text-align: left;
  ${media.lessThan('huge')`
    grid-template-columns: 23% 23% 23% 23%;
  `}
  ${media.lessThan('medium')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 0;
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    margin-left: 10rem;
    h4 {
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      width: 40rem;
    }
    a {
      display: block;
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
      display: block;
      position: relative;
    }
    ${media.lessThan('medium')`
      margin-left: 3rem;
      margin-bottom: 4rem;
      h4 {
        margin-top: 2rem;
        margin-bottom: 4rem;
        width: 90%;
      }
    `}
  `}
`

export const Links = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    opacity: 1;
    width: 80%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    a {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
    }
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      width: 60%;
    `}
  `}
`

export const MenuLink = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    font-weight: ${theme.font.normal};
    display: inline-block;
    position: relative;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
    &:after {
      content: '';
      background: ${theme.colors.white};
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      background-position: 0;
    }
    &:hover::after {
      width: 100%;
      left: 0;
      ${media.lessThan('medium')`
        width: 0;
      `}
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    margin-top: 1rem;
    margin-bottom: 2rem;
    ${media.lessThan('medium')`
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xsmall};
      position: relative;
      margin-bottom: 3rem;
      text-align: left;
    `}
  `}
`

export const CopyrightDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding-left: 10rem;
    text-transform: uppercase;
    padding-top: 2rem;
    ${media.lessThan('medium')`
      width: 80%;
      font-size: ${theme.font.sizes.xsmall};
      padding-left: 0;
      position: relative;
      margin-left: 3rem;
      margin-bottom: 1rem;
    `}
  `}
`

export const CopyDescription = styled.h2`
  ${({ theme }) => css`
    position: absolute;
    right: 10rem;
    top: 0;
    width: auto;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding-left: 10rem;
    padding-top: 2rem;
    ${media.lessThan('medium')`
      width: 80%;
      font-size: ${theme.font.sizes.xsmall};
      padding-left: 0;
      right: 0;
      padding-top: 1rem;
      position: relative;
      margin-left: 3rem;
      margin-bottom: 3rem;
    `}
  `}
`
