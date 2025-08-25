'use client'

import React, { useState } from 'react'
import { Calendar } from '../ui/calendar'
import Image from 'next/image'
import { format } from 'date-fns'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { ErrorComponent } from './Input'
import { cn } from '@/common/utils/utils'

export const InputWithDate = ({
  label,
  setValue,
  error,
  isError,
  isRequired = false,
  value,
}: {
  label: string
  setValue: (field: string, value: string) => void
  error: string | undefined
  isError: boolean | undefined
  isRequired: boolean
  value: Date | undefined
}) => {
  const [selectedDate, setSelectDate] = React.useState<Date | undefined>(value)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="w-full flex flex-col gap-y-1">
      <Popover open={open}>
        <label
          htmlFor={label}
          className="text-body font-normal text-[14px] leading-4 font-workSans mb-[6px]"
        >
          {label} {isRequired && '*'}
        </label>
        <PopoverTrigger
          asChild
          onClick={() => {
            setTimeout(() => {
              setOpen((prev) => !prev)
            }, 100)
          }}
        >
          <div
            className={cn(
              'flex justify-between min-h-[48px] text-black bg-white text-[16px] max-h-[200px] w-full rounded-[8px]  px-4 py-3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-workSans placeholder:font-workSans border-[1px] border-border shadow-sm placeholder:text-[14px]',
              {
                'border-error border-[1px]': isError,
              }
            )}
          >
            {selectedDate && value ? (
              <span className="text-black text-[16px] font-workSans">
                <>{value}</>
              </span>
            ) : (
              <span className="text-body font-workSans font-normal text-[14px] leading-4">
                Your D.O.B
              </span>
            )}
            <Image
              src={'/admission/calender.svg'}
              width={16}
              height={16}
              alt="calendar icon"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            captionLayout="dropdown-buttons"
            fromYear={1990}
            toYear={2024}
            mode="single"
            selected={selectedDate}
            onSelect={(date: Date | undefined) => {
              if (date) {
                setSelectDate(date)
                setValue('dateOfBirth', format(date, 'MMMM d, yyyy'))
                setOpen((prev) => !prev)
              }
            }}
            disabled={(date: Date) =>
              date > new Date() || date < new Date('1900-01-01')
            }
            className="rounded-md   font-workSans data-[state=open]:bdr "
          />
        </PopoverContent>
      </Popover>
      {isError && <ErrorComponent error={error ? error : ''} />}
    </div>
  )
}
