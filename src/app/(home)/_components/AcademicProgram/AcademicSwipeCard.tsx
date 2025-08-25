'use client'

import React from 'react'
import 'swiper/css'
import { AcademicCards } from './AcademicCards'
import { academicCardsDataOne, academicCardsDataTwo } from './constant/data'
import { SwiperSlide } from 'swiper/react'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { SwiperWrapperAcademicProgram } from '@/common/components/Atom/SwiperWrapper'

export const AcademicSwipeCard = () => {
  return (
    <div className="block md:hidden mt-10">
      <SwiperWrapperAcademicProgram>
        <SwiperSlide className="">
          <AcademicCards
            title={'Plus Two'}
            description={
              'As you begin to consider your career goals choices may appear confusing.'
            }
            color={'bg-primaryLighter'}
            list={academicCardsDataOne}
            type="PLUS_TWO"
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <AcademicCards
            title={'School'}
            description={
              'As you begin to consider your career goals choices may appear confusing.'
            }
            color={'bg-secondaryLighter'}
            list={academicCardsDataTwo}
            type="BACHELOR"
          />
        </SwiperSlide>
        <div className="flex justify-center mt-10 gap-x-4 ">
          <SwiperButtonPrevious>
            <IoIosArrowRoundBack className="text-body text-2xl font-light " />
          </SwiperButtonPrevious>

          <SwiperButtonNext>
            <IoIosArrowRoundForward className="text-body text-2xl font-light" />
          </SwiperButtonNext>
        </div>
      </SwiperWrapperAcademicProgram>
    </div>
  )
}
