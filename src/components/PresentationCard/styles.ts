import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { motion } from 'framer-motion'

export const SectionServicos = styled(motion.section)`
  ${({ theme }) => css`
    margin-top: 0;
    border-radius: 2px;
    z-index: 10;
    button {
      margin-right: 1rem;
      margin-bottom: 2rem;
    }
    a,
    span {
      display: block;
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
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      bottom: -3rem;
      left: 0;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
    }

    .slick-prev {
      left: 0;
      color: ${theme.colors.white};
    }

    .slick-next {
      left: ${theme.spacings.xxlarge};
      color: ${theme.colors.white};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0;
      margin-right: 1rem;
      cursor: pointer;
    }

    .slick-slider {
      position: relative;
      width: 100%;
      display: block;
      height: auto;
      box-sizing: border-box;

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }

    .slick-list {
      position: relative;
      width: 100%;
      display: block;
      overflow: hidden;

      margin: 0;
      padding: 0;
    }
    .slick-list:focus {
      outline: none;
    }
    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    .slick-slide.slick-active.slick-current {
      opacity: 1;
    }
    .slick-current {
      opacity: 1;
    }
    .slick-active {
      opacity: 1;
    }
    .slick-track {
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .slick-track:before,
    .slick-track:after {
      display: table;

      content: '';
    }
    .slick-track:after {
      clear: both;
    }
    .slick-loading .slick-track {
      visibility: hidden;
    }

    [dir='rtl'] .slick-slide {
      float: right;
    }

    .slick-initialized .slick-slide {
      display: block;
    }
    .slick-loading .slick-slide {
      visibility: hidden;
    }
    .slick-vertical .slick-slide {
      display: block;

      height: auto;

      border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
      display: none;
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
      .slick-slide > div {
        margin: 0;
        margin-right: 1rem;
        cursor: pointer;
      }
    `}
    ${media.lessThan('medium')`
      position: relative;
      display: block;
      padding: 0;
      padding-top: 5rem;
      margin-left: 2rem;
    `}
  `}
`

export const CategoriesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 1rem;
    height: auto;
    P {
      text-transform: uppercase;
      letter-spacing: 0.02rem;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
    }
    ${media.lessThan('medium')`
      display: block;
      width: 100%;
      margin-bottom: 0;
    `}
  `}
`

export const InfoSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const SliderWrapper = styled(motion.div)`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  ${media.lessThan('medium')`
    display: block;
  `}
`

export const Phrase2 = styled.h4`
  ${({ theme }) => css`
    letter-spacing: 0.08rem;
    color: ${theme.colors.primary};
    width: 80%;
    padding-bottom: 5rem;
    text-shadow: none;
    margin-top: 3rem;
    font-weight: ${theme.font.normal};
    line-height: ${theme.font.sizes.xxlarge};
    font-size: ${theme.font.sizes.xlarge};
    text-align: justify;
    hyphens: auto;
    ${media.lessThan('huge')`
      width: 90%;
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.xlarge};
    `}
    ${media.lessThan('large')`
      margin-top: 0;
      margin-bottom: 2rem;
      padding-bottom: 0;
      width: 90%;
      min-height: 10rem;
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const ProccessContent = styled.div`
  display: grid;
  grid-template-columns: 20% 100%;
  margin-top: 0;
  ${media.lessThan('large')`
    display: block;
    margin-top: 0;
  `}
`

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.small};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.large};
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  height: 100%;
  ${media.lessThan('medium')`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  `}
`

export const Button = styled(motion.div)`
  ${({ theme }) => css`
    width: auto;
    height: 4rem;
    flex-wrap: nowrap;
    margin: 1rem;
    margin-left: 0;
    margin-right: 4rem;
    border-radius: 2px;
    cursor: pointer;
    ${media.lessThan('medium')`
      padding: 0.5rem 1rem 0.5rem 1rem;
      margin: 0;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
      width: auto;
      height: 3rem;
      ${Text} {
        margin: auto;
      }
    `}
  `}
`

export const LinkButton = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 2px;
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
    display: inline-flex;
    width: auto;
    height: 3.5rem;
    max-height: 6rem;
    max-width: 35rem;
    padding: 0.5rem;
    background-color: transparent;
    align-items: center;
    text-align: center;
    p {
      margin: auto;
      margin-right: 0.5rem;
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      transition: all 0.4s ease-in;
    }
    svg {
      fill: ${theme.colors.primary};
      width: 1.5rem;
      rotate: 180deg;
      margin: auto;
      transition: all 0.4s ease-in;
    }
    transition: all 0.4s ease-in;
    &:hover {
      background-color: ${theme.colors.primary};
      transition: all 0.4s ease-in-out;
      p {
        color: ${theme.colors.white};
        transition: all 0.4s ease-in-out;
      }
      svg {
        fill: ${theme.colors.white};
        transition: all 0.4s ease-in-out;
      }
    }
    ${media.lessThan('large')`
      position: relative;
      width: auto;
      padding: 0.6rem;
      margin-bottom: 0;
      margin-top: 0;
      margin-left: 0;
    `}
  `}
`
