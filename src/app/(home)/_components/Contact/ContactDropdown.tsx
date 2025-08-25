'use client'

import { ErrorComponent } from '@/common/components/Atom/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select'
import { cn } from '@/common/utils/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface IContactDropDownProps {
  setFieldValue: (field: string, value: string) => void
  value: string
  error: string
  isError: boolean | undefined
  label: string
  className?: string
}

export const ContactDropdown = ({
  setFieldValue,
  value,
  error,
  isError,
  label,
  className,
}: IContactDropDownProps) => {
  const dropDownList = [
    {
      title: 'School',
      value: 'school',
    },
    {
      title: 'Plus Two',
      value: 'plus-two',
    },
  ]

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-y-2">
      <label
        htmlFor={label}
        className={cn(
          'text-white font-normal text-[16px] leading-4 font-workSans',
          className
        )}
      >
        {label} {'*'}
      </label>
      <Select
        open={open}
        onOpenChange={() => setOpen((prev) => !prev)}
        onValueChange={(value: string) => setFieldValue('level', value)}
        value={value}
      >
        <SelectTrigger className="rounded-lg p-4 text-body">
          <SelectValue placeholder="Select level" />
          <ChevronDown
            className={cn('h-4 w-4 text-body transition-all duration-500', {
              'rotate-180 transition-all duration-500': open,
            })}
          />
        </SelectTrigger>
        <SelectContent className="border-b-2 border-border">
          <SelectGroup>
            {dropDownList.map((list) => (
              <SelectItem key={list.value} value={list.value} className="">
                {list.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isError && <ErrorComponent error={error} />}
    </div>
  )
}
