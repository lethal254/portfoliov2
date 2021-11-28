import Link from "next/link"
import styles from "../../styles/Button.module.css"

const Button = ({ children, handleClick, mail }) => {
  return (
    <Link href='mailto:someone@example.com'>
      <a className={styles.button}>{children}</a>
    </Link>
  )
}

export default Button
