import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg" />
          <span className="font-semibold tracking-tight text-white">Veridian <span className="text-cyan-300">Interactive</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <button key={item.label} onClick={() => scrollTo(item.href)} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </button>
            ) : (
              <NavLink key={item.label} to={item.href} className={({isActive}) => `text-white/80 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`}>
                {item.label}
              </NavLink>
            )
          ))}
          <button onClick={() => scrollTo('#contact')} className="ml-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all">
            Book Consultation
          </button>
        </nav>

        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80">
          <div className="absolute top-0 right-0 left-0 p-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400" />
              <span className="font-semibold text-white">Veridian Interactive</span>
            </Link>
            <button onClick={() => setOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="mt-20 px-6 space-y-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button key={item.label} onClick={() => scrollTo(item.href)} className="block w-full text-left text-xl text-white/90 py-2">
                  {item.label}
                </button>
              ) : (
                <NavLink key={item.label} to={item.href} onClick={() => setOpen(false)} className="block text-xl text-white/90 py-2">
                  {item.label}
                </NavLink>
              )
            ))}
            <button onClick={() => scrollTo('#contact')} className="mt-4 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-base font-semibold text-white shadow-lg">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
