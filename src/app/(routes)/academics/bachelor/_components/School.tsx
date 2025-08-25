import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { IAcademicBanner, IAcademicsData } from '../../_interface/academic'
import SchoolSection from './SchoolSection'
import SchoolStickySidebar from './SchoolStickySidebar'

const School = ({
  bannerDetail,
  detail,
  slug,
}: {
  bannerDetail: IAcademicBanner
  detail: IAcademicsData
  slug: string
}) => {
  const getBreadcrumbTitle = (slug: string) => {
    switch (slug) {
      case 'BBS':
        return 'Bachelor of Business Studies'
      case 'BA/BSW':
        return 'Bachelor of Arts / Bachelor of Social Work'
      default:
        return slug // Fallback to the actual slug if it's not one of the specific cases
    }
  }

  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title
  }

  return (
    <div>
      <div className="hidden 2lg:block">
        <CoverImage
          title={getBreadcrumbTitle(slug)}
          list={[
            { link: '/academics', title: truncateTitle('Academics', 15) },
            { link: null, title: truncateTitle('Bachelor', 15) },
            { link: null, title: getBreadcrumbTitle(slug) },
          ]}
        />
      </div>
      <div className="2lg:hidden">
        <CoverImage
          title={truncateTitle(getBreadcrumbTitle(slug), 20)} // Truncate the main title
          list={[
            { link: '/academics', title: truncateTitle('Academics', 15) },
            { link: null, title: truncateTitle('Bachelor', 15) },
            { link: null, title: truncateTitle(getBreadcrumbTitle(slug), 5) }, // Truncate breadcrumb titles
          ]}
        />
      </div>
      <HomeWrapper>
        <div className="flex flex-col 2lg:flex-row gap-[80px] 2lg:gap-[56px]">
          <SchoolSection detail={detail} />
          <SchoolStickySidebar bannerDetail={bannerDetail} />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default School
