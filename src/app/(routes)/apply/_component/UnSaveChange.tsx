import { Button } from '@/common/components/Atom/Button'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

export const UnSaveChange = ({
  setOpen,
  handleConfirm,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  handleConfirm: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <div className="max-w-[400px] bg-background rounded-xl">
      <div className="px-10   flex flex-col items-center py-8 gap-y-6 bg-white rounded-xl ">
        <Image
          width={56}
          height={56}
          alt="unsave icon"
          src={'/admission/unsave.svg'}
        />
        <h2 className="text-heading font-medium text-[20px] leading-[26px] text-center font-poppins">
          You have unsaved changes!
        </h2>
        <p className="font-normal font-workSans text-[16px] leading-[27.2px] text-center ">
          If you leave this page, all your input will be lost. Are you sure you
          want to proceed?
        </p>
      </div>
      <div className="flex justify-center gap-x-2  w-full h-full py-4">
        <Button onClick={() => setOpen(false)} variant={'outline'}>
          Cancel
        </Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </div>
    </div>
  )
}
