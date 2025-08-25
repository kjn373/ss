'use client'

import { cn } from '@/common/utils/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { Dispatch, SetStateAction, useRef } from 'react'

gsap.registerPlugin(Flip)
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
  disabledTab?: string[]
  isEvent?: boolean
}

export const TabAnimation = ({
  tabs,
  handleDynamicData,
  className = '',
  activeTab,
  disabledTab,
  isEvent,
}: TabSwitchProps) => {
  const activeBarRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<(HTMLDivElement | null)[]>([])

  const getActiveIndex = (tabs: Tab[], activeTab: string) => {
    return tabs.findIndex((tab) => tab.key === activeTab)
  }

  const activeIndex = getActiveIndex(tabs, activeTab)

  useGSAP(
    () => {
      const handleTabClick = (index: number) => {
        if (!activeBarRef.current || !tabRefs.current[index]) return

        const state = Flip.getState(activeBarRef.current)

        tabRefs.current[index]?.appendChild(activeBarRef.current)

        Flip.from(state, {
          absolute: true,
          scale: true,
          duration: 0.6,
          ease: 'back.inOut',
        })
      }
      handleTabClick(activeIndex)
    },
    { dependencies: [activeTab] }
  )

  return (
    <div
      className={cn(
        'tabs bg-primaryLighter flex  items-center  rounded-[100px] shadow ',
        className,
        isEvent ? 'px-2 md:p-2' : 'p-2'
      )}
    >
      {tabs &&
        tabs.map((tab, index) => (
          <div
            onClick={() => {
              if (tab.key !== activeTab && !disabledTab?.includes(tab.key)) {
                handleDynamicData(tab.key)
              }
            }}
            key={tab.key}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            className={cn(
              `tab-item py-4 flex justify-center items-center relative  px-6 cursor-pointer ${
                activeTab === tab.key ? 'active pointer-events-none' : ''
              } ${
                disabledTab?.includes(tab.key) &&
                'opacity-15 cursor-not-allowed '
              }`
            )}
          >
            <span
              className={cn(
                'text-black transition-colors duration-1000 z-10 font-workSans font-medium text-[18px] leading-6',
                {
                  'text-white transition-colors duration-1000 pointer-events-none':
                    activeTab === tab.key,
                }
              )}
            >
              {tab.title}
            </span>
            {index === 0 && (
              <div
                ref={activeBarRef}
                className={cn(
                  'tab-active-bar left-0  right-0 top-1/2 -translate-y-1/2 bg-primary absolute rounded-[100px] z-0',
                  className,
                  isEvent ? 'h-10 md:h-[56px]' : 'h-[56px]'
                )}
              />
            )}
          </div>
        ))}
    </div>
  )
}
