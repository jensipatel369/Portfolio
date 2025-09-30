import React from 'react'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white/90 text-lg font-semibold tracking-wide">Jensi.dev</a>
          <ul className="hidden gap-8 md:flex">
            <li><a href="#about" className="text-white/80 hover:text-white transition">About me</a></li>
            <li><a href="#skills" className="text-white/80 hover:text-white transition">My skills</a></li>
            <li><a href="#portfolio" className="text-white/80 hover:text-white transition">Portfolio</a></li>
            <li><a href="#contacts" className="text-white/80 hover:text-white transition">Contacts</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
