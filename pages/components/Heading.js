import styles from "../../styles/Heading.module.css"

const Heading = ({ children }) => {
  return <h3 className={styles.heading}>{children}</h3>
}

export default Heading
