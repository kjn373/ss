import React, { Dispatch, SetStateAction } from 'react'
import { CloseButton } from '@/common/components/Atom/CloseButton'
import { CustomVideo } from '@/common/components/Atom/CustomVideo'
import { cn } from '@/lib/utils'
import { IconBaseProps } from 'react-icons'
import { BsArrowRight } from 'react-icons/bs'

type IDirection = 'next' | 'prev'
type IType = 'photo' | 'video'

export const VideoModal = ({
  src,
  setModalOpen,
  setActiveImage,
  length,
  type,
  showSwipe,
  isStatic = false,
}: {
  src: string | undefined
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setActiveImage?: Dispatch<SetStateAction<number | null>>
  length: number | undefined
  type: IType
  showSwipe: boolean
  isStatic?: boolean
}) => {
  const handleSwipe = (direction: IDirection) => {
    if (setActiveImage && length) {
      // Only call setActiveImage if it's defined
      setActiveImage((prev) => {
        if (prev === null) return 0 // Handle null case appropriately
        return direction === 'next'
          ? (prev + 1) % length
          : (prev - 1 + length) % length
      })
    }
  }

  return (
    <div className="flex justify-center items-center 2lg:items-start  relative ">
      {isStatic ? (
        <>
          <CustomVideo
            key={src}
            width="1280"
            height="853"
            src={src ? src : '/home/video/school-promo.mov'}
            className="w-[1024px] object-contain rounded-[12px]"
            autoPlay={true}
            controls={true}
          />
        </>
      ) : (
        <>
          <CustomVideo
            key={src}
            width="1280"
            height="853"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}`}
            className="w-[1024px] object-contain rounded-[12px]"
            autoPlay={true}
            controls={true}
          />
        </>
      )}

      <CloseButton
        className={cn('absolute -top-3 -right-4 z-10', {
          '2xl_lg:-right-4': type === 'video',
        })}
        handleClick={() => {
          setModalOpen(false)
          if (setActiveImage) {
            // Only call if setActiveImage is provided
            setActiveImage(null)
          }
        }}
      />

      {showSwipe && (
        <>
          <SwipeArrow
            onClick={() => handleSwipe('next')}
            className="bg-white rounded-full size-[40px] p-2 -right-4 2xl_lg:right-4  cursor-pointer  "
          />
          <SwipeArrow
            onClick={() => handleSwipe('prev')}
            className="bg-white rounded-full size-[40px] p-2 -left-4 2xl_lg:left-4  rotate-180 cursor-pointer "
          />
        </>
      )}
    </div>
  )
}

export const SwipeArrow = ({
  className,
  ...props
}: { className?: string } & IconBaseProps) => {
  return (
    <BsArrowRight
      className={cn(
        'text-xl bg-red-500 absolute top-1/2 -translate-y-1/2 text-heading z-10',
        className
      )}
      {...props}
    />
  )
}
