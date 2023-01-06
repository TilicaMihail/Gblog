import Head from 'next/head'
import Script from 'next/script'
import AuthProvider from '../contexts/AuthContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
        <Head>
            <title>Gblog</title>
        </Head>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    </div>
}
