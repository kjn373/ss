import Image from 'next/image'
import React from 'react'
import { cn } from '../utils/utils'

export const ImageWithPlaceholder = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: {
  // src: string[] | undefined | string
  src: string | undefined
  alt: string
  width: number
  height: number
  className?: string
}) => {
  return (
    <Image
      // src={`${
      //   src
      //     ? process.env.NEXT_PUBLIC_IMAGE_URL + '/' + src
      //     : '/downloads/placeholder.svg'
      // }`}
      src={src || '/kws/imagePlaceholder.svg'}
      width={width}
      height={height}
      className={cn(className)}
      alt={alt}
      {...props}
    />
  )
}
