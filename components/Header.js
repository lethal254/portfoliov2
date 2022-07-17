import Image from "next/image"
import { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { FiMenu, FiX } from "react-icons/fi"
import NextLink from "next/link"

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <header className='sticky top-0 left-0 flex w-[100%] justify-between lg:flex-row flex-col bg-slate-900 py-4 bg-opacity-90 backdrop-blur-sm mb-10 z-20 px-4 md:px-6'>
      <div>
        <Image src='/Logo.svg' width={50} height={50} alt='Logo' />
      </div>
      <div className='lg:hidden absolute right-0 mr-4'>
        {showMobileNav ? (
          <FiX
            className=' text-gray-200 text-4xl cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear'
            onClick={() => setShowMobileNav(false)}
          />
        ) : (
          <FiMenu
            className='text-gray-200 text-4xl cursor-pointer hover:text-sky-600 transition-all duration-150 ease-linear'
            onClick={() => setShowMobileNav(true)}
          />
        )}
      </div>
      <nav>
        <ul
          className={`
          mobile-nav
          lg:flex lg:space-x-5 space-y-5 lg:space-y-0 mt-4 lg:mt-0 bg-slate-800 lg:bg-transparent w-[100%] lg:p-0 p-4 text-gray-200 items-center lg:rounded-none rounded-md ${
            showMobileNav ? "mobile-nav" : "hidden "
          }`}>
          <li>
            <a className='navLink'>
              <NextLink href='/'>Home</NextLink>
            </a>
          </li>
          <li>
            <a className='navLink'>
              <Link
                activeClass='active'
                to='services'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Services
              </Link>
            </a>
          </li>
          <li>
            <a className='navLink'>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Projects
              </Link>
            </a>
          </li>
          <li>
            <a className='navLink'>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Contact
              </Link>
            </a>
          </li>
          <NextLink href='/blog'>
            <button className='button'>Blog</button>
          </NextLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
