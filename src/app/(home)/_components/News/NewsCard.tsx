'use client'

import { INewsItem } from '@/app/(routes)/news/interface/newsType'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { format } from 'date-fns'
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'

export const NewsCard = ({ news }: { news: INewsItem }) => {
  return (
    <div className="relative">
      <Link href={`/news/${news.slug}`}>
        <div className="relative  group cursor-pointer mx-auto max-w-[397px]">
          <div className="overflow-hidden rounded-xl max-w-[397px]">
            <ImageWithPlaceholder
              // src={news.images ? news.images.key : undefined}
              src={news.images.key}
              width={447}
              height={298}
              alt="news"
              className="relative max-w-[397px] h-[298px] object-cover group-hover:scale-110 transition-all duration-500 selection:bg-transparent"
            />
          </div>
          <div className="absolute w-[94%] max-h-[145px] 2lg:max-h-[120px] bg-white shadow-sm top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
            <div className="p-6 z-10 relative space-y-2">
              <p className="text-body text-sm font-workSans font-normal leading-4 z-20">
                {news.createdAt
                  ? format(new Date(news.createdAt), 'MMMM dd, yyyy') // Full month, day, and year
                  : 'N/A'}
              </p>
              <h2 className="text-primary text-xl font-poppins font-medium leading-7  transition-all duration-500">
                {news.title}
              </h2>
            </div>
            <div>
              <Link
                href={`/news/${news.slug}`}
                className="bg-primaryLighter will-change-transform  w-[82px] h-[82px] absolute -right-[20px] group-hover:scale-[10] transition-transform duration-700 top-[55px] rounded-full z-0"
              ></Link>
              <GoArrowRight className=" absolute right-3 top-1/2 -translate-y-1/2 mt-8  z-20  text-2xl text-primary " />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
