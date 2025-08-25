'use client'

import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { NavHeaderLink } from './NavHeaderLink'
import { ISettings } from '@/app/(routes)/contact/_interface/Contact'
import Link from 'next/link'

export const NavHeader = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  socialLinks,
}: {
  socialLinks: ISettings | undefined
}) => {
  // const handleMailClick = (mail: string) => {
  //   window.location.href = `mailto:${mail}`
  // }

  // const handleRedirectContact = (contact: string) => {
  //   window.location.href = `tel:${contact}`
  // }

  // const getMail = socialLinks?.data?.filter((d) => d.key === 'email')
  // const getPhone = socialLinks?.phoneNumber?.filter((d) => d.key === 'support')

  return (
    <div className="py-3 bg-background border-b-[1px] border-border hidden 2lg:block ">
      <HomeWrapper className="py-0">
        <div className="flex justify-between">
          <div className="flex gap-x-8 ">
            {
              // getMail && getMail.length > 0 && getMail[0].value &&
              <div
                // onClick={() => handleMailClick(getMail[0].value)}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <Image
                  width={11.67}
                  height={9.33}
                  src="/home/mail.svg"
                  alt="mail icon"
                />
                <span className="font-workSans text-[14px] leading-[16px] font-normal">
                  sscollegethimi14@gmail.com
                </span>
              </div>
            }
            {
              // getPhone && getPhone.length > 0 && getPhone[0].value &&
              <div
                // onClick={() => handleRedirectContact(getPhone[0].value)}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <Image
                  width={11.67}
                  height={9.33}
                  src="/home/call.svg"
                  alt="call icon"
                />
                <span className="font-workSans text-[14px] leading-[16px] font-normal">
                  +977 9800000000
                </span>
              </div>
            }
          </div>
          <div className="flex items-center gap-x-6 justify-between">
            <NavHeaderLink />
            {/* <NavHeaderSocialMedia links={socialLinks?.socialMedia} /> */}
            <NavHeaderSocialMedia />
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}
export const NavHeaderSocialMedia = () => {
  return (
    <div className="flex gap-x-6 2lg:gap-x-4 items-center">
      <>
        <Link href="https://x.com/" target="_blank">
          <Image
            width={14}
            height={14}
            src={'/home/twitter.svg'}
            alt="Twitter logo"
            className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
          />
        </Link>

        <Link href="https://www.facebook.com/sscollegethimi14/" target="_blank">
          <Image
            width={8}
            height={14}
            src={'/home/facebook.svg'}
            alt="Twitter logo"
            className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
          />
        </Link>

        <Link href="https://www.instagram.com/" target="_blank">
          <Image
            width={14}
            height={14}
            src={'/home/instagram.svg'}
            alt="Twitter logo"
            className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
          />
        </Link>

        <Link href="https://www.youtube.com/" target="_blank">
          <Image
            width={14}
            height={14}
            src={'/home/youtube.svg'}
            alt="Twitter logo"
            className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
          />
        </Link>
      </>
    </div>
  )
}
// export const NavHeaderSocialMedia = ({
//   links,
// }: {
//   links: ISocialMediaData[] | undefined
// }) => {
//   return (
//     <div className="flex gap-x-6 2lg:gap-x-4 items-center">
//       {/* {links &&
//         links?.map((d) => {
//           return (
//             <>
//               {d.key === 'twitter' && (
//                 <Link href="https://x.com/" target="_blank">
//                   <Image
//                     width={14}
//                     height={14}
//                     src={'/home/twitter.svg'}
//                     alt="Twitter logo"
//                     className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
//                   />
//                 </Link>
//               )}
//               {d.key === 'facebook' && (
//                 <Link
//                   href="https://www.facebook.com/KathmanduWS"
//                   target="_blank"
//                 >
//                   <Image
//                     width={8}
//                     height={14}
//                     src={'/home/facebook.svg'}
//                     alt="Twitter logo"
//                     className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
//                   />
//                 </Link>
//               )}
//               {d.key === 'instagram' && (
//                 <Link
//                   href="https://www.instagram.com/kathmanduws/"
//                   target="_blank"
//                 >
//                   <Image
//                     width={14}
//                     height={14}
//                     src={'/home/instagram.svg'}
//                     alt="Twitter logo"
//                     className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
//                   />
//                 </Link>
//               )}
//               {d.key === 'Youtube' && (
//                 <Link href="https://www.youtube.com/" target="_blank">
//                   <Image
//                     width={14}
//                     height={14}
//                     src={'/home/youtube.svg'}
//                     alt="Twitter logo"
//                     className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
//                   />
//                 </Link>
//               )}
//             </>
//           )
//         })} */}
//     </div>
//   )
// }
