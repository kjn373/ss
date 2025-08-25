import { useGSAP } from '@gsap/react'
import React, { Dispatch, ReactNode, SetStateAction, useRef } from 'react'
import gsap from 'gsap'
import { CloseButton } from '../../Atom/CloseButton'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { cn } from '@/common/utils/utils'

export const Sidebar = ({
  isOpen,
  setOpen,
  children,
  isChild,
}: {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  isChild?: boolean
}) => {
  const sideBarRef = useRef<HTMLDivElement | null>(null)

  const handleSidebarClose = () => {
    gsap.to(sideBarRef.current, {
      x: '-100%',
      duration: 0.5,
      onComplete: () => setOpen(false),
    })
  }

  useGSAP(
    () => {
      if (isOpen) {
        gsap.from(sideBarRef.current, {
          x: '-100%',
          duration: 0.5,
          ease: 'power2.inOut',
        })
      }
    },
    { dependencies: [isOpen] }
  )

  return (
    <div ref={sideBarRef} className="h-screen  bg-white fixed w-full top-0">
      <div
        className={cn(
          'w-full flex justify-end items-center border-b border-border p-4 mb-4',
          {
            'justify-between': isChild,
          }
        )}
      >
        {isChild && (
          <IoIosArrowRoundBack
            onClick={() => handleSidebarClose()}
            className="bg-primaryLighter size-7 rounded-full text-body"
          />
        )}
        <CloseButton
          handleClick={() => handleSidebarClose()}
          className="relative"
        />
      </div>
      {children}
    </div>
  )
}
