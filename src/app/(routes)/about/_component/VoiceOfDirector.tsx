'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { Swiper as SwiperClass } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './about.css'
// import { IVoiceOfManagementResponse } from '../_interface/About'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
// import { NoDataFound } from '@/common/components/NoDataFound'
// import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { CheckIsIos } from '@/common/hook/useIos'
import { cn } from '@/common/utils/utils'

// Static data moved outside component to be accessible by SwiperWrapper
const staticData = [
  {
    id: '1',
    description:
      '<p>Welcome to SS College, where we believe in nurturing young minds to become global citizens. description:Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores asperiores doloremque, modi ex nemo beatae nihil recusandae exercitationem neque, nisi amet, id atque labore enim ipsam vitae harum debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores asperiores doloremque, modi ex nemo beatae nihil recusandae exercitationem neque, nisi amet, id atque labore enim ipsam vitae harum debitis!</p>',
    Team: {
      id: '1',
      name: 'Rajan Prasad Kaphle',
      position: 'Principal',
      image: '/ss/principal.jpg',
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '2',
    description:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores asperiores doloremque, modi ex nemo beatae nihil recusandae exercitationem neque, nisi amet, id atque labore enim ipsam vitae harum debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores asperiores doloremque, modi ex nemo beatae nihil recusandae exercitationem neque, nisi amet, id atque labore enim ipsam vitae harum debitis!</p>',
    Team: {
      id: '2',
      name: 'Jeeban Shrestha',
      position: 'Chairman',
      image: '/ss/chairman.jpg',
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
]

const VoiceOfDirector = () => {
  // const [response, setResponse] = useState<IVoiceOfManagementResponse | null>(
  //   null
  // )

  const isIos = CheckIsIos()

  const [activeIndex, setActiveIndex] = useState(0)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const voiceData = await UseServerFetch<IVoiceOfManagementResponse>(
  //         '/api/v1/voice-of-management'
  //       )
  //       if (voiceData) {
  //         setResponse(voiceData)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  const RenderVoiceOfDirectorUi = () => {
    // Using static data instead of API response
    return (
      <div className="max-w-[1230px] mx-auto relative">
        <SwiperWrapper
          className="flex flex-col-reverse md:flex-col gap-[40px]"
          paginationData={staticData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {staticData.map((voice, index) => (
            <SwiperSlide key={index}>
              <div
                className={cn(
                  'relative justify-between md:gap-[40px] lg:gap-[80px] p-4 w-full flex flex-col md:flex-row-reverse'
                )}
              >
                <div
                  className={cn(
                    'relative  lg:max-w-[552px] md:mt-[18px] h-[382px] md:h-[462px] lg:h-[726px]',
                    {
                      '2lg:w-[520px]': isIos,
                    }
                  )}
                >
                  {/* Background shape */}
                  <div className="absolute bg-[#187EC0] w-[200px] 2lg:w-[289px] h-[226px] 2lg:h-[389px] right-0 -top-4 rounded-tr-3xl" />

                  {/* Image placeholder instead of actual image */}
                  <ImageWithPlaceholder
                    src={voice.Team.image} // Using placeholder instead of actual image
                    width={528}
                    height={693}
                    alt={`${voice.Team.name} - ${voice.Team.position}`}
                    className="w-[97%] md:w-[95%] 2lg:w-[97%] h-[382px] md:h-[462px] lg:h-[726px] object-cover rounded-xl relative"
                  />

                  {/* Social icons container */}
                  <div className="absolute bottom-8 left-8 bg-secondary rounded-xl z-10">
                    <ul className="flex gap-4 p-4">
                      <Link
                        href="#"
                        className="flex justify-center items-center text-white cursor-not-allowed"
                      >
                        <FaXTwitter className="w-4 h-4" />
                      </Link>
                      <Link
                        href="#"
                        className="flex justify-center items-center text-white cursor-not-allowed"
                      >
                        <FaFacebookF className="w-4 h-4" />
                      </Link>
                      <Link
                        href="#"
                        className="flex justify-center items-center text-white cursor-not-allowed"
                      >
                        <AiFillInstagram className="w-[18px] h-[18px]" />
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="md:max-w-[304px] lg:max-w-[500px] 2lg:max-w-[608px]">
                  <h1 className="font-poppins text-[28px] lg:text-[38px] font-medium mt-11 md:mt-0 2lg:mt-11 leading-[49px]">
                    Voice Of {voice?.Team?.position}
                  </h1>
                  <div
                    className="text-body font-workSans font-normal text-base leading-7 mt-6 break-all"
                    dangerouslySetInnerHTML={{ __html: voice.description }}
                  />
                  <h2 className="font-workSans font-medium text-lg leading-6 mt-6">
                    {voice.Team.name}
                  </h2>
                  <p className="font-poppins font-normal text-base leading-4 mt-2">
                    {voice.Team.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>
    )

    // Original dynamic data logic (commented out)
    // if (!response || !response.data) {
    //   return (
    //     <div className="text-center mt-10">
    //       <MiniHeading className="text-start">Voice Of Directors</MiniHeading>
    //       <NoDataFound title="No Voice of Directors Found" />
    //     </div>
    //   )
    // }

    // return (
    //   <div className="max-w-[1230px] mx-auto relative">
    //     <SwiperWrapper
    //       className="flex flex-col-reverse md:flex-col gap-[40px]"
    //       paginationData={response.data}
    //       activeIndex={activeIndex}
    //       setActiveIndex={setActiveIndex}
    //     >
    //       {response.data.map((voice, index) => (
    //         <SwiperSlide key={index}>
    //           <div
    //             className={cn(
    //               'relative justify-between md:gap-[40px] lg:gap-[80px] p-4 w-full flex flex-col md:flex-row-reverse'
    //             )}
    //           >
    //             <div
    //               className={cn(
    //                 'relative  lg:max-w-[552px] md:mt-[18px] h-[382px] md:h-[462px] lg:h-[726px]',
    //                 {
    //                   '2lg:w-[520px]': isIos,
    //                 }
    //               )}
    //             >
    //               {/* Background shape */}
    //               <div className="absolute bg-[#187EC0] w-[200px] 2lg:w-[289px] h-[226px] 2lg:h-[389px] right-0 -top-4 rounded-tr-3xl" />

    //               {/* Image */}
    //               <ImageWithPlaceholder
    //                 src={voice.Team.image ? voice.Team.image.key : undefined}
    //                 width={528}
    //                 height={693}
    //                 alt="Brochure image"
    //                 className="w-[97%] md:w-[95%] 2lg:w-[97%] h-[382px] md:h-[462px] lg:h-[726px] object-cover rounded-xl relative"
    //               />

    //               {/* Social icons container */}
    //               <div className="absolute bottom-8 left-8 bg-secondary rounded-xl z-10">
    //                 <ul className="flex gap-4 p-4">
    //                   <Link
    //                     // href={voice.Team.twitter || '#'}
    //                     href="#"
    //                     target={voice.Team.twitter ? '_blank' : '_self'}
    //                     className={`flex justify-center items-center text-white ${
    //                       !voice.Team.twitter ? 'cursor-not-allowed' : ''
    //                     }`}
    //                   >
    //                     <FaXTwitter className="w-4 h-4" />
    //                   </Link>
    //                   <Link
    //                     // href={voice.Team.facebook || '#'}
    //                     href="#"
    //                     target={voice.Team.facebook ? '_blank' : '_self'}
    //                     className={`flex justify-center items-center text-white ${
    //                       !voice.Team.facebook ? 'cursor-not-allowed' : ''
    //                     }`}
    //                   >
    //                     <FaFacebookF className="w-4 h-4" />
    //                   </Link>
    //                   <Link
    //                     // href={voice.Team.instagram || '#'}
    //                     href="#"
    //                     target={voice.Team.instagram ? '_blank' : '_self'}
    //                     className={`flex justify-center items-center text-white ${
    //                       !voice.Team.instagram ? 'cursor-not-allowed' : ''
    //                     }`}
    //                   >
    //                     <AiFillInstagram className="w-[18px] h-[18px]" />
    //                   </Link>
    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="md:max-w-[304px] lg:max-w-[500px] 2lg:max-w-[608px]">
    //               <h1 className="font-poppins text-[28px] lg:text-[38px] font-medium mt-11 md:mt-0 2lg:mt-11 leading-[49px]">
    //                 Voice Of {voice?.Team?.position}
    //               </h1>
    //               <div
    //                 className="text-body font-workSans font-normal text-base leading-7 mt-6 break-all"
    //                 dangerouslySetInnerHTML={{ __html: voice.description }}
    //               />
    //               <h2 className="font-workSans font-medium text-lg leading-6 mt-6">
    //                 {voice.Team.name}
    //               </h2>
    //               <p className="font-poppins font-normal text-base leading-4 mt-2">
    //                 {voice.Team.position}
    //               </p>
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </SwiperWrapper>
    //   </div>
    // )
  }

  return <HomeWrapper isBg>{RenderVoiceOfDirectorUi()}</HomeWrapper>
}

export default VoiceOfDirector

const SwiperWrapper = ({
  children,
  className,
  paginationData,
  activeIndex,
  setActiveIndex,
}: {
  children: React.ReactNode
  className?: string
  paginationData?: typeof staticData
  activeIndex: number
  setActiveIndex: (index: number) => void
}) => {
  const mainSwiperRef = useRef<SwiperClass | null>(null)
  const paginationSwiperRef = useRef<SwiperClass | null>(null)

  const handleSlideChange = (swiper: SwiperClass) => {
    const index = swiper.activeIndex
    setActiveIndex(index)

    if (paginationSwiperRef.current) {
      paginationSwiperRef.current.slideTo(index)
    }
  }

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index)
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index)
    }
  }

  // const paginationLength = paginationData ? paginationData.length : 0

  return (
    <>
      <div className="flex flex-col-reverse gap-14 md:gap-0 md:flex-col">
        <Swiper
          id="director"
          breakpoints={{ 528: { slidesPerView: 1 } }}
          spaceBetween={25}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 10000, disableOnInteraction: true }}
          pagination={false} // Disable default pagination
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          onSlideChange={handleSlideChange} // Handle slide change
          className={`w-full ${className} !flex`}
          // loop
        >
          {children}
        </Swiper>
        {/* Custom Pagination */}
        {paginationData && paginationData.length > 0 && (
          <div className="pagination-wrapper flex gap-4 mt-6 flex-wrap md:absolute z-50 -bottom-[14%] ">
            {paginationData?.map((slide, index) => (
              <div
                key={index}
                onClick={() => handlePaginationClick(index)}
                className={`custom-card ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <div className="custom-card-timer"></div>
                <ImageWithPlaceholder
                  width={200}
                  height={200}
                  src={slide.Team.image} // Using placeholder instead of actual image
                  alt={slide.Team.name}
                  className="custom-card-image"
                />
                <div className="custom-card-info">
                  <h4>{slide.Team.name}</h4>
                  <p>{slide.Team.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
