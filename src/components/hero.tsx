'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'

const WORDS = [
  {
    text: 'Convertor',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    text: 'Calculator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'Generator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
  },
  {
    text: 'Tester',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#26b868] to-[#1cb2e0]'
  }
]

export function Hero() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-8'>
      <motion.div
        className='will-change-[transform,opacity] space-y-4 text-center'
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-2xl md:text-5xl font-bold tracking-wide'>
          <span>Explore Work Tools </span>
          <FlipWords words={WORDS} />
        </h1>
        <p className='leading-6 text-gray-300 tracking-wide max-w-lg mx-auto'>
          Have a look at online free tools I have frequently used.
        </p>
        <Button
          variant='gooeyLeft'
          size='lg'
          className='text-lg font-semibold tracking-wider bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:from-pink-500 hover:to-yellow-500 transform transition-transform duration-300 hover:scale-105'
        >

          <Link href='#get-started'>Get Started</Link>
        </Button>
      </motion.div>
    </div>
  )
}
