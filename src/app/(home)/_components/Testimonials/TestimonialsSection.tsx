'use client'
// import { useEffect, useState } from 'react'
import { useState } from 'react'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import './testimonial.css'
import { TestimonialCard } from './TestimonialCard'

// import {
//   ITestimonialResponse,
//   ITestimonialData,
// } from '@/app/(routes)/testimonials/_interface/testimonial'
import { ITestimonialResponse } from '@/app/(routes)/testimonials/_interface/testimonial'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { NoDataFound } from '@/common/components/NoDataFound'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperSlide } from 'swiper/react'
import { SwiperWrapper } from '@/common/components/SwiperWrapper'
import { staticTestimonialData } from '@/common/data/staticData'

export const swiperParams = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const TestimonialsSection = () => {
  // Using static data instead of API call
  // const [response, setResponse] = useState<ITestimonialResponse | null>({
  //   status: 'success',
  //   message: 'Testimonials retrieved successfully',
  //   data: staticTestimonialData,
  //   totalCount: staticTestimonialData.length,
  // })
  const [response] = useState<ITestimonialResponse | null>({
    status: 'success',
    message: 'Testimonials retrieved successfully',
    data: staticTestimonialData,
    totalCount: staticTestimonialData.length,
  })

  // using static data instead
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response: ITestimonialResponse | undefined = await UseServerFetch(
  //         `/api/v1/testimonial?page=${1}&pageSize=${6}`
  //       )

  //       if (response) {
  //         setResponse(response)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching testimonials:', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  const renderTestimonialUi = () => {
    if (response?.data.length) {
      const isSingleCard = response.data.length === 1
      return (
        <div className="relative selection:bg-transparent">
          <div className="flex justify-center md:justify-between items-center relative">
            <div className="">
              <MiniHeading isMd>Testimonials</MiniHeading>
              <SectionHeading className="!text-center !md:text-start">
                Student&apos;s Success Stories
              </SectionHeading>
            </div>
            {response?.data.length > 3 && (
              <div
                id="testimonial"
                className="space-x-3 absolute bottom-0 right-0 w-28 h-8 hidden md:flex "
              >
                <div className="swiper-button-prev">
                  <IoIosArrowRoundBack className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
                </div>
                <div className="swiper-button-next">
                  <IoIosArrowRoundForward className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
                </div>
              </div>
            )}
          </div>
          <SwiperWrapper>
            {response?.data.slice(0, 10).map((card) => (
              <SwiperSlide
                key={card.id}
                className={`!mt-[40px] ${isSingleCard ? '!ml-0' : '!ml-auto'}`}
              >
                <TestimonialCard card={card} />
              </SwiperSlide>
            ))}
            {response.data.length > 1 && (
              <div className="flex justify-center gap-x-4 mt-10 md:hidden">
                <SwiperButtonPrevious>
                  <IoIosArrowRoundBack className="text-body text-2xl font-light " />
                </SwiperButtonPrevious>

                <SwiperButtonNext>
                  <IoIosArrowRoundForward className="text-body text-2xl font-light" />
                </SwiperButtonNext>
              </div>
            )}
          </SwiperWrapper>
        </div>
      )
    } else {
      return (
        <div className="">
          <MiniHeading isMd>Testimonials</MiniHeading>
          <SectionHeading isMd className="mt-2">
            Our Happy Students
          </SectionHeading>
          <NoDataFound title="No Testimonial Data Found" />
        </div>
      )
    }
  }

  return <HomeWrapper isBg>{renderTestimonialUi()}</HomeWrapper>
}

export default TestimonialsSection
