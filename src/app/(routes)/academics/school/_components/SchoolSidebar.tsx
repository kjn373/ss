'use client'
import {
  DownloadUi,
  ForInquiry,
} from '@/app/(routes)/news/_component/DownloadUi'
import { Button } from '@/common/components/Atom/Button'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import Link from 'next/link'
import { IAcademicBanner } from '../../_interface/academic'
import { useEffect, useState } from 'react'
import {
  IBrochureApiResponse,
  IBrochureItem,
} from '@/app/(routes)/brochure/interface/brochureType'
import { UseServerFetch } from '@/common/hook/useServerFetch'

const SchoolSidebar = ({ bannerDetail }: { bannerDetail: IAcademicBanner }) => {
  const [brochureData, setBrochureData] = useState<IBrochureItem[] | undefined>(
    undefined
  )

  useEffect(() => {
    const fetchBrochureResponse = async () => {
      try {
        const brochureDataResponse: IBrochureApiResponse | undefined =
          await UseServerFetch(`/api/v1/brochure`)
        if (brochureDataResponse) {
          setBrochureData(brochureDataResponse?.data)
        }
      } catch (error) {
        console.error('Error fetching brochure data:', error)
      }
    }

    fetchBrochureResponse()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-background p-6 rounded-xl">
        <div className="p-6 border-2 border-border rounded-lg">
          <h2 className="text-heading text-xl leading-[26px] font-poppins font-medium">
            Next step toward your future career?
          </h2>
          <p className="text-body font-workSans font-normal text-base leading-7 mt-4">
            Opportunities are like sunrises. lf you wait too long, you miss
            them.
          </p>
          <Link href={'/apply?form=school'}>
            <Button variant={'default'} className="mt-6 w-full">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
      {brochureData && <DownloadUi data={brochureData} />}
      <ForInquiry />
      <div className="cursor-pointer">
        {bannerDetail ? (
          <Link href={bannerDetail.link} target="_blank">
            <ImageWithPlaceholder
              // src={bannerDetail.image.key}
              src="/ss/hero4.jpg"
              width={397}
              height={397}
              className="lg:max-w-[397px] lg:max-h-[397px] object-cover rounded-2xl"
              alt="admission"
            />
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default SchoolSidebar
