'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FinalPiecePage() {
  return (
    <main className="min-h-screen bg-cream pt-24">
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-md z-50 border-b border-sage/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-bold text-charcoal">
            C&I Portfolio
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/modules" className="hover:text-sage transition">Modules</Link>
            <Link href="/feedback" className="hover:text-sage transition">Feedback</Link>
            <Link href="/final-piece" className="font-bold text-sage">Final Piece</Link>
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
            Final Creative Piece
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60 mb-12"
          >
            Expanded & revised based on peer feedback • Incorporating growth and artistic evolution
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Original Piece */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-charcoal">Original Piece</h2>
              <div className="aspect-square bg-charcoal/5 rounded-lg border border-sage/30 flex items-center justify-center min-h-96">
                <div className="text-center text-charcoal/40">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="font-serif">Your original creative work</p>
                </div>
              </div>
              <div className="bg-sage/10 p-4 rounded-lg border border-sage/30">
                <p className="text-sm text-charcoal/70">
                  Add your original piece here. This can be an image, document, embed, or description of your work.
                </p>
              </div>
            </div>

            {/* Revised Piece */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-charcoal">Revised Piece</h2>
              <div className="aspect-square bg-charcoal/5 rounded-lg border border-sage/30 flex items-center justify-center min-h-96">
                <div className="text-center text-charcoal/40">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="font-serif">Your evolved creative work</p>
                </div>
              </div>
              <div className="bg-gold/10 p-4 rounded-lg border border-gold/30">
                <p className="text-sm text-charcoal/70">
                  Add your revised piece here, showcasing evolution based on feedback.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Evolution Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 space-y-6"
          >
            <div className="border border-sage/30 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Evolution Process</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-sage/20">
                  <h4 className="font-semibold text-charcoal mb-2">Key Feedback Received</h4>
                  <ul className="text-charcoal/70 space-y-2 text-sm ml-4">
                    <li>• Add your key feedback points here</li>
                    <li>• Include recurring themes from peer reviews</li>
                    <li>• Note elements flagged for development</li>
                  </ul>
                </div>
                <div className="pb-4 border-b border-sage/20">
                  <h4 className="font-semibold text-charcoal mb-2">Changes Made</h4>
                  <ul className="text-charcoal/70 space-y-2 text-sm ml-4">
                    <li>• Document specific revisions and improvements</li>
                    <li>• Explain your rationale for each change</li>
                    <li>• Note which feedback you acted upon and why</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Artistic Intention</h4>
                  <p className="text-charcoal/70 text-sm">
                    Reflect on how this revised piece better expresses your creative vision and artistic goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-8 bg-charcoal/5 rounded-lg border border-charcoal/20"
          >
            <h3 className="text-lg font-serif font-bold text-charcoal mb-4">Guidelines for Your Final Piece</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-charcoal/70">
              <div>
                <p className="font-semibold text-charcoal mb-2">✓ Do:</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Consider feedback seriously</li>
                  <li>Take creative risks</li>
                  <li>Document your process</li>
                  <li>Trust your artistic vision</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-charcoal mb-2">✗ Don't:</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Change something just to please others</li>
                  <li>Lose sight of your vision</li>
                  <li>Rush the revision process</li>
                  <li>Ignore patterns in feedback</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
