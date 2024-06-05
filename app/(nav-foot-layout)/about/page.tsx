import { skills } from "@/constants/skills"
import Image from "next/image"
import Link from "next/link"
import { FiDownload } from "react-icons/fi"
import { IoArrowBackOutline } from "react-icons/io5"

const page = () => {
  return (
    <section className="pt-10 xs:pt-12 sm:pt-14 md:pt-20 px-4 xs:px-6 sm:px-8"> 
      <div className="w-full lg:w-[1200px] mx-auto mt-10">
        <div className="w-fit flex flex-col gap-4 xs:gap-7">
          <h1 className="font-bold text-[36px] xs:text-[46px] md:text-[50px] tracking-tight flex flex-col leading-[44px] xs:leading-[52px] sm:leading-[58px] text-slate-200"> 
            <span>Hello Everyone Hahi</span>
            <span>I'm <span className="text-white text-glow-lg">Inspiration</span> Person Bro</span>
          </h1>
          <div className="w-1/2 sm:w-1/3 border-t-2 border-primary" />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between mt-6 sm:mt-8 gap-6 sm:gap-0">
          <div className="w-full sm:w-[50%] flex flex-col gap-5">
            <span className="text-lg sm:text-xl leading-[30px] sm:leading-[32px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque neque vitae reprehenderit totam nobis sapiente eius minus! Tempore numquam nobis hic consectetur? Fugit inventore, obcaecati fuga consequatur iure commodi.</span>

            <Link href={`/resume`} className="w-fit text-white text-glow-sm font-medium hover:scale-105 transition-transform sm:origin-left"> 
              <span>👉 My Resume 👈</span>
            </Link>
          </div>

          <div className="w-full sm:w-[45%] aspect-[3/4] relative mt-3">
            <Image src={`/person.jpg`} alt="the creator" fill className="object-cover rounded" />
          </div>
        </div>
      </div>

      <div className="w-full flexCenter lg:w-[1200px] mx-auto relative z-[2] mt-12 sm:mt-16"> 
        <div className="w-full">
          <h2 className="flex items-center gap-2 font-semibold text-[20px] tracking-tight text-slate-300"> 
            <span>My skills 🤓 🖥️</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-2">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-1">
                <div className="border-b-2 pb-1 mb-2">
                  <span className="font-semibold text-[36px] text-white">{skill.name}</span>
                </div>

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





