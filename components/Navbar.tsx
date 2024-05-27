"use client"
import Link from "next/link"
import { FiDownload } from "react-icons/fi"
import LinkTransition from "./LinkTransition"
import SideNav from "./SideNav"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const isScrollingUp = prevScrollPos > currentScrollPos
    setShow(isScrollingUp)
    setPrevScrollPos(currentScrollPos)
  };

  useEffect(() => {
    setPrevScrollPos(window.pageXOffset)
  },[])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[prevScrollPos])

  const headerVariant = {
    animate: {
      y: show ? 0 : -100,
      transition: {
        duration: .4,
        ease: [.12, 0, .39, 0]
      }
    }
  }
  return (
    <motion.header 
    variants={headerVariant}
    animate="animate"
    className="fixed top-0 left-0 right-0 z-[10] py-3 ss:py-4 px-3 xs:px-6 sm:px-8 " 
    >
      <NavContent />
    </motion.header>
  )
}

const NavContent = () => {
  return (
    <nav className="w-full xl:w-[1440px] mx-auto flexBetween">
      <div className="font-bold text-[22px] text-slate-200 sm:text-2xl">
        <span>BimaPN</span>
      </div>
      <div className="flex items-center">
        <ul className="hidden sm:flex items-center text-[17px] text-slate-400 font-semibold gap-7 lg:gap-8">
          <li> 
            <LinkTransition label="Home" href="/" />
          </li>
          <li> 
            <LinkTransition label="About" href="/about" />
          </li>
          <li> 
            <Link href={`#projects`}>Projects</Link>
          </li>
          <li> 
            <Link href={`#contact`}>Contact</Link>
          </li>
        </ul>
        <div className="block sm:hidden">
          <SideNav />
        </div>  
      </div>
     </nav>
  )
}

export default Navbar
