import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    alert(`Thanks ${data.name}! We\'ll reach out shortly.`)
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-[#0b0b12] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(circle_at_90%_30%,rgba(34,211,238,0.2),transparent_40%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold">Book a Consultation</h2>
            <p className="mt-2 text-white/70">Tell us about your project and goals. We’ll follow up within one business day.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your full name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/80">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="text-sm text-white/80">Phone (optional)</label>
                  <input name="phone" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/80">Service Interested In</label>
                <select name="service" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  <option>Custom Website Development</option>
                  <option>E-commerce Solutions</option>
                  <option>Landing Pages</option>
                  <option>SEO & Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-white/80">Project Details</label>
                <textarea name="details" rows="4" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell us about your goals, timeline, and budget." />
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all">
                Book Consultation
              </button>
            </form>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="mt-4 space-y-4 text-white/80">
              <p className="flex items-center gap-3"><MapPin className="text-cyan-300" /> 221 Innovation Dr, Suite 300, San Francisco, CA</p>
              <p className="flex items-center gap-3"><Phone className="text-cyan-300" /> (415) 555-0132</p>
              <p className="flex items-center gap-3"><Mail className="text-cyan-300" /> hello@veridianinteractive.com</p>
              <p className="flex items-center gap-3"><Clock className="text-cyan-300" /> Mon–Fri: 9am – 6pm PT</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-white/10 hover:bg-white/10"><Linkedin className="text-white" /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full border border-white/10 hover:bg-white/10"><Twitter className="text-white" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
