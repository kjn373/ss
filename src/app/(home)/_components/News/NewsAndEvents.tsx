'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'

import { cn } from '@/lib/utils'
import NewsSection from './NewsSection'
import Notice from './Notice'
import './notice.css'
import { CheckIsIos } from '@/common/hook/useIos'

const NewsAndEvents = () => {
  const isIos = CheckIsIos()
  return (
    <HomeWrapper isBg>
      <div
        className={cn(
          'flex flex-col 2lg:flex-row gap-6 2xl:gap-x-6 justify-between 3xl:gap-6 min-h-[465px] custom-gaping-news'
        )}
      >
        <div className="2lg:max-w-[820px] ">
          <NewsSection />
        </div>
        <div
          className={cn('flex justify-center 2lg:justify-start  w-full', {
            '2lg:justify-end w-full': isIos,
          })}
        >
          <Notice />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default NewsAndEvents
