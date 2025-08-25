'use client'

import { IDropdownList } from '@/common/interface/type'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { ErrorComponent } from '../Atom/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface ICustomDropdownProps {
  setFieldValue?: (field: string, value: boolean | string) => void
  error: string | undefined
  isError: boolean | undefined
  list: IDropdownList[]
  placeHolder: string
  label: string
  field: string
  isRequired: boolean
  value: string
  classNameLabel?: string
  isBoolean?: boolean
}

export const CustomDropdown = ({
  error,
  isError,
  setFieldValue,
  list,
  placeHolder,
  label,
  field,
  isRequired,
  value,
  classNameLabel,
  isBoolean = false,
}: ICustomDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleToggle = () => setOpen((prev) => !prev)

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <label
        htmlFor={label}
        className={cn(
          'text-body font-normal text-[14px] leading-4 font-workSans',
          classNameLabel
        )}
      >
        {label} {isRequired && '*'}
      </label>
      <Select
        open={open}
        value={typeof value === 'boolean' ? (value ? 'TRUE' : 'FALSE') : value}
        onOpenChange={(isOpen) => setOpen(isOpen)}
        onValueChange={(value) => {
          if (isBoolean) {
            if (value === 'TRUE' && setFieldValue) {
              setFieldValue(field, true)
            } else if (value === 'FALSE' && setFieldValue) {
              setFieldValue(field, false)
            }
          } else {
            if (setFieldValue) {
              setFieldValue(field, value)
            }
          }
          setOpen(false)
        }}
      >
        <SelectTrigger
          className={cn(
            'rounded-lg p-4 text-body  leading-4 text-[14px] font-workSans relative',
            {
              'text-black text-[16px] ':
                value.length || typeof value === 'boolean',
              'border border-error': isError,
            }
          )}
          onClick={handleToggle}
        >
          <SelectValue placeholder={placeHolder} />
          <ChevronDown
            className={cn('h-4 w-4 text-body transition-all duration-500', {
              'rotate-180 transition-all duration-500': open,
            })}
          />
        </SelectTrigger>
        <SelectContent className="border-b-2 border-border  relative z-[999999]">
          <SelectGroup>
            {list.map((d) => (
              <SelectItem
                key={d.value}
                value={d.value}
                className="font-poppins text-body"
              >
                {d.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isError && <ErrorComponent error={error ? error : ''} />}
    </div>
  )
}
