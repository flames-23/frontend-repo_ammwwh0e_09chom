import { ChevronDown } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.2),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/20 px-3 py-1 text-xs tracking-wide uppercase">Veridian Interactive</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Crafting Digital Experiences
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-400">That Convert</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              We design and build high-converting websites and experiences that blend bold creativity with measurable business results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('#contact')} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all">
                Book a Consultation
              </button>
              <button onClick={() => scrollTo('#portfolio')} className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>

        <button onClick={() => scrollTo('#about')} className="mt-16 mx-auto flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors">
          <ChevronDown />
        </button>
      </div>
    </section>
  )
}
