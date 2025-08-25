import { IAcademicBanner } from '../../_interface/academic'
import BachelorSidebar from './BachelorSidebar'

const BachelorStickySidebar = ({
  bannerDetail,
}: {
  bannerDetail: IAcademicBanner
}) => {
  return (
    <div className="max-h-[1145px] w-full bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 flex ">
      <BachelorSidebar bannerDetail={bannerDetail} />
    </div>
  )
}

export default BachelorStickySidebar
