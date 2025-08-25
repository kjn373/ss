import { cn } from '@/lib/utils'
import { Day } from '../types/NepaliDates'

export const getTableTdClassName = (
  index: number,
  date: Day,
  currentLocalisedDate: Day | undefined,
  selectedDate: Day | undefined
) => {
  return cn(
    'border border-gray-200',
    date.id === currentLocalisedDate?.id && date.currentMonth && 'bg-primary ',
    index % 7 === 6 ? 'text-error' : '', // style for Saturday
    !date.currentMonth
      ? 'opacity-15 cursor-not-allowed pointer-events-none'
      : 'cursor-pointer ',
    date.id === selectedDate?.id && 'text-white '
  )
}

export const getEventStyles = (eventType: string) => {
  switch (eventType) {
    case 'SCHOOL_HOLIDAY':
      return 'text-error border-errorLight bg-errorLighter'
    case 'EXAMS':
      return 'text-success bg-successLighter border-sucessLight'
    case 'CLUB_AND_SPORTS':
      return 'text-heading bg-grayLighter border-grayLight '
    case 'EXTRACURRICULAR':
      return 'text-brown border-brownLight bg-brownLighter'
    case 'PTA_MEETINGS':
      return 'text-primary bg-primaryLighter border-primaryLight'
    case 'EDUCATIONAL_TOURS':
      return 'text-secondary bg-secondaryLighter border-secondaryLight'
    case 'CEREMONIES':
      return 'bg-pink-100 text-pink-400 border-pink-200 '
    default:
      return 'text-sky-500 bg-primaryLighter border-primaryLight'
  }
}
