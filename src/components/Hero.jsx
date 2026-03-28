import React from 'react'

function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="text-center space-y-8 lg:space-y-12">
        <div className="glass text-white/90 backdrop-blur-lg p-8 rounded-2xl max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-lg sm:text-xl mt-6 mb-8 opacity-90">
            Full Stack Developer & Design Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200">
              View Projects
            </button>
            <button className="glass px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200">
              Contact Me
            </button>
          </div>
        </div>

        <div className="glass w-64 h-64 mx-auto animate-float">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero