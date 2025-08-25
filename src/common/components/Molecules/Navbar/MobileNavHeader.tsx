'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Sidebar } from './Sidebar'
import { SidebarContainer } from './SidebarContainer'
import Link from 'next/link'
import { ISocialMediaData } from '@/app/(routes)/contact/_interface/Contact'

export const MobileNavHeader = ({
  socialLinks,
}: {
  socialLinks: ISocialMediaData[] | undefined
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className="p-4 bg-background/85 backdrop-blur-xl flex justify-between items-center py-4 shadow">
        <div className="flex items-center gap-x-3">
          <Link href={'/'}>
            <Image
              width={56}
              height={56}
              src={'/ss/logo.jpg'}
              alt="School logo"
            />
          </Link>
          <Link href={'/'}>
            <h2 className="font-poppins font-medium text-[18px] leading-6 text-heading">
              SS <br /> College
            </h2>
          </Link>
        </div>

        <button onClick={() => setIsMenuOpen((prev) => !prev)}>
          <IoMenu className="size-6" />
        </button>
      </div>
      {isMenuOpen && (
        <Sidebar isOpen={isMenuOpen} setOpen={setIsMenuOpen}>
          <SidebarContainer
            setOpenMainSidebar={setIsMenuOpen}
            socialLinks={socialLinks}
          />
        </Sidebar>
      )}
    </>
  )
}
