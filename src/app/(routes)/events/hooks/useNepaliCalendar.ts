import { useMemo, useState } from 'react'
import { Language } from '../types/Language'
import { getCurrentNepaliDate, getYears } from '../utils'
import {
  getMonthDatesByYear,
  getMonths,
  getWeeksDays,
  yearMonthDateSeparator,
} from '../utils/nepaliDate'
import { Day, Month, Year } from '../types/NepaliDates'
import { useEventStore } from '../store/EventStore'

interface useNepaliCalendarParams {
  lang?: Language
  shortMonth?: boolean
}

const useNepaliCalendar = ({
  lang = 'en',
  shortMonth = false,
}: useNepaliCalendarParams) => {
  const {
    date: currentDate,
    month: currentMonth,
    year: currentYear,
  } = getCurrentNepaliDate(lang)
  const years = useMemo(() => getYears(lang), [lang])
  const months = useMemo(() => getMonths(lang, shortMonth), [lang, shortMonth])
  const weekDays = useMemo(() => getWeeksDays(lang), [lang])

  const [selectedYear, setSelectedYear] = useState<Year>(
    years.find((y) => y.value === currentYear.value) as Year
  )

  const [selectedMonth, setSelectedMonth] = useState<Month>(
    months.find((m) => {
      return m.value === currentMonth.value
    }) as Month
  )

  const [selectedDate, setSelectedDate] = useState<Day>()
  const nepaliEvents = useEventStore((state) => state.nepaliEvents)
  const selectedLocalisedDates = useMemo(
    () =>
      getMonthDatesByYear({
        year: selectedYear.value,
        month: selectedMonth.value,
        nepaliEvents,
        lang,
      }),
    [selectedMonth.value, selectedYear.value, nepaliEvents, lang]
  )

  const currentLocalisedDate = useMemo(() => {
    const dates = getMonthDatesByYear({
      year: currentYear.value,
      month: currentMonth.value,
      nepaliEvents,
      lang,
    })

    return dates.find((d) => {
      return (
        d?.id ===
        `${currentYear.value}${yearMonthDateSeparator}${currentMonth.value}${yearMonthDateSeparator}${currentDate.value}`
      )
    })
  }, [currentDate, currentMonth, currentYear, nepaliEvents, lang])

  return {
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    selectedDate,
    setSelectedDate,
    selectedLocalisedDates,
    currentLocalisedDate,
    years,
    months,
    days: weekDays,
    currentYear,
    currentMonth,
    currentDate,
  }
}

export default useNepaliCalendar
