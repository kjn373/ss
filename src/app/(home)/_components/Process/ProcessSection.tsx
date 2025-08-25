import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React from 'react'
import { ProcessCards } from './ProcessCards'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'

const ProcessSection = () => {
  return (
    <HomeWrapper isBg>
      <div>
        <MiniHeading isMd className="2lg:text-center">
          Process
        </MiniHeading>
        <h1 className="font-poppins font-medium text-[28px] sm:text-[38px] leading-4 sm:leading-[49.4px] mt-2 text-center md:text-start 2lg:text-center">
          Admission Process
        </h1>
        <ProcessCards />
      </div>
    </HomeWrapper>
  )
}

export default ProcessSection
