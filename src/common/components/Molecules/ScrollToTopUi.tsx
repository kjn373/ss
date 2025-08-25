'use client'

import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const ScrollToTopUi = ({ layout }: { layout: string }) => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false)
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  useEffect(() => {
    const getHomeLayout = document?.querySelector(layout)
    const handleScroll = () => {
      const scrollPosition = getHomeLayout?.scrollTop
        ? getHomeLayout?.scrollTop
        : 0
      const scrollThreshold = 10
      const maxScrollHeight =
        getHomeLayout &&
        getHomeLayout?.scrollHeight - getHomeLayout?.clientHeight

      setShowScrollButton(scrollPosition > scrollThreshold)
      setScrollProgress(
        maxScrollHeight ? (scrollPosition / maxScrollHeight) * 100 : 0
      )
    }
    getHomeLayout?.addEventListener('scroll', handleScroll)
    return () => getHomeLayout?.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToTop = () => {
    const getHomeLayout = document?.querySelector(layout)

    getHomeLayout?.scroll({
      behavior: 'smooth',
      top: 0,
    })
  }

  const radius = 19.5
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset =
    circumference - circumference * (scrollProgress / 100)

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'rounded-full fixed bottom-[0%] right-12 z-[99] size-12 opacity-0  pointer-events-none  transition-all duration-300',
        {
          'opacity-100 bottom-[5%] pointer-events-auto duration-300 transition-all ':
            showScrollButton,
        }
      )}
    >
      <div className="size-12 flex justify-center items-center  relative rounded-full border border-[#F7DCC4] bg-white">
        <svg
          width="48"
          height="48"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <circle
            cx="19.8"
            cy="19.8"
            r="19.5"
            stroke="#FFA86A"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 0s linear',
            }}
          />
        </svg>
        <Image
          width={16}
          height={10}
          alt="top arrow"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          src={'/others/scroll-top-arrow.svg'}
        />
      </div>
    </button>
  )
}
