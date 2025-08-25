import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'

export const NoticeSection = () => {
  return (
    <>
      <CoverImage title="Notices" list={[{ link: '', title: 'Notices' }]} />
      <HomeWrapper>
        <div className="flex flex-col  gap-y-10 2lg:items-center">
          {/* <NoticeClientSection /> */}
        </div>
      </HomeWrapper>
    </>
  )
}
