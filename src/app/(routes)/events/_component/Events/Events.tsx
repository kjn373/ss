'use client'
import { cn } from '@/lib/utils'

import Image from 'next/image'
import React, {
  Dispatch,
  ForwardedRef,
  forwardRef,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import EventDialog from '../EventDialog/EventsDialog'

import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { filteredPeriod } from '@/common/constant/eventFilterConstants'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { NepaliDateTime } from '../../plugins/nepaliDateTime'
import { EventData, EventResponse, Month, Year } from '../../types/NepaliDates'
import { getEventStyles } from '../../utils/classUtils'
import { formattedDate } from '../../utils/formattedDate'

type EventsProps = {
  nextMonth: number
  nextYear: number
  prevMonth: number
  prevYear: number
  activeTab: string
  disabledTabs: string[]
  highlightedEventIndex: string | null
  setActiveTab: Dispatch<SetStateAction<string>>
  ref: ForwardedRef<HTMLDivElement>
  selectedMonth: Month
  selectedYear: Year
}

export const Events = forwardRef<HTMLDivElement, EventsProps>(function Events(
  {
    activeTab,
    setActiveTab,
    disabledTabs = [],
    highlightedEventIndex,
    selectedMonth,
    selectedYear,
  },
  ref
) {
  const [nepaliEvents, setNepaliEvents] = useState<EventData[] | undefined>([])
  const [isLoading, setIsLoading] = useState(false)

  function getTodayDate() {
    const currentDate = new NepaliDateTime()
    return `${currentDate.getYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
  }

  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split('T')[0]

  const sortedEvents = nepaliEvents?.sort((a, b) => {
    if (a.dateInAD === today && b.dateInAD !== today) return -1
    if (a.dateInAD !== today && b.dateInAD === today) return 1

    if (a.dateInAD === tomorrow && b.dateInAD !== tomorrow) return -1
    if (a.dateInAD !== tomorrow && b.dateInAD === tomorrow) return 1

    return new Date(a.dateInAD).getTime() - new Date(b.dateInAD).getTime()
  })

  const todayDate = getTodayDate()
  const [todayYear, todayMonth, todayDay] = todayDate.split('-').map(Number)
  const improvedTodayDate = `${todayYear}-${todayMonth + 1}-${todayDay}`
  const improvedTommorowDay = `${todayYear}-${todayMonth + 1}-${todayDay + 1}`
  const improvedSelectedMonth = (selectedMonth.value + 1)
    .toString()
    .padStart(2, '0')

  const fetchEvents = async (filter: string | null) => {
    setIsLoading(true)
    try {
      const response: EventResponse | undefined = await UseServerFetch(
        `/api/v1/event${filter ? `?filter=${filter}` : ''}`
      )
      const data = response?.data
      setNepaliEvents(data)
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const filter =
      activeTab === 'today'
        ? 'daily'
        : activeTab === 'week'
        ? 'weekly'
        : activeTab === 'month'
        ? `monthly&year=${selectedYear.value}&month=${improvedSelectedMonth}`
        : null
    fetchEvents(filter)
  }, [activeTab, improvedSelectedMonth, selectedYear])

  function handleTabClick(key: string) {
    if (disabledTabs.includes(key)) return
    setActiveTab(key)
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center font-workSans justify-center md:items-end md:justify-end 2lg:items-end 2lg:justify-end">
          <TabAnimation
            activeTab={activeTab}
            handleDynamicData={handleTabClick}
            setActive={setActiveTab}
            tabs={filteredPeriod}
            disabledTab={disabledTabs}
            isEvent
          />
        </div>
        <div
          ref={ref}
          className={cn(
            'flex flex-col font-workSans items-start px-6 py-6 w-full rounded-lg bg-background  h-[calc(100vh-20rem)] md:h-[calc(100vh-18rem)] 2lg:h-[calc(100vh-16rem)]  2xl:h-[calc(100vh-16rem)] 3xl:h-[calc(100vh-16rem)] overflow-y-auto pdf-scrollbar'
          )}
        >
          {/* */}
          {isLoading ? (
            <>
              {[...Array(6)].map((_, idx) => (
                <ul
                  key={idx}
                  className={cn(
                    'flex justify-between rounded-md h-10 w-full px-4 py-14 mb-4 border-l-8 bg-gray-100 border-gray-300 animate-pulse '
                  )}
                >
                  <div className="w-full space-y-4">
                    <li className="w-1/2 h-2  rounded-md bg-gray-300  animate-pulse "></li>
                    <li className="w-1/4 h-2  rounded-md bg-gray-300  animate-pulse "></li>
                  </div>
                  <li className="w-4 h-4  rounded-full bg-gray-300  animate-pulse "></li>
                </ul>
              ))}
            </>
          ) : nepaliEvents?.length === 0 ? (
            <div className="flex flex-col items-center mx-auto space-y-4 mt-24">
              <Image
                src="/calendar/noEvents/union.png"
                alt="no event"
                width={54}
                height={54}
              />
              <div className="flex flex-col items-center text-base gap-1">
                <p className="font-medium">No Events Found</p>
              </div>
            </div>
          ) : (
            sortedEvents?.map((event, index) => {
              let renderedDay = false
              return (
                <>
                  <EventDialog
                    key={index}
                    event={event}
                    index={index}
                    dialogTriggerContent={event.eventDetail.map(
                      (eventItem, idx) => {
                        return (
                          <React.Fragment key={idx}>
                            {formattedDate(event.dateInBS) ===
                              improvedTodayDate &&
                              !renderedDay && (
                                <>
                                  <div className="flex items-start text-lg font-medium text-heading mb-2">
                                    <p>Today</p>
                                  </div>
                                  {(renderedDay = true)}{' '}
                                </>
                              )}
                            {formattedDate(event.dateInBS) ==
                              improvedTodayDate && (
                              <ul
                                key={event.id}
                                data-event-id={event.id}
                                className={cn(
                                  'flex justify-between rounded-lg border-l-8 py-4 px-6 mb-4 cursor-pointer ',
                                  getEventStyles(eventItem.eventType),
                                  highlightedEventIndex === event.id &&
                                    'border-2 border-l-8 border-primary'
                                )}
                              >
                                <div className="flex flex-col gap-1 items-start">
                                  <React.Fragment key={idx}>
                                    <li
                                      className={cn(
                                        'text-base font-medium mt-2'
                                      )}
                                    >
                                      {eventItem.title}
                                    </li>
                                    {eventItem.allDay == 'true' ? (
                                      <li>All Day</li>
                                    ) : (
                                      <li className="text-sm text-gray-500">
                                        {eventItem.fromTime} -{' '}
                                        {eventItem.toTime}
                                      </li>
                                    )}
                                  </React.Fragment>
                                </div>
                                <div>
                                  <li className="text-heading font-medium">
                                    {event.dateInBS.split('-')[2]}
                                  </li>
                                </div>
                              </ul>
                            )}

                            {formattedDate(event.dateInBS) ===
                              improvedTommorowDay &&
                              !renderedDay && (
                                <>
                                  <div className="flex items-start text-lg font-medium text-heading mb-2">
                                    <p>Tomorrow</p>
                                  </div>
                                  {(renderedDay = true)}{' '}
                                </>
                              )}

                            {formattedDate(event.dateInBS) ==
                              improvedTommorowDay && (
                              <ul
                                key={event.id}
                                data-event-id={event.id}
                                className={cn(
                                  'flex justify-between rounded-md border-l-8 py-4 px-6 mb-4 cursor-pointer',
                                  getEventStyles(eventItem.eventType),
                                  highlightedEventIndex === event.id &&
                                    'border-2 border-l-8 border-primary'
                                )}
                              >
                                <div className="flex flex-col gap-1 items-start">
                                  <React.Fragment key={idx}>
                                    <li
                                      className={cn(
                                        'text-base font-medium mt-2'
                                        // !event.isSchoolEvent && 'text-error'
                                      )}
                                    >
                                      {eventItem.title}
                                    </li>
                                    {eventItem.allDay == 'true' ? (
                                      <li>All Day</li>
                                    ) : (
                                      <li className="text-sm text-gray-500">
                                        {eventItem.fromTime} -{' '}
                                        {eventItem.toTime}
                                      </li>
                                    )}
                                  </React.Fragment>
                                </div>
                                <div>
                                  <li className="text-heading font-medium">
                                    {event.dateInBS.split('-')[2]}
                                  </li>
                                </div>
                              </ul>
                            )}

                            {formattedDate(event.dateInBS) !==
                              improvedTodayDate &&
                              formattedDate(event.dateInBS) !==
                                improvedTommorowDay &&
                              !renderedDay && (
                                <>
                                  <div className="flex items-start text-lg font-medium text-heading mb-2">
                                    {event.dateInBS.split('-')[2]}th{' '}
                                    {selectedMonth.label}
                                  </div>
                                  {(renderedDay = true)}{' '}
                                </>
                              )}

                            {formattedDate(event.dateInBS) !==
                              improvedTodayDate &&
                              formattedDate(event.dateInBS) !==
                                improvedTommorowDay && (
                                <ul
                                  key={event.id}
                                  data-event-id={event.id}
                                  className={cn(
                                    'flex justify-between rounded-md border-l-8 py-4 px-6 mb-4 cursor-pointer',
                                    getEventStyles(eventItem.eventType),
                                    highlightedEventIndex === event.id &&
                                      'border-2 border-l-8 border-primary'
                                  )}
                                >
                                  <div className="flex flex-col gap-1 items-start">
                                    <React.Fragment key={idx}>
                                      <li
                                        className={cn(
                                          'text-base font-medium mt-2'
                                          // !event.isSchoolEvent && 'text-red-500'
                                        )}
                                      >
                                        {eventItem.title}
                                      </li>

                                      {eventItem.allDay == 'true' ? (
                                        <li>All Day</li>
                                      ) : (
                                        <li className="text-sm text-gray-500">
                                          {eventItem.fromTime} -{' '}
                                          {eventItem.toTime}
                                        </li>
                                      )}
                                    </React.Fragment>
                                  </div>
                                  <div>
                                    <li className="text-heading font-medium">
                                      {event.dateInBS.split('-')[2]}
                                    </li>
                                  </div>
                                </ul>
                              )}
                          </React.Fragment>
                        )
                      }
                    )}
                  />
                </>
              )
            })
          )}
        </div>
      </div>
    </>
  )
})
