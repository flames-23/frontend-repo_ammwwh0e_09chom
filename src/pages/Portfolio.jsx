import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 1, name: 'Lumen Health', industry: 'Healthcare', services: ['Website', 'SEO'], desc: 'A conversion-focused website redesign with improved navigation and performance.', tech: ['React', 'Tailwind', 'FastAPI'], metrics: 'Bounce rate -32%, Leads +68%', images: [null, null, null], link: '#' },
  { id: 2, name: 'PeakGear', industry: 'E-commerce', services: ['Storefront', 'Marketing'], desc: 'High-performance storefront with optimized checkout and product pages.', tech: ['Next.js', 'Stripe'], metrics: 'Conversion +41%, AOV +18%', images: [null, null], link: '#' },
  { id: 3, name: 'Nova Fintech', industry: 'Finance', services: ['Landing Pages', 'Analytics'], desc: 'Multi-variant landing system for campaigns with deep analytics.', tech: ['React', 'Vite', 'GA4'], metrics: 'CPL -27%, Signups +55%', images: [null], link: '#' },
  { id: 4, name: 'Orbit Agency', industry: 'B2B', services: ['Website', 'CMS'], desc: 'Bold brand site with modular content blocks and blazing speed.', tech: ['Astro', 'Tailwind'], metrics: 'TTI -60%, Time on site +35%', images: [null, null], link: '#' },
]

export default function Portfolio() {
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <p className="mt-2 text-white/70">A selection of projects crafted for impact.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.button key={p.id} onClick={() => setActive(p)} whileHover={{ y: -6 }} className="group text-left rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[16/10] bg-gradient-to-br from-violet-500/30 to-cyan-400/30 group-hover:from-violet-500/40 group-hover:to-cyan-400/40 transition-colors" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-xs text-white/60">{p.industry}</span>
                </div>
                <p className="mt-2 text-sm text-white/70 line-clamp-2">{p.desc}</p>
                <div className="mt-3 text-xs text-white/60">{p.services.join(' • ')}</div>
                <div className="mt-4">
                  <span className="text-cyan-300 group-hover:text-white">View Case Study →</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/80 backdrop-blur">
            <div className="h-full overflow-y-auto">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{active.name}</h2>
                      <p className="mt-1 text-white/70">{active.industry} • {active.services.join(', ')}</p>
                    </div>
                    <button onClick={() => setActive(null)} className="text-white/70 hover:text-white">Close</button>
                  </div>
                  <p className="mt-4 text-white/80">{active.desc}</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {active.images.map((img, i) => (
                      <div key={i} className="aspect-[16/9] rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30" />
                    ))}
                  </div>
                  <div className="mt-6 text-sm text-white/70">Technologies: {active.tech.join(', ')}</div>
                  <div className="mt-2 text-sm text-white/70">Results: {active.metrics}</div>
                  <a href={active.link} className="mt-6 inline-flex items-center text-cyan-300 hover:text-white">Live site →</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
