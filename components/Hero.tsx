import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { socialMedia } from "@/constants/list"

const Hero = () => {
  // const socialMedia = [
  //   {
  //     icon: <FaFacebookF className="!text-[19px] -mt-[1px] -mr-[3px]" />,
  //     link: "www.facebook.com"
  //   },
  //   {
  //     icon: <AiFillInstagram className="!text-[25px]" />,
  //     link: "www.facebook.com"
  //   },
  //   {
  //     icon: <FaLinkedinIn />,
  //     link: "www.facebook.com"
  //   },
  //   {
  //     icon: <FaGithub/>,
  //     link: "www.facebook.com"
  //   },
  // ]
  return (
    <section className="boxWidth h-[80vh] flexCenter gap-5 text-white">
      <div className="w-[65%] h-full rounded-3xl bg-semiDark  relative overflow-hidden">
        <div 
        className="absolute -top-12 blur-[90px] -right-32 w-[264px] aspect-square rounded-full bg-blue-700 z-0"/>
      <div 
      className="absolute -bottom-24 blur-[90px] left-0 w-[234px] aspect-square rounded-full bg-yellow-800 z-0"/>

        <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full z-[1] p-8">


          <div className="w-[75%] flex flex-col gap-3">
            <span className="text-4xl font-bold leading-[44px]">I Fuck Someone Who Are Web Developer & Designer</span>
            <span className="leading-[28px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et blanditiis dicta expedita, distinctio reprehenderit officiis omnis nostrum.</span>
            <span>See my <Link href={`/projects`} className="font-medium">Portfolio</Link></span>
          </div>

        <div className="flex items-center gap-5">
          <Link href={`/contact`} className="px-4 py-2 text-[15px] bg-black text-white font-semibold rounded-full">
          Contact Me
          </Link>
          <ul className="flex items-center gap-6 text-[22px]">
            {socialMedia.map((item) => (
              <li key={item.link}>
                {item.icon}
              </li>
            ))}
          </ul>
        </div>

        </div>

      </div>
      <div className="w-[35%] h-full rounded-3xl bg-gray-200 relative overflow-hidden">
        <Image src={`/person.jpg`} alt="profile picture" fill className="object-cover" />
      </div>
    </section>  
  )
}

export default Hero
