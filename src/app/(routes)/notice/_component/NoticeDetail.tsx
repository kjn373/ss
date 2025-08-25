import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { StickySidebar } from '../../news/_component/StickySidebar'
import { NoticeDetailSection } from './NoticeDetailSection'
import { MobileSidebar } from '../../news/_component/MobileSidebar'
import { INoticeResponseData } from '../_interface/type'

export const NoticeDetail = ({
  detail,
}: {
  detail: INoticeResponseData | undefined
}) => {
  return (
    <div className="overflow-x-hidden  2lg:overflow-visible">
      <CoverImage
        title="Notices"
        list={[{ link: null, title: 'News & Notices' }]}
      />
      <HomeWrapper>
        <div className="flex flex-col gap-y-20 2lg:gap-y-0  2lg:flex-row justify-between gap-x-12">
          {detail && <NoticeDetailSection detail={detail.data} />}
          <StickySidebar type="NOTICE" data={detail?.banner} />
          <MobileSidebar data={detail?.banner} type="NOTICE" />
        </div>
      </HomeWrapper>
    </div>
  )
}
