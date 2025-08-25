'use client'
import { swiperParams } from '@/app/(home)/_components/Testimonials/TestimonialsSection'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { TestimonialCard } from '@/app/(home)/_components/Testimonials/TestimonialCard'
import { ITestimonialResponse } from '@/app/(routes)/testimonials/_interface/testimonial'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { NoDataFound } from '@/common/components/NoDataFound'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { ReactNode, useEffect, useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IAcademicsData } from '../../_interface/academic'
import { cn } from '@/common/utils/utils'
import { CheckIsIos } from '@/common/hook/useIos'
import { staticTestimonialData } from '@/common/data/staticData'

const AcademicDetailSection = ({ detail }: { detail: IAcademicsData }) => {
  const [response, setResponse] = useState<ITestimonialResponse | null>(null)
  const isIos = CheckIsIos()

  useEffect(() => {
    // Commented out API fetching logic - now using static data
    // const fetchData = async () => {
    //   try {
    //     const response: ITestimonialResponse | undefined = await UseServerFetch(
    //       `/api/v1/testimonial?page=${1}&pageSize=${6}`
    //     )

    //     if (response) {
    //       setResponse(response)
    //     }
    //   } catch (error) {
    //     console.error('Error fetching testimonials:', error)
    //   }
    // }

    // fetchData()

    // Use static testimonial data
    const staticResponse: ITestimonialResponse = {
      status: '200',
      message: 'Success',
      data: staticTestimonialData,
      totalCount: staticTestimonialData.length,
    }
    setResponse(staticResponse)
  }, [])

  const renderAcademicDetailUi = () => {
    if (response?.data) {
      return (
        <div className="2lg:w-[787px]">
          <MiniHeading className="text-left">{detail?.title}</MiniHeading>
          <SectionHeading>{detail?.articleTitle}</SectionHeading>
          <div className="flex gap-x-5 my-4">
            {detail &&
              detail.image?.key.map((imageKey, index) => (
                <div
                  key={imageKey}
                  className={index === 1 ? 'mt-10 md:mt-28' : ''}
                >
                  <ImageWithPlaceholder
                    // src={imageKey ? imageKey : undefined}
                    src="/ss/img2.jpg"
                    width={246}
                    height={454}
                    alt={`Image ${index + 1}`}
                    className="h-[191px] md:h-[388px] 2lg:w-[246px] 2lg:h-[454px] rounded-xl object-cover"
                  />
                </div>
              ))}
          </div>
          <div
            className="font-workSans font-normal text-base leading-7 text-body break-all"
            dangerouslySetInnerHTML={{ __html: detail?.description }}
          ></div>
          {/* Testimonials  */}
          {response && response.data.length > 0 && (
            <>
              <hr className="border-secondary border-dashed my-10" />
              <div className="mt-10 relative 2lg:max-w-[787px]">
                <div className="">
                  <h2 className="text-heading text-xl font-poppins font-medium leading-5">
                    Our Happy Students
                  </h2>
                </div>
                <div
                  id="testimonial"
                  className={cn(
                    'space-x-3 absolute -top-2 sm:top-0 right-0 w-24 h-12 flex'
                  )}
                >
                  <div className="swiper-button-prev">
                    <IoIosArrowRoundBack
                      className={cn(
                        'text-body text-2xl font-light 2lg:bg-white rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white shadow-md',
                        {
                          'drop-shadow shadow-none': isIos,
                        }
                      )}
                    />
                  </div>
                  <div className="swiper-button-next">
                    <IoIosArrowRoundForward
                      className={cn(
                        'text-body text-2xl font-light 2lg:bg-white rounded-full w-10 h-10 2lg:hover:bg-secondary transition-all duration-300 2lg:hover:text-white shadow-md',
                        {
                          'drop-shadow shadow-none': isIos,
                        }
                      )}
                    />
                  </div>
                </div>
                <SwiperWrapper>
                  {response?.data.map((card) => (
                    <SwiperSlide key={card.id} className="!mt-[40px] mx-auto">
                      <TestimonialCard card={card} />
                    </SwiperSlide>
                  ))}
                </SwiperWrapper>
              </div>
            </>
          )}
        </div>
      )
    } else if (response?.data.length === 0) {
      return <NoDataFound title="No Data Found" />
    }
  }

  return <div>{renderAcademicDetailUi()}</div>
}

const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      id="testimonial"
      breakpoints={{
        528: { slidesPerView: 1 },
        728: { slidesPerView: 2 },
        // 992: { slidesPerView: 2, spaceBetween: 10 },
        // 1200: { slidesPerView: 3 },
      }}
      slidesPerView={1}
      spaceBetween={65}
      modules={[Pagination, Navigation]}
      loop={true}
      {...swiperParams}
      className="!mt-2 sm:!mt-0"
    >
      {children}
    </Swiper>
  )
}

export default AcademicDetailSection
