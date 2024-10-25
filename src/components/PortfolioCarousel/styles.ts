import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ProfileTitle = styled.h1`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.sizes.large};
    text-transform: uppercase;
    margin-bottom: 2rem;
    z-index: 50;
    display: none;
    color: ${theme.colors.white};
    ${media.lessThan('large')`
      line-height: ${theme.font.sizes.medium};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    margin: auto;
    margin-top: 3rem;
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.primary};
      cursor: pointer;
      position: absolute;
      top: 0;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
      z-index: 1;
    }

    ul.slick-dots {
      text-align: center;
    }

    .slick-dots ul {
      width: 100%;
      margin: auto;
      justify-content: center;
    }

    .slick-dots li {
      position: relative;
      display: inline-block;
      margin: 0 0.25rem;
    }

    .slick-dots li button {
      cursor: pointer;
      font-size: 0;
      display: block;
      width: 1rem;
      height: 1rem;
      padding: 0;
      border: none;
      border-radius: 100%;
      opacity: 0.5 !important;
      background-color: ${theme.colors.primary} !important;
    }

    li.slick-active {
      opacity: 1 !important;
    }

    .slick-active {
      ${ProfileTitle} {
        display: none;
      }
      ${CattegoryWrapper} {
        display: none;
      }
      ${SocialWrapper} {
        display: none;
      }
    }

    .slick-current {
      ${ProfileTitle} {
        display: block;
      }
      ${CattegoryWrapper} {
        display: block;
      }
      ${SocialWrapper} {
        display: inline-flex;
      }
    }

    li.slick-active button {
      background-color: ${theme.colors.primary} !important;
      opacity: 1 !important;
    }

    .slick-slider.slick-initialized {
      margin-left: 0;
      width: 100%;
      ${media.lessThan('huge')`
        width: 100%;
      `}
      ${media.lessThan('large')`
        margin-left: 0;
        height: 50rem;
        width: 100%;
      `}
    }

    .slick-prev {
      left: 0;
      color: ${theme.colors.primary};
      padding: 0.3rem;
    }

    .slick-next {
      left: 5rem;
      color: ${theme.colors.primary};
      padding: 0.3rem;
    }

    .slick-slide > div {
      margin: 0;
      cursor: pointer;
      ${media.lessThan('huge')`
        margin: 0 1rem 0 1rem;
      `}
      ${media.lessThan('medium')`
        margin: 0;
        height: auto;
      `}
    }

    .slick-list {
      margin: 0;
      margin-left: 0;
    }
    ${media.lessThan('large')`
      margin-left: 0;
      width: 100%;
      height: auto;
      margin-top: 0;
      .slick-prev,
      .slick-next {
        width: 2rem;
        height: 2rem;
      }
    `}
  `}
`

export const Item = styled.div`
  position: relative;
  display: inline-flex !important;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0 2rem 0 0rem;
  border-radius: 2px;
  ${media.lessThan('huge')`
    padding: 0;
    height: auto;
    display: flex;
    width: 40rem;
    flex-direction: column;
    margin-bottom: 0;
    padding-bottom: 0;
  `}
`

export const ProfileInfoWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 100%;
`

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    position: relative;
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 55rem;
    padding: 4rem 2rem 4rem 2rem;
    border-radius: 2px;

    ${media.lessThan('huge')`
      width: 100%;
      padding: 4rem 5rem 2rem 2rem;
    `}
    ${media.lessThan('large')`
      padding: 4rem 5rem 5rem 3rem;
      height: 20rem;
      width: 100%;
    `}
    ${media.lessThan('medium')`
      padding: 4rem 2rem 5rem 3rem;
      height: 45rem;
      width: 100%;
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
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`

export const CattegoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
  display: none;
  width: auto;
`

export const SocialWrapper = styled.div`
  display: none;
  position: relative;
  margin-top: 2rem;
`

export const SocialItem = styled.div`
  margin-right: 1rem;
  position: relative;
  transition: all 0.5s ease;
  border-radius: 2px;
  svg {
    width: 2.3rem;
    fill: rgba(255, 255, 255, 0.8);
    transition: all 0.5s ease;
  }
  &:hover {
    svg {
      fill: rgba(255, 255, 255, 1);
      transition: all 0.5s ease;
    }
  }
`

export const CattegoryTitle = styled.h2`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: auto;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    padding: 0.5rem 1rem;
    border-radius: 2px;
    margin-right: 1rem;
  `}
`
