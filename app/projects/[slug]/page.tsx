import { Content, Header } from "@/components/ProjectDetailContent"
import { colors, projects } from "@/constants/projects"
import { videos } from "@/constants/videos"

type Params = {
    params : {slug : string}
}

const Page = ({params}:Params) => {
  const project = projects.find((project) => project.slug === params.slug)

  if(!project) {
    throw Error("Project not found")
  }
  return project && (
    <section className="px-3 ss:px-6 sm:px-8 mt-16 sm:mt-24 relative"> 
      <Header 
      videoSrc={videos[project.id-1]} 
      title={project.title}  
      type={project.type}
      color={colors[project.id-1]} 
      />
      <Content 
      demoLink={project.demoLink} 
      codeLink={project.codeLink} 
      previewImages={project.previewImages}  
      overview={project.overview}
      role={project.role}
      stacks={project.stacks}
      />
    </section>  
  ) 
}


export default Page
