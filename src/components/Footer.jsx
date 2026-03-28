import React from 'react'

function Footer() {
  return (
    <footer className="py-8 text-center text-white/80">
      <div className="glass p-6 rounded-2xl">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2 text-sm opacity-60">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer;