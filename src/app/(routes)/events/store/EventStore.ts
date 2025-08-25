import { produce } from 'immer'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { EventData, EventResponse } from '../types/NepaliDates'
import { UseServerFetch } from '@/common/hook/useServerFetch'

interface EventStore {
  nepaliEvents: EventData[]
  isLoading: boolean
  fetchEvents: () => Promise<void>
  setEvents: (events: EventData[]) => void
}

export const useEventStore = create<EventStore>()(
  devtools((set) => ({
    nepaliEvents: [],
    isLoading: true,

    setEvents: (events) => {
      set(
        produce<EventStore>((draft) => {
          draft.nepaliEvents = events
        })
      )
    },

    fetchEvents: async () => {
      set(
        produce<EventStore>((draft) => {
          draft.isLoading = true
        })
      )

      try {
        const response: EventResponse | undefined = await UseServerFetch(
          '/api/v1/event'
        )

        set(
          produce<EventStore>((draft) => {
            if (response) {
              draft.nepaliEvents = response.data
            }
            draft.isLoading = false
          })
        )
      } catch (error) {
        console.error('Failed to fetch events:', error)
        set(
          produce<EventStore>((draft) => {
            draft.isLoading = false
          })
        )
      } finally {
        set(
          produce<EventStore>((draft) => {
            draft.isLoading = false
          })
        )
      }
    },
  }))
)
