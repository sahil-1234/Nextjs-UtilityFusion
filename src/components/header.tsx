'use client'

import Link from 'next/link'
import { SiGithub } from '@icons-pack/react-simple-icons'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
  return (
    <header
      className='fixed inset-x-0 top-0 z-40 bg-transparent backdrop-blur-md shadow-md'
      style={{
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className='mx-auto max-w-6xl flex items-center justify-between px-4 md:px-8 h-16'>
        <Link href='/' aria-label='Home' title='Home'>
          <Logo />
        </Link>

        <div className='flex items-center gap-3'>
          <ModeToggle />

          <Tooltip>
            <TooltipTrigger>
              <Link
                href='https://github.com/sahil-1234'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='GitHub'
              >
                <SiGithub size={24} className='text-gray-700 hover:text-black transition-colors' />
              </Link>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
              <p>Sahil-Github</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
