import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React from 'react'

export const UiLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'w-full h-full flex justify-center items-center',
        className
      )}
    >
      <Image
        src={'/news/ui-loader.svg'}
        width={32}
        height={32}
        alt="loader"
        className="animate-spin transition-all duration-1000"
      />
    </div>
  )
}
