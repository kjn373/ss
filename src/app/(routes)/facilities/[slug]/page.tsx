import React from 'react'
import { FacilitesSection } from '../_component/FacilitesSection'
import { facilityData } from '@/common/data/staticData'

export async function generateStaticParams() {
  return facilityData.map((facility) => ({
    slug: facility.slug,
  }))
}

const page = ({ params }: { params: { slug: string } }) => {
  return <FacilitesSection slug={params.slug} />
}

export default page
