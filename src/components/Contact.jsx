import React from 'react'

function Contact() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <div className="glass p-8 rounded-2xl">
          <p className="text-white/90 leading-relaxed">
            Feel free to reach out via email or social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h9a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-sm text-white/80">your.email@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-white">Social</h3>
                <p className="text-sm text-white/80">@yourusername</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;