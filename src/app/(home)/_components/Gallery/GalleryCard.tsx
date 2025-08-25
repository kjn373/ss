'use client'
import React from 'react'
import Image from 'next/image'
import { IHomeGallery } from './interface/Gallery'
import { cn } from '@/common/utils/utils'
// import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
// import { isVideo } from '@/common/utils/checkIsVideo'
// import { CustomVideo } from '@/common/components/Atom/CustomVideo'

export const GalleryCard = ({
  data,
  isActive,
  index,
}: {
  data: IHomeGallery
  isActive: boolean
  index: number
}) => {
  // const isVideoExists = isVideo(data.src)
  return (
    <div
      className={cn('flex flex-col gap-y-4 will-change-transform ', {
        'm-0 ': isActive,
      })}
    >
      <div
        className={cn(
          ' rounded-[8px] gallery-card w-[343px] h-[257px] md:w-[672px] md:h-[456px] 2lg:w-[292px] 2lg:h-[235px]  relative  transition-all duration-500 clip-image mx-auto 2lg:mx-0',
          {
            'rounded xl:scale-x-[1.8] xl:scale-y-[1.7]  3xl:scale-x-[1.982] 3xl:scale-y-[1.840] transition-all duration-500':
              isActive,
          }
        )}
      >
        {/* {isVideoExists ? (
          <CustomVideo
            autoPlay
            height="827"
            width="578"
            src={data.src}
            className="object-cover  rounded-[8px] w-[343px] h-[257px] md:w-[672px] md:h-[456px] 2lg:w-[292px] 2lg:h-[235px]"
            fallbackThumb="/home/video-thumb.png"
          />
        ) : (
          <Image
            width={343}
            height={257}
            src={data.src}
            alt="gallery carousel"
            className="rounded-[8px]  w-full h-full object-cover"
          />
        )} */}
        <Image
          width={343}
          height={257}
          src={data.photo?.key || '/downloads/placeholder.svg'}
          // src={data.photo?.key}
          alt="gallery carousel"
          className="rounded-[8px] w-full h-full object-cover"
        />
        <div className="2lg:hidden flex justify-center my-4 ">
          <p className="font-workSans font-normal text-[16px] leading-[16px] text-[#313131]">
            <span className="font-poppins font-medium text-[20px] leading-[26px] text-center text-[#187EC0]">
              {index + 1}
              {'   '}
            </span>
            {data.title}
          </p>
        </div>
      </div>
      {isActive && (
        <>
          <div className="absolute -left-36 -bottom-48 flex flex-col gap-y-10 w-[578px] ">
            <p className="font-workSans font-normal text-[16px] leading-[16px] text-[#313131]">
              <span className="font-poppins font-medium text-[20px] leading-[26px] text-center text-[#187EC0]">
                {index + 1}
                {'   '}
              </span>
              {data.title}
            </p>
            <GalleryLoader />
          </div>
        </>
      )}
    </div>
  )
}

const GalleryLoader = () => {
  return (
    <div className="bg-[#E7EEF8] w-full">
      <div className="w-[608px] bg-[#187EC0] rounded-xl h-[1px] animate-fill " />
    </div>
  )
}
