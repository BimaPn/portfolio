import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <section className="boxWidth mt-5 text-white">
      <span className="text-[50px] font-semibold">Fuck yeah Haha Yeah Fuck me Daddy</span>
      <div className="flex justify-center gap-8 mt-2">
        <div className="w-[50%] flex flex-col gap-2">
          <span className="text-[50px] font-semibold ">Who am I ?</span>
          <span className="leading-8 tracking-wide text-[17px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse unde molestiae perspiciatis quos reiciendis necessitatibus quia quae quibusdam, amet rem illo placeat obcaecati iusto molestias aut ipsum ratione consectetur porro alias. Magnam neque fugit mollitia aliquid quas amet ad suscipit.</span>
        </div> 
        <div className="w-fit">
          <div className="w-[512px] aspect-[3/4] rounded-xl overflow-hidden relative">
            <Image src={`/person.jpg`} className="object-cover" fill alt="me" />
          </div>
        </div> 
      </div>

    </section>
  )
}

export default About
