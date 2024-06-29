'use client'

import { cn } from '@/lib/utils'
import { Noto_Sans_Hebrew } from 'next/font/google'

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ['hebrew'],
  weight: ['500']
})

export function Logo() {
  return (
    <div className={cn(notoSansHebrew.className, 'tracking-wider text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500')}>
      SAHIL
    </div>
  )
}
