import React from 'react'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, full-featured online store with responsive design, secure payment integration, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://picsum.photos/seed/project1/800/600",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, Kanban boards, and team communication features.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "https://picsum.photos/seed/project2/800/600",
    github: "#",
    live: "#",
  },
  {
    title: "Real Estate Dashboard",
    description: "Interactive dashboard for property listings with advanced filtering, map integration, and analytics.",
    tech: ["Next.js", "PostgreSQL", "Mapbox", "D3.js"],
    image: "https://picsum.photos/seed/project3/800/600",
    github: "#",
    live: "#",
  },
  {
    title: "Fitness Tracking Platform",
    description: "Comprehensive fitness app with workout plans, nutrition tracking, and progress visualization.",
    tech: ["React Native", "GraphQL", "AWS", "TensorFlow"],
    image: "https://picsum.photos/seed/project4/800/600",
    github: "#",
    live: "#",
  },
]

function Projects() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="glass px-3 py-1 rounded-full text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a href={project.github} className="glass px-4 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
                    Code
                  </a>
                  <a href={project.live} className="glass px-4 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects