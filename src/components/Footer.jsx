export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">Veridian Interactive</span>
          </div>
          <p className="mt-3 text-white/70">Crafting Digital Experiences That Convert.</p>
          <p className="mt-4 text-sm text-white/60 max-w-sm">We build bold, conversion-focused websites that turn visitors into customers.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Stay in the loop</h4>
          <p className="mt-3 text-white/70 text-sm">Get occasional updates and insights.</p>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white">Subscribe</button>
          </form>
          <p className="mt-4 text-xs text-white/60">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Veridian Interactive. All rights reserved.
      </div>
    </footer>
  )
}
