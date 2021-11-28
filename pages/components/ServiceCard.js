import styles from "../../styles/ServiceCard.module.css"
import Image from "next/image"

const ServiceCard = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      <Image src={image} width={150} height={150} alt='Service Icon' />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default ServiceCard
