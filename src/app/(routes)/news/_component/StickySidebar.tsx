'use client'
import { INewsResponseData } from '../interface/newsType'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'
import { BannerData } from '../../notice/_interface/type'
import { useEffect, useState } from 'react'
import { IBrochureItem } from '../../brochure/interface/brochureType'
import {
  newsData,
  noticeData,
  brochureData as staticBrochureData,
} from '@/common/data/staticData'

export const StickySidebar = ({
  type,
  data,
}: {
  type: 'NEWS' | 'NOTICE'
  data?: BannerData | undefined
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
    <div className="max-h-[1015px] w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <RecentPostUi recentData={response?.data ? response?.data : undefined} />
      {brochureItems && <DownloadUi data={brochureItems} />}
      {data && <SidebarAd banner={data} />}
    </div>
  )
}
