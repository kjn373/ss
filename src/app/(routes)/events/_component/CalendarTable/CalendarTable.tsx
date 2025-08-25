'use client'
import { cn } from '@/lib/utils'
import { Day } from '../../types/NepaliDates'
import EventDialog from '../EventDialog/EventsDialog'
import { CheckIsIos } from '@/common/hook/useIos'

const CalendarTable = ({
  selectedLocalisedDates,
  selectedDate,
  currentLocalisedDate,
  handleDateClick,
  getTableTdClassName,
}: {
  selectedLocalisedDates: Day[]
  selectedDate: Day | undefined
  currentLocalisedDate: Day | undefined
  handleDateClick: (date: Day) => void
  getTableTdClassName: (
    index: number,
    date: Day,
    currentLocalisedDate: Day | undefined,
    selectedDate: Day | undefined
  ) => string
}) => {
  const isIos = CheckIsIos()

  return (
    <table
      className={cn('w-full h-full table-fixed font-poppins', {
        'pb-32': isIos,
      })}
    >
      <tbody>
        {selectedLocalisedDates
          .reduce((rows: Array<Array<JSX.Element>>, date, index) => {
            const rowIndex = Math.floor(index / 7)

            if (!rows[rowIndex]) {
              rows[rowIndex] = []
            }

            rows[rows.length - 1].push(
              <td
                key={date.id}
                onClick={() => {
                  handleDateClick(date)
                }}
                className={getTableTdClassName(
                  index,
                  date,
                  selectedDate,
                  currentLocalisedDate
                )}
              >
                <div
                  className={cn(
                    'flex flex-col justify-between items-start p-2  ',
                    date.event && date.event?.eventDetail.length > 1
                      ? 'gap-0'
                      : 'md:gap-10'
                  )}
                >
                  <div
                    className={cn(
                      'text-xs font-medium md:text-lg rounded-ful',
                      date.event?.isSchoolEvent === false && 'text-error',
                      date.id === currentLocalisedDate?.id && date.currentMonth
                        ? 'bg-primary text-white pt-2 md:pt-1 lg:pt-1 text-center justify-center items-center rounded-full w-8 h-8 aspect-square'
                        : '',
                      date.id === selectedDate?.id &&
                        date.currentMonth &&
                        'w-8 text-center text-white'
                    )}
                  >
                    {date.label}
                  </div>

                  {date.currentMonth && date.event?.eventDetail.length === 1 ? (
                    <p
                      className={cn(
                        'hidden md:flex lg:flex mt-1 text-xs rounded-full py-1 px-2 font-workSans',
                        date.event.eventDetail[0].eventType === 'SCHOOL_HOLIDAY'
                          ? 'text-error border-errorLight bg-errorLighter'
                          : date.event.eventDetail[0].eventType === 'EXAMS'
                          ? 'text-success bg-successLighter border-sucessLight'
                          : date.event.eventDetail[0].eventType ===
                            'CLUB_AND_SPORTS'
                          ? 'text-heading bg-grayLighter border-grayLight '
                          : date.event.eventDetail[0].eventType ===
                            'EXTRACURRICULAR'
                          ? 'text-brown border-brownLight bg-brownLighter'
                          : date.event.eventDetail[0].eventType ===
                            'PTA_MEETINGS'
                          ? 'text-primary bg-primaryLighter border-primaryLight'
                          : date.event.eventDetail[0].eventType ===
                            'EDUCATIONAL_TOURS'
                          ? 'text-secondary bg-secondaryLighter border-primaryLight'
                          : date.event.eventDetail[0].eventType === 'CEREMONIES'
                          ? 'bg-pink-100 text-pink-400 border-pink-200'
                          : 'text-primary bg-primaryLighter border-primaryLight',
                        'tracking-normal'
                      )}
                    >
                      <EventDialog
                        event={date.event}
                        isInsideCalendar
                        dialogTriggerContent={date.event?.eventDetail.map(
                          (e) => e.title
                        )}
                      />
                    </p>
                  ) : (
                    <p
                      className={cn(
                        'hidden md:flex invisible',
                        date.event &&
                          date.event?.eventDetail.length > 1 &&
                          'md:hidden'
                      )}
                    >
                      No Event
                    </p>
                  )}
                  {date.currentMonth &&
                    date.event &&
                    date.event?.eventDetail.length > 1 && (
                      <p className={cn('flex flex-col items-start')}>
                        <EventDialog
                          event={date.event}
                          dialogTriggerContent={date.event?.eventDetail
                            .slice(0, 2)
                            .map((e, index) => (
                              <p
                                className={cn(
                                  'my-1 hidden md:flex text-[12px] lg:flex font-workSans rounded-full px-2 text-ellipsis whitespace-nowrap overflow-hidden max-w-[50px] md:max-w-[70px] 2lg:max-w-[96px]',
                                  e.eventType === 'SCHOOL_HOLIDAY'
                                    ? 'text-error border-errorLight bg-errorLighter'
                                    : e.eventType === 'EXAMS'
                                    ? 'text-success bg-successLighter border-sucessLight'
                                    : e.eventType === 'CLUB_AND_SPORTS'
                                    ? 'text-heading bg-grayLighter border-grayLight '
                                    : e.eventType === 'EXTRACURRICULAR'
                                    ? 'text-brown border-brownLight bg-brownLighter'
                                    : e.eventType === 'PTA_MEETINGS'
                                    ? 'text-primary bg-primaryLighter border-primaryLight'
                                    : e.eventType === 'EDUCATIONAL_TOURS'
                                    ? 'text-secondary bg-secondaryLighter border-primaryLight'
                                    : e.eventType === 'CEREMONIES'
                                    ? 'bg-pink-200 text-pink-500 border-pink-300 '
                                    : 'text-primary bg-primaryLighter border-primaryLight',
                                  'tracking-normal'
                                )}
                                key={index}
                              >
                                {window.innerWidth < 1270
                                  ? e.title.split(' ').join(' ').slice(0, 5)
                                  : e.title
                                      .split(' ')
                                      .join(' ')
                                      .slice(0, 10)}{' '}
                                ...
                              </p>
                            ))}
                        />
                        {date.event?.eventDetail.length - 2 !== 0 ? (
                          <span className="mt-1 text-xs items-start rounded-full text-heading !bg-primaryLight px-1 md:px-2 md:py-1">
                            +{date.event?.eventDetail.length - 2}
                          </span>
                        ) : (
                          <span className="mt-1 hidden md:flex invisible text-xs items-start rounded-fullpx-1 md:px-2 md:py-1">
                            +{date.event?.eventDetail.length - 2}
                          </span>
                        )}
                      </p>
                    )}
                  {!date.currentMonth &&
                    date.event &&
                    date.event?.eventDetail.length > 1 && (
                      <div className="hidden md:flex invisible">
                        <p>No events</p>
                        <p>No events</p>
                      </div>
                    )}
                </div>
              </td>
            )

            return rows
          }, [])
          .map((row, rowIndex) => (
            <tr key={rowIndex} className="md:h-[116px] h-12">
              {row}
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default CalendarTable
