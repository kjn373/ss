import React from 'react'
import FacilitiesOverview from './FacilitiesOverview'

import { CoverImage } from '@/common/components/Molecules/CoverImage'
import FacilitiesSwiperSection from './FacilitiesSwiperSection'
import { ContactSection } from '@/app/(home)/_components/Contact/ContactSection'

const Facilities = () => {
  return (
    <div>
      <CoverImage
        title="Our Facilities"
        list={[{ link: null, title: 'facilites' }]}
      />

      <div>
        <FacilitiesOverview />
        <FacilitiesSwiperSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default Facilities
