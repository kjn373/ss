'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import Link from 'next/link'
import { IFacilityData } from '../interface/facilityInterface'

const FacilitiesSwiper = ({ data }: { data: IFacilityData[] | undefined }) => {
  return (
    <div className="w-full max-w-full flex-shrink-0">
      <>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 40 },
            1280: { slidesPerView: 3.5, spaceBetween: 20 }, // 3 and a half slides at desktop width
          }}
          //   modules={[Pagination]}
          className="mySwiper"
        >
          {data &&
            data.map((facility: IFacilityData) => (
              <SwiperSlide key={facility.slug} className="flex-shrink-0">
                <div className="w-[292px] h-[431px] flex flex-col gap-y-4 mx-auto">
                  <p className="font-poppins font-medium text-xl capitalize leading-[26px] text-heading text-center sm:text-start">
                    {facility?.facilityTitle}
                  </p>
                  <Link href={`/facilities/${facility.slug}`}>
                    <ImageWithPlaceholder
                      // src={facility.images ? facility.images.key[0] : undefined}
                      src={facility.images.key[0]}
                      width={292}
                      height={389}
                      alt="card"
                      className="rounded-xl object-cover w-[292px] h-[389px]"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    </div>
  )
}

export default FacilitiesSwiper
