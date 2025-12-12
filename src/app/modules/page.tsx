'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ModulesPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(1)

  const basePath = process.env.NODE_ENV === 'production' ? '/Final-CREATIVITY-AND-IDEATION' : '';
  
  const modules = [
    {
      id: 1,
      title: 'Module 1 — Letter to Myself',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/module_1_assignment.pdf`,
      reflection: 'I committed to building creative habits beyond grades and to stay with the process even when ideas feel unresolved.',
    },
    {
      id: 2,
      title: 'Module 2 — Self-Analysis',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/module_2_assignment_self-analysis.pdf`,
      reflection: 'Letting myself make mistakes made the music—and my IT work—stronger because I stopped playing scared.',
    },
    {
      id: 3,
      title: 'Module 3 — Creative Routine',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/thanay-module_3_assignment.pdf`,
      reflection: 'Environment prep and a single-task rule reliably dropped me into focus; mindfulness blocks refueled creativity.',
    },
    {
      id: 4,
      title: 'Module 4 — Goodbye to All That',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/module_4_assignment.pdf`,
      reflection: 'Starting college in a pandemic taught me discipline without external structure and a deeper appreciation for in-person connection.',
    },
    {
      id: 5,
      title: 'Module 5 — Poem “Have You Tried”',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/thanay_module_5_assignment.pdf`,
      reflection: 'The “Have you tried” refrain kept memories flowing and made the piece feel like a rhythm more than a performance.',
    },
    {
      id: 6,
      title: 'Module 6 — Spoken Monologue',
      type: 'mp4',
      asset: `${basePath}/portfolio/assets/module_6_assignment.mp4`,
      reflection: "I had a lot of fun making this monologue. At first, I tried to plan using a script of what I would say, but once the camera started rolling, I just went with the flow. Acting out the desperation while staying lighthearted made me laugh during filming. Embracing the unknown created a natural rhythm and made it feel more authentic than if I had memorized a script. What surprised me most was how easily the humor came out once I committed to the character. I didn't expect to end up kneeling or bringing up Pokémon cards, but those spontaneous choices ended up being the funniest parts. It showed me that sometimes the best creative moments come from reacting honestly to a situation instead of overthinking it.",
      reflectionPdf: `${basePath}/portfolio/assets/module_7_reflection.pdf`,
    },
    {
      id: 7,
      title: 'Module 7 — Improv Monologue + Reflection',
      type: 'mp4',
      asset: `${basePath}/portfolio/assets/module_7.mp4`,
      reflection: "I've been doing decent with my creative routine, even though balancing school, work, and projects can make it challenging. Right now, I'm excited because I'm getting ready for a trip to Cancun, and that excitement has actually helped spark more creative energy. Coming back from Cancun gave me creative energy; ditching the script made the funniest beats appear naturally.",
      reflectionPdf: `${basePath}/portfolio/assets/module_7_reflection.pdf`,
    },
    {
      id: 8,
      title: 'Module 8 — Screenplay “Last Block”',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/assignment_8__screenplay.pdf`,
      reflection: 'Once I let it be personal, the story grounded me; leaning into nostalgia made the emotions honest.',
    },
    {
      id: 9,
      title: 'Module 9 — Nebula of Thought',
      type: 'image',
      asset: `${basePath}/portfolio/assets/nebula_of_thought.png`,
      reflection: 'Letting go of perfection turned the piece into a map of my own inner galaxy.',
      assignmentPdf: `${basePath}/portfolio/assets/assignment_9.pdf`,
    },
    {
      id: 10,
      title: 'Module 10 — RAV4 Redesign',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/thanay_module_10.docx.pdf`,
      reflection: 'Designing this felt analytical: imagination applied to tangible fixes people would feel when driving.',
    },
    {
      id: 11,
      title: 'Module 11 — Peer Feedback',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/thanay_module_11.pdf`,
      reflection: 'Outside feedback was supportive; I act on patterns instead of one-off comments.',
    },
    {
      id: 12,
      title: 'Module 12 — Vision Document',
      type: 'pdf',
      asset: `${basePath}/portfolio/assets/module_12_vision_doc.pdf`,
      reflection: 'Short-term I am building narrative prototypes in Cincinnati; long-term I aim for studios in Seattle/LA/Tokyo and eventually a studio of my own.',
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
            <Link href="/modules" className="font-bold text-sage">Modules</Link>
            <Link href="/feedback" className="hover:text-sage transition">Feedback</Link>
            <Link href="/final-piece" className="hover:text-sage transition">Final Piece</Link>

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
            My Modules 1-12
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60 mb-12"
          >
            Tap a module to view the file inline (no external tab needed)
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
                    <div className="flex justify-between items-center gap-4">
                      <div className="min-w-0">
                        <h3 className="text-xl font-serif font-bold text-charcoal">{module.title}</h3>
                        <p className="text-charcoal/60 text-sm mt-1">{module.type.toUpperCase()}</p>
                      </div>
                      <div className="text-2xl text-sage transition flex-shrink-0">{expandedModule === module.id ? '−' : '+'}</div>
                    </div>
                </button>
                {expandedModule === module.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-charcoal/5 rounded-lg space-y-4"
                    >
                      {module.type === 'pdf' && (
                        <iframe
                          title={module.title}
                          src={module.asset}
                          className="w-full h-[70vh] rounded-md border border-sage/30 bg-white"
                        />
                      )}
                      {module.type === 'mp4' && (
                        <video
                          controls
                          className="w-full rounded-md border border-sage/30 bg-black"
                          src={module.asset}
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {module.type === 'image' && (
                        <img
                          src={module.asset}
                          alt={module.title}
                          className="w-full rounded-md border border-sage/30 bg-white"
                        />
                      )}

                      {module.reflectionPdf && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-charcoal mb-2">Reflection Document</h4>
                          <iframe
                            title={`${module.title} - Reflection`}
                            src={module.reflectionPdf}
                            className="w-full h-[70vh] rounded-md border border-sage/30 bg-white"
                          />
                        </div>
                      )}

                      {module.assignmentPdf && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-charcoal mb-2">Assignment Document</h4>
                          <iframe
                            title={`${module.title} - Assignment`}
                            src={module.assignmentPdf}
                            className="w-full h-[70vh] rounded-md border border-sage/30 bg-white"
                          />
                        </div>
                      )}
                    </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
