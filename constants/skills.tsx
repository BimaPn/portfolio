
import Image from "next/image"



const SvgImage = ({src, className}:{src: string, className?: string}) => {
  return (
    <div className={className}> 
      <Image src={src} width={40} height={40} className="w-[29px] aspect-square" alt="logo" />
    </div>
  )
}

const frontStacks = [
  {
    link: "https://react.dev/",
    icon: <SvgImage src={"/icons/skills/react.svg"} />
  },
  {
    link: "https://nextjs.org/",
    icon:  <SvgImage src={"/icons/skills/nextjs.svg"} className="bg-white rounded-full" />
  },
  {
    link: "https://tailwindcss.com/",
    icon: <SvgImage src={"/icons/skills/tailwind.svg"} />
  },
]

const backStacks = [
  {
    link: "https://laravel.com/",
    icon: <SvgImage src={"/icons/skills/laravel.svg"} />
  },
  {
    link: "https://nodejs.org/en",
    icon:  <SvgImage src={"/icons/skills/nodejs.svg"} />
  },
  {
    link: "https://redis.io/",
    icon: <SvgImage src={"/icons/skills/redis.svg"} />
  },
  {
    link: "https://www.mongodb.com/",
    icon: <SvgImage src={"/icons/skills/mongodb.svg"} />
  },
  {
    link: "https://www.mysql.com/",
    icon: <SvgImage src={"/icons/skills/mysql.svg"} />
  },
]

const devStacks = [
  {
    link: "https://git-scm.com/",
    icon: <SvgImage src={"/icons/skills/git.svg"} />
  },
  {
    link: "https://www.docker.com/",
    icon:  <SvgImage src={"/icons/skills/docker.svg"} />
  },
]

const designStacks = [
  {
    link: "https://www.figma.com/",
    icon: <SvgImage src={"/icons/skills/figma.svg"} />
  },
  {
    link: "https://www.adobe.com/home",
    icon: <SvgImage src={"/icons/skills/photoshop.svg"} />
  },
  {
    link: "https://www.adobe.com/home",
    icon:  <SvgImage src={"/icons/skills/ilustrator.svg"} />
  },
]


export const skills = [
  {
    name: "Front-end",
    description: "Lorem, ipsum dolor sit amet consectetur",
    stacks: frontStacks
  },
  {
    name: "Back-end",
    description: "Lorem, ipsum dolor sit amet consectetur",
    stacks: backStacks
  },
  {
    name: "Development",
    description: "Lorem, ipsum dolor sit amet consectetur",
    stacks: devStacks
  },
  {
    name: "Design",
    description: "Lorem, ipsum dolor sit amet consectetur",
    stacks: designStacks
  },
]


