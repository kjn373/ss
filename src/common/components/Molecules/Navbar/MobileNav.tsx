import React from 'react'
import { MobileNavHeader } from './MobileNavHeader'
import { ISocialMediaData } from '@/app/(routes)/contact/_interface/Contact'

export const MobileNav = ({
  socialLinks,
}: {
  socialLinks: ISocialMediaData[] | undefined
}) => {
  return (
    <div className="block 2lg:hidden  sticky top-0 z-[999]">
      <MobileNavHeader socialLinks={socialLinks} />
    </div>
  )
}
