'use client'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'
import { INoticeData } from '../_interface/type'
import { format } from 'date-fns'
import { sanitizeHtml } from '@/lib/sanitize'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'

export const NoticeDetailSection = ({ detail }: { detail: INoticeData }) => {
  const cleanHtml = detail && sanitizeHtml(detail.description)

  return (
    <div className="flex flex-col items-start gap-y-2 md:max-w-[672px]  2lg:max-w-[787px]">
      <MiniHeading className="font-semibold leading-4 tracking-widest text-secondary">
        {format(detail?.createdAt, 'MMMM d, yyyy')}
      </MiniHeading>
      <SectionHeading>{detail.title}</SectionHeading>
      <div
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
        className="font-workSans mt-10 break-all"
      />
      <ImageWithPlaceholder
        width={343}
        height={485}
        alt="Admission open banner"
        src={detail.images ? detail.images.key : undefined}
        className="md:w-[672px]  2lg:w-[787px]  object-contain aspect-square 2lg:mt-10 "
      />
    </div>
  )
}
