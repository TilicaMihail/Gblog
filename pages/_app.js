import Head from 'next/head'
import AuthProvider from '../contexts/AuthContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
        <Head>
            <title>Gblog</title>
        </Head>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    </div>
}
