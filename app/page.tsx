import FooterContent from "@/components/FooterContent"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { socialMedia } from "@/constants/list"

const Home = () => {
  return (
    <>
      <main className="relative z-[1]">
          <Hero />
          <Projects />
          <FooterContent />
      </main>
    </>
  )
}

export default Home




