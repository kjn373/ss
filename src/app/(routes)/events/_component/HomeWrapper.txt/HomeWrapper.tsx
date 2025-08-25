import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export const HomeWrapper = ({
  children,
  className,
  isBg = false,
}: {
  children: ReactNode
  className?: string
  isBg?: boolean
}) => {
  return (
    <div
      className={cn(
        'w-full px-4 md:px-12 lg:px-[60px] 2xl:[200px] 2xl_lg:px-[240px]  3xl:px-[310px]  5xl:px-[540px]  py-[56px] ',
        className,
        {
          'bg-background py-[56px]  md:py-[80px]': isBg,
        }
      )}
    >
      {children}
    </div>
  )
}
