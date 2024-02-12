import Link from "next/link"

const About = () => {
  return (
    <section className="boxWidth min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 relative">
        <div 
        className="absolute -top-12 blur-[90px] right-0 w-[164px] aspect-square rounded-full bg-blue-300 z-0"/>
        <div 
        className="absolute bottom-0 blur-[90px] -left-12 w-[164px] aspect-square rounded-full bg-red-400 z-0"/>
        <span className="font-semibold text-[48px] tracking-wide leading-[72px] relative z-[1]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae porro animi expedita consectetur fugit distinctio corporis error perspiciatis totam atque laboriosam
        </span>
        <Link href={`/about`} className="font-semibold text-lg">See More</Link>
      </div>
    </section>
  )
}

export default About
