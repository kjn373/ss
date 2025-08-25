import Image from 'next/image'
import React from 'react'

export const NoDataFound = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 p-12 w-full ">
      <Image
        src={'/downloads/no-data-found.png'}
        width={72}
        height={72}
        alt="No data found"
        className="size-[72px] pointer-events-none"
      />
      <span className="font-workSans font-medium text-[16px] leading-4 text-center text-heading">
        {title}
      </span>
    </div>
  )
}
