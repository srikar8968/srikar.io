import DefaultLayout from '../components/layouts/Default'
import StyleProvider from '../styles/StyleProvider'
import GlobalCSS from '../styles/GlobalCSS'
import Head from 'next/head';

export default function MyApp({ Component, pageProps, router }) {
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
          <Layout route={router.asPath}>
            <Component {...pageProps} />
          </Layout>
      </StyleProvider>
    </div>
  )
}