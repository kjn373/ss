'use client'
import React, { useEffect, useState } from 'react'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'
import { INewsResponseData } from '../interface/newsType'
import { IBrochureItem } from '../../brochure/interface/brochureType'
import { BannerData } from '../../notice/_interface/type'
import {
  newsData,
  noticeData,
  brochureData as staticBrochureData,
} from '@/common/data/staticData'

export const MobileSidebar = ({
  type,
  data,
}: {
  type: 'NEWS' | 'NOTICE'
  data: BannerData | undefined
}) => {
  const [brochureItems, setBrochureItems] = useState<
    IBrochureItem[] | undefined
  >(undefined)

  const [response, setResponse] = useState<INewsResponseData | null>(null)

  useEffect(() => {
    // Get data from static sources based on type
    if (type === 'NEWS') {
      setResponse(newsData)
    } else if (type === 'NOTICE') {
      // Transform notice data to match news response structure
      const transformedNoticeData: INewsResponseData = {
        status: noticeData.status,
        message: noticeData.message,
        data: noticeData.data,
        totalCount: noticeData.totalCount,
      }
      setResponse(transformedNoticeData)
    }

    // Set brochure data from static source
    setBrochureItems(staticBrochureData.data)
  }, [type])

  return (
    <div className="flex flex-col 2lg:hidden gap-y-6">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      {brochureItems && <DownloadUi data={brochureItems} />}
      {data && <SidebarAd banner={data} />}
    </div>
  )
}
