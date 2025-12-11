'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LegacyFinalPieceRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/nebula-of-thought')
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Nebula of Thought…</p>
    </main>
  )
}
