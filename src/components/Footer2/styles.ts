import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: 1rem;
    background-color: ${theme.colors.black};
    z-index: ${theme.layers.menu};
    ${media.lessThan('large')`
      margin-left: 0;
      padding: 2rem;

    `}
  `}
`
