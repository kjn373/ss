import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React from 'react'

export const ButtonLoader = ({ loading }: { loading: boolean }) => {
  return (
    <div className="flex  items-center gap-x-1">
      <Image
        src={'/admission/button-loader.svg'}
        alt="button loader"
        width={20}
        height={20}
        className={cn('animate-spin transition-all duration-700 size-0', {
          'opacity-100 size-5': loading,
        })}
      />

      <span>Submit</span>
    </div>
  )
}
