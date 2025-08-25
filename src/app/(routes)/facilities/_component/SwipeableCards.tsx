'use client'

import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { Dispatch, SetStateAction } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Images } from '../interface/facilityInterface'

export const SwipeableCards = ({
  setActiveSrc,
  data,
}: {
  setActiveSrc: Dispatch<SetStateAction<string | null>>
  data: Images
}) => {
  return (
    <div className="2lg:overflow-x-hidden md:max-w-[324px]   2lg:max-w-[503px]  ">
      <Swiper
        breakpoints={{
          300: { slidesPerView: 3, spaceBetween: 20 },
          600: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
        spaceBetween={5}
        slidesPerView={3}
        loop
        className="relative "
      >
        {data &&
          data.key.map((d, i) => (
            <SwiperSlide key={i} onClick={() => setActiveSrc(d)}>
              <ImageWithPlaceholder
                src={d}
                width={152}
                height={152}
                className="size-[152px] object-cover rounded-[12px] cursor-pointer"
                alt="facilites school"
              />
            </SwiperSlide>
          ))}
        {data && data.key.length > 2 && (
          <>
            <div className="absolute right-[3px] top-1/2 -translate-y-1/2 z-10">
              <SwiperButtonNext>
                <IoIosArrowRoundForward className="text-body text-2xl font-light bg-white rounded-full size-7" />
              </SwiperButtonNext>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ">
              <SwiperButtonPrevious>
                <IoIosArrowRoundBack className="text-body text-2xl font-light bg-white rounded-full size-7" />
              </SwiperButtonPrevious>
            </div>
          </>
        )}
      </Swiper>
    </div>
  )
}
