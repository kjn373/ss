'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { UiLoader } from '@/common/components/Atom/UiLoader'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { NoDataFound } from '@/common/components/NoDataFound'
import { Pagination } from '@/common/components/Pagination'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { cn } from '@/common/utils/utils'
import { format } from 'date-fns'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { NoticeClientSection } from '../../notice/_component/NoticeClientSection'
import { INewsItem } from '../interface/newsType'
// import { INewsItem, INewsResponseData } from '../interface/newsType'

import { newsData, noticeData } from '@/common/data/staticData'

export const NewsSection = () => {
  const tabs = [
    {
      key: 'news',
      title: 'News',
    },
    {
      key: 'notice',
      title: 'Notices',
    },
  ]
  const [active, setActiveTab] = useState<string>(tabs[1]?.key)

  const params = useSearchParams()

  const [newsNotice, setNewsNotice] = useState<INewsItem[] | undefined>(
    undefined
  )
  const pageSize = 6
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const showPagination = () => {
    if (totalCount && newsNotice && newsNotice?.length < totalCount) {
      return true
    } else {
      return false
    }
  }
  const isPagination = showPagination()

  useEffect(() => {
    const initialTab = params.get('type') === 'news' ? 'news' : 'notice'
    setActiveTab(initialTab)
    setPage(1) // Reset to the first page when changing the tab
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // Commented out API fetching logic - now using static data
  // const fetchNewsAndNoticeList = async () => {
  //   if (!loading)
  //     try {
  //       setLoading(true)
  //       const newsNoticeData: INewsResponseData | undefined =
  //         await UseServerFetch(
  //           `/api/v1/news-and-notice/type/${active.toUpperCase()}?page=${page}&pageSize=${pageSize}`
  //         )
  //       const filteredData = newsNoticeData?.data.filter(
  //         (d) => d.type === active.toUpperCase()
  //       )

  //       setNewsNotice(filteredData)

  //       setTotalCount(newsNoticeData?.totalCount)
  //       setLoading(false)
  //     } catch (error) {
  //       setLoading(false)
  //       console.error('Error fetching news data:', error)
  //     } finally {
  //       setLoading(false)
  //     }
  // }

  const loadStaticData = () => {
    setLoading(true)

    const staticData = active === 'news' ? newsData : noticeData
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedData = staticData.data.slice(startIndex, endIndex)

    setNewsNotice(paginatedData as INewsItem[])
    setTotalCount(staticData.totalCount)
    setLoading(false)
  }
  useEffect(() => {
    loadStaticData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, page, params])

  const renderNewsNoticeUi = () => {
    if (newsNotice && newsNotice?.length > 0 && !loading) {
      if (active === 'news') {
        return (
          <div
            className={cn(
              'flex flex-row flex-wrap justify-center md:justify-evenly  gap-x-4 gap-y-28 pb-16 2lg:pb-1 '
            )}
          >
            {newsNotice &&
              newsNotice.map((news) => {
                return (
                  <Link
                    href={`/news/${news.slug}`}
                    key={news.slug}
                    className={cn('mb-0', {
                      'mb-8 2lg:mb-0': news.title.length > 40,
                    })}
                  >
                    <div className="relative max-w-[397px] group cursor-pointer">
                      <div className="overflow-hidden rounded-xl max-w-[397px]">
                        <ImageWithPlaceholder
                          // src={news.images ? news.images.key : undefined}
                          src={news.images.key}
                          width={447}
                          height={298}
                          alt="news"
                          className="relative w-[343px] h-[231px] md:w-[324px] md:h-[243px]  2lg:w-[398px] 2lg:h-[298px] object-cover group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                      <div className="absolute w-[94%] max-h-[145px] 2lg:max-h-[120px] bg-white shadow-sm top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
                        <div className="p-6 z-10 relative flex flex-col gap-y-2">
                          <p className="text-body text-sm font-workSans font-normal leading-4 z-20">
                            {format(news.createdAt, 'MMMM d, yyyy')}
                          </p>
                          <h2 className="text-primary text-xl font-poppins font-medium leading-7  transition-all duration-500 2lg:line-clamp-2">
                            {news.title}
                          </h2>
                        </div>
                        <div>
                          <Link
                            href="/news/ffff"
                            className="bg-primaryLighter will-change-transform  w-[82px] h-[82px] absolute -right-[20px] group-hover:scale-[10] transition-transform duration-700 top-[55px] rounded-full z-0"
                          ></Link>
                          <GoArrowRight className=" absolute right-3 top-1/2 -translate-y-1/2 mt-8  z-20  text-2xl text-primary " />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            {isPagination && (
              <div className="w-full flex justify-center mt-4">
                <Pagination
                  currentPage={Number(page)}
                  pageSize={pageSize}
                  totalCount={Number(totalCount)}
                  onPageChange={(page: string | number) =>
                    setPage(page as number)
                  }
                  siblingCount={0}
                />
              </div>
            )}
          </div>
        )
      } else if (active === 'notice') {
        return (
          !loading && (
            <>
              <NoticeClientSection notice={newsNotice} />
              <div className="w-full flex justify-center mt-4">
                {totalCount && isPagination && (
                  <Pagination
                    currentPage={Number(page)}
                    pageSize={pageSize}
                    totalCount={Number(totalCount)}
                    onPageChange={(page: string | number) =>
                      setPage(page as number)
                    }
                    siblingCount={0}
                  />
                )}
              </div>
            </>
          )
        )
      }
    } else if (newsNotice?.length === 0) {
      return <NoDataFound title={`No ${active} found`} />
    } else {
      return <UiLoader className="min-h-[200px]" />
    }
  }

  useEffect(() => {
    const getNewsOrNotice = params.get('type')
    if (getNewsOrNotice) {
      if (getNewsOrNotice === 'news') {
        setActiveTab('news')
      } else {
        setActiveTab('notice')
      }
    }
  }, [params])

  return (
    <>
      <CoverImage
        title="News & Notices"
        list={[{ link: null, title: 'News & Notices' }]}
      />
      <HomeWrapper className="2lg:pb-32">
        <div className="flex justify-center mb-10">
          <TabAnimation
            tabs={tabs}
            activeTab={active}
            setActive={setActiveTab}
            className="text-sm"
            handleDynamicData={(key) => {
              setActiveTab(key)
              setPage(1)
            }}
            isEvent={false}
          />
        </div>
        {renderNewsNoticeUi()}
      </HomeWrapper>
    </>
  )
}
