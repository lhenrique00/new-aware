import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: auto;
    margin-top: 0;
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    /* DOTS ____________________________________________ */
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

    li.slick-active button {
      background-color: ${theme.colors.primary} !important;
      opacity: 1 !important;
    }

    .slick-slider.slick-initialized {
      margin-left: 7rem;
      width: 100%;
      ${media.lessThan('huge')`
        width: 100%;
      `}
      ${media.lessThan('medium')`
        margin-left: 0;
        width: 100%;
      `}
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
      color: ${theme.colors.primary};
      background-color: ${theme.colors.mainBg};
      border: 1px solid ${theme.colors.primary};
      border-radius: 50%;
      padding: 0.3rem;
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
      color: ${theme.colors.primary};
      background-color: ${theme.colors.mainBg};
      border: 1px solid ${theme.colors.primary};
      border-radius: 50%;
      padding: 0.3rem;
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 2rem 0 2rem;
      cursor: pointer;
      ${media.lessThan('huge')`
        margin: 0 1rem 0 1rem;
      `}
      ${media.lessThan('medium')`
        margin: 0 2rem;
      `}
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('large')`
      overflow-x: hidden;
      height: 40rem;
    `}
  `}
`
