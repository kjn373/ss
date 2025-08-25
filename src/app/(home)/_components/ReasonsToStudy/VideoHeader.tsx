import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { IHomepageItem } from '@/app/(routes)/contact/_interface/Contact'

export const VideoHeader = ({
  settings, // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  settings: IHomepageItem[] | undefined
}) => {
  // Dynamic logic commented out - now using static data
  // const filterStats = settings?.filter((d) =>
  //   ['Trending Courses', 'Qualified Teachers'].includes(d.key)
  // )

  // Static data for display
  const staticStats = [
    { key: 'Trending Courses', value: '50+' },
    { key: 'Qualified Teachers', value: '100+' },
  ]

  return (
    <div className="hidden md:flex p-6 bg-primary items-center gap-x-6  rounded-[8px]">
      {staticStats.map((d) => {
        const isTrendingCourse = d.key === 'Trending Courses'

        return (
          <div key={d.key} className="flex items-center gap-x-6">
            {isTrendingCourse ? (
              <Image
                src={'/ss/course.svg'}
                width={64}
                height={64}
                alt="Trending course icon"
              />
            ) : (
              <Image
                src={'/ss/teachers.svg'}
                width={64}
                height={64}
                alt="Trending course icon"
              />
            )}

            <div className="flex flex-col  w-[166px]">
              <span className="font-workSans text-[20px] font-semibold leading-[30px] text-white">
                {d.value}
              </span>
              <p className="text-[14px] leading-[21px] font-normal font-workSans text-white">
                {d.key}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const VideoHeaderMobile = ({
  settings, // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  settings: IHomepageItem[] | undefined
}) => {
  // Dynamic logic commented out - now using static data
  // const filterStats = settings?.filter((d) =>
  //   ['Trending Courses', 'Qualified Teachers'].includes(d.key)
  // )

  // Static data for display
  const staticStats = [
    { key: 'Trending Courses', value: '50+' },
    { key: 'Qualified Teachers', value: '100+' },
  ]

  return (
    <div className="py-3 pl-3 pr-6 bg-primary flex flex-col  items-center gap-x-6 h-[66px] overflow-hidden   rounded-[12px] md:hidden">
      <Swiper
        direction={'vertical'}
        spaceBetween={20}
        height={52}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {staticStats.map((d) => {
          const isTrendingCourse = d.key === 'Trending Courses'

          return (
            <SwiperSlide key={d.key}>
              <div className="flex items-center gap-x-4 ">
                {isTrendingCourse ? (
                  <Image
                    src={'/home/book.svg'}
                    width={40}
                    height={40}
                    alt="Trending course icon"
                    className="size-10 bg-primaryDark rounded-full p-1 "
                  />
                ) : (
                  <Image
                    src={'/home/teacher.svg'}
                    width={64}
                    height={64}
                    alt="Trending course icon"
                    className="size-10 bg-primaryDark rounded-full p-1 "
                  />
                )}

                <div className="flex flex-col">
                  <span className="font-workSans text-[16px] font-semibold leading-[24px]  text-white">
                    {d.value}
                  </span>
                  <p className="text-[12px] leading-[18px] font-normal font-workSans text-white">
                    {d.key}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
