import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { facilityData } from '@/common/data/staticData'
import React from 'react'
import { FacilitesTabSection } from './FacilitesTabSection'

export const FacilitesSection = ({ slug }: { slug: string }) => {
  // Find facility by slug to get the proper title
  const facility = facilityData.find((facility) => facility.slug === slug)
  const facilityTitle = facility?.facilityTitle || slug

  return (
    <div className="min-h-screen ">
      <CoverImage
        title={facilityTitle}
        list={[
          { link: '/facilities', title: 'facilities' },
          { link: null, title: facilityTitle },
        ]}
      />
      <HomeWrapper>
        <FacilitesTabSection slug={slug} />
      </HomeWrapper>
    </div>
  )
}
