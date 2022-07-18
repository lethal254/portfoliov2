/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import client from "../sanity"
import Loader from "../components/Loader"
import {
  SiJavascript,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiMongodb,
} from "react-icons/si"
import { FaReact, FaNode } from "react-icons/fa"
import { ImArrowRight } from "react-icons/im"
import { Tabs } from "antd"
import ProjectCard from "../components/ProjectCard"
import Link from "next/link"
import { PortableText } from "@portabletext/react"
import Head from "next/head"

const { TabPane } = Tabs

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener("resize", handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export default function Home({ landingPageContent, projects, previousJobs }) {
  const [showPreloader, setShowPreloader] = useState(true)
  const [tabPosition, setTabPosition] = useState("left")
  const { width, height } = useWindowSize()

  console.log(previousJobs)

  useEffect(() => {
    if (width < 800) {
      setTabPosition("top")
    } else {
      setTabPosition("left")
    }
  }, [width])

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false)
    }, 3000)
  })

  const convertTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp)

    return date.toString().slice(0, 15)
  }
  if (showPreloader) {
    return (
      <>
        <Head>
          <title>Benard Ogutu || Fullstack Javascript Developer</title>
          <meta
            name='description'
            content='Benard Ogutu is a software engineer specializing in building (and occasionally designing) exceptional digital experiences. '
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'></meta>
          <meta
            name='google-site-verification'
            content='pCHe05aB32iXQjkySobbOtYWRMs_p8Rh8KWj8qBCdnA'
          />
        </Head>
        <Loader />
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>Benard Ogutu || Fullstack Javascript Developer</title>
          <meta
            name='description'
            content='Benard Ogutu is a software engineer specializing in building (and occasionally designing) exceptional digital experiences. '
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'></meta>
          <meta
            name='google-site-verification'
            content='pCHe05aB32iXQjkySobbOtYWRMs_p8Rh8KWj8qBCdnA'
          />
        </Head>
        {/* Hero */}

        <section
          name='hero'
          className=' h-[70vh]  lg:min-h-[60vh] flex items-center'>
          <div className=' lg:w-[50%] md:w-[70%] w-[95%] leading-loose'>
            <h2 className='text-sky-600 mb-6 font-medium'>Hello, my name is</h2>
            <h1 className='text-4xl md:text-6xl  font-bold text-gray-200'>
              Benard Ogutu
              <br />
              <span className='text-gray-400'>
                {landingPageContent.tagline}
              </span>
            </h1>
            <h3 className='mt-6 text-gray-200 text-base'>
              {landingPageContent.introduction}
            </h3>
            <Link href={landingPageContent.cv.asset.url} passHref>
              <a target='_blank'>
                <button className='button mt-6'>Resume</button>
              </a>
            </Link>
          </div>
        </section>
        {/* Technologies */}
        <section className='h-[10vh] mt-10 '>
          <div className='bg-slate-800 rounded-md md:w-[60%] mx-auto h-[100%] flex items-center justify-between px-6 '>
            <SiJavascript className='text-gray-200 md:text-5xl text-3xl mr-2 hover:animate-pulse cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear' />
            <SiTypescript className='text-gray-200 md:text-5xl text-3xl mr-2 hover:animate-pulse cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear' />
            <FaNode className='text-gray-200 md:text-5xl text-3xl mr-2 hover:animate-pulse cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear' />
            <FaReact className='text-gray-200 md:text-5xl text-3xl mr-2 hover:animate-pulse cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear' />
            <SiNextdotjs className='text-gray-200 md:text-5xl text-3xl mr-2 hover:animate-pulse cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear' />
            <SiFirebase className='text-gray-200 md:text-5xl text-3xl mr-2 hover:animate-pulse cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear' />
            <SiMongodb className='text-gray-200 md:text-5xl text-3xl mr-2 hover:animate-pulse cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear' />
          </div>
        </section>
        {/* About me */}
        <section
          name='about'
          className='flex min-h-[60vh]  mt-32 lg:w-[80%] mx-auto  flex-col '>
          <div className='flex items-center'>
            <h2 className='text-gray-200 md:text-2xl lg:text-3xl text-xl'>
              About me
            </h2>
            <div className='md:w-[40%] lg:w-[20%] w-[50%] h-[0.1px] bg-gray-50 bg-opacity-20 ml-2'></div>
          </div>
          <div className='flex mt-6 md:flex-row flex-col  justify-between text-base'>
            <article className='md:w-[50%] lg:w-[70%]  text-gray-400 about'>
              <PortableText value={landingPageContent.aboutme} />
            </article>
            <div className='md:w-[50%] lg:w-[30%]  relative block  myImage rounded-md'>
              <img
                width='100%'
                height='100%'
                alt='Me'
                src='/devices.svg'
                className='rounded-md object-contain block '
              />
            </div>
          </div>
        </section>
        {/* Where i've worked */}
        <section
          name='previous'
          className='flex min-h-[60vh] mt-20   lg:w-[60%] mx-auto  flex-col items-center'>
          <div className='flex items-center w-full  mb-4'>
            <h2 className='text-gray-200 md:text-2xl lg:text-3xl text-xl'>
              Previous jobs
            </h2>
            <div className='md:w-[40%] lg:w-[20%] w-[50%] h-[0.1px] bg-gray-50 bg-opacity-20 ml-2'></div>
          </div>
          <div>
            <Tabs tabPosition={tabPosition}>
              {previousJobs.map((job) => {
                return (
                  <>
                    <TabPane tab={job.company} key='1'>
                      <div>
                        <h3 className='md:text-xl text-lg  text-gray-200'>
                          {job.title}
                          <span className='text-sky-600 '> @{job.company}</span>
                        </h3>
                        <h4 className='text-sm text-gray-300'>
                          {convertTimeStamp(job.fromDate)} -{" "}
                          {convertTimeStamp(job.toDate)}
                        </h4>
                        <div className='text-gray-400'>
                          <PortableText value={job.description} />
                        </div>
                      </div>
                    </TabPane>
                  </>
                )
              })}
            </Tabs>
          </div>
        </section>
        {/* Some of my work */}
        <section
          name='work'
          className='flex min-h-[60vh] mt-10  lg:w-[100%] mx-auto flex-col '>
          <div className='flex items-center w-full  mb-10'>
            <h2 className='text-gray-200 md:text-2xl lg:text-3xl text-xl'>
              Some of my work
            </h2>
            <div className='md:w-[40%] lg:w-[20%] w-[50%] h-[0.1px] bg-gray-50 bg-opacity-20 ml-2'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8'>
            {projects.map((project) => (
              <>
                <ProjectCard key={project.title} project={project} />
              </>
            ))}
          </div>
        </section>
        {/* Contact */}
        <section
          name='contact'
          className='md:min-h-[50vh] min-h-[40vh] md:w-[40%] mt-20 md:mt-0 mx-auto text-center'>
          <h2 className='text-gray-200 md:text-3xl lg:text-4xl text-xl'>
            Get in touch
          </h2>

          <p className='text-gray-400 md:text-base '>
            {landingPageContent.contactContent}
          </p>
          <Link href='mailto:benardogutu65@gmail.com' passHref>
            <button className='button h-fit w-[40%] mt-12'>Say Hello</button>
          </Link>
        </section>
      </>
    )
  }
}

export async function getServerSideProps() {
  const landingPageContent = await client.fetch(
    `*[_type == "landingContent"][0]{
      tagline,
      introduction,
      cv{
        asset ->{
          url
        }
      },
      aboutme,
      contactContent
    }`
  )
  const projects = await client.fetch(`
  *[_type == "portfolio"]{
    title,
    description,
    tags[]->{
      title
    },
    githubLink,
    liveLink,
    projectImage{
      asset -> {
        url
      }
    }
  }
  `)

  const previousJobs = await client.fetch(`
    *[_type == "previousJobs"]{
      title,
      company,
      fromDate,
      toDate,
      description
    }
  `)

  return {
    props: { landingPageContent, projects, previousJobs },
  }
}
