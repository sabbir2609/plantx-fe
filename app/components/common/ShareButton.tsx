'use client'

import { Share2 } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonProps {
  title: string
  url: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [shared, setShared] = useState(false)

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        setShared(true)
      } else {
        await navigator.clipboard.writeText(url)
        setShared(true)
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <button 
      onClick={handleShare}
      className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90"
    >
      <Share2 className="mr-2 h-4 w-4" />
      {shared ? 'Shared!' : 'Share'}
    </button>
  )
}