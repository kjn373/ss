'use client'
import { Button } from '@/common/components/Atom/Button'
import { filteredPeriod } from '@/common/constant/eventFilterConstants'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import useNepaliCalendar from '../../hooks/useNepaliCalendar'
import { NepaliDateTime } from '../../plugins/nepaliDateTime'
import { useEventStore } from '../../store/EventStore'
import { Language } from '../../types/Language'
import { Day, NepaliDate } from '../../types/NepaliDates'
import { getTableTdClassName } from '../../utils/classUtils'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import CalendarTable from '../CalendarTable/CalendarTable'
import { Events } from '../Events/Events'

export interface CalendarProps {
  className?: string
  selecteDate?: NepaliDate
  openYearSelector?: boolean
  lang?: Language
  onDateSelect?: (date: NepaliDate) => void
}

const CalendarEvent = ({
  className,
  openYearSelector = false,
  selecteDate,
  lang,
  ...rest
}: CalendarProps) => {
  const [showYearSelector, setShowYearSelector] = useState(false)
  const { nepaliEvents } = useEventStore()

  // reference to the event component
  const eventsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setShowYearSelector(() => openYearSelector)
  }, [openYearSelector])

  // Custom Hooks
  const {
    currentLocalisedDate,
    days,
    years,
    months,
    selectedDate,
    selectedLocalisedDates,
    selectedMonth,
    selectedYear,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,
  } = useNepaliCalendar({ lang })
  const [nextMonth, setNextMonth] = useState<number>(selectedMonth.value)
  const [nextYear, setNextYear] = useState<number>(selectedYear.value)
  const [prevMonth, setPrevMonth] = useState<number>(selectedMonth.value)
  const [prevYear, setPrevYear] = useState<number>(selectedMonth.value)
  const [activeTab, setActiveTab] = useState(filteredPeriod[0].key)
  const [disabledTab, setDisabledTab] = useState<string[]>([])
  const [highlightedEventIndex, setHighlightedEventsIndex] = useState<
    string | null
  >(null)

  const currentDate = new NepaliDateTime()
  const Startyears = Array.from({ length: 50 }, (_, i) => ({
    label: (2048 + i).toString(),
    value: 2048 + i,
  }))

  const onSelectYear = (year: number) => {
    const selectedYear = years.find((y) => y.value === year)

    if (!selectedYear) {
      return
    }
    setSelectedYear(() => selectedYear)
    setShowYearSelector(() => false)
    if (currentDate.getYear() == selectedYear.value) {
      setActiveTab('today')
      setDisabledTab([])
    } else {
      setActiveTab('month')
      setDisabledTab(['today', 'week'])
    }
  }

  const handleOnPrevClick = () => {
    if (!selectedYear || !selectedMonth) {
      return
    }

    let prevMonth = selectedMonth.value - 1
    let prevYear = selectedYear.value

    if (prevMonth < 0) {
      prevMonth = months.length - 1
      prevYear -= 1

      const foundPrevYear = years.find((y) => y.value === prevYear)
      if (!foundPrevYear) return

      setSelectedYear(foundPrevYear)
    }

    if (prevMonth < 0) {
      return
    }

    const foundPrevYear = years.find((y) => y.value === prevYear)
    if (!foundPrevYear) {
      return
    }

    const foundPrevMonth = months.find((m) => m.value === prevMonth)
    if (!foundPrevMonth) {
      return
    }

    setSelectedMonth(() => foundPrevMonth)
    setSelectedYear(() => foundPrevYear)
    setPrevMonth(foundPrevMonth.value - 1)
    setPrevYear(foundPrevYear.value - 1)

    if (
      currentDate.getMonth() == foundPrevMonth.value &&
      currentDate.getYear() == selectedYear.value
    ) {
      setActiveTab('today')
      setDisabledTab([])
    } else {
      setActiveTab('month')
      setDisabledTab(['today', 'week'])
    }
  }

  const handleOnNextClick = () => {
    if (!selectedYear || !selectedMonth) return

    let nextMonth = selectedMonth.value + 1
    let nextYear = selectedYear.value

    if (nextMonth > months.length - 1) {
      nextMonth = 0
      nextYear += 1
    }

    const foundNextMonth = months.find((m) => m.value === nextMonth)
    if (!foundNextMonth) return

    const foundNextYear = years.find((y) => y.value === nextYear)
    if (!foundNextYear) return

    setSelectedMonth(foundNextMonth)
    setSelectedYear(foundNextYear)
    setNextYear(foundNextYear.value + 1)
    setNextMonth(foundNextMonth.value + 1)

    if (
      currentDate.getMonth() == foundNextMonth.value &&
      currentDate.getYear() == selectedYear.value
    ) {
      setActiveTab('today')
      setDisabledTab([])
    } else {
      setActiveTab('month')
      setDisabledTab(['today', 'week'])
    }
  }

  const handleDateClick = (date: Day) => {
    setSelectedDate(date)
    const filteredEvents = nepaliEvents.filter((event) => {
      const [eventYear, eventMonth] = event.dateInBS.split('-').map(Number)
      return (
        eventYear === Number(selectedYear?.label) &&
        eventMonth === selectedMonth?.value + 1
      )
    })

    // Find the index in the filtered list
    const selectedEvent = filteredEvents.find((event) => {
      const [eventYear, eventMonth, eventDay] = event.dateInBS
        .split('-')
        .map(Number)
      return (
        eventYear === Number(selectedYear?.label) &&
        eventMonth === selectedMonth?.value + 1 &&
        eventDay === Number(date.label)
      )
    })
    if (selectedEvent && eventsRef.current) {
      const eventElement = eventsRef.current.querySelector(
        `[data-event-id="${selectedEvent.id}"]`
      ) as HTMLElement

      if (eventElement) {
        const containerHeight = eventsRef.current.clientHeight

        const eventElementHeight = eventElement.clientHeight
        const scrollPosition =
          eventElement.offsetTop - containerHeight + eventElementHeight
        if (window.innerWidth <= 786) {
          eventsRef.current.scrollIntoView({
            behavior: 'smooth',
          })
        } else {
          eventsRef.current.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
          })
        }
        // eventElement.scrollIntoView({ behavior: 'smooth' })
        setHighlightedEventsIndex(selectedEvent.id)
      }
    }
  }

  useEffect(() => {
    if (!selecteDate) {
      return undefined
    }

    const foundYear = years.find((y) => y.value == selecteDate.year.value)

    if (!foundYear) {
      return undefined
    }

    const foundMonth = months.find(
      (m) => m.value == selecteDate.month.value - 1
    )

    if (!foundMonth) {
      return undefined
    }

    setSelectedYear(() => foundYear)
    setSelectedMonth(() => foundMonth)
    setSelectedDate(() => selecteDate.date)
  }, [
    months,
    years,
    selecteDate,
    setSelectedDate,
    setSelectedYear,
    setSelectedMonth,
  ])

  return (
    <div className={cn('2lg:flex justify-between', className)}>
      <div
        className={cn('flex flex-col p-2 md:p-4 rounded-md w-full')}
        {...rest}
      >
        <CalendarHeader
          handleOnNextClick={handleOnNextClick}
          handleOnPrevClick={handleOnPrevClick}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setShowYearSelector={setShowYearSelector}
          showYearSelector={showYearSelector}
        />
        {!showYearSelector && (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-7 py-4 px-6 mt-2 bg-background gap-8 rounded-full justify-items-start text-sm md:text-base font-medium">
              {days.map((day) => (
                <span className="font-poppins" key={day.value}>
                  {day.label}
                </span>
              ))}
            </div>
            <CalendarTable
              selectedLocalisedDates={selectedLocalisedDates}
              selectedDate={selectedDate}
              currentLocalisedDate={currentLocalisedDate}
              handleDateClick={handleDateClick}
              getTableTdClassName={getTableTdClassName}
            />
          </div>
        )}

        {showYearSelector && (
          <div className="max-h-96 overflow-y-auto pdf-scrollbar">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center mt-4 max-h-xs">
              {Startyears.map((year) => (
                <Button
                  variant={'pilled'}
                  key={year.value}
                  onClick={() => onSelectYear(year.value)}
                  className={cn('', {
                    'border border-primary': currentLocalisedDate?.id.includes(
                      year.value.toString()
                    ),
                    'bg-primary hover:bg-primary text-white':
                      selectedYear?.label.includes(year.value.toString()),
                  })}
                >
                  <span>{year.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* For Events */}
      <div className="flex flex-col gap-2 mt-8 w-full 2lg:w-[45%]">
        <Events
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          disabledTabs={disabledTab}
          highlightedEventIndex={highlightedEventIndex}
          nextYear={nextYear}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          prevYear={prevYear}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          ref={eventsRef}
        />
      </div>
    </div>
  )
}

export default CalendarEvent
