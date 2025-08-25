'use client'

import { CloseButton } from '@/common/components/Atom/CloseButton'
import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  TwitterShareButton,
  FacebookShareButton,
  EmailShareButton,
} from 'react-share'

export const ShareModal = ({
  setOpen,
  slug,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  slug: string | undefined
}) => {
  const [sharelink, setShareLink] = useState<string | undefined>(undefined)
  const suffix = '/notice'

  useEffect(() => {
    const currentAddress = window.location.origin + suffix + '/' + slug
    if (currentAddress) {
      setShareLink(currentAddress)
    }
  }, [slug])

  const socialMediaLinks = [
    {
      title: 'Twitter',
      src: '/home/twitter.svg',
      Component: TwitterShareButton,
    },
    {
      title: 'Facebook',
      src: '/home/facebook.svg',
      Component: FacebookShareButton,
    },
    {
      title: 'Youtube',
      src: '/home/youtube.svg',
      Component: EmailShareButton,
    },
    {
      title: 'Instagram',
      src: '/home/instagram.svg',
      Component: EmailShareButton,
    },
  ]

  const [copied, setCopied] = useState<boolean>(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const handleCopyClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(300)
    }
    setCopied(true)
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const id = setTimeout(() => {
      setCopied(false)
    }, 2000)

    setTimeoutId(id)
  }

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-y-6  relative  will-change-transform transition-all duration-700">
      <span className="font-poppins text-[20px] leading-6  font-semibold">
        Share
      </span>
      <div className="flex gap-x-6 lg:gap-x-11">
        {socialMediaLinks.map(({ title, src, Component }) => (
          <Component key={title} url={src}>
            <div className="flex flex-col gap-y-2">
              <div className="bg-background rounded-full size-10 lg:size-14 flex items-center justify-center">
                <Image
                  src={src}
                  alt={`${title} logo`}
                  width={24}
                  height={24}
                  className="size-5 lg:size-6"
                />
              </div>
              <span className="font-workSans font-normal text-[14px] leading-4 text-center text-heading">
                {title}
              </span>
            </div>
          </Component>
        ))}
      </div>

      <div className="flex flex-col justify-start  lg:justify-between gap-y-1">
        <span className="font-workSans font-normal text-[14px] leading-4 text-body mt-[2px]">
          Page Link
        </span>
        <div className="rounded-lg border-[1px] border-border p-4 flex justify-between items-center gap-x-4">
          <span className="font-workSans font-normal text-[14px] leading-4 text-body  line-clamp-1 break-all w-full md:max-w-[325px] ">
            {sharelink && sharelink}
          </span>
          <CopyToClipboard text={sharelink ? sharelink : ''}>
            <button onClick={handleCopyClick}>
              <Image
                width={16}
                height={16}
                className="size-4"
                alt="clipboard icon"
                src={'/news/copy.svg'}
              />
            </button>
          </CopyToClipboard>
        </div>

        <CloseButton
          className="absolute -top-2 -right-2"
          handleClick={() => setOpen(false)}
        />

        <div
          className={cn(
            ' bg-primaryLight text-body font-workSans text-sm opacity-0  mt-0 p-0 h-0  transition-all duration-700 will-change-transform ',
            {
              'opacity-100  h-full p-4 mt-2  rounded-md': copied,
            }
          )}
        >
          Copied to clipboard!
        </div>
      </div>
    </div>
  )
}
