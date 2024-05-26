import Link from "next/link"
import { FiDownload } from "react-icons/fi"
import LinkTransition from "./LinkTransition"
import SideNav from "./SideNav"

const Navbar = () => {
  return (
    <nav className="w-full xl:w-[1440px] px-3 xs:px-6 sm:px-8 mx-auto flexBetween">
      <div className="font-bold text-[22px] text-slate-300 sm:text-2xl">
        <span>Bima PN</span>
      </div>
      <div className="flex items-center">
        <ul className="hidden sm:flex items-center text-[17px] text-slate-400 font-semibold ">
          <li className="px-4 py-[6px]"> 
            <LinkTransition label="Home" href="/" />
          </li>
          <li className="px-4 py-[6px]"> 
            <LinkTransition label="About" href="/about" />
          </li>
          <li className="px-4 py-[6px]"> 
            <Link href={`/projects/test`}>Projects</Link>
          </li>
          <li className="px-4 py-[6px]"> 
            <Link href={`/contact`}>Contact</Link>
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
