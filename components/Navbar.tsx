import Link from "next/link"
import { FiDownload } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className="w-[1440px] mx-auto flexBetween">
      <div className="font-bold text-2xl">
        <span>Bima PN</span>
      </div>
      <div>
        <ul className="flex items-center p-[5px] text-[15px] text-white bg-semiLight/25 backdrop-blur rounded-full">
          <li className="bg-light text-black px-4 py-[6px] rounded-full flexCenter font-medium relative"> 
            <span>Home</span>
          </li>
          <li className="px-4 py-[6px]">About</li>
          <li className="px-4 py-[6px]">Projects</li>
          <li className="px-4 py-[6px]">Contact</li>
        </ul>
      </div>
      <Link href={`/resume`} className="flexCenter text-white font-medium gap-[6px]"> 
        <span>Resume</span>
        <FiDownload className="-mt-[1px]" />
      </Link>
     </nav>
  )
}

export default Navbar
