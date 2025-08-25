import { CircleCardWrapper } from '@/common/components/Atom/CircleCardWrapper'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { NoDataFound } from '@/common/components/NoDataFound'
import { cn } from '@/common/utils/utils'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { inquiriesData } from '../../academics/constants/data'
import { IBrochureItem } from '../../brochure/interface/brochureType'
import { recentPostData } from '../constant/newsdata'
import { INewsItem } from '../interface/newsType'

export const DownloadUi = ({ data }: { data: IBrochureItem[] | undefined }) => {
  return (
    <CircleCardWrapper className="bg-cover">
      <div className=" border border-border rounded-lg p-6 flex flex-col gap-y-6 md:w-[349px] lg:w-full">
        <h3 className="font-poppins text-[20px] leading-[26px] font-medium text-heading">
          Download
        </h3>
        {data &&
          data
            .slice(0, 2)
            .map((notice) => <DownloadListUi key={notice.id} data={notice} />)}
      </div>
    </CircleCardWrapper>
  )
}

const DownloadListUi = ({ data }: { data: IBrochureItem }) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data.file.key}`}
      download={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data.file.key}`}
      target="_blank"
      className="flex gap-x-3 items-center "
    >
      <Image src={'/news/pdf-icon.svg'} width={20} height={20} alt="pdf icon" />
      <span className="text-body text-[16px] leading-4 font-workSans text-center font-medium">
        {data.title}
      </span>
    </Link>
  )
}

export const RecentPostUi = ({
  recentData,
}: {
  recentData: INewsItem[] | undefined
}) => {
  const renderRecentPostUi = () => {
    if (recentData) {
      return (
        recentData &&
        recentData.slice(0, 3).map((post, index) => {
          return (
            <RecentPostCard
              key={post.id}
              post={post}
              hideBorder={index === recentPostData.length - 1}
            />
          )
        })
      )
    } else {
      return <NoDataFound title="No recent post found" />
    }
  }
  return (
    <CircleCardWrapper className="bg-contain md:bg-cover">
      <div className="flex flex-col gap-y-6">
        <h1
          className="font-poppins font-medium text-[20px] leading-[26px]  
"
        >
          Recent Post
        </h1>
        {renderRecentPostUi()}
      </div>
    </CircleCardWrapper>
  )
}

const RecentPostCard = ({
  post,
  hideBorder,
}: {
  post: INewsItem
  hideBorder: boolean
}) => {
  const type = post.type
  return (
    <Link
      href={`${
        type === 'NEWS' ? '/news/' + post.slug : '/notice/' + post.slug
      }`}
      className={cn(
        'flex items-center gap-x-3 2lg:gap-x-6 pb-6 border-b border-border',
        {
          ' border-transparent ': hideBorder,
        }
      )}
    >
      <ImageWithPlaceholder
        // src={post.images.key ? post.images.key : undefined}
        src={post.images.key}
        width={56}
        height={56}
        className="rounded-full size-[56px] object-cover aspect-square"
        alt="recent post image"
      />
      <div className="flex flex-col gap-y-1">
        <h2 className="font-workSans font-medium text-[16px] leading-[20.8px] text-heading">
          {post.title}
        </h2>
        <span className="text-body font-workSans text-[14px] leading-4 ">
          {format(post?.createdAt, 'MMMM d, yyyy')}
        </span>
      </div>
    </Link>
  )
}

export const ForInquiry = () => {
  return (
    <CircleCardWrapper className="bg-cover">
      <div className=" border border-border rounded-lg p-6 flex flex-col gap-y-6 md:w-[349px] lg:w-full">
        <h3 className="font-poppins text-[20px] leading-[26px] font-medium text-heading">
          For Inquiries
        </h3>
        <InquiriesUi />
      </div>
    </CircleCardWrapper>
  )
}

export const InquiriesUi = () => {
  return (
    <div className="space-y-4">
      {inquiriesData.map((inquiry, idx) => (
        <div className="flex justify-start items-center gap-x-3" key={idx}>
          <Image src={inquiry.image} width={20} height={20} alt="alt inquiry" />
          <div className="text-body font-workSans font-medium text-sm md:text-base md:leading-7">
            {inquiry.title}
          </div>
        </div>
      ))}
    </div>
  )
}
