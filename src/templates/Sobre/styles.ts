import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { useSpring, animated } from '@react-spring/web'

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
