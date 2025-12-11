'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ReflectionPage() {
  const reflectionPrompts = [
    {
      category: 'Expectations & Reality',
      questions: [
        'What were your expectations at the beginning of the semester?',
        'Were your expectations met? If so, how? If not, why?',
        'How has your perspective on creativity evolved?',
      ],
    },
    {
      category: 'What Worked',
      questions: [
        'What creative forms of expression resonated with you most?',
        'Which speakers or lessons made an impact?',
        'What creative tactics did you find most effective?',
      ],
    },
    {
      category: 'Challenges & Growth',
      questions: [
        'What didn\'t work for you this semester?',
        'How did you navigate creative blocks or challenges?',
        'What did you learn about yourself as a creator?',
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
            <Link href="/feedback" className="hover:text-sage transition">Feedback</Link>
            <Link href="/final-piece" className="hover:text-sage transition">Final Piece</Link>
            <Link href="/reflection" className="font-bold text-sage">Reflection</Link>
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
            Final Reflection Essay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60 mb-12"
          >
            One-page synthesis of your creative journey and key moments from DMC2002
          </motion.p>

          {/* Reflection Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            {reflectionPrompts.map((section, idx) => (
              <div key={idx} className="border border-sage/30 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.questions.map((question, qidx) => (
                    <motion.div
                      key={qidx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + qidx * 0.05 }}
                      className="flex gap-3"
                    >
                      <span className="text-sage font-bold flex-shrink-0 mt-1">•</span>
                      <p className="text-charcoal/70">{question}</p>
                    </motion.div>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Essay Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border border-sage/30 rounded-lg p-8 bg-white mb-12"
          >
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">Your Reflection Essay</h2>
            <div className="prose prose-lg max-w-none">
              <textarea
                placeholder="Write your one-page reflection essay here. Consider the prompts above and synthesize your creative journey, key moments, and insights that will continue to fuel your creativity..."
                className="w-full min-h-96 p-6 border border-sage/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent resize-none text-charcoal font-serif leading-relaxed"
              />
            </div>
            <p className="text-sm text-charcoal/60 mt-4">
              ≈ 500 words | Aim for thoughtful, introspective writing
            </p>
          </motion.div>

          {/* Key Moments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: '💡',
                title: 'Key Insights',
                desc: 'Major realizations about your creative process and yourself',
              },
              {
                icon: '🎯',
                title: 'Creative Lessons',
                desc: 'Specific techniques, concepts, or approaches you\'re taking forward',
              },
              {
                icon: '🌱',
                title: 'Future Vision',
                desc: 'How this semester fuels your continued creative journey',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="p-6 bg-sage/10 border border-sage/30 rounded-lg"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-serif font-bold text-charcoal mb-2">{item.title}</h4>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-8 bg-charcoal/5 rounded-lg border border-charcoal/20"
          >
            <h3 className="text-lg font-serif font-bold text-charcoal mb-4">Essay Guidelines</h3>
            <div className="space-y-3 text-sm text-charcoal/70">
              <p>
                <span className="font-semibold text-charcoal">Tone:</span> Reflective, introspective, and honest. This is your personal journey.
              </p>
              <p>
                <span className="font-semibold text-charcoal">Structure:</span> Consider chronological journey, thematic organization, or key moment analysis.
              </p>
              <p>
                <span className="font-semibold text-charcoal">Authenticity:</span> Be genuine about both successes and struggles. Vulnerability is strength.
              </p>
              <p>
                <span className="font-semibold text-charcoal">Forward-Looking:</span> End by connecting what you've learned to your future creative practice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
