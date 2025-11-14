import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services } from './components/Sections'
import { Testimonials, BlogPreview } from './components/TestimonialsBlog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <section id="portfolio" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
              <a href="/portfolio" className="text-cyan-300 hover:text-white">View all →</a>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                  <div className="aspect-[16/10] bg-gradient-to-br from-violet-500/30 to-cyan-400/30 group-hover:from-violet-500/40 group-hover:to-cyan-400/40 transition-colors" />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Project {i + 1}</h3>
                      <span className="text-xs text-white/60">Industry</span>
                    </div>
                    <p className="mt-2 text-sm text-white/70 line-clamp-2">A high-impact experience built for measurable results.</p>
                    <div className="mt-3 text-xs text-white/60">Website • SEO</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
