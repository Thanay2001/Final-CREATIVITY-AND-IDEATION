'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeedbackPage() {
  // Showcase the three pieces I shared for peer feedback (no responses received)
  const sharedPieces = [
    {
      id: 6,
      title: 'Module 6 Assignment',
      asset: '/portfolio/assets/module_6_assignment.mp4',
      type: 'mp4',
      shared: 'November 13, 2025',
    },
    {
      id: 7,
      title: 'Module 7 Assignment',
      asset: '/portfolio/assets/module_7.mp4',
      type: 'mp4',
      shared: 'November 13, 2025',
    },
    {
      id: 9,
      title: 'Module 9 Assignment',
      asset: '/portfolio/assets/nebula_of_thought.png',
      type: 'png',
      shared: 'November 13, 2025',
    },
  ]

  return (
    <main className="min-h-screen bg-cream pt-24">
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-md z-50 border-b border-sage/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-bold text-charcoal">
            C&I Portfolio
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/modules" className="hover:text-sage transition">Modules</Link>
            <Link href="/feedback" className="font-bold text-sage">Feedback</Link>
            <Link href="/nebula-of-thought" className="hover:text-sage transition">Nebula of Thought</Link>
          </div>
        </div>
      </nav>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif mb-4 text-charcoal"
          >
            Peer Feedback
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60 mb-12"
          >
            Three pieces I shared for peer feedback (Modules 6, 7, and 9). No feedback was received from peers.
          </motion.p>

          <div className="space-y-8">
            {sharedPieces.map((piece, idx) => (
              <motion.div
                key={piece.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border border-sage/30 rounded-lg overflow-hidden"
              >
                <div className="bg-terracotta/10 p-6 border-b border-sage/30">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{piece.title}</h3>
                  <p className="text-sm text-charcoal/60">Shared: {piece.shared}</p>
                </div>

                <div className="p-6">
                  {piece.type === 'mp4' ? (
                    <video controls style={{ width: '100%', maxHeight: 420 }}>
                      <source src={piece.asset} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : piece.type === 'png' || piece.type === 'jpg' || piece.type === 'jpeg' ? (
                    <img src={piece.asset} alt={piece.title} style={{ width: '100%', maxHeight: 640, objectFit: 'contain', border: '1px solid #ddd' }} />
                  ) : (
                    <iframe src={piece.asset} style={{ width: '100%', height: 480, border: '1px solid #ddd' }} />
                  )}

                  <div className="mt-4 p-4 bg-charcoal/3 rounded-lg">
                    <p className="font-semibold">Feedback status</p>
                    <p className="text-sm text-charcoal/70">No feedback was received for this piece.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guidance removed per request */}
        </div>
      </section>
    </main>
  )
}
