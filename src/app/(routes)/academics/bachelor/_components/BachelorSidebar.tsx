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
import { IBrochureItem } from '@/app/(routes)/brochure/interface/brochureType'
import { brochureData } from '@/common/data/staticData'

const BachelorSidebar = ({
  bannerDetail,
}: {
  bannerDetail: IAcademicBanner
}) => {
  const [brochureDataState, setBrochureDataState] = useState<
    IBrochureItem[] | undefined
  >(undefined)

  useEffect(() => {
    // Use static brochure data instead of API call
    const loadBrochureData = () => {
      try {
        setBrochureDataState(brochureData.data)
      } catch (error) {
        console.error('Error loading brochure data:', error)
      }
    }

    loadBrochureData()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-background p-6 rounded-xl">
        <div className="p-6 border-2 border-border rounded-lg">
          <h2 className="text-heading text-xl leading-[26px] font-poppins font-medium">
            Ready to advance your career?
          </h2>
          <p className="text-body font-workSans font-normal text-base leading-7 mt-4">
            Your bachelor&apos;s degree is the foundation for your professional
            journey. Take the next step today.
          </p>
          <Link href={'/apply?form=bachelor'}>
            <Button variant={'default'} className="mt-6 w-full">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
      {brochureDataState && <DownloadUi data={brochureDataState} />}
      <ForInquiry />
      <div className="cursor-pointer">
        {bannerDetail ? (
          <Link href={bannerDetail.link} target="_blank">
            <ImageWithPlaceholder
              src="/ss/hero4.jpg"
              width={397}
              height={397}
              className="lg:max-w-[397px] lg:max-h-[397px] object-cover rounded-2xl"
              alt="bachelor admission"
            />
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default BachelorSidebar
