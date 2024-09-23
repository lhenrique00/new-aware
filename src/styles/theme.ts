export default {
  grid: {
    container: '80%',
    gutter: '1.2rem'
  },
  border: {
    radius: '0.5px'
  },
  font: {
    light: 200,
    normal: 400,
    bold: 600,
    extraBold: 800,
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.5rem',
      huge: '3.5rem'
    }
  },
  colors: {
    primary: '#262626',
    secondary: '#262626',
    mainBg: '#FAFAFA',
    lightBg: '#FAFAFA',
    white: '#FAFAFA',
    black: '#262626'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
