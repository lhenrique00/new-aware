import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BannerStyles from '@/components/Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-top: -15rem;
    height: 95vh;
    .slick-track {
      height: 95vh !important;
    }
    .slick-list {
      height: 95vh !important;
      padding: 0 !important;
    }

    .slick-prev,
    .slick-next {
      position: absolute;
      display: block;
      color: ${theme.colors.primary};
      cursor: pointer;

      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
      z-index: 1;
    }

    .slick-prev {
      left: -5rem;
      bottom: 4rem;
      color: ${theme.colors.primary};
      padding: 0.3rem;
    }

    .slick-next {
      left: -5rem;
      bottom: 0;
      color: ${theme.colors.primary};
      padding: 0.3rem;
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

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        transition: box-shadow ${theme.transition.default};

        &.slick-active {
          background: ${theme.colors.primary};
        }

        &:focus-within {
          box-shadow: 0 0 0 0.3rem ${theme.colors.secondary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    .slick-slide {
      visibility: visible;
      opacity: 0.5;

      &.slick-active.slick-current {
        visibility: visible;
        opacity: 1;
      }
    }

    ${media.lessThan('large')`
      width: 100%;
      height: auto;
      margin-top: 0;
      .slick-track {
        height: auto !important;
      }
      .slick-list {
        height: auto !important;
        padding: 0 !important;
      }
    `}

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: auto;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        flex-direction: column;
        height: 100%;
        top: 0;
        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`
