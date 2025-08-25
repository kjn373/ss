import { cn } from '@/common/utils/utils'
import React, { LegacyRef } from 'react'

interface ICustomVideoProps {
  src: string
  width: string
  height: string
  className?: string
  videoRef?: LegacyRef<HTMLVideoElement> | undefined
  fallbackThumb?: string
  autoPlay?: boolean
  controls?: boolean
}

export const CustomVideo = ({
  src,
  width,
  height,
  className,
  videoRef,
  fallbackThumb,
  autoPlay = true,
  controls = false,
}: ICustomVideoProps) => {
  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      className={cn(className)}
      preload="auto"
      playsInline
      muted
      autoPlay={autoPlay}
      poster={fallbackThumb}
      controls={controls}
    >
      <source src={src} type="video/mp4" className="" />
    </video>
  )
}
