import Link from "next/link"

const About = () => {
  return (
    <section className="boxWidth flex items-center gap-5 mt-5 text-white">
      <div className="w-[40%] flex flex-col gap-2">
        <span className="text-[50px] font-bold italic">Who am I ?</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat ratione blanditiis, pariatur quam saepe sunt praesentium impedit, quidem asperiores laborum id architecto, explicabo ipsum?</span>
        <button className="w-fit text-black bg-white px-4 py-[6px] rounded-full font-medium mt-6 text-sm">Read more</button>
      </div> 

      <div className="w-[50%] h-[45vh] bg-slate-200 rounded-3xl">

      </div> 
    </section>
  )
}

export default About
