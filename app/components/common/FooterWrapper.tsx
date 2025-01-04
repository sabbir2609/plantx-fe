'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '.'

export default function FooterWrapper() {
  const pathname = usePathname()
  return pathname !== '/' ? <Footer /> : null
}