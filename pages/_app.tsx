import Header from '../components/Header'
import { AppProps } from 'next/app'
import '../styles/global.css'

function MyApp({ Component, pageProps }:AppProps) {
    return (
        <>
            <Header />
            <main className="container">
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp;