import styled, { css } from 'styled-components'
import { SocialProps } from '@/components/Social'

export const Social = styled.div<SocialProps>`
  ${({ theme, color }) => css`
    margin-top: 0.5rem;
    position: relative;
    display: inline-flex;
    z-index: 999;
    a {
      margin-right: 0.5rem;
      border-radius: 2px;
      background-color: transparent;
      padding: 0.4rem 0.6rem 0rem 0.6rem;
      transition: all 0.5s ease;
      svg {
        width: 2.3rem;
        fill: ${theme.colors[color!]};
      }
      &:hover {
        background-color: ${color == 'primary'
          ? `${theme.colors.primary}`
          : 'white'};
        transition: all 0.5s ease;
        svg {
          fill: ${color == 'primary' ? 'white' : `${theme.colors.primary}`};
          transition: all 0.5s ease;
        }
      }
    }
  `}
`
