import { Button } from '@/common/components/Atom/Button'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'
import { IFacilityData } from '../interface/facilityInterface'
import { sanitizeHtml } from '@/lib/sanitize'
import Link from 'next/link'

export const FacilitesDesc = ({ detail }: { detail: IFacilityData }) => {
  const cleanHtml = detail && sanitizeHtml(detail.description)

  return (
    <div className="flex flex-col items-start gap-y-2 ">
      <MiniHeading>{detail?.facilityTitle}</MiniHeading>
      <SectionHeading>{detail?.articleTitle}</SectionHeading>

      <p
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
        className="text-body font-workSans font-normal text-[16px] leading-[27.2px] mt-4  text-balance"
      />
      <Link href={'/apply'}>
        <Button className="mt-8 w-full md:w-fit md:my-8">
          Apply Admission
        </Button>
      </Link>
    </div>
  )
}
