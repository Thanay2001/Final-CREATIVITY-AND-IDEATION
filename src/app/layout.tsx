import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'DMC2002 Creativity & Ideation Portfolio',
  description: 'A culmination of creative journey through DMC2002',
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
