// pages/_app.tsx
import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { useRouter } from 'next/router'
import { Transition, animated } from '@react-spring/web'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from 'styled-components'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const items = [
    {
      id: router.route,
      Component,
      pageProps
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className={GeistSans.className}>
        {/* Menu and Footer remain static outside of the transition */}
        <Menu />

        {/* Page content transition */}
        <Transition
          items={items}
          keys={(item: { id: any }) => item.id}
          from={{ opacity: 0, transform: 'translateY(10px)' }}
          initial={{ opacity: 0 }}
          enter={{
            opacity: 1,
            transform: 'translateY(0px)',
            position: 'relative'
          }}
          leave={{
            opacity: 0,
            transform: 'translateY(10px)',
            position: 'absolute'
          }}
          config={{ tension: 200, friction: 20 }}
        >
          {(
            styles,
            { pageProps: animatedPageProps, Component: AnimatedComponent }
          ) => (
            <animated.div
              style={{
                ...styles,
                width: '100%',
                overflow: 'hidden'
              }}
            >
              {/* Only the page content is animated */}
              <AnimatedComponent {...animatedPageProps} />
            </animated.div>
          )}
        </Transition>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
