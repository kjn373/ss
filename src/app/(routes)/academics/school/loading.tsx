import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className={cn('w-full h-full flex justify-center items-center')}>
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

export default loading
