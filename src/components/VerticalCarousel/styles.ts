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

    .slick-prev {
      left: -${theme.spacings.xxlarge};
      color: ${theme.colors.primary};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
      color: ${theme.colors.primary};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 0.8rem;
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('large')`
      overflow-x: hidden;
    `}
  `}
`
