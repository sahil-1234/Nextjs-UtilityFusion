import { Tool } from '@/lib/types'
import { CardToolItem } from './card-tool-item'

type ListCardToolsProps = {
  tools: Tool[]
  title: string
}

export function ListCardTools({ tools, title }: ListCardToolsProps) {
  return (
    <div className='border rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-md shadow-lg p-6'>
      <div className='pb-4 font-semibold text-lg text-gray-800 dark:text-gray-200'>{title}</div>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {tools.map(tool => (
          <CardToolItem key={tool.label} tool={tool} />
        ))}
      </div>
    </div>
  )
}
