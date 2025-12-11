'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ModulesPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(1)

  const modules = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Module ${i + 1}`,
    description: '',
    content: '',
  }))

  const [assetMap, setAssetMap] = useState<Record<number, string>>({})

  useEffect(() => {
    let mounted = true
    fetch('/portfolio/portfolio_index.json')
      .then((r) => r.json())
      .then((json) => {
        if (!mounted) return
        const map: Record<number, { url: string; type: string }[]> = {}
        const items = json.items || []
        // Build a list of candidate assets per module (keep order)
        items.forEach((it: any) => {
          const names = [it.cleaned_filename || '', it.filename || '']
          for (const nm of names) {
            if (!nm) continue
            const m = nm.match(/module[_\- ]?(\d+)/i)
            if (!m) continue
            const id = Number(m[1])
            const basename = nm.split('/').pop()
            if (!basename) continue
            const url = `/portfolio/assets/${basename}`
            const type = (it.type || '').toLowerCase() || (basename.split('.').pop() || '').toLowerCase()
            if (!map[id]) map[id] = []
            // avoid duplicates
            if (!map[id].some((x) => x.url === url)) map[id].push({ url, type })
          }
        })
        // reduce to prefer mp4 then pdf then first
        const reduced: Record<number, string> = {}
        Object.keys(map).forEach((k) => {
          const id = Number(k)
          const list = map[id]
          const mp4 = list.find((x) => x.type === 'mp4')
          const pdf = list.find((x) => x.type === 'pdf')
          reduced[id] = (mp4 && mp4.url) || (pdf && pdf.url) || (list[0] && list[0].url)
        })
        setAssetMap(reduced)
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

  return (
    <main className="min-h-screen bg-cream pt-24">
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-md z-50 border-b border-sage/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-bold text-charcoal">
            C&I Portfolio
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/modules" className="font-bold text-sage">Modules</Link>
            <Link href="/feedback" className="hover:text-sage transition">Feedback</Link>
            <Link href="/final-piece" className="hover:text-sage transition">Final Piece</Link>
            <Link href="/reflection" className="hover:text-sage transition">Reflection</Link>
          </div>
        </div>
      </nav>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif mb-4 text-charcoal"
          >
            Modules 1-12
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60 mb-12"
          >
            Complete creative work and reflections from the semester
          </motion.p>

          <div className="space-y-4">
            {modules.map((module, idx) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className="w-full text-left p-6 bg-white border border-sage/30 rounded-lg hover:border-sage transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-charcoal">{module.title}</h3>
                      <p className="text-charcoal/60 text-sm mt-1">{module.description}</p>
                    </div>
                    <div className="text-2xl text-sage transition">{expandedModule === module.id ? '−' : '+'}</div>
                  </div>
                </button>
                {expandedModule === module.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-6 bg-charcoal/5 rounded-lg"
                  >
                    {module.content && (
                      <p className="text-charcoal/70 mb-4">{module.content}</p>
                    )}
                    {assetMap[module.id] ? (
                      <div className="mb-4">
                        {/* Inline embed: prefer video for mp4, iframe for pdf */}
                        {assetMap[module.id].endsWith('.mp4') ? (
                          <video controls style={{ width: '100%', maxHeight: 480, border: '1px solid #ddd' }}>
                            <source src={assetMap[module.id]} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : assetMap[module.id].endsWith('.pdf') ? (
                          <iframe src={assetMap[module.id]} style={{ width: '100%', height: 640, border: '1px solid #ddd' }} />
                        ) : (
                          <a href={assetMap[module.id]} className="text-sage">Open asset</a>
                        )}
                      </div>
                    ) : (
                      <div className="mb-4 text-sm text-gray-500">No primary asset available for this module.</div>
                    )}

                    <div className="flex gap-4">
                      <Link
                        href={`/portfolio/module/${module.id}`}
                        className="inline-block px-4 py-2 border border-sage text-sage rounded-sm text-sm"
                      >
                        Open module page
                      </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Template instructions removed as requested */}
        </div>
      </section>
    </main>
  )
}
