'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { cn } from '@/common/utils/utils'

type Tab = {
  title: string
  key: string
}

interface TabSwitchProps {
  tabs: Tab[]
  handleDynamicData: (key: string) => void
  className?: string
  setActive: Dispatch<SetStateAction<string>>
  isFieldChange?: boolean
  activeTab: string
}

export const TabSwitch = ({
  tabs,
  handleDynamicData,
  className = '',
  activeTab,
}: TabSwitchProps) => {
  return (
    <div
      className={cn(
        'bg-primaryLighter flex justify-between items-center rounded-[100px] p-2 shadow',
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => handleDynamicData(tab.key)}
          className={cn(
            'font-workSans font-medium text-sm  md:text-[18px] leading-6 px-6 py-4 bg-transparent text-black rounded-[100px] transition-all duration-700',
            {
              'bg-primary text-white': activeTab === tab.key,
            }
          )}
        >
          {tab.title}
        </button>
      ))}
    </div>
  )
}
