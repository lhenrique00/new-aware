import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      position: relative;
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
      a {
        text-decoration: none;
      }
      .progress-bar {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: ${theme.colors.black};
        transform-origin: 0%;
      }
    }

    body {
      background-color: ${theme.colors.mainBg};
      font-size: ${theme.font.sizes.medium};
      overflow-x: hidden;
    }
  `}
`

export default GlobalStyles
