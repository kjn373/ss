'use client'
// import {
//   SwiperButtonNext,
//   SwiperButtonPrevious,
// } from '@/common/components/Atom/SwiperButton'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { Button } from '@/common/components/ui/button'
// import { cn } from '@/common/utils/utils'
import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { MdOutlineChevronRight } from 'react-icons/md'
import 'swiper/css'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Swiper as SwiperType } from 'swiper/types'
import { IAcademicsImage } from '../../_interface/academic'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SchoolGallery = ({ gallery }: { gallery: IAcademicsImage }) => {
  // const [activeSrc, setActiveSrc] = useState<string | null>(
  //   gallery?.key?.length ? gallery?.key[0] : null
  // )

  return (
    <div className="flex justify-between flex-col gap-x-6 gap-y-6 mt-6">
      <div className="flex justify-center">
        <ImageWithPlaceholder
          // src={activeSrc ? activeSrc : undefined}
          src="/ss/img2.jpg"
          alt=" Bachelor Gallery"
          width={787}
          height={524}
          className="rounded-xl md:w-[787px] md:h-[524px] object-contain"
        />
      </div>

      <div className="mt-6 relative">
        {/* <ThumbnailSwiper
          activeSrc={activeSrc}
          // setActiveSrc={setActiveSrc}
          // galleries={gallery || []}
        /> */}

        <Link href="/gallery">
          <div className="mt-6">
            <Button
              variant="secondary"
              className="group w-full flex items-center gap-4 font-workSans text-heading text-lg font-medium transition-all duration-500"
            >
              View Our Gallery
              <MdOutlineChevronRight width={24} height={24} />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  )
}

// const ThumbnailSwiper = ({
//   activeSrc,
//   setActiveSrc,
//   galleries,
// }: {
//   activeSrc: string | null
//   setActiveSrc: (src: string) => void
//   galleries: IAcademicsImage
// }) => {
//   const [isBeginning, setIsBeginning] = useState(true)
//   const [isEnd, setIsEnd] = useState(false)
//   const updateBoundaries = (swiper: SwiperType) => {
//     setIsBeginning(swiper.isBeginning)
//     setIsEnd(swiper.isEnd)
//   }
//   useEffect(() => {
//     setIsEnd(false)
//   }, [])
//   return (
//     <Swiper
//       breakpoints={{
//         360: {
//           spaceBetween: 10,
//           slidesPerView: 3.5,
//         },
//         400: {
//           spaceBetween: 10,
//           slidesPerView: 4,
//         },
//         736: {
//           spaceBetween: 14,
//           slidesPerView: 4.5,
//         },
//         1280: {
//           spaceBetween: 20,
//           slidesPerView: 4.5,
//         },
//       }}
//       onReachBeginning={() => setIsBeginning(true)}
//       onReachEnd={() => setIsEnd(true)}
//       onFromEdge={() => {
//         setIsBeginning(false)
//         setIsEnd(false)
//       }}
//       onSlideChange={(swiper) => updateBoundaries(swiper)}
//       className="relative"
//     >
//       {galleries &&
//         galleries.key &&
//         galleries.key.map((gallery, index) => (
//           <SwiperSlide key={index} onClick={() => setActiveSrc(gallery)}>
//             <ImageWithPlaceholder
//               src={gallery}
//               width={787}
//               height={524}
//               className={cn(
//                 `rounded-xl cursor-pointer h-[85px] md:h-[152px] object-cover`,
//                 {
//                   'border-2 border-primary': activeSrc === gallery,
//                 }
//               )}
//               alt={`Thumbnail ${index + 1}`}
//             />
//           </SwiperSlide>
//         ))}
//       {galleries && galleries.key && galleries.key.length > 4 && (
//         <>
//           <div className="absolute right-[3px] top-1/2 -translate-y-1/2 z-10">
//             <SwiperButtonNext isEnd={isEnd}>
//               <IoIosArrowRoundForward
//                 className={`text-body text-2xl font-light bg-white rounded-full size-7 ${
//                   isEnd ? 'opacity-25 cursor-not-allowed' : ''
//                 }`}
//               />
//             </SwiperButtonNext>
//           </div>
//           <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
//             <SwiperButtonPrevious isBeginning={isBeginning}>
//               <IoIosArrowRoundBack
//                 className={`text-body text-2xl font-light bg-white rounded-full size-7 ${
//                   isBeginning ? 'opacity-25 cursor-not-allowed' : ''
//                 }`}
//               />
//             </SwiperButtonPrevious>
//           </div>
//         </>
//       )}
//     </Swiper>
//   )
// }

export default SchoolGallery
