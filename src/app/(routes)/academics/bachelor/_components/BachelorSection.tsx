'use client'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { ReactNode, useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TestimonialCard } from '@/app/(home)/_components/Testimonials/TestimonialCard'
import { swiperParams } from '@/app/(home)/_components/Testimonials/TestimonialsSection'
import { ITestimonialResponse } from '@/app/(routes)/testimonials/_interface/testimonial'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { IAcademicsData } from '../../_interface/academic'
import BachelorGallery from './BachelorGallery'
import { staticTestimonialData } from '@/common/data/staticData'

const BachelorSection = ({ detail }: { detail: IAcademicsData }) => {
  const [response, setResponse] = useState<ITestimonialResponse | null>(null)

  useEffect(() => {
    // Use static testimonial data
    const staticResponse: ITestimonialResponse = {
      status: '200',
      message: 'Success',
      data: staticTestimonialData,
      totalCount: staticTestimonialData.length,
    }
    setResponse(staticResponse)
  }, [])

  return (
    <div className="flex flex-col">
      <div className="2lg:w-[787px]">
        <MiniHeading className="text-left">{detail?.title}</MiniHeading>
        <SectionHeading>{detail?.articleTitle}</SectionHeading>
        <BachelorGallery gallery={detail?.image} />
        <div
          className="mt-6 font-workSans font-normal text-base leading-7 text-body break-all"
          dangerouslySetInnerHTML={{ __html: detail?.description }}
        ></div>
      </div>
      {response && response?.data.length > 0 && (
        <>
          <hr className="border-secondary border-dashed my-10" />
          <div className="lg:mt-10 relative 2lg:max-w-[787px]">
            <div className="">
              <h2 className="text-heading text-xl font-poppins font-medium leading-5">
                Our Alumni Success Stories
              </h2>
            </div>
            <div
              id="bachelor-testimonial"
              className="space-x-3 absolute top-0 right-0 w-28 h-12 hidden md:flex "
            >
              <div className="swiper-button-prev">
                <IoIosArrowRoundBack className="text-body text-2xl font-light 2lg:bg-white shadow rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
              <div className="swiper-button-next">
                <IoIosArrowRoundForward className="text-body text-2xl font-light 2lg:bg-white shadow rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
              </div>
            </div>
            <SwiperWrapper>
              {response?.data.map((card) => (
                <SwiperSlide key={card.id} className="!mt-[40px] mx-auto">
                  <TestimonialCard card={card} />
                </SwiperSlide>
              ))}
              <div className="flex justify-center gap-x-4 mt-10 md:hidden">
                <SwiperButtonPrevious>
                  <IoIosArrowRoundBack className="text-body text-2xl font-light" />
                </SwiperButtonPrevious>

                <SwiperButtonNext>
                  <IoIosArrowRoundForward className="text-body text-2xl font-light" />
                </SwiperButtonNext>
              </div>
            </SwiperWrapper>
          </div>
        </>
      )}
    </div>
  )
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="bachelor-testimonial"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
      }}
      slidesPerView={1}
      spaceBetween={65}
      modules={[Pagination, Navigation]}
      loop={true}
      {...swiperParams}
    >
      {children}
    </Swiper>
  )
}

export default BachelorSection
