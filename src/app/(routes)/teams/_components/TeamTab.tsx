'use client'
import { cn } from '@/common/utils/utils'
import React, { useState } from 'react'

type ITitle =
  | 'Our Board Members'
  | 'Our Expert Instructors'
  | 'Administration Members'

const TeamTab = ({
  handleDynamicData,
}: {
  handleDynamicData: (type: ITitle) => void
}) => {
  const [activeTitle, setActiveTitle] = useState<ITitle>('Our Board Members')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleTabClick = (title: ITitle) => {
    setActiveTitle(title)
    handleDynamicData(title)
    setIsDropdownOpen(false)
  }

  return (
    <>
      <div className="md:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="font-workSans font-normal text-[18px] leading-6 px-4 py-2 bg-white text-black rounded-[8px] h-[48px] w-full text-left flex justify-between items-center shadow border-[#E7EEF8]"
        >
          {activeTitle}
          <svg
            className={cn('w-4 h-4 transition-transform text-body', {
              'transform rotate-180': isDropdownOpen,
            })}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-white shadow-md rounded-[10px] mt-2 w-full z-10 border-b-[#E7EEF8]">
            {(
              [
                'Our Board Members',
                'Our Expert Instructors',
                'Administration Members',
              ] as ITitle[]
            ).map((title) => (
              <button
                key={title}
                onClick={() => handleTabClick(title)}
                className={cn(
                  'font-workSans font-normal text-[18px] leading-6 px-4 py-2 w-full text-left bg-transparent text-black hover:bg-primary hover:text-white rounded-[10px] transition-all duration-300',
                  {
                    'bg-primary text-white': activeTitle === title,
                  }
                )}
              >
                {title}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default TeamTab
