'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

type ITitle = 'Plus Two' | 'School Level'

const ResultTab = ({
  handleDynamicData,
}: {
  handleDynamicData: (type: ITitle) => void
}) => {
  const [activeTitle, setActiveTitle] = useState<ITitle>('Plus Two')

  const handleTabClick = (title: ITitle) => {
    setActiveTitle(title)
    handleDynamicData(title)
  }

  return (
    <div className="bg-primaryLighter flex justify-between items-center rounded-[100px] p-2 max-w-[300px] h-[72px] shadow mx-auto">
      {(['Plus Two', 'School Level'] as ITitle[]).map((title) => (
        <button
          key={title}
          onClick={() => handleTabClick(title)}
          className={cn(
            'font-workSans font-normal text-[18px] leading-6 px-4 py-4 bg-transparent text-black rounded-[100px] transition-all duration-700',
            {
              'bg-primary text-white': activeTitle === title,
            }
          )}
        >
          {title}
        </button>
      ))}
    </div>
  )
}

export default ResultTab
