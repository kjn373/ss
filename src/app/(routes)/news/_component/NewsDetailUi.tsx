'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { INewsData } from '../interface/newsType'
import { MobileSidebar } from './MobileSidebar'
import { NewsDetailSection } from './NewsDetailSection'
import { StickySidebar } from './StickySidebar'
import { useEffect, useState } from 'react'

export const NewsDetailUi = ({
  slug,
  data,
}: {
  slug: string
  data: INewsData | undefined
}) => {
  const [isMobile, setIsMobile] = useState(false)

  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Set your mobile width breakpoint here
    }

    handleResize() // Check on component mount
    window.addEventListener('resize', handleResize) // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize) // Clean up on unmount
    }
  }, [])

  const BreadCrumbList = [
    {
      title: 'News & Events',
      link: '/news',
    },
    {
      title: isMobile ? truncateTitle(slug, 10) : slug, // Truncate only for mobile
      link: null,
    },
  ]

  return (
    <div className="overflow-x-hidden  2lg:overflow-visible">
      <CoverImage title="News" list={BreadCrumbList} />
      <HomeWrapper>
        <div className="flex flex-col gap-y-20 2lg:gap-y-0  2lg:flex-row justify-between gap-x-12">
          {data && <NewsDetailSection data={data.data} />}
          {data && <StickySidebar type={'NEWS'} data={data.banner} />}
          <MobileSidebar data={data?.banner} type={'NEWS'} />
        </div>
      </HomeWrapper>
    </div>
  )
}
