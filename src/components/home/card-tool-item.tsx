'use client'

import Link from 'next/link'
import { Tool } from '@/lib/types'

type CardToolItemProps = {
  tool: Tool
}

export function CardToolItem({ tool }: CardToolItemProps) {
  const Icon = tool.icon

  return (
    <Link
      href={tool.link}
      className='flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out'
    >
      <Icon color={tool.color} size={32} className='mb-2' />
      <p className='font-semibold text-gray-800 dark:text-gray-200'>{tool.label}</p>
    </Link>
  )
}
