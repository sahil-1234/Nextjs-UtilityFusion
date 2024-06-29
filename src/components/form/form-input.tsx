'use client'

import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { FormErrors } from '@/components/form/form-errors'

type FormInputProps = {
  id: string
  label?: string
  type?: string
  value?: number | string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errors?: Record<string, string[] | undefined>
  className?: string
  onBlur?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type = 'text',
      value,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onChange
    },
    ref
  ) => {
    const { pending } = useFormStatus()

    return (
      <div className='space-y-3'>
        {label && (
          <Label htmlFor={id} className='text-sm font-semibold text-gray-700 dark:text-gray-300'>
            {label}
          </Label>
        )}
        <div className='relative'>
          <Input
            id={id}
            name={id}
            type={type}
            value={value}
            placeholder={placeholder}
            required={required}
            disabled={disabled || pending}
            ref={ref}
            className={cn(
              'w-full px-3 py-2 border rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200',
              className
            )}
            onBlur={onBlur}
            onChange={onChange}
            aria-describedby={`${id}-error`}
          />
          <FormErrors id={id} errors={errors} />
        </div>
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'
