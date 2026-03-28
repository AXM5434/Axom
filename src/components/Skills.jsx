import React from 'react'

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Vue', 'Node.js', 'Express', 'Redux', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Figma', 'Jenkins', 'AWS', 'Azure', 'GCP'],
    },
    {
      title: 'Concepts',
      skills: ['RESTful APIs', 'Microservices', 'GraphQL', 'GraphQL', 'SQL', 'NoSQL'],
    },
    {
      title: 'Creative Skills',
      skills: ['UI/UX Design', 'Prototyping', 'Wireframing', 'Motion Design'],
    },
  ]

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="glass px-4 py-2 rounded-full text-sm text-white/80 bg-white/10">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills