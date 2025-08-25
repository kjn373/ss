import React from 'react'
import { RiLoader4Line } from 'react-icons/ri'

export const PdfLoader = () => {
  return (
    <div className="min-w-[300px] h-[70vh] 2lg:w-[595px] flex justify-center items-center 2lg:h-[792px] ">
      <RiLoader4Line className="size-12 text-primary animate-spin" />
    </div>
  )
}
