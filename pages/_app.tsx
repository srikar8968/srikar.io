import DefaultLayout from '../components/layouts/Default'
import StyleProvider from '../styles/StyleProvider'
import GlobalCSS from '../styles/GlobalCSS'

export default function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || DefaultLayout;
  
  return (
    <div className="app">
      <StyleProvider>
        <GlobalCSS />
          <Layout route={router.asPath}>
            <Component {...pageProps} />
          </Layout>
      </StyleProvider>
    </div>
  )
}