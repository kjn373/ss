import { NoDataFound } from '@/common/components/NoDataFound'
import { NewsDetailUi } from '../_component/NewsDetailUi'
import { INewsDetailResponse } from '../interface/newsType'
import { newsData } from '@/common/data/staticData'

export async function generateStaticParams() {
  return newsData.data.map((news) => ({
    slug: news.slug,
  }))
}

const page = async ({ params }: { params: { slug: string } }) => {
  // Find the news item by slug from static data
  const foundItem = newsData.data.find((item) => item.slug === params.slug)

  const newsDetail: INewsDetailResponse | undefined = foundItem
    ? {
        status: 200,
        message: 'Success',
        data: {
          data: foundItem,
          banner: {
            id: '1',
            title: 'Latest News',
            image: {
              key: '/kws/imagePlaceholder.svg',
              bucket: ['static-assets'],
              mimeType: ['image/jpeg'],
            },
            link: '/apply',
            isEnabled: true,
            type: 'news',
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T00:00:00Z',
          },
        },
        totalCount: 1,
      }
    : undefined

  const renderNewsNoticeUi = () => {
    if (newsDetail && newsDetail.data) {
      return (
        <NewsDetailUi
          slug={params.slug}
          data={newsDetail?.data ? newsDetail.data : undefined}
        />
      )
    } else {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No news detail found" />
        </div>
      )
    }
  }

  return renderNewsNoticeUi()
}

export default page
