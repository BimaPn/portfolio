import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

const Hero = () => {
  const socialMedia = [
    {
      icon: <FaFacebookF className="!text-[19px] -mt-[1px] -mr-[3px]" />,
      link: "www.facebook.com"
    },
    {
      icon: <AiFillInstagram className="!text-[25px]" />,
      link: "www.facebook.com"
    },
    {
      icon: <FaLinkedinIn />,
      link: "www.facebook.com"
    },
    {
      icon: <FaGithub/>,
      link: "www.facebook.com"
    },
  ]
  return (
    <section className="boxWidth h-[80vh] flexCenter gap-6">
      <div className="w-[65%] h-full rounded-3xl bg-slate-100  relative overflow-hidden">
        <div 
        className="absolute -top-12 blur-[90px] -right-32 w-[324px] aspect-square rounded-full bg-blue-300 z-0"/>
      <div 
      className="absolute -bottom-24 blur-[90px] left-0 w-[234px] aspect-square rounded-full bg-yellow-300 z-0"/>

        <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full z-[1] p-7">


          <div className="w-[75%] flex flex-col gap-3">
            <span className="text-4xl font-semibold leading-[44px]">Work with Badass and Powerful Develeper Like Me</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et blanditiis dicta expedita, distinctio reprehenderit officiis omnis nostrum. Voluptatum illo a quaerat, libero saepe quibusdam.</span>
            <span>See my <Link href={`/projects`} className="font-medium">Portfolio</Link></span>
          </div>

        <div className="flex items-center gap-5">
          <Link href={`/contact`} className="px-4 py-[9px] bg-black text-white font-medium rounded-full">
          Get in Touch
          </Link>
          <ul className="flex items-center gap-6 text-[22px]">
            {socialMedia.map((item) => (
              <li key={item.link}>
                {item.icon}
              </li>
            ))}
            <li>
            
            </li>
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
