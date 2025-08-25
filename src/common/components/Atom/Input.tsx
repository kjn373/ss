'use client'

import * as React from 'react'
import { Field } from 'formik'
import { cn } from '@/common/utils/utils'
import { FiChevronDown } from 'react-icons/fi'
import { CircleAlert } from 'lucide-react'
import { usePathname } from 'next/navigation'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  isRequired?: boolean
  isMessage?: boolean
  rows?: number
  error: string | undefined
  isError?: boolean
  labelColor?: string
  labelClass?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      isRequired = false,
      error,
      isMessage = false,
      rows,
      isError,
      labelColor,
      labelClass,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col  items-start gap-y-[6px] w-full relative">
        <label
          className={cn(
            `font-normal font-workSans text-[16px] leading-4 ${labelColor}`,
            labelClass
          )}
          htmlFor={label}
        >
          {label} {isRequired && '*'}
        </label>
        <Field
          autoComplete="off"
          name={props.name}
          type={type}
          className={cn(
            'flex min-h-[48px] text-black bg-white text-[16px] max-h-[200px] w-full rounded-[8px] border-stone-100 px-4 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-body focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-workSans placeholder:font-workSans',
            className,
            {
              'border-error': isError,
            }
          )}
          ref={ref}
          {...(isMessage ? { as: 'textarea', rows } : {})}
          {...props}
        />
        {label === 'Level' && (
          <FiChevronDown className="absolute right-6 -translate-y-1/2 w-4 text-black top-[65%]" />
        )}

        {isError && error && <ErrorComponent error={error} />}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }

export const ErrorComponent = ({ error }: { error: string }) => {
  const pathname = usePathname()
  const isApply = pathname === '/apply'
  const isAdmission = pathname === '/admission'

  return (
    <div className="flex items-center gap-x-1">
      <CircleAlert
        className={cn('size-4 text-white', {
          'text-red-500': isAdmission || isApply,
        })}
      />
      <span
        className={cn(
          'font-workSans font-normal text-[14px] leading-4 text-white',
          {
            'text-red-500': isAdmission || isApply,
          }
        )}
      >
        {error}
      </span>
    </div>
  )
}
