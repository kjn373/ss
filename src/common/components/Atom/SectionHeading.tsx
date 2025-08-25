import { cn } from '@/common/utils/utils'
import React, { ReactNode } from 'react'

export const SectionHeading = ({
  children,
  className,
  isMd = false,
}: {
  children: ReactNode
  className?: string
  isMd?: boolean
}) => {
  return (
    <span
      className={cn(
        'font-poppins text-[28px] text-heading  2lg:text-[38px] md:text-left md:text-[38px] md:leading-[49.4px] leading-[36.4px]  2lg:leading-[49.4px] font-medium text-left',
        className,
        {
          'md:text-left md:text-[38px] md:leading-[49.4px]': isMd,
        }
      )}
    >
      {children}
    </span>
  )
}
