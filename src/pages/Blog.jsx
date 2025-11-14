export default function Blog() {
  const posts = [
    { title: 'Designing for Conversion: 7 Principles that Work', time: '5 min read' },
    { title: 'Speed Matters: How Performance Impacts SEO', time: '6 min read' },
    { title: 'Launching with Impact: Pre-Launch Checklist', time: '4 min read' },
    { title: 'The Power of Story in UX', time: '7 min read' },
    { title: 'Design Systems that Scale', time: '8 min read' },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="mt-2 text-white/70">Insights on design, development, and growth.</p>
          </div>
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
    </div>
  )
}
