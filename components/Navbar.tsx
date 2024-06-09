"use client"
import Link from "next/link"
import LinkTransition from "./LinkTransition"
import SideNav from "./SideNav"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [activePage, setActivePage] = useState<string>("home")
  const path = usePathname()
  const observer = useRef<IntersectionObserver>()

    useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActivePage(visibleSection.id);
      }
    }, {
      rootMargin: "0% 0% -30% 0%",
      threshold: .3
    });

    const sections: HTMLDivElement[] = [];
    ["home","projects","contact"].forEach((section) => {
      const element = document.getElementById(section)
      if(element) {
        sections.push(element as HTMLDivElement)
      }
    })
    sections.forEach((section) => {
      observer.current!.observe(section);
    });

    if(path === "/about") setActivePage("about")
    return () => {
      sections.forEach((section) => {
        observer.current!.unobserve(section);
      });
    };
  }, [path]);

  return (
    <motion.header 
    className="fixed top-0 left-0 right-0 z-[10] py-3 ss:py-4 px-3 xs:px-6 sm:px-8" 
    >
      <NavContent activePage={activePage} />
    </motion.header>
  )
}

const NavContent = ({activePage}:{activePage: string}) => {
  return (
    <nav className="w-full xl:w-[1440px] mx-auto flexBetween">
      <LinkTransition label={  
        <div className="font-bold text-slate-200 text-[22px] xs:text-2xl">
          <span>BimaPN</span>
        </div>
      } href="/" />
      <div className="flex items-center">
        <ul className="hidden sm:flex items-center text-[17px] text-slate-400 font-semibold gap-7 lg:gap-8">
          <li className={`${activePage === "home" && "text-white"}`}> 
            <LinkTransition label="Home" href="/#home" />
          </li>
          <li className={`${activePage === "about" && "text-white"}`}> 
            <LinkTransition label="About" href="/about" />
          </li>
          <li className={`${activePage === "projects" && "text-white"}`}> 
            <LinkTransition label="Projects" href="/#projects" />
          </li>
          <li className={`${activePage === "contact" && "text-white"}`}> 
            <LinkTransition label="contact" href="/#contact" />
          </li>
        </ul>
        <div className="block sm:hidden">
          <SideNav activePage={activePage} />
        </div>  
      </div>
     </nav>
  )
}

export default Navbar
