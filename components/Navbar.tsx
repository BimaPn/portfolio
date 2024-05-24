import Link from "next/link"
import { FiDownload } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className="w-full xl:w-[1440px] px-3 xs:px-6 sm:px-8 mx-auto flexBetween">
      <div className="font-bold text-xl text-slate-300 sm:text-2xl">
        <span>Bima PN</span>
      </div>
      <div>
        <ul className="hidden sm:flex items-center text-[17px] text-slate-400 font-semibold ">
          <li className="px-4 text-white rounded-full flexCenter"> 
            <span>Home</span>
          </li>
          <li className="px-4 py-[6px]">About</li>
          <li className="px-4 py-[6px]">Projects</li>
          <li className="px-4 py-[6px]">Contact</li>
        </ul>
      </div>
     </nav>
  )
}

export default Navbar
    // <nav className="w-[1440px] mx-auto flexBetween">
    //   <div className="font-bold text-2xl">
    //     <span>Bima P</span>
    //   </div>
    //   <div>
    //     <ul className="flex items-center p-[5px] text-[15px] text-white bg-semiLight/25 backdrop-blur rounded-full">
    //       <li className="bg-light text-black px-4 py-[6px] rounded-full flexCenter font-medium relative"> 
    //         <span>Home</span>
    //       </li>
    //       <li className="px-4 py-[6px]">About</li>
    //       <li className="px-4 py-[6px]">Projects</li>
    //       <li className="px-4 py-[6px]">Contact</li>
    //     </ul>
    //   </div>
    //   <Link href={`/resume`} className="flexCenter text-white font-medium gap-[6px] hover:text-semiLight"> 
    //     <span>Resume</span>
    //     <FiDownload className="-mt-[1px]" />
    //   </Link>
    //  </nav>
