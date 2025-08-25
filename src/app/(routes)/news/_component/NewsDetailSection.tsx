'use client'

import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'
import { INewsItem } from '../interface/newsType'
import { format } from 'date-fns'
import { sanitizeHtml } from '@/lib/sanitize'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'

export const NewsDetailSection = ({ data }: { data: INewsItem }) => {
  const cleanHtml = sanitizeHtml(data.description)

  return (
    <>
      <div className="flex flex-col gap-y-2  items-start   2lg:max-w-[787px]">
        <MiniHeading>{format(data?.createdAt, 'MMMM d, yyyy')}</MiniHeading>
        <SectionHeading isMd>{data?.title}</SectionHeading>
        <div className="flex flex-col gap-y-10 mt-8">
          <ImageWithPlaceholder
            // src={data.images ? data.images.key : undefined}
            src={data.images.key}
            width={343}
            height={228}
            alt="student studying on class"
            className="rounded-[12px] w-[343px] h-[228px] md:w-[671px] md:h-[448px] 2lg:w-[787px] 2lg:h-[525px] object-cover"
          />
          <div
            dangerouslySetInnerHTML={{ __html: cleanHtml }}
            className="font-workSans break-all"
          />
          {/* <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={'/home/gallery-2.png'}
              width={343}
              height={228}
              alt="student studying on class"
              className="rounded-[12px] w-[343px] h-[228px] md:w-[324px] md:h-[216px]"
            />
            <Image
              src={'/home/gallery-3.png'}
              width={343}
              height={228}
              alt="student studying on class"
              className="rounded-[12px] w-[343px] h-[228px] md:w-[324px] md:h-[216px]"
            />
          </div> */}
        </div>
      </div>
    </>
  )
}
