import styles from "../../styles/Layout.module.css"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
