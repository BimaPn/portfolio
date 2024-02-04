import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <section className="boxWidth flex justify-between gap-8 my-16 relative">
      <div className="w-[40%] h-fit flex flex-col gap-3 sticky top-[35%]">
        <span className="font-semibold text-5xl">Featured Projects</span>
        <span className="leading-[28px] text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos harum maiores quo laborum dolores vitae excepturi, consequuntur amet
        </span>
        <Link href="/projects" className="font-semibold text-lg mt-1">Show more</Link>
      </div>

      <div className="w-1/2 flex flex-col items-center">

        <div className="w-[90%] h-screen flex flex-col gap-4">
          <div className="w-full aspect-[16/10] relative">
            <Image src={`/person.jpg`} alt="project" fill className="object-cover rounded" /> 
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-2xl">Realtime Chat Application</span>
            <span className="text-lg leading=[24px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, labore doloribus. A recusandae cupiditate vitae laudantium!</span>
          </div>
        </div>


        <div className="w-[90%] h-screen flex flex-col gap-4">
          <div className="w-full aspect-[16/10] relative">
            <Image src={`/person.jpg`} alt="project" fill className="object-cover rounded" /> 
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-2xl">Realtime Chat Application</span>
            <span className="text-lg leading=[24px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, labore doloribus. A recusandae cupiditate vitae laudantium!</span>
          </div>
        </div>


        <div className="w-[90%] h-screen flex flex-col gap-4">
          <div className="w-full aspect-[16/10] relative">
            <Image src={`/person.jpg`} alt="project" fill className="object-cover rounded" /> 
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-2xl">Realtime Chat Application</span>
            <span className="text-lg leading=[24px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, labore doloribus. A recusandae cupiditate vitae laudantium!</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Projects
