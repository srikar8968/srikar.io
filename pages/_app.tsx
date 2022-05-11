import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import Layout from '@/components/layout/Default'
import { useRouter } from "next/router";

import '@/styles/normalize.css'
import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const site = "https://srikar-io.vercel.app/";
  const router = useRouter();
  const canonicalURL = site + router.asPath;

  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);

  useEffect(() => {
      setIsMounted(true)
  }, []);

  //  useEffect(() => {
  //     if(!darkMode.value && (router.pathname == '/')) {
  //       darkMode.toggle();
  //     }
  // }, [router.pathname])

  const app = (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
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

  if(!isMounted) {
      return <div className="ssr__mtch__container" style={{ visibility: 'hidden' }}>{ app }</div>
  }

  return app
}

export default MyApp
