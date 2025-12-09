'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ModulesPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(1)

  const modules = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Module ${i + 1}`,
    description: 'Creative work and reflection from this module',
    content: 'Add your creative piece and reflection questions here...',
  }))

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
                    <p className="text-charcoal/70 mb-4">{module.content}</p>
                    <div className="text-sm text-sage">
                      📝 Add your reflection and creative work here
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-8 bg-sage/10 rounded-lg border border-sage/30"
          >
            <h3 className="text-lg font-serif font-bold text-charcoal mb-3">Template Instructions</h3>
            <p className="text-charcoal/70 text-sm">
              For each module, include your creative piece, any reflection questions answered, and personal insights. 
              This creates a comprehensive record of your creative journey throughout the semester.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
