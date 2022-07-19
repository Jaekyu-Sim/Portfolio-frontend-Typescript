import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>개발자 심재규 입니다.</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
