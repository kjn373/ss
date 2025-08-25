'use client'

import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import { ISettings } from '@/app/(routes)/contact/_interface/Contact'
import Link from 'next/link'
import { staticFooterLinksData } from '@/common/constant/data'

interface FooterLinksProps {
  footer: ISettings | undefined
}

const FooterLinks = ({ footer }: FooterLinksProps) => {
  // const filterEmail = footer && footer.data.filter((d) => d.key === 'Email')
  const collegeTime =
    footer && footer.data.filter((d) => d.key === 'College Time')

  const handleClick = (type: 'tel' | 'mailto', value: string) => {
    if (type === 'tel') {
      window.location.href = `tel:${value}`
    } else if (type === 'mailto') {
      window.location.href = `mailto:${value}`
    }
  }

  return (
    <HomeWrapper className="py-14 ">
      <div className="grid sm:grid-cols-2 mx-auto lg:flex lg:justify-between gap-11 lg:space-y-0">
        <div>
          <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
            Contact Information
          </h1>
          <div className="mt-6 space-y-4  text-sm leading-4 text-white font-workSans font-semibold">
            Mobile:
            <span
              className="font-light cursor-pointer"
              onClick={() => {
                if (footer?.phoneNumber[0].value) {
                  handleClick('tel', footer?.phoneNumber[0].value)
                }
              }}
            >
              {' '}
              +977 9889898989
            </span>
          </div>
          <div className="mt-6 space-y-4  text-sm leading-4 text-white font-workSans font-semibold">
            Telephone:{' '}
            <span
              className="font-light cursor-pointer"
              // onClick={() => {
              //   if (footer?.telephone[0].value) {
              //     handleClick('tel', footer?.telephone[0].value)
              //   }
              // }}
            >
              {''} 01-5090354{' '}
            </span>
            <span
              // onClick={() => {
              //   if (footer?.telephone[1].value) {
              //     handleClick('tel', footer?.telephone[1].value)
              //   }
              // }}
              className="font-light cursor-pointer"
            >
              / 015639065
            </span>
          </div>
          <div className="mt-6 space-y-4  text-sm leading-4 text-white font-workSans font-semibold">
            Email:{' '}
            <span
              className="font-light cursor-pointer"
              // onClick={() => {
              //   if (filterEmail && filterEmail[0]?.value) {
              //     handleClick('mailto', filterEmail[0].value)
              //   }
              // }}
            >
              sscollegethimi14@gmail.com{' '}
            </span>
          </div>
          <div className="mt-6 space-y-4  text-sm leading-4 text-white font-workSans font-semibold">
            Time:
            <span className="font-light">
              {' '}
              {collegeTime && collegeTime[0].value}
            </span>
          </div>
        </div>

        {staticFooterLinksData.map((data, sectionIndex) => (
          <div key={sectionIndex} className="">
            <h2 className="font-poppins text-xl font-medium leading-[26px] text-white">
              {data.title}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-light">
              {data.content.map((content, index) => (
                <div
                  key={index}
                  className={
                    'cursor-pointer hover:underline' // No hover effect for contact information
                  }
                >
                  {'subtitle' in content && (
                    <span className="font-medium">
                      <>{content.subtitle}</>:{' '}
                    </span>
                  )}
                  {content.url ? (
                    <Link
                      href={content.url}
                      target={
                        data.title === 'Important Links' ? '_blank' : undefined
                      }
                      rel={
                        data.title === 'Important Links'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {content.text}
                    </Link>
                  ) : (
                    content.text
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </HomeWrapper>
  )
}

export default FooterLinks
