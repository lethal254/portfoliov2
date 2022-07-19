import Header from "./Header"
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi"
import Link from "next/link"

const Layout = ({ children }) => {
  return (
    <div className='w-[100%] bg-slate-900 min-h-screen'>
      <div className='  sticky top-0 left-0 z-50'>
        <Header />
      </div>

      <div className='min-h-[50vh] lg:w-[65%] md:w-[75%]  mx-auto md:px-0 px-6 relative mt-20 '>
        <div className='fixed bottom-0 left-6 text-white text-xl  flex-col items-center  hidden md:inline-block'>
          <Link href='https://github.com/lethal254' passHref>
            <a target='_blank'>
              <FiGithub className='mb-4 hover:text-sky-200 hover:-translate-y-2 transition-all duration-150 ease-linear cursor-pointer' />
            </a>
          </Link>

          <Link
            href='https://www.linkedin.com/in/benard-ogutu-422179164/'
            passHref>
            <a target='_blank'>
              <FiLinkedin className='mb-4 hover:text-sky-200 transition-all hover:-translate-y-2 duration-150 ease-linear cursor-pointer' />
            </a>
          </Link>

          <Link href='https://www.instagram.com/bennycodes/' passHref>
            <a target='_blank'>
              <FiInstagram className='mb-4 hover:text-sky-200 transition-all hover:-translate-y-2 duration-150 ease-linear cursor-pointer' />
            </a>
          </Link>

          <Link href='https://twitter.com/iam_bennycodes' passHref>
            <a target='_blank'>
              <FiTwitter className='mb-4 hover:text-sky-200 transition-all duration-150 ease-linear hover:-translate-y-2 cursor-pointer' />
            </a>
          </Link>

          <div className='h-20 w-0.5 bg-white bg-opacity-40'></div>
        </div>
        <div className='fixed bottom-0 right-6 text-white text-xl  flex-col items-center hidden md:inline-block'>
          <a
            href='mailto:benardogutu65@gmail.com'
            className='text-sm  verticate mb-4 tracking-wider '>
            benardogutu65@gmail
          </a>
          <div className='h-20 w-0.5 bg-white bg-opacity-40'></div>
        </div>

        {children}
      </div>
      <div>
        <footer className='flex px-6 w-[100%] text-2xl justify-center text-white md:hidden mt-6'>
          <Link href='https://github.com/lethal254' passHref>
            <a target='_blank'>
              <FiGithub className='mr-4 mb-2 hover:text-sky-200 hover:-translate-y-2 transition-all duration-150 ease-linear cursor-pointer' />
            </a>
          </Link>

          <Link
            href='https://www.linkedin.com/in/benard-ogutu-422179164/'
            passHref>
            <a target='_blank'>
              <FiLinkedin className='mr-4 mb-2 hover:text-sky-200 hover:-translate-y-2 transition-all duration-150 ease-linear cursor-pointer' />
            </a>
          </Link>

          <Link href='https://www.instagram.com/bennycodes/' passHref>
            <a target='_blank'>
              <FiInstagram className='mr-4 mb-2 hover:text-sky-200 hover:-translate-y-2 transition-all duration-150 ease-linear cursor-pointer' />
            </a>
          </Link>

          <Link href='https://twitter.com/iam_bennycodes' passHref>
            <a target='_blank'>
              <FiTwitter className='mr-4 mb-2 hover:text-sky-200 hover:-translate-y-2 transition-all duration-150 ease-linear cursor-pointer' />
            </a>
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default Layout
