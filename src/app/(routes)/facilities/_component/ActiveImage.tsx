import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import React from 'react'

export const ActiveImage = ({ src }: { src: string }) => {
  return (
    <ImageWithPlaceholder
      src={src ? src : undefined}
      alt="students studying on class"
      width={656}
      height={656}
      className=" min-w-[343px]  min-h-[343px] md:size-[324px] rounded-xl  2lg:w-[656px] 2lg:h-[656px] object-cover"
    />
  )
}
