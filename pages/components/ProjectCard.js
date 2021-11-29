import styles from "../../styles/ProjectCard.module.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import IosShareIcon from "@mui/icons-material/IosShare"
import Link from "next/link"

const ProjectCard = ({ title, image, github, live, techs }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${image?.image})` }}></div>
      <div className={styles.cardTypography}>
        <div className={styles.left}>
          <h3>{title?.title}</h3>
          <div className={styles.techs}>
            {techs?.map((tech) => (
              <>
                <p>#{tech}</p>
              </>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <Link href={github?.github} passHref>
            <GitHubIcon />
          </Link>
          <Link href={live?.live} passHref>
            <IosShareIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
