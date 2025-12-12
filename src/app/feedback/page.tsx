'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeedbackPage() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Final-CREATIVITY-AND-IDEATION' : '';
  
  const submissions = [
    {
      id: 1,
      title: 'Module 6 — Spoken Monologue',
      submitted: 'Nov 13, 2025',
      artifact: { label: 'Watch MP4', href: `${basePath}/portfolio/assets/module_6_assignment.mp4` },
      summary: 'Rapid-fire, chaotic morning monologue turning small disasters into humor.',
      feedbackNotes: ['No peer feedback was returned for this piece. Documenting that absence for transparency.'],
      revision: 'Without peer notes, I kept my own plan: tighten the opening beat and add intentional pauses without losing energy.',
    },
    {
      id: 2,
      title: 'Module 7 — Improv Plea (Cat Pickup)',
      submitted: 'Nov 13, 2025',
      artifact: { label: 'Watch MP4', href: `${basePath}/portfolio/assets/module_7.mp4` },
      summary: 'Improvised plea to borrow a car to rescue a cat—leaning into playful desperation.',
      feedbackNotes: ['No peer feedback was returned for this piece.'],
      revision: 'I will add a sharper setup sentence and keep the camera rolling for more unscripted reactions, per my own notes.',
    },
    {
      id: 3,
      title: 'Module 9 — Nebula of Thought (Digital Painting)',
      submitted: 'Nov 13, 2025',
      artifact: { label: 'View Artwork', href: `${basePath}/portfolio/assets/nebula_of_thought.png` },
      summary: 'Glowing orbs in a dark void to show ideas/emotions orbiting each other, painted in MS Paint.',
      feedbackNotes: ['No peer feedback was returned for this piece.'],
      revision: 'My own next step: test a faint focal trail and bump contrast on a few anchor orbs.',
    },
  ]

  const feedbackIGave = [
    'Elliot’s Silly Face (Module 9): strong horror vibe from the red glass mask; consider more angles/lighting for extra distortion.',
    'Elliot’s The Weight (Module 5): honest and emotional; add a few concrete details to ground the feeling.',
    'Elliot’s Gender Troubles (Module 8): heartfelt and clear; show more of Eli’s inner thoughts and lean into environmental contrasts.',
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
            I shared Modules 6, 7, and 9 for review on November 13. No peer feedback was returned, so I noted that and kept my own revision plans.
          </motion.p>

          <div className="space-y-8">
            {submissions.map((piece, idx) => (
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
                  <p className="text-charcoal/70 text-sm mt-2">{piece.summary}</p>
                    <div className="mt-3">
                      {piece.id === 1 && (
                        <video
                          controls
                          className="w-full rounded-md border border-sage/30 bg-black"
                          src={piece.artifact.href}
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {piece.id === 2 && (
                        <video
                          controls
                          className="w-full rounded-md border border-sage/30 bg-black"
                          src={piece.artifact.href}
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {piece.id === 3 && (
                        <img
                          src={piece.artifact.href}
                          alt={piece.title}
                          className="w-full rounded-md border border-sage/30 bg-white"
                        />
                      )}
                    </div>
                </div>

                    <div className="p-6">
                      <div className="space-y-3">
                        {piece.feedbackNotes.map((note, fidx) => (
                          <motion.div
                            key={fidx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + fidx * 0.05 }}
                            className="bg-charcoal/3 p-4 rounded-lg border-l-4 border-sage"
                          >
                            <p className="text-charcoal/80 text-sm leading-relaxed">{note}</p>
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
            transition={{ delay: 0.5 }}
            className="mt-8 p-8 bg-white border border-sage/30 rounded-lg"
          >
            <h3 className="text-lg font-serif font-bold text-charcoal mb-3">Feedback I gave my peers</h3>
            <p className="text-sm text-charcoal/70 mb-3">
              From Module 11, I offered written notes to Elliot on three pieces. These summaries are my own words, not direct quotes.
            </p>
            <ul className="space-y-2 text-charcoal/80 text-sm">
              {feedbackIGave.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-sage font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
