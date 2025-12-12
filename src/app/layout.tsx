import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Anthony Than - DMC2002 Creativity & Ideation Portfolio',
  description: "Anthony Than's DMC2002 Creativity & Ideation Final Project - A culmination of creative journey through the semester",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-charcoal">
        {children}
      </body>
    </html>
  )
}
