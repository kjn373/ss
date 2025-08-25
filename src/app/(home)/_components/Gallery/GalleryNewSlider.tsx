'use client'

// import React, { useEffect, useState } from 'react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { GalleryCard } from './GalleryCard'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IHomeGalleryResponse, IHomeGallery } from './interface/Gallery'
import { NoDataFound } from '@/common/components/NoDataFound'

const staticGalleryData: IHomeGallery[] = [
  {
    id: '1',
    title: 'Image Title 1',
    photo: {
      key: '/ss/img2.jpg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '2',
    title: 'Image Title 2',
    photo: {
      key: '/ss/img3.jpg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '3',
    title: 'Image Title 3',
    photo: {
      key: '/ss/img4.jpg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '4',
    title: 'Image Title 4',
    photo: {
      key: '/ss/person.jpg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '5',
    title: 'Image Title 5',
    photo: {
      key: '/ss/hero2.jpg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '6',
    title: 'Image Title 6',
    photo: {
      key: '/ss/hero3.jpg',
      bucket: 'static',
      mimeType: 'image/jpeg',
    },
  },
]

export const GallerySlider = () => {
  // Using static gallery data instead of API call
  // const [response, setResponse] = useState<IHomeGalleryResponse | null>({
  const [response] = useState<IHomeGalleryResponse | null>({
    status: 200,
    message: 'Gallery photos retrieved successfully',
    data: staticGalleryData,
    totalCount: staticGalleryData.length,
  })

  // Commented out API fetch - using static data instead
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response: IHomeGalleryResponse | undefined = await UseServerFetch(
  //         `/api/v1/gallery/photos`
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

  const renderGallerySliider = () => {
    if (response?.data.length) {
      return (
        <div className="gallery__slider hidden 2lg:flex 2lg:h-[600px] justify-center items-center">
          {response?.data && (
            <Swiper
              spaceBetween={180}
              slidesPerView={3}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              loop
              modules={[EffectCoverflow, Autoplay]}
              className="w-full h-full !pt-32"
            >
              {response?.data.map((d, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <GalleryCard data={d} isActive={isActive} index={index} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      )
    } else {
      return <NoDataFound title="No Gallery Data Found" />
    }
  }

  return <div>{renderGallerySliider()}</div>
}

export const GalleryMobileSlider = () => {
  // Using static gallery data instead of API call
  // const [response, setResponse] = useState<IHomeGalleryResponse | null>({
  //   status: 200,
  //   message: 'Gallery photos retrieved successfully',
  //   data: staticGalleryData,
  //   totalCount: staticGalleryData.length,
  // })
  const [response] = useState<IHomeGalleryResponse | null>({
    status: 200,
    message: 'Gallery photos retrieved successfully',
    data: staticGalleryData,
    totalCount: staticGalleryData.length,
  })

  // Commented out API fetch - using static data instead
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response: IHomeGalleryResponse | undefined = await UseServerFetch(
  //         `/api/v1/gallery/photos`
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

  const renderGallerySliiderMobile = () => {
    if (response?.data) {
      return (
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            736: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop
        >
          {response?.data.map((d, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <GalleryCard data={d} isActive={isActive} index={index} />
              )}
            </SwiperSlide>
          ))}

          <div className="flex justify-center mt-20 gap-x-4">
            <SwiperButtonPrevious>
              <IoIosArrowRoundBack className="text-body text-2xl font-light " />
            </SwiperButtonPrevious>

            <SwiperButtonNext>
              <IoIosArrowRoundForward className="text-body text-2xl font-light" />
            </SwiperButtonNext>
          </div>
        </Swiper>
      )
    } else {
      return <NoDataFound title="No Gallery Data Found" />
    }
  }

  return (
    <div className="flex justify-center items-center w-full 2lg:hidden">
      {renderGallerySliiderMobile()}
    </div>
  )
}
