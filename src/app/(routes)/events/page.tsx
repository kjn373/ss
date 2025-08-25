'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { useEffect } from 'react'
import CalendarEvent from './_component/Calendar/Calendar'
import { useEventStore } from './store/EventStore'

const EventPage = () => {
  const { fetchEvents } = useEventStore()

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  return (
    <div>
      <CoverImage title="Events" list={[{ link: '', title: 'Events' }]} />
      <HomeWrapper>
        <CalendarEvent />
      </HomeWrapper>
    </div>
  )
}

export default EventPage
