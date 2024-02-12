import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="boxWidth h-screen relative overflow-x-hidden overflow-y-clip">
      <div 
      className="absolute -bottom-24 blur-[90px] -left-16 w-[364px] aspect-square rounded-full bg-blue-300 z-0"/>
      <div 
      className="absolute -top-36 blur-[90px] left-1/2 w-[324px] aspect-square rounded-full bg-yellow-200 z-0"/>
      <div 
      className="absolute -bottom-32 blur-[90px] -right-32 w-[324px] aspect-square rounded-full bg-red-300 z-0"/>

      <div className="w-full h-full flexCenter gap-24 relative z-[1]">
        <div className="basis-[45%] flex flex-col gap-3 text-lg">
          <h1 className="font-bold text-[64px] flex flex-col leading-[68px]">
            <span>Web Developer &</span>
            <span>Designer</span>
          </h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eum non possimus, sed accusamus assumenda.
          </span>
          <div className="flex items-center gap-2 mt-2">
            <Link href={`/hahah`} className="font-semibold">See projects</Link>
            <span>or</span>
            <Link href={`/hahah`} className="font-semibold">Read about me</Link>
          </div>
        </div>
        <div>
          <div className="w-[394px] aspect-[3.4/4] relative mb-2">
            <Image src={`/person.jpg`} alt="profile picture" fill className="object-cover z-[2]" />
            <div className="absolute -bottom-3 left-3 w-full h-full border-[2.5px] border-black z-0"/>
          </div>
        </div>
      </div>
    </section>    
  )
}

export default Hero
