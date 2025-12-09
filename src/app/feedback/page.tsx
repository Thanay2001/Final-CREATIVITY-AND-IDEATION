'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeedbackPage() {
  const peerFeedback = [
    {
      id: 1,
      title: 'Peer Piece #1',
      submitted: 'November 13, 2025',
      feedback: [
        {
          from: 'Peer 1',
          positive: 'Strong concept and execution. Really loved the use of color and composition.',
          growth: 'Consider pushing the contrast further to make the focal point more prominent.',
        },
        {
          from: 'Peer 2',
          positive: 'Creative approach to the subject matter. Very thoughtful.',
          growth: 'Expand on the narrative elements to deepen audience engagement.',
        },
      ],
    },
    {
      id: 2,
      title: 'Peer Piece #2',
      submitted: 'November 13, 2025',
      feedback: [
        {
          from: 'Peer 1',
          positive: 'Excellent technical skill combined with artistic vision.',
          growth: 'Could benefit from more whitespace and breathing room.',
        },
      ],
    },
    {
      id: 3,
      title: 'Peer Piece #3',
      submitted: 'November 13, 2025',
      feedback: [
        {
          from: 'Peer 1',
          positive: 'Bold and experimental. Really pushes creative boundaries.',
          growth: 'Consider grounding the piece with stronger conceptual framework.',
        },
      ],
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
            <Link href="/final-piece" className="hover:text-sage transition">Final Piece</Link>
            <Link href="/reflection" className="hover:text-sage transition">Reflection</Link>
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
            Three creative pieces shared for peer review (November 13) + Feedback received (November 20)
          </motion.p>

          <div className="space-y-8">
            {peerFeedback.map((piece, idx) => (
              <motion.div
                key={piece.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border border-sage/30 rounded-lg overflow-hidden"
              >
                <div className="bg-terracotta/10 p-6 border-b border-sage/30">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{piece.title}</h3>
                  <p className="text-sm text-charcoal/60">Submitted: {piece.submitted}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {piece.feedback.map((feedback, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + fidx * 0.05 }}
                        className="bg-charcoal/3 p-4 rounded-lg border-l-4 border-sage"
                      >
                        <p className="font-semibold text-charcoal mb-3">From: {feedback.from}</p>
                        <div className="mb-3">
                          <p className="text-sm font-medium text-sage mb-1">What worked well:</p>
                          <p className="text-charcoal/70">{feedback.positive}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-sage mb-1">Room to grow:</p>
                          <p className="text-charcoal/70">{feedback.growth}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 bg-sage/10 rounded-lg border border-sage/30"
          >
            <h3 className="text-lg font-serif font-bold text-charcoal mb-4">How to Use This Feedback</h3>
            <ul className="text-charcoal/70 space-y-2 text-sm">
              <li>• Review feedback with an open mind and empathetic perspective</li>
              <li>• Identify patterns across multiple feedback points</li>
              <li>• Choose which feedback resonates with your artistic vision</li>
              <li>• Use insights to inform your final piece revision</li>
              <li>• Document the evolution and changes made</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
