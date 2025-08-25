import { cn } from '@/common/utils/utils'
import React from 'react'
import { IoClose } from 'react-icons/io5'

export const CloseButton = ({
  handleClick,
  className,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}) => {
  return (
    <button
      onClick={handleClick}
      className={cn(
        'absolute top-1 right-1 bg-primary size-[32px] rounded-full flex justify-center items-center',
        className
      )}
    >
      <IoClose className="text-white size-5" />
    </button>
  )
}
