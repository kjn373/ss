'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export const NavHeaderLink = ({
  setOpenSidebar,
}: {
  setOpenSidebar?: Dispatch<SetStateAction<boolean>>
}) => {
  const handleLinkClick = () => {
    if (setOpenSidebar) {
      setOpenSidebar(false)
    }
  }

  return (
    <div className="flex gap-x-6  2lg:pr-6 border-r-[1px] border-border">
      <Link
        href={'/brochure'}
        className="group relative"
        onClick={handleLinkClick}
      >
        <span className="flex font-workSans relative gap-x-[6.67px] items-center font-medium text-[16px] 2lg:text-[12px] leading-4 tracking-wide uppercase text-heading hover:text-primary transition-all duration-500">
          Brochure
          <Image
            width={6}
            height={7}
            alt="arrow right"
            src={'/home/arrow.svg'}
          />
        </span>
        <span className="absolute left-0 top-4 h-[1px] w-0 bg-primary transition-all duration-500 z-10 group-hover:w-1/3" />
      </Link>

      <Link
        href={'/apply'}
        className="group relative"
        onClick={handleLinkClick}
      >
        <span className="flex font-workSans gap-x-[6.67px]  items-center  font-medium text-[16px] 2lg:text-[12px] leading-4 tracking-wide uppercase text-heading  hover:text-primary transition-all duration-500">
          Apply now
          <Image
            width={6}
            height={7}
            alt="arrow right"
            src={'/home/arrow.svg'}
          />
        </span>
        <span className="absolute left-0 top-4 h-[1px] w-0 bg-primary transition-all duration-500 z-10 group-hover:w-1/3" />
      </Link>

      <Link
        href={'/result'}
        className="group relative"
        onClick={handleLinkClick}
      >
        <span className="flex font-workSans gap-x-[6.67px] items-center font-medium text-[16px] 2lg:text-[12px] leading-4 tracking-wide uppercase text-heading  hover:text-primary transition-all duration-500">
          Result
          <Image
            width={6}
            height={7}
            alt="arrow right"
            src={'/home/arrow.svg'}
          />
        </span>
        <span className="absolute left-0 top-4 h-[1px] w-0 bg-primary transition-all duration-500 z-10 group-hover:w-1/3" />
      </Link>
    </div>
  )
}
