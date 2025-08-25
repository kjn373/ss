import React from 'react'
import { NoticeDetail } from '../_component/NoticeDetail'
import { INoticeResponse } from '../_interface/type'
import { noticeData } from '@/common/data/staticData'

export async function generateStaticParams() {
  return noticeData.data.map((notice) => ({
    slug: notice.slug,
  }))
}

const page = async ({ params }: { params: { slug: string } }) => {
  // Find the notice item by slug from static data
  const foundItem = noticeData.data.find((item) => item.slug === params.slug)

  const noticeDetail: INoticeResponse | undefined = foundItem
    ? {
        status: 200,
        message: 'Success',
        data: {
          data: {
            id: foundItem.id,
            title: foundItem.title,
            description: foundItem.description,
            images: {
              key: foundItem.images.key,
              bucket: [foundItem.images.bucket],
              mimeType: [foundItem.images.mimeType],
            },
            category: foundItem.category,
            type: foundItem.type,
            status: foundItem.status,
            publishedAt: foundItem.publishedAt,
            createdAt: foundItem.createdAt,
            updatedAt: foundItem.updatedAt,
          },
          banner: {
            id: '1',
            title: 'Latest Notices',
            image: {
              key: '/kws/imagePlaceholder.svg',
              bucket: ['static-assets'],
              mimeType: ['image/jpeg'],
            },
            link: '/apply',
            isEnabled: true,
            type: 'notice',
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z',
          },
        },
      }
    : undefined

  return (
    <NoticeDetail detail={noticeDetail?.data ? noticeDetail.data : undefined} />
  )
}

export default page
