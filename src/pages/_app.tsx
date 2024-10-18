// pages/_app.tsx
import type { AppProps } from 'next/app'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

import { useRouter } from 'next/router'

import { Transition, animated } from '@react-spring/web'
import { GeistSans } from 'geist/font/sans'

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/utils/apollo'
import { useEffect, useRef, useState } from 'react'

import { ReactLenis, useLenis } from 'lenis/react'

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)
  const router = useRouter()
  const [items, setItems] = useState([
    {
      id: router.asPath,
      Component,
      pageProps
    }
  ])

  useEffect(() => {
    setItems([{ id: router.asPath, Component, pageProps }])
  }, [router.asPath, Component, pageProps])
  const lenis = useLenis()
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (time: number) => {
      if (lenis) {
        lenis.raf(time) // Lenis animation frame handler
      }
      animationIdRef.current = requestAnimationFrame(animate)
    }
    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [lenis])
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className={GeistSans.className}>
          <ReactLenis root>
            <Menu />
            <div className="page-wrapper">
              {items.map(({ Component, pageProps }) => (
                <Transition
                  key={router.asPath}
                  items={router.asPath}
                  from={{ opacity: 0, transform: 'translateY(10px)' }}
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
                  {(styles) => (
                    <animated.div style={styles}>
                      <Component {...pageProps} />
                    </animated.div>
                  )}
                </Transition>
              ))}
            </div>
            <Footer />
          </ReactLenis>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
