import DefaultLayout from '../components/layouts/Default'
import StyleProvider from '../styles/StyleProvider'
import GlobalCSS from '../styles/GlobalCSS'
import Head from 'next/head';
import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'

import type { AppProps /*, AppContext */ } from 'next/app'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const Layout = Component.Layout || DefaultLayout;
  
  return (
    <div className="app">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <StyleProvider>
        <GlobalCSS />
          <SwitchTransition>
            <Transition
              key={router.pathname}
              timeout={500}
              in={true}
              onEnter={(node) => gsap.from(node, { duration: 0.5, autoAlpha: 0, x: -80, ease: 'circ.out' })}
              onExit={(node) => gsap.to(node, { duration: 0.5, autoAlpha: 0, x: 80, ease: 'circ.out' })}
              mountOnEnter={true}
              unmountOnExit={true}>
              <Layout route={router.asPath}>
                <Component {...pageProps} />
              </Layout>
            </Transition>
          </SwitchTransition>
      </StyleProvider>
    </div>
  )
}