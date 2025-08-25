import { useMemo } from 'react'
import { format } from 'date-fns'

/**
 * Custom hook to format an ISO date string into a more readable format.
 * @param isoDateString - The ISO date string to format.
 * @returns The formatted date string.
 */
export const useFormattedDate = (isoDateString: string): string => {
  return useMemo(() => {
    if (!isoDateString) return ''

    const date = new Date(isoDateString)

    // Format the date using date-fns
    return format(date, 'MMMM d, yyyy')
  }, [isoDateString])
}
