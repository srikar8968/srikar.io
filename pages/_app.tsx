import styled from 'styled-components'
import DefaultLayout from '../components/layouts/Default'
import StyleProvider from '../styles/StyleProvider'
import GlobalCSS from '../styles/GlobalCSS'
import Head from 'next/head';
import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'
import { useState } from 'react'
import Nav from '../components/app/Nav'
import Menu from '../components/app/Menu'
import Button from '../components/base/Button'

import type { AppProps /*, AppContext */ } from 'next/app'

const MenuToggler = styled.button`
  position: fixed;
  left: 0;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transform: translateY(-50%);
  line-height: 1.5rem;
  font-weight: 600;
  z-index: 30;
  &:hover {
    color: ${({theme}) => theme.text.primary}
  }
`

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const Layout = Component.Layout || DefaultLayout;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
        <Nav mode="none" />
        <MenuToggler onClick={onMenuToggle}>
          <div>m</div>
          <div>e</div>
          <div>n</div>
          <div>u</div>
        </MenuToggler>
        <SwitchTransition>
          <Transition
            key={router.pathname}
            timeout={500}
            in={true}
            onEnter={(node) => gsap.from(node, { duration: 0.5, autoAlpha: 0, scale: 0.975 })}
            onExit={(node) => gsap.to(node, { duration: 0.5, autoAlpha: 0, scale: 0.975 })}
            mountOnEnter={true}
            unmountOnExit={true}>
            <Layout route={router.asPath}>
              <Component {...pageProps} />
            </Layout>
          </Transition>
        </SwitchTransition>
        <Menu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </StyleProvider>
    </div>
  )
}