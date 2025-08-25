'use client'

import React, { Suspense } from 'react'
import { NewsSection } from './_component/NewsSection'

const NewsPage = () => {
  return (
    <Suspense>
      <NewsSection />
    </Suspense>
  )
}

export default NewsPage
