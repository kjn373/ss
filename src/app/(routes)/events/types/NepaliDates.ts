export type NepaliDate = {
  year: Year
  month: Month
  date: Day
}

export type Year = {
  value: number
  label: string
}

export type Month = {
  label: string
  value: number
}

type EventDetail = {
  title: string
  toTime: string
  fromTime: string
  allDay: string
  eventType: string
  description: string
}[]

export type EventData = {
  id: string
  dateInBS: string
  dateInAD: string
  eventDetail: EventDetail
  isSchoolEvent: boolean
  createdAt: string
  updatedAt: string
}

export type EventResponse = {
  status: number
  message: string
  data: EventData[]
  totalCount: number
}
export type Day = {
  // Id format yyyy/MM/DD
  id: string
  value: number
  label: string
  event?: EventData | null
  currentMonth?: boolean
}
