import { cn } from '@/lib/utils'
import Image from 'next/image'
import { SetStateAction } from 'react'
import { Month, Year } from '../../types/NepaliDates'
import Button from '../ui/Button'

type CalendarHeaderProps = {
  selectedMonth: Month
  selectedYear: Year
  setShowYearSelector: (value: SetStateAction<boolean>) => void
  showYearSelector: boolean
  handleOnPrevClick: () => void
  handleOnNextClick: () => void
}

const CalendarHeader = ({
  selectedMonth,
  handleOnNextClick,
  handleOnPrevClick,
  selectedYear,
  setShowYearSelector,
  showYearSelector,
}: CalendarHeaderProps) => {
  return (
    <div className="flex flex-row justify-between h-10 font-poppins">
      <div className="flex flex-row gap-2 items-center font-medium text-2xl">
        <span className="">{selectedMonth?.label}</span>
        <span>{selectedYear?.label}</span>
        <Button onClick={() => setShowYearSelector((value) => !value)}>
          <Image
            src="calendar/dropdown-calendar.svg"
            alt="arrow left"
            width={20}
            height={20}
            className={cn('transition-all duration-700 hover:opacity-70', {
              'rotate-180': showYearSelector,
            })}
          />
        </Button>
      </div>
      <div
        className={cn(
          'grid grid-cols-2 gap-3 cursor-pointer ',
          showYearSelector && 'hidden'
        )}
      >
        <Image
          src="calendar/arrow-right.svg"
          alt="arrow left"
          width={28}
          height={28}
          onClick={handleOnPrevClick}
          className="rotate-180 hover:opacity-70"
        />

        <Image
          src="calendar/arrow-right.svg"
          alt="arrow right"
          width={28}
          height={28}
          onClick={handleOnNextClick}
          className="hover:opacity-70"
        />
      </div>
    </div>
  )
}

export default CalendarHeader
