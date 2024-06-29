import React, { forwardRef } from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'

type FormCheckboxProps = {
  id: string
  label?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  className?: string
  onCheckedChange?: (checked: boolean) => void
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  label,
  checked,
  className,
  disabled,
  required,
  onCheckedChange
}) => {
  return (
    <div className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 ease-in-out'>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        required={required}
        disabled={disabled}
        className={`form-checkbox h-5 w-5 text-blue-600 transition duration-200 ease-in-out ${className}`}
      />
      {label ? <Label htmlFor={id} className='text-gray-700 dark:text-gray-300'>{label}</Label> : null}
    </div>
  )
}

FormCheckbox.displayName = 'FormCheckbox'
