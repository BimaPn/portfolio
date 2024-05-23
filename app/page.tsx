import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import { socialMedia } from "@/constants/list"

const Home = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4" >
        <Navbar />
      </header>
      <main >
        <Hero />
        <Footer />
      </main>
    </>
  )
}

export default Home


