import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <section className="boxWidth flex justify-between mt-5 relative">
      <div className="w-[40%] h-fit flex flex-col gap-3 sticky top-[30%]">
        <span className="font-semibold text-4xl">Featured Projects</span>
        <span className="leading-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos harum maiores quo laborum dolores vitae excepturi, consequuntur amet
        </span>
          <Link href={`/projects`} className="w-fit px-4 py-[7px] text-[15px] bg-black text-white font-semibold rounded-full mt-2">
          Show More
          </Link>
      </div>

      <div className="w-1/2 flex flex-col items-center gap-5 pl-3">

        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-yellow-200">
        </div>

        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-yellow-200">
        </div>

        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-yellow-200">
        </div>

      </div>

    </section>
  )
}

export default Projects
