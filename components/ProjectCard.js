/* eslint-disable @next/next/no-img-element */
import { FiGithub } from "react-icons/fi"
import { VscLinkExternal } from "react-icons/vsc"
import Link from "next/link"

const ProjectCard = (props) => {
  const { title, tags, projectImage, liveLink, githubLink, description } =
    props.project

  return (
    <div className='flex items-center rounded-md hover:-translate-y-1 transition-all ease-linear duration-300 min-h-[50vh] md:min-h-[40vh]'>
      <div
        className='w-[100%]  h-full relative overflow-hidden cursor-pointer rounded-md'
        style={{
          backgroundImage: `url("${projectImage.asset.url}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <div className='absolute top-0 left-0 bg-slate-900 bg-opacity-90 z-5 w-full h-full border border-1 border-sky-600 border-opacity-30 rounded-md'>
          <div className='px-4 py-4'>
            <h3 className='text-sky-600 text-2xl '>{title}</h3>
            <p className='text-gray-200'>{description}</p>
            <div className='flex space-x-3 text-gray-400'>
              {tags.map((tag) => (
                <>
                  <p key={tag.title}>{tag.title}</p>
                </>
              ))}
            </div>
            <div className='flex text-xl space-x-4 text-gray-200 '>
              <Link href={githubLink} passHref>
                <a target='_blank'>
                  <FiGithub className='hover:text-sky-600 transition-all ease-linear duration-300' />
                </a>
              </Link>
              <Link href={liveLink} passHref>
                <a target='_blank'>
                  <VscLinkExternal className='hover:text-sky-600 transition-all ease-linear duration-300' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
