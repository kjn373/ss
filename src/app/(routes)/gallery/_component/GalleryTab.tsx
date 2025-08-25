'use client'

import { cn } from '@/common/utils/utils'
import React, { useState } from 'react'

type ITitle = 'photo' | 'video'

export const GalleryTab = ({
  handleDynamicData,
}: {
  handleDynamicData: (type: ITitle) => void
}) => {
  const [isActive, setActive] = useState({
    photo: true,
    video: false,
  })

  const handleTabClick = (title: ITitle) => {
    if (title === 'photo') {
      handleDynamicData('photo')
      setActive({ photo: true, video: false })
    } else {
      setActive({ photo: false, video: true })
      handleDynamicData('video')
    }
  }

  return (
    <div className="bg-primaryLighter flex justify-between items-center rounded-[100px] p-2 w-[238px] shadow">
      <button
        onClick={() => handleTabClick('photo')}
        className={cn(
          'font-workSans font-medium text-[18px] leading-6 px-6 py-4 bg-transparent text-black  rounded-[100px] transition-all duration-700',
          {
            'bg-primary text-white': isActive.photo,
          }
        )}
      >
        Photos
      </button>
      <button
        onClick={() => handleTabClick('video')}
        className={cn(
          'font-workSans font-medium text-[18px] leading-6 px-6 py-4 rounded-[100px] transition-all duration-700 ',
          {
            'bg-primary text-white': isActive.video,
          }
        )}
      >
        Videos
      </button>
    </div>
  )
}
