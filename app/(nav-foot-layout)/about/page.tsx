import { skills } from "@/constants/skills"
import Image from "next/image"
import Link from "next/link"
import { FiDownload } from "react-icons/fi"
import { IoArrowBackOutline } from "react-icons/io5"

const page = () => {
  return (
    <section className="pt-20"> 
      <div className="w-full lg:w-[1280px] mx-auto mt-12">
        <div className="w-fit flex flex-col gap-1">
          <h1 className="font-bold text-[50px] text-white tracking-tight">About me 😁</h1>
          <div className="w-[30%] border-b-2 border-slate-500" />
        </div>

        <div className="flex justify-between mt-8">
          <div className="w-[40%] flex flex-col gap-5">
            <span className="text-xl tracking-wide leading-[32px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque neque vitae reprehenderit totam nobis sapiente eius minus! Tempore numquam nobis hic consectetur? Fugit inventore, obcaecati fuga consequatur iure commodi.</span>

            <Link href={`/resume`} className="w-fit text-white text-glow-sm font-medium hover:scale-105 transition-transform sm:origin-left"> 
              <span>👉 My Resume 👈</span>
            </Link>
          </div>

          <div className="w-1/2 aspect-[3/4] relative">
            <Image src={`/person.jpg`} alt="the creator" fill className="object-cover rounded" />
          </div>
        </div>
      </div>

      <div className="w-full h-[75vh] flexCenter lg:w-[1280px] mx-auto relative z-[2] mt-6"> 
        <div className="w-full">

          <h2 className="flex items-center gap-2 font-bold text-[32px] tracking-tight"> 
            <span>My skills 😎</span>
          </h2>
          <div className="grid grid-cols-3 gap-12 mt-5">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-1">
                <span className="font-semibold text-[26px] text-white text-glow-sm">{skill.name}</span>
                <span>{skill.description}</span>
                <div className="flex items-center flex-nowrap gap-5 mt-5">
                {skill.stacks.map((stack) => (
                <Link href={stack.link} key={stack.link}> 
                  {stack.icon}
                </Link>
                ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}


export default page
