import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { socialMedia } from "@/constants/list"

const Home = () => {
  return (
    <>
      <main >
        <section className="relative z-[1]">
          <Hero />
        </section >
        <Projects />
      </main>
    </>
  )
}

export default Home


