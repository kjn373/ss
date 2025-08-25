import React from 'react'
import ContactusSection from './_components/ContactusSection'
import ContactUsHeader from './_components/ContactUsHeader'
import { CoverImage } from '@/common/components/Molecules/CoverImage'

const page = () => {
  return (
    <div>
      <CoverImage
        title="Contact Us"
        list={[{ link: '', title: 'Contact Us' }]}
      />
      <ContactUsHeader />
      <ContactusSection />
    </div>
  )
}

export default page
