'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { IAcademicBanner, IAcademicsData } from '../../_interface/academic'
import AcademicDetailSection from './AcademicDetailSection'
import StickyAcademicSide from './StickyAcademicSide'

const AcademicDetail = ({
  bannerDetail,
  detail,
  slug,
}: {
  bannerDetail: IAcademicBanner
  detail: IAcademicsData
  slug: string
}) => {
  return (
    <>
      <CoverImage
        title={slug}
        list={[
          { link: '/academics', title: 'Academic' },
          { link: null, title: 'PLus Two' },
          { link: null, title: slug },
        ]}
      />
      <HomeWrapper>
        <div className="flex flex-col 2lg:flex-row gap-[80px] 2lg:gap-[56px]">
          <AcademicDetailSection detail={detail} />
          <StickyAcademicSide bannerDetail={bannerDetail} />
        </div>
      </HomeWrapper>
    </>
  )
}

export default AcademicDetail
