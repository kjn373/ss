import { IAcademicBanner } from '../../_interface/academic'
import AcademicSideBar from './AcademicSideBar'

const StickyAcademicSide = ({
  bannerDetail,
}: {
  bannerDetail: IAcademicBanner
}) => {
  return (
    <div className="max-h-[1145px] w-full bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 flex ">
      <AcademicSideBar bannerDetail={bannerDetail} />
    </div>
  )
}

export default StickyAcademicSide
