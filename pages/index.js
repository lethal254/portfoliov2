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
import Link from "next/link"

export default function Home({ heroText, aboutText, services, projects }) {
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
          {console.log(projects)}
          <h1>bennycodes</h1>
        </div>
      ) : (
        <Layout>
          <section className={styles.heroSection}>
            <div className={styles.herosectionLeft}>
              <h2>{heroText ? heroText.herotext : ""}</h2>
              <div className={styles.socialIcons}>
                <Link href='https://www.instagram.com/bennycodes/' passHref>
                  <InstagramIcon />
                </Link>
                <Link href='https://twitter.com/bennycodes' passHref>
                  <TwitterIcon />
                </Link>
                <Link href='https://github.com/lethal254' passHref>
                  <GitHubIcon />
                </Link>
              </div>
              <Button>Talk to me</Button>
            </div>
            <div className={styles.herosectionRight}></div>
          </section>
          <section className={styles.aboutSection} id='about'>
            <Heading>About</Heading>
            <div className={styles.aboutContent}>
              <div className={styles.avatarContainer}>
                <Image src='/ben.svg' width={500} height={500} alt='me' />
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
                text={services ? services.graphics : ""}
                title='Graphic Design'
              />
              <ServiceCard
                image='/code 1.svg'
                text={services ? services.web : ""}
                title='Web Development'
              />
              <ServiceCard
                image='/social-promotion 1.svg'
                text={services ? services.social : ""}
                title='Social media marketing'
              />
            </div>
          </section>
          <section className={styles.projectSection} id='projects'>
            <Heading>Projects</Heading>
            <div className={styles.projects}>
              {projects &&
                projects.map((project) => (
                  <>
                    <ProjectCard
                      title={project.title}
                      image={project.image.asset.url}
                      github={project.githublink}
                      live={project.livelink}
                      techs={project.techs}
                    />
                  </>
                ))}
            </div>
          </section>
          <section className={styles.contactSection} id='contact'>
            <Heading>Talk to me</Heading>
            <div className={styles.contactContent}>
              <p>
                If you have a question please feel free to drop me a line. If
                you dont get your answer immediately I might just be travelling
                through the middle of nowhere. I will get back to you as soon as
                I can. I promise!
              </p>
              <Button mail={true}>Hire me</Button>
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

  const services = await client.fetch(`*[_type == "servicestext"\][0]{
    graphics,
    web,
    social,
  }`)

  const projects = await client.fetch(`*[_type == "projects"\]{
    title,
    githublink,
    livelink,
    techs,
    image{
      asset ->{
        url,

      },
      alt
    }
  }`)

  return {
    props: { heroText, aboutText, services, projects },
  }
}
