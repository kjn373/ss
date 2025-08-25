'use client'

import { useEffect, useState } from 'react'
import { INavSubLink } from '../interface/type'
import { IFacilityResponse } from '@/app/(routes)/facilities/interface/facilityInterface'
import { UseServerFetch } from './useServerFetch'

export const useNavLinks = () => {
  const [facilites, setFacilities] = useState<INavSubLink[] | undefined>(
    undefined
  )
  const suffix = '/facilities'
  const overviewLink = {
    id: 111,
    title: 'Overview',
    link: '/facilities',
  }

  const fetchFacilities = async () => {
    const response: IFacilityResponse | undefined = await UseServerFetch(
      '/api/v1/facility/list'
    )
    const facilitiesData = response && response.data
    if (facilitiesData) {
      const returnFacilitiesNavData = [
        overviewLink,
        ...facilitiesData.map((d, index) => ({
          id: index,
          title: d.facilityTitle,
          link: `${suffix}/${d.slug}`,
        })),
      ]

      setFacilities(returnFacilitiesNavData)
    }
  }

  useEffect(() => {
    fetchFacilities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    facilites,
  }
}
