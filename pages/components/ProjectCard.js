import styles from "../../styles/ProjectCard.module.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import IosShareIcon from "@mui/icons-material/IosShare"

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${"/avatar.jpg"})` }}></div>
      <div className={styles.cardTypography}>
        <div className={styles.left}>
          <h3>Lorem ipsum dolor</h3>
          <div className={styles.techs}>
            <p>React</p>
            <p>NodeJs</p>
            <p>Next Js</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
