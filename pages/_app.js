import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
      <Head>
        <title>Gblog</title>
      </Head>
      <Component {...pageProps} />
    </div>
}
