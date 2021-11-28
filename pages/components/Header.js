import Image from "next/image"
import styles from "../../styles/Header.module.css"
import { Link, animateScroll as scroll } from "react-scroll"
import { useState } from "react"

const Header = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.logo}>
        <Image src='/Logo.svg' width={100} height={100} alt='Logo' />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                About
              </Link>
            </a>
          </li>
          <li>
            <a>
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
            <a></a>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <a></a>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
