'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { useSwiper } from 'swiper/react'

export const SwiperButtonNext = ({
  children,
  isEnd,
}: {
  children: ReactNode
  isEnd?: boolean
}) => {
  const swiper = useSwiper()

  return (
    <button
      onClick={() => swiper.slideNext()}
      className={cn(isEnd ? 'opacity-25 cursor-not-allowed' : '')}
    >
      {children}
    </button>
  )
}

export const SwiperButtonPrevious = ({
  children,
  isBeginning,
}: {
  children: ReactNode
  isBeginning?: boolean
}) => {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className={cn(isBeginning ? 'opacity-25 cursor-not-allowed' : '')}
    >
      {children}
    </button>
  )
}
