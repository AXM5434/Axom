import React from 'react'

function About() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-2xl space-y-6">
            <p className="text-white/90 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern, responsive web applications. My journey in technology began with a fascination for how things work, and it has evolved into a career focused on creating elegant, user-centered solutions.
            </p>
            <p className="text-white/90 leading-relaxed">
              I thrive on solving complex problems and turning ideas into functional reality. Whether it's crafting pixel-perfect interfaces or architecting robust backend systems, I bring attention to detail and a commitment to excellence to every project.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-white">Experience</h3>
                <p className="text-sm text-white/80">5+ years in web development</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c0 1.105-0.895 2-2 2s-2-0.895-2-2S9.895 6 11 6h2a2 2 0 100 4H9a2 2 0 100-4h2zM12 14a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-white">Education</h3>
                <p className="text-sm text-white/80">Bachelor's in Computer Science</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-sm text-white/80">Remote / Global</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About