import styles from "../../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src='/Logo.svg' width={100} height={100} alt='Logo' />
    </div>
  )
}

export default Footer
