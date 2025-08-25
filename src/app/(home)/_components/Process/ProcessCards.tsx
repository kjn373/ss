'use client'
import React, { ReactNode } from 'react'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'

import './process.css'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const steps = [
  {
    number: '01',
    title: 'Inquiry',
    description:
      'Submit an inquiry form through our website or contact our admissions office to express your interest.',
    icon: '/home/inquiry.svg',
  },
  {
    number: '02',
    title: 'Application Form',
    description:
      "Complete the application form and provide the required documents, including child's birth certificate.",
    icon: '/home/form.svg',
  },
  {
    number: '03',
    title: 'Student Assessment',
    description:
      'For certain age groups, a student assessment may be conducted to understand their developmental progress.',
    icon: '/home/assessment.svg',
  },
  {
    number: '04',
    title: 'Acceptance',
    description:
      'Once the admission process is complete, you will receive an official acceptance letter from SS College.',
    icon: '/home/awards.svg',
  },
]

export const ProcessCards = () => {
  return (
    <>
      <div className="relative hidden 2lg:block">
        <Image
          src="/home/processline1.svg"
          width={173}
          height={45}
          alt="line 1"
          className="absolute top-[313px] left-[113px]"
        />
        <Image
          src="/home/processline2.svg"
          width={173}
          height={45}
          alt="line 2"
          className="absolute top-[18px] left-[417px]"
        />
        <Image
          src="/home/processline3.svg"
          width={219}
          height={69}
          alt="line 3"
          className="absolute top-0 left-[898px]"
        />
        <div className="process-cards-container mt-[40px] relative ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card hover:shadow-md transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-6 -right-6 w-[82px] h-[82px] bg-[#CDDFED] rounded-full flex items-center justify-center">
                <Image
                  width={32}
                  height={32}
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-[32px] h-[32px] mt-5 mr-5"
                />
              </div>
              <h1 className="text-[48px] font-poppins leading-[62.4px] text-[#DBDBDB]">
                {step.number}
              </h1>
              <h2 className="font-poppins text-xl font-semibold text-gradient">
                {step.title}
              </h2>
              <p className="text-[16px] font-workSans font-normal leading-[27.2px] text-[#5D5F69]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="2lg:hidden">
        <SwiperWrapper>
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="mt-10">
                <div
                  key={index}
                  className="process-card-mbl hover:shadow-md transition-all duration-500 mx-auto"
                >
                  <div className="absolute -top-6 -right-6 w-[82px] h-[82px] bg-primaryLight rounded-full flex items-center justify-center">
                    <Image
                      width={32}
                      height={32}
                      src={step.icon}
                      alt={`${step.title} icon`}
                      className="w-[32px] h-[32px] mt-5 mr-5"
                    />
                  </div>
                  <h1 className="text-[48px] font-poppins leading-[62.4px] text-[#DBDBDB]">
                    {step.number}
                  </h1>
                  <h2 className="font-poppins text-xl font-semibold text-gradient">
                    {step.title}
                  </h2>
                  <p className="text-[16px] font-workSans font-normal leading-[27.2px] text-body">
                    {step.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center gap-x-4 mt-10 2lg:hidden">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body text-2xl font-light " />
            </SwiperButtonPrevious>

            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body text-2xl font-light" />
            </SwiperButtonNext>
          </div>
        </SwiperWrapper>
      </div>
    </>
  )
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="hero"
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={15}
      slidesPerView={1}
      // centeredSlides={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      loop={true}
    >
      {children}
    </Swiper>
  )
}
