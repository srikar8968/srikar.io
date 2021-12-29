import type { AppProps } from 'next/app'
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import Layout from '@/components/layout/Default'
import { useRouter } from "next/router";

import '@/styles/normalize.css'
import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const site = "https://srikar-io.vercel.app/";
  const canonicalURL = site + useRouter().asPath;
  const darkMode = useDarkMode(true);

  return (
    <>
      <Head>
        <meta name="robots" content="all" />
        <meta name="language" content="EN" />
        <meta name="document-type" content="Public" />
        <link rel="canonical" href={canonicalURL} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
