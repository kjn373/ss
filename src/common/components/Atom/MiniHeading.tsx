import { cn } from '@/common/utils/utils'
import React, { ReactNode } from 'react'

export const MiniHeading = ({
  children,
  className,
  isMd = false,
}: {
  children: ReactNode
  className?: string
  isMd?: boolean
}) => {
  return (
    <h3
      className={cn(
        'text-[#F58534] text-[12px] 2lg:text-[14px] leading-[21px] tracking-[2px] font-medium font-workSans uppercase text-center md:text-[14px] md:font-semibold',
        className,
        {
          'text-center md:text-left md:text-[14px] focus:outline-none': isMd,
        }
      )}
    >
      {children}
    </h3>
  )
}
