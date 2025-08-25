import { cn } from '@/common/utils/utils'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

export const SuccessMessageUi = ({ showMessage }: { showMessage: string }) => {
  return (
    <div
      className={cn(
        'px-4 py-[14px] bg-successBg mx-auto  rounded-xl w-fit flex items-center gap-x-4 mt-4'
      )}
    >
      <FaCheck className="text-success size-4" />
      <span className="text-success font-workSans font-semibold leading-4 text-[14px]">
        {showMessage}
      </span>

      <IoClose className="text-success ml-12 size-4" />
    </div>
  )
}
