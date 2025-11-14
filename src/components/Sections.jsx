import { Rocket, ShoppingBag, Layout, Search, Star, Users, GaugeCircle, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export function About() {
  const values = [
    { icon: Star, title: 'Quality First', desc: 'Pixel-perfect execution with obsessive attention to detail and performance.' },
    { icon: GaugeCircle, title: 'Conversion Driven', desc: 'Every decision supports clear business goals and measurable outcomes.' },
    { icon: Users, title: 'Collaborative', desc: 'Transparent, iterative process with your team at the center.' },
    { icon: TrendingUp, title: 'Growth Minded', desc: 'Built to scale, iterate, and continuously improve.' },
  ]

  const team = [
    { name: 'Avery Chen', role: 'Creative Director' },
    { name: 'Jordan Lee', role: 'Lead Developer' },
    { name: 'Sam Rivera', role: 'UX Strategist' },
    { name: 'Taylor Brooks', role: 'Marketing Lead' },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-[#0b0b12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Veridian Interactive was founded on a simple belief: remarkable design should move the needle. We craft immersive, conversion-focused digital experiences that turn visitors into customers through bold creativity and strategic thinking.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} transition={{ delay: i * 0.05 }} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <v.icon className="text-cyan-300" />
                  <h3 className="mt-3 font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Meet the Team</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {team.map((t, i) => (
                <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} className="group p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-violet-500/40 to-cyan-400/40 border border-white/10" />
                  <div className="mt-3">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-white/70">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const services = [
    { icon: Rocket, title: 'Custom Website Development', desc: 'High-performance websites tailored to your brand and business goals with modern stacks and best practices.' },
    { icon: ShoppingBag, title: 'E-commerce Solutions', desc: 'Scalable storefronts that convert with optimized UX, checkout flows, and integrations.' },
    { icon: Layout, title: 'Landing Pages', desc: 'Conversion-optimized landing pages designed for campaigns, launches, and lead gen.' },
    { icon: Search, title: 'SEO & Digital Marketing', desc: 'Technical SEO, content strategy, and analytics to drive qualified traffic and growth.' },
  ]

  return (
    <section id="services" className="relative py-24 bg-[#0b0b12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="text-white/70 max-w-xl">We blend creativity and strategy to deliver experiences that look incredible and convert even better.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/0 via-fuchsia-400/0 to-violet-500/0 group-hover:from-cyan-400/10 group-hover:to-violet-500/10 transition-colors" />
              <s.icon className="text-cyan-300" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-cyan-300 group-hover:text-white transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
