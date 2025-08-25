'use client'

import { facilityData } from '@/common/data/staticData'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { useEffect, useState } from 'react'
import {
  IFacilityData,
  // IFacilityDetailResponse,
} from '../interface/facilityInterface'
import { ActiveImage } from './ActiveImage'
import { FacilitesDesc } from './FacilitesDesc'
import { SwipeableCards } from './SwipeableCards'

export const FacilitesTabSection = ({ slug }: { slug: string }) => {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)
  const [facility, setFacility] = useState<IFacilityData | undefined>(undefined)

  // API fetching code
  // const fetchFacilities = async () => {
  //   const response: IFacilityDetailResponse | undefined = await UseServerFetch(
  //     `/api/v1/facility/${slug}`
  //   )
  //   if (response && response.data) {
  //     setActiveSrc(response.data.images.key[0])
  //     setFacility(response.data)
  //   }
  // }

  useEffect(() => {
    // Using static data instead of API
    // fetchFacilities()

    // Find facility by slug from static data
    const foundFacility = facilityData.find(
      (facility) => facility.slug === slug
    )

    if (foundFacility) {
      setActiveSrc(foundFacility.images.key[0])
      setFacility(foundFacility)
    }
  }, [slug])

  return (
    <div className="flex justify-around 2xl:justify-between flex-col gap-y-6 gap-x-6 md:flex-row lg:gap-x-10 2lg:gap-x-12 xl:gap-x-10  2xl_md:gap-x-6 2xl:gap-x-3 2xl_lg:gap-x-3 3xl:gap-x-1 items-start">
      {activeSrc && <ActiveImage src={activeSrc} />}
      <div className="flex flex-col md:flex-col-reverse gap-y-3  2lg:max-w-[503px]">
        {facility?.images && (
          <SwipeableCards setActiveSrc={setActiveSrc} data={facility?.images} />
        )}
        {facility?.description && <FacilitesDesc detail={facility} />}
      </div>
    </div>
  )
}
