import Link from "next/link"

const About = () => {
  return (
    <section className="boxWidth min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <span className="font-semibold text-[48px] tracking-wide leading-[72px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae porro animi expedita consectetur fugit distinctio corporis error perspiciatis totam atque laboriosam
        </span>
        <Link href={`/about`} className="font-semibold text-lg">See More</Link>
      </div>
    </section>
  )
}

export default About
