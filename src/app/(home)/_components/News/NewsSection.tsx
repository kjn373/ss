'use client'
import { INewsResponseData } from '@/app/(routes)/news/interface/newsType'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import {
  SwiperButtonNext,
  SwiperButtonPrevious,
} from '@/common/components/Atom/SwiperButton'
import { NoDataFound } from '@/common/components/NoDataFound'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { ReactNode, useEffect, useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NewsCard } from './NewsCard'
import './notice.css'
import { newsData } from '@/common/data/staticData'

export const swiperParams = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const NewsSection = () => {
  const [response, setResponse] = useState<INewsResponseData | null>(null)
  const [swiperReady, setSwiperReady] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load static data after component mounts to avoid hydration mismatch
    setResponse(newsData)
    setSwiperReady(true)
  }, [])

  // Commented out dynamic data fetching
  // useEffect(() => {
  //   const fetchNewsAndNoticeList = async () => {
  //     try {
  //       const newsNoticeData: INewsResponseData | undefined =
  //         await UseServerFetch(`/api/v1/news-and-notice/type/NEWS`)
  //       if (newsNoticeData) {
  //         setResponse(newsNoticeData)
  //         setSwiperReady(true)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching news data:', error)
  //     }
  //   }

  //   fetchNewsAndNoticeList()
  // }, [])

  const renderNewsUi = () => {
    if (response?.data && response.data.length > 0) {
      return (
        <div className="relative">
          <div className="flex justify-center md:justify-between items-center relative">
            <div className="">
              <MiniHeading className="md:text-start">
                News and Events
              </MiniHeading>
              <SectionHeading className="mt-2 text-center md:text-left !text-[28px]">
                News and Events
              </SectionHeading>
            </div>
            {response && response.data.length > 1 && (
              <>
                <div
                  id="testimonial"
                  className="space-x-3 absolute bottom-0 right-0 w-24 h-8 hidden md:flex"
                >
                  <div className="swiper-button-prev">
                    <IoIosArrowRoundBack className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
                  </div>
                  <div className="swiper-button-next">
                    <IoIosArrowRoundForward className="text-body 2lg:bg-white rounded-full 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
                  </div>
                </div>
              </>
            )}
          </div>
          {response.data.length > 1 && swiperReady ? (
            <SwiperWrapper>
              {response.data.map((news) => (
                <SwiperSlide key={news.id} className="mt-10 mx-auto max-h-4">
                  <NewsCard news={news} />
                </SwiperSlide>
              ))}

              <div className="md:hidden flex justify-center mt-10 gap-x-4 absolute bottom-8 left-1/2 -translate-x-1/2 z-50 w-fit h-fit">
                <SwiperButtonPrevious>
                  <IoIosArrowRoundBack className="text-body 2lg:bg-white rounded-full size-8 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
                </SwiperButtonPrevious>
                <SwiperButtonNext>
                  <IoIosArrowRoundForward className="text-body 2lg:bg-white rounded-full size-8 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white" />
                </SwiperButtonNext>
              </div>
            </SwiperWrapper>
          ) : (
            response &&
            response.data.map((news) => (
              <div className="mt-10 h-[465px]" key={news.id}>
                <NewsCard news={news} />
              </div>
            ))
          )}
        </div>
      )
    } else {
      return (
        <div className="">
          <MiniHeading className="md:text-start">News and Events</MiniHeading>
          <SectionHeading className="mt-2 text-center md:text-left">
            News and Events
          </SectionHeading>
          <NoDataFound title="No News Data Found" />
        </div>
      )
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="">
        <MiniHeading className="md:text-start">News and Events</MiniHeading>
        <SectionHeading className="mt-2 text-center md:text-left !text-[28px]">
          News and Events
        </SectionHeading>
        <div className="mt-10 animate-pulse">
          <div className="h-[465px] bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div>{renderNewsUi()}</div>
    </>
  )
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="news"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        992: { slidesPerView: 2, spaceBetween: 10 },
      }}
      spaceBetween={25}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      loop
      className="!h-[475px] sm:h-auto relative"
      {...swiperParams}
    >
      {children}
    </Swiper>
  )
}

export default NewsSection
