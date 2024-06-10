export const  colors = ["#172554","#3B0764", "#083344","#052E16"]

const bindStacks = [
    <span>- <a href="https://nextjs.org/" className="font-semibold" target="_blank">Nextjs</a> for the front-end</span>,
    <span>- <a href="https://tailwindcss.com/" className="font-semibold" target="_blank">Tailwind CSS</a> for the styling</span>,
    <span>- <a href="https://laravel.com/" className="font-semibold" target="_blank">Laravel</a> for the back-end</span>,
    <span>- <a href="https://www.mysql.com/" className="font-semibold" target="_blank">Mysql</a> for the database</span>
]

const nexatalkStacks = [ 
    <span>- <a href="https://nextjs.org/" className="font-semibold" target="_blank">Nextjs</a> for the front-end</span>,
    <span>- <a href="https://tailwindcss.com/" className="font-semibold" target="_blank">Tailwind CSS</a> for the styling</span>,
    <span>- <a href="https://nodejs.org/en" className="font-semibold" target="_blank">Node js</a> for the back-end</span>,
    <span>- <a href="https://redis.io/" className="font-semibold" target="_blank">Redis</a> for the caching</span>,
    <span>- <a href="https://www.mongodb.com/" className="font-semibold" target="_blank">MongoDB</a> for the database</span>
]

const digimartStacks = [ 
    <span>- <a href="https://nextjs.org/" className="font-semibold" target="_blank">Nextjs</a> for the front-end</span>,
    <span>- <a href="https://tailwindcss.com/" className="font-semibold" target="_blank">Tailwind CSS</a> for the styling</span>,
]

const europarkStacks = [ 
    <span>- <a href="https://nextjs.org/" className="font-semibold" target="_blank">Nextjs</a> for the front-end</span>,
    <span>- <a href="https://tailwindcss.com/" className="font-semibold" target="_blank">Tailwind CSS</a> for the styling</span>,
    <span>- <a href="https://laravel.com/" className="font-semibold" target="_blank">Laravel</a> for the back-end</span>,
    <span>- <a href="https://www.mysql.com/" className="font-semibold" target="_blank">Mysql</a> for the database</span>
]

export const projects = [
  {
    id: 1,
    title: "Bind",
    slug: "bind",
    type: "Web Application",
    previewImages: ["/projects/previews/bind_lg.png", "/projects/previews/bind_sm.png"],
    description: "A social media platform designed to bring people closer together and offers a seamless and engaging experience.",
    demoLink: "https://bind-app-demo.vercel.app",
    codeLink: "https://github.com/BimaPn/bind-client.git",
    overview: "Bind is a full-stack social media platform featuring real-time chat, notifications, media posting, and group creation/joining capabilities and more. Developed with React using Next.js for the frontend and Laravel for the backend API, with styling implemented using Tailwind CSS, Bind offers seamless user interaction and content sharing. It showcases modern web development skills, emphasizing user engagement and responsive design.",
    role: "Front-end",
    stacks: bindStacks
  },
  {
    id: 2,
    title: "NexaTalk",
    slug: "nexatalk",
    type: "Web Application",
    previewImages: ["/projects/previews/nexatalk_lg.png", "/projects/previews/nexatalk_sm.png"],
    description: "A real-time chat application designed to provide seamless and instant communication.",
    overview: "NexaTalk is a real-time chat web application built using React, Next.js, and Tailwind CSS for the frontend, and Node.js, Redis, and MongoDB for the backend.  Integrated with websockets, NexaTalk ensures instant and reliable real-time functionality, making it ideal for dynamic and responsive chat experiences.",
    demoLink: "https://nexatalk-demo.vercel.app",
    codeLink: "https://github.com/BimaPn/nexatalk-client.git",
    role: "Full-stack",
    stacks: nexatalkStacks
  },
  {
    id: 3,
    title: "DigiMart",
    slug: "digimart",
    type: "Frontend Web Application",
    previewImages: ["/projects/previews/digimart_lg.png", "/projects/previews/digimart_sm.png"],
    description: "A dynamic and user-friendly e-commerce platform designed to provide a seamless shopping experience.",
    overview: "Digimart is an e-commerce platform built as a frontend web application using React, Next.js, and Tailwind CSS. It offers a seamless shopping experience with intuitive user interfaces and robust functionalities, making online shopping efficient and enjoyable.",
    demoLink: "https://digimart-project.vercel.app",
    codeLink: "https://github.com/BimaPn/DigiMart.git",
    role: "Front-end",
    stacks: digimartStacks
  },
  {
    id: 4,
    title: "Europark",
    slug: "europark",
    type: "Web Application",
    previewImages: ["/projects/previews/europark_lg.png", "/projects/previews/europark_sm.png"],
    description: "offers a seamless online ticket purchasing experience and showcases a collection of the finest and most famous artworks.",
    overview: "Europark is a fullstack web application offering a modern online ticket purchasing experience and showcasing some collections of the world's most renowned artworks. Built with React, Next.js, and Tailwind CSS for the frontend, and Laravel for the backend API, Europark provides an immersive digital museum experience featuring elegant design and powerful functionality.",
    demoLink: "https://europark-demo.vercel.app",
    codeLink: "https://github.com/BimaPn/europark-client.git",
    role: "Full-stack",
    stacks: europarkStacks
  },
]


