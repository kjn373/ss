'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { EventData } from '../../types/NepaliDates'
import { getEventStyles } from '../../utils/classUtils'
import ModalContainer from '../Modal/Modal'

interface EventDialogProps {
  event: EventData
  index?: number
  dialogTriggerContent: React.ReactNode
  isInsideCalendar?: boolean
}

const EventDialog: React.FC<EventDialogProps> = ({
  event,
  dialogTriggerContent,
  isInsideCalendar,
}) => {
  const [isModalActive, setModalActive] = useState(false)

  const handleOpenModal = () => setModalActive(true)
  const handleCloseModal = () => setModalActive(false)

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }
  }, [isModalActive])

  return (
    <>
      <p
        className={cn(
          isInsideCalendar
            ? 'text-ellipsis whitespace-nowrap overflow-hidden max-w-[50px] md:max-w-[60px] lg:max-w-[80px] 2lg:max-w-[80px] font-workSans'
            : 'w-full'
        )}
        onClick={handleOpenModal}
      >
        {dialogTriggerContent}
      </p>

      {isModalActive && (
        <ModalContainer
          className="w-[90%] h-[60%] md:w-[30%] 2lg:w-[30%]  2lg:h-[30%] p-8 overflow-y-auto rounded-lg pdf-scrollbar"
          onClose={handleCloseModal}
        >
          <Image
            className="fixed top-2 right-2 cursor-pointer"
            src="/calendar/close.svg"
            alt="close"
            width={24}
            height={24}
            onClick={handleCloseModal}
          />
          <div>
            {event.eventDetail.map((e, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={cn(
                    'text-xl mb-4 mt-4 w-full px-2 py-1 rounded-md',
                    getEventStyles(e.eventType)
                  )}
                >
                  {e.title}
                </div>
                <div className="flex flex-col gap-6 text-start list-none text-base text-body">
                  <li>{e.description}</li>

                  {e.allDay == 'true' ? (
                    <li className="text-sm">Time: All Day</li>
                  ) : (
                    <li className="text-sm">
                      Time: {e.fromTime} - {e.toTime}
                    </li>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </ModalContainer>
      )}
    </>
  )
}

export default EventDialog
