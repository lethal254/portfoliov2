import styles from "../../styles/Layout.module.css"
import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Benard Ogutu</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Building beautiful web experience' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
