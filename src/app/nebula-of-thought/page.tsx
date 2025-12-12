'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NebulaPage() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Final-CREATIVITY-AND-IDEATION' : '';

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
            <Link href="/nebula-of-thought" className="font-bold text-sage">Nebula of Thought</Link>
          </div>
        </div>
      </nav>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif mb-4 text-charcoal"
          >
            Nebula of Thought — Favorite Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60 mb-8"
          >
            Favorite Work: Nebula of Thought
          </motion.p>

          <div className="mb-8">
            <img src={`${basePath}/portfolio/assets/nebula_of_thought.png`} alt="Nebula of Thought" className="w-full rounded-lg border border-sage/20" />
          </div>

          <div className="prose max-w-none text-charcoal/80">
            <p>
              My favorite piece is Nebula of Thought because it most clearly represents the emotional and imaginative ideas I was trying to explore in this project. When I look at this piece, I feel a calm sense of curiosity and wonder. It creates the same feeling as staring into space and letting thoughts drift without focusing on anything specific. There is a quiet sense of joy in engaging with the artwork because it does not demand a literal interpretation and instead invites emotional response.
            </p>

            <p>
              The glowing orbs represent individual thoughts or emotions. Each one feels distinct, but they still relate to one another. The blue and orange trails represent invisible forces that connect everything together, similar to how thoughts and emotions influence each other in the mind. This connection is not clearly defined, which I enjoy, because it reflects how ideas often blend and overlap rather than remain separate.
            </p>

            <p>
              The strongest sense of joy comes from how naturally the piece developed. I did not start with a strict plan. Instead, I allowed the artwork to evolve as I experimented with colors and glow effects. This made the process feel more intuitive and expressive rather than technical. Creating the piece felt immersive, and revisiting it brings me back to that same creative mindset.
            </p>

            <p>
              Overall, Nebula of Thought is my favorite because it represents a moment where imagination and emotion worked together without pressure. It reminds me that creative work does not always need a clear structure to be meaningful. Sometimes the most satisfying results come from trusting instinct and allowing ideas to form on their own.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
