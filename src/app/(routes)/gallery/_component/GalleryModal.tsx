'use client'
import { Button } from '@/common/components/ui/button'
import { CheckIsIos } from '@/common/hook/useIos'
import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { IconBaseProps } from 'react-icons'
import { BsArrowRight } from 'react-icons/bs'

type IDirection = 'next' | 'prev'

export const GalleryModal = ({
  src,
  title,
  setModalOpen,
  setSrc,
  setActiveImage,
  length,
  showSwipe,
}: {
  src: string | undefined
  title: string | undefined
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setSrc?: Dispatch<SetStateAction<string>>
  setActiveImage?: Dispatch<SetStateAction<number | null>>
  length: number | undefined
  showSwipe: boolean
}) => {
  const isIos = CheckIsIos()

  const handleSwipe = (direction: IDirection) => {
    if (direction === 'next' && setActiveImage && length) {
      setActiveImage((prev) => (prev! + 1) % length)
    } else if (setActiveImage && length) {
      setActiveImage((prev) => (prev! - 1 + length) % length)
    }
  }

  const handleClose = () => {
    if (setSrc && setActiveImage) {
      setSrc('')
      setActiveImage(null)
    }
    setModalOpen(false)
  }

  return (
    <div className=" flex flex-col justify-center items-center 2lg:items-start relative rounded-xl overflow-hidden 2lg:w-full lg:h-[100vh]">
      <div className="flex justify-end w-full p-6 pb-0 2lg:pb-6 rounded-xl">
        <div
          onClick={handleClose}
          className={cn(
            'absolute mb-2 lg:right-10 top-16 lg:top-10 z-50',
            isIos ? 'top-24' : 'top-20'
          )}
        >
          <Button variant="secondary">Close</Button>
        </div>
      </div>
      <div className="w-[100vw] p-6 rounded-xl relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}`}
          alt="zoom gallery image"
          width={1280}
          height={854}
          className="object-contain pointer-events-none selection:bg-transparent transition-all duration-1000 mx-auto w-[90vw] h-[100vh] lg:h-[610px] rounded-xl"
        />
        <p className="absolute transform bottom-24 lg:-bottom-20  left-[15%] right-[15%] md:right-[40%] md:left-[40%] text-xl text-white font-poppins md:font-medium text-center p-4 selection:bg-transparent">
          {title}
        </p>
      </div>

      {showSwipe && (
        <>
          <SwipeArrow
            onClick={() => handleSwipe('next')}
            className="bg-white rounded-full size-[40px] p-2 right-2 2lg:right-12 2xl_md:right-[169px] cursor-pointer  absolute top-[53%] 2lg:top-[50%] -translate-y-1/2 transition-all duration-1000 "
          />
          <SwipeArrow
            onClick={() => handleSwipe('prev')}
            className="bg-white t rounded-full size-[40px] p-2 left-2 2lg:left-12 2xl_md:left-[169px]  rotate-180 absolute top-[53%] 2lg:top-[50%] -translate-y-1/2 cursor-pointer transition-all duration-1000"
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
