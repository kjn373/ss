import { months, monthsData } from '@/common/constant/months'
import { dateConverter, NepaliDateTime } from '../plugins/nepaliDateTime'
import { Language } from '../types/Language'
import { Day, EventData, Month, NepaliDate, Year } from '../types/NepaliDates'
import {
  addLeadingNepaliZero,
  addLeadingZero,
  convertToNepaliDigit,
} from './digit'
import { formattedDate } from './formattedDate'
import { WeekDays } from '../types/WeekDays'
import { weekDays } from '@/common/constant/week'

export const yearMonthDateSeparator = '-'

const defaultFormat = `YYYY${yearMonthDateSeparator}MM${yearMonthDateSeparator}DD`

const years = generateYears()

export function getCurrentNepaliDate(lang: Language = 'ne'): NepaliDate {
  const nepaliDateTime = new NepaliDateTime()
  const formattedDateTime =
    lang === 'ne'
      ? nepaliDateTime.formatNepali(defaultFormat)
      : nepaliDateTime.format(defaultFormat)

  const year = nepaliDateTime.getYear()
  const month = nepaliDateTime.getMonth()
  const date = nepaliDateTime.getDate()

  const [yearLabel, monthLabel, dateLabel] = formattedDateTime.split('-')

  return {
    year: {
      value: year,
      label: yearLabel,
    },
    month: {
      value: month,
      label: monthLabel,
    },
    date: {
      id: `${year}${yearMonthDateSeparator}${month}${yearMonthDateSeparator}${date}`,
      value: date,
      label: dateLabel,
    },
  }
}

function generateYears() {
  let year = dateConverter.npMinYear()
  return monthsData.map((month) => {
    const [dates] = month
    const yearData = {
      label: {
        ne: convertToNepaliDigit(year),
        en: year.toString(),
      },
      value: year,
      daysInMonth: dates,
    }
    year++

    return yearData
  })
}

export const getYears = (lang: Language): Year[] => {
  return years.map((year) => {
    if (lang == 'ne') {
      return {
        label: year.label.en,
        value: year.value,
      }
    }
    return {
      label: year.label.en,
      value: year.value,
    }
  })
}

export const getMonths = (lang: Language, short = false): Month[] => {
  return months.map((month) => {
    if (lang == 'ne') {
      return {
        value: month.value.en,
        label: short ? month.label.ne.short : month.label.ne.long,
      }
    }
    return {
      value: month.value.en,
      label: short ? month.label.en.short : month.label.en.long,
    }
  })
}

export const getMonthDatesByYear = ({
  year,
  month,
  lang = 'en',
  nepaliEvents,
}: {
  year: number
  month: number
  lang: Language
  nepaliEvents: EventData[]
}): Day[] => {
  return getDatesInMonthByYear(year, month).map((date) => {
    const dateFromCalendar = `${year}${yearMonthDateSeparator}${
      month + 1
    }${yearMonthDateSeparator}${date.value}`

    const event = nepaliEvents.find((e) => {
      const formattedEventDate = formattedDate(e.dateInBS)
      return formattedEventDate == dateFromCalendar
    })
    if (lang == 'ne') {
      return {
        id: date.id,
        value: date.value,
        label: convertToNepaliDigit(date.value),
        event: event ?? null,
        currentMonth: date.currentMonth,
      }
    }
    return {
      id: date.id,
      value: date.value,
      label: date.value.toString(),
      event: event ?? null,
      currentMonth: date.currentMonth,
    }
  })
}

const getDatesInMonthByYear = (year: number, month: number) => {
  const prevMonth = month - 1 < 0 ? 11 : month - 1

  const prevYear = month - 1 < 0 ? year - 1 : year

  const prevMonthDates = years.find((y) => y.value === prevYear)?.daysInMonth[
    prevMonth
  ]

  const currentMonthDates = years.find((y) => y.value === year)?.daysInMonth[
    month
  ]

  if (!currentMonthDates) {
    return []
  }
  const dates: Array<{
    id: string
    value: number
    currentMonth: boolean
  }> = []

  if (typeof currentMonthDates === 'number') {
    for (let date = 1; date <= currentMonthDates; date++) {
      dates.push({
        id: `${year}${yearMonthDateSeparator}${month}${yearMonthDateSeparator}${date}`,
        value: date,
        currentMonth: true,
      })
    }

    return dates
  }
  // @ts-expect-error  Type '[number, number, number] | undefined' is not an array type
  const [, prevMonthDays] = prevMonthDates
  const [beginningMonthOffset, currentMonthDays, endMonthOffset] =
    currentMonthDates

  for (
    let date = prevMonthDays - beginningMonthOffset + 1;
    date <= prevMonthDays;
    date++
  ) {
    dates.push({
      id: `${year}${yearMonthDateSeparator}${prevMonth}${yearMonthDateSeparator}${date}`,
      value: date,
      currentMonth: false,
    })
  }

  for (let date = 1; date <= currentMonthDays; date++) {
    dates.push({
      id: `${year}${yearMonthDateSeparator}${month}${yearMonthDateSeparator}${date}`,
      value: date,
      currentMonth: true,
    })
  }

  for (let date = 1; date <= endMonthOffset; date++) {
    dates.push({
      id: `${year}${yearMonthDateSeparator}${
        month + 1
      }${yearMonthDateSeparator}${date}`,
      value: date,
      currentMonth: false,
    })
  }

  return dates
}

export const getWeeksDays = (lang: Language, short = true): WeekDays[] => {
  return weekDays.map((date) => {
    if (lang == 'ne') {
      return {
        value: date.value,
        label: short ? date.label.ne.short : date.label.ne.long,
      }
    }

    return {
      value: date.value,
      label: short ? date.label.en.short : date.label.en.long,
    }
  })
}

export const formatNepaliDate = (date: NepaliDate, lang: Language) => {
  const format = `YYYY${yearMonthDateSeparator}MM${yearMonthDateSeparator}DD`

  const formattedDate = format
    .replace(
      'YYYY',
      lang == 'ne'
        ? convertToNepaliDigit(date.year.value)
        : date.year.value.toString()
    )

    .replace(
      'MM',
      lang == 'ne'
        ? addLeadingNepaliZero(date.month.value)
        : addLeadingZero(date.month.value)
    )
    .replace(
      'DD',
      lang == 'ne'
        ? addLeadingNepaliZero(date.date.value)
        : addLeadingZero(date.date.value)
    )

  return formattedDate
}
