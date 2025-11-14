import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function Testimonials() {
  const testimonials = [
    { name: 'Maya Patel', company: 'Lumen Health', rating: 5, quote: 'Veridian transformed our web presence and conversion rate. The team was strategic, creative, and lightning fast.' },
    { name: 'Ethan Ross', company: 'PeakGear', rating: 5, quote: 'Our launch exceeded targets by 220%. The landing pages were stunning and highly effective.' },
    { name: 'Sofia Alvarez', company: 'Nova Fintech', rating: 5, quote: 'They marry beautiful design with measurable results. A true partner in growth.' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#0b0b12] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">What Clients Say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl shadow-black/30">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-white/80">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-white/60 text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogPreview() {
  const posts = [
    { title: 'Designing for Conversion: 7 Principles that Work', time: '5 min read' },
    { title: 'Speed Matters: How Performance Impacts SEO', time: '6 min read' },
    { title: 'Launching with Impact: Pre-Launch Checklist', time: '4 min read' },
  ]

  return (
    <section id="blog" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold">From the Blog</h2>
          <a href="#" className="text-cyan-300 hover:text-white">View all →</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <a key={i} href="#" className="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[16/9] bg-gradient-to-br from-violet-500/30 to-cyan-400/30" />
              <div className="p-6">
                <h3 className="font-semibold group-hover:text-cyan-300 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 line-clamp-2">We share practical tactics and creative insights to help you ship better experiences faster.</p>
                <div className="mt-4 text-xs text-white/60">{p.time}</div>
                <button className="mt-4 inline-flex items-center text-sm font-medium text-cyan-300 group-hover:text-white transition-colors">
                  Read More →
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
