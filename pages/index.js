import Image from "next/image"
import styles from "../styles/Home.module.css"
import Layout from "./components/Layout"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import Button from "./components/Button"
import Heading from "./components/Heading"
import ServiceCard from "./components/ServiceCard"
import ProjectCard from "./components/ProjectCard"
import { useEffect, useState } from "react"
import client from "../sanity"

export default function Home({ heroText, aboutText }) {
  const [showPreloader, setShowPreloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false)
    }, 3000)
  })
  return (
    <div className={styles.container}>
      {showPreloader ? (
        <div className={styles.preloader}>
          <h1>bennycodes</h1>
        </div>
      ) : (
        <Layout>
          <section className={styles.heroSection}>
            <h2>{heroText ? heroText.herotext : ""}</h2>
            <div className={styles.socialIcons}>
              <InstagramIcon />
              <TwitterIcon />
              <GitHubIcon />
            </div>
            <Button>Talk to me</Button>
          </section>
          <section className={styles.aboutSection} id='about'>
            <Heading>About</Heading>
            <div className={styles.aboutContent}>
              <div className={styles.avatarContainer}>
                <Image src='/avatar2.jpg' width={400} height={300} alt='me' />
              </div>
              <div className={styles.aboutTypography}>
                <p>{aboutText ? aboutText.abouttext : ""}</p>
                <div className={styles.techIcons}>
                  <Image src='/react1.svg' width={30} height={30} alt='React' />
                  <Image
                    src='/next-js2.svg'
                    width={30}
                    height={30}
                    alt='React'
                  />
                  <Image
                    src='/node-js2.svg'
                    width={30}
                    height={30}
                    alt='React'
                  />
                </div>
              </div>
            </div>
          </section>
          <section className={styles.servicesSection} id='services'>
            <Heading>Services</Heading>
            <div className={styles.services}>
              <ServiceCard
                image='/design 1.svg'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum id est inventore eos quam tempore hic magni, deleniti culpa?'
                title='Graphic Design'
              />
              <ServiceCard
                image='/code 1.svg'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum id est inventore eos quam tempore hic magni, deleniti culpa?'
                title='Web Development'
              />
              <ServiceCard
                image='/social-promotion 1.svg'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum id est inventore eos quam tempore hic magni, deleniti culpa?'
                title='Social media marketing'
              />
            </div>
          </section>
          <section className={styles.projectSection} id='projects'>
            <Heading>Projects</Heading>
            <div className={styles.projects}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </section>
          <section className={styles.contactSection} id='contact'>
            <Heading>Talk to me</Heading>
            <div className={styles.contactContent}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                sunt, laboriosam esse doloremque et, facilis temporibus
                reprehenderit eveniet impedit itaque sit a, iusto necessitatibus
                sequi quasi deserunt ullam atque quam.
              </p>
              <Button mail>Hire me</Button>
            </div>
          </section>
        </Layout>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const heroText = await client.fetch(
    `*[_type == "herotext"\][0]{
      herotext
    }`
  )
  const aboutText = await client.fetch(
    `*[_type == "abouttext"\][0]{
      abouttext
    }`
  )

  return {
    props: { heroText, aboutText },
  }
}
