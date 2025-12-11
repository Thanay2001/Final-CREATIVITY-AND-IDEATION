'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  const sections = [
    {
      id: 1,
      title: 'Modules 1-12',
      description: 'Complete creative work and reflections from the semester',
      href: '/modules',
      color: 'from-sage to-charcoal',
    },
    {
      id: 2,
      title: 'Peer Feedback',
      description: 'Three pieces shared & feedback received from peers',
      href: '/feedback',
      color: 'from-terracotta to-sage',
    },
    {
      id: 3,
      title: 'Nebula of Thought',
      description: 'Favorite work — Nebula of Thought',
      href: '/nebula-of-thought',
      color: 'from-gold to-terracotta',
    },
  ]

  return (
    <main className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-md z-50 border-b border-sage/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-bold text-charcoal">
            C&I Portfolio
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/modules" className="hover:text-sage transition">Modules</Link>
            <Link href="/feedback" className="hover:text-sage transition">Feedback</Link>
            <Link href="/nebula-of-thought" className="hover:text-sage transition">Nebula of Thought</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-charcoal"
          >
            Creativity & Ideation
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-xl text-sage mb-8 font-light"
          >
            A Culmination of Creative Journey & Personal Growth
          </motion.p>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-lg text-charcoal/60 mb-12 max-w-2xl mx-auto"
          >
            DMC2002 Final Project | December 11, 2025
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          >
            <Link
              href="#portfolio"
              className="inline-block px-8 py-3 bg-charcoal text-cream font-serif rounded-sm hover:bg-sage transition"
            >
              Explore Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Sections */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-center mb-16 text-charcoal"
          >
            Portfolio Contents
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(section.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={section.href}>
                  <div className={`relative h-64 rounded-lg overflow-hidden cursor-pointer group`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative h-full flex flex-col justify-end p-8 bg-charcoal/5 group-hover:bg-charcoal/10 transition">
                      <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-cream transition">
                        {section.title}
                      </h3>
                      <p className="text-charcoal/70 group-hover:text-cream/80 transition">
                        {section.description}
                      </p>
                      <div className="mt-4 text-sm font-medium text-sage group-hover:text-gold transition">
                        Explore →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Project */}
      <section className="py-20 px-6 bg-charcoal/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-serif mb-8 text-charcoal"
          >
            Project Overview
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '✨',
                title: 'Complete Work',
                desc: 'All 12 modules with creative pieces and reflections',
              },
              {
                icon: '🤝',
                title: 'Peer Feedback',
                desc: 'Collaboration and constructive criticism from classmates',
              },
              {
                icon: '📈',
                title: 'Evolution',
                desc: 'Revised final piece incorporating feedback and growth',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3 text-charcoal">{item.title}</h3>
                <p className="text-charcoal/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-sage/20">
        <div className="max-w-6xl mx-auto text-center text-charcoal/60 text-sm">
          <p>DMC2002: Creativity & Ideation | Final Project December 2025</p>
          <p className="mt-2">A portfolio celebrating creative journey and personal growth</p>
        </div>
      </footer>
    </main>
  )
}
