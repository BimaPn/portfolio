import Footer from "@/components/Footer"
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
        <footer id="contact" className="w-full h-screen sm:h-[75vh] overflow-hidden flex items-end">
          <Footer />
        </footer>
      </main>
    </>
  )
}

export default Home


