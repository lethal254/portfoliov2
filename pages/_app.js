import "../styles/globals.css"
import "antd/dist/antd.css"
import Layout from "../components/Layout"
import Script from "next/script"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel='shortcut icon' href='/logo.ico' />
      </Head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
