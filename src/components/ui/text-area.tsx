'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useImperativeHandle } from 'react'

interface UseTextAreaProps {
  textAreaRef: HTMLTextAreaElement | null
  minHeight?: number
  maxHeight?: number
  triggerAutoSize: string
}

export const useTextArea = ({
  textAreaRef,
  triggerAutoSize,
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0
}: UseTextAreaProps) => {
  const [init, setInit] = React.useState(true)
  React.useEffect(() => {
    // We need to reset the height momentarily to get the correct scrollHeight for the textarea
    const offsetBorder = 2
    if (textAreaRef) {
      if (init) {
        textAreaRef.style.minHeight = `${minHeight + offsetBorder}px`
        if (maxHeight > minHeight) {
          textAreaRef.style.maxHeight = `${maxHeight}px`
        }
        setInit(false)
      }
      textAreaRef.style.height = `${minHeight + offsetBorder}px`
      const scrollHeight = textAreaRef.scrollHeight
      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      if (scrollHeight > maxHeight) {
        textAreaRef.style.height = `${maxHeight}px`
      } else {
        textAreaRef.style.height = `${scrollHeight + offsetBorder}px`
      }
    }
  }, [init, maxHeight, minHeight, textAreaRef, triggerAutoSize])
}

export type TextAreaRef = {
  textArea: HTMLTextAreaElement
  maxHeight: number
  minHeight: number
}

type TextAreaProps = {
  maxHeight?: number
  minHeight?: number
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = React.forwardRef<TextAreaRef, TextAreaProps>(
  (
    {
      maxHeight = Number.MAX_SAFE_INTEGER,
      minHeight = 52,
      className,
      onChange,
      value,
      ...props
    }: TextAreaProps,
    ref: React.Ref<TextAreaRef>
  ) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null)
    const [triggerAutoSize, setTriggerAutoSize] = React.useState('')

    useTextArea({
      textAreaRef: textAreaRef.current,
      triggerAutoSize: triggerAutoSize,
      maxHeight,
      minHeight
    })

    useImperativeHandle(ref, () => ({
      textArea: textAreaRef.current as HTMLTextAreaElement,
      focus: () => textAreaRef.current?.focus(),
      maxHeight,
      minHeight
    }))

    React.useEffect(() => {
      if (value || props?.defaultValue) {
        setTriggerAutoSize(value as string)
      }
    }, [props?.defaultValue, value])

    return (
      <textarea
        {...props}
        value={value}
        ref={textAreaRef}
        className={cn(
          'flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none ring-0 focus:ring-0 outline-none shadow-sm',
          className
        )}
        onChange={e => {
          setTriggerAutoSize(e.target.value)
          onChange?.(e)
        }}
      />
    )
  }
)
Textarea.displayName = 'Textarea'
