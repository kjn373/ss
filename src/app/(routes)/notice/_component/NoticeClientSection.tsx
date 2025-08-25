'use client'

import React, { useState } from 'react'
import { NoticeCard } from './NoticeCard'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { ShareModal } from './ShareModal'
import { INewsItem } from '../../news/interface/newsType'

export const NoticeClientSection = ({
  notice,
}: {
  notice: INewsItem[] | undefined
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeSlug, setActiveSlug] = useState<string | undefined>(undefined)
  const filterNotice = notice?.filter((d) => d.type === 'NOTICE')

  return (
    <div className="flex flex-col  gap-y-10 2lg:items-center">
      <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
        Stay up-to-date with the latest news and events at SS College. Discover
        student achievements, sporting highlights and other event stories.
      </p>
      <div className="grid  2lg:grid-cols-3 gap-6">
        {filterNotice &&
          filterNotice.map((d) => (
            <NoticeCard
              key={d.slug}
              notice={d}
              setOpen={setIsOpen}
              setActive={setActiveSlug}
            />
          ))}
      </div>

      {isOpen && (
        <CustomModal isOpen={isOpen}>
          <ShareModal setOpen={setIsOpen} slug={activeSlug} />
        </CustomModal>
      )}
    </div>
  )
}
