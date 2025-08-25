import { cn } from '@/common/utils/utils'
import React, { ReactNode } from 'react'

export const CircleCardWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "p-6 bg-background  relative overflow-hidden rounded-3xl bg-[url('/news/circle-bg.svg')] bg-no-repeat ",
        className
      )}
    >
      {children}
    </div>
  )
}
