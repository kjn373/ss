'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { AdmissionTab } from './AdmissionTab'

export const Admission = () => {
  return (
    <div>
      <CoverImage
        title="Apply Now"
        list={[{ link: null, title: 'Apply Now' }]}
      />
      <HomeWrapper>
        <AdmissionTab />
      </HomeWrapper>
    </div>
  )
}
