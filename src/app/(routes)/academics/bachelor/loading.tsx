import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { UiLoader } from '@/common/components/Atom/UiLoader'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'

const loading = () => {
  return (
    <div>
      <CoverImage
        title="Loading Bachelor Program..."
        list={[
          { link: '/academics', title: 'Academics' },
          { link: null, title: 'Bachelor' },
          { link: '', title: 'Loading...' },
        ]}
      />
      <HomeWrapper>
        <div className="min-h-[300px] flex justify-center items-center w-full">
          <UiLoader />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default loading
