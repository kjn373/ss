'use client'

import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

export const HeroImageSection = () => {
  const firstImageContainerRef = useRef(null)
  const secondImageContainerRef = useRef(null)
  const thirdImageContainerRef = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1270px)', () => {
      const tl = gsap.timeline()

      tl.to(
        firstImageContainerRef.current,
        {
          height: 400,
          transformOrigin: 'top',
          marginTop: 0,
          marginBottom: 106,
        },
        'a'
      )
      tl.to(
        secondImageContainerRef.current,
        {
          height: 400,
          transformOrigin: 'bottom',
          marginTop: 106,
          marginBottom: 0,
        },
        'a'
      )
      tl.to(
        thirdImageContainerRef.current,
        {
          height: 400,
          transformOrigin: 'bottom',
          marginTop: 0,
          marginBottom: 106,
        },
        'a'
      )
    })
  })
  return (
    <div className="flex gap-x-5 h-[286px] md:h-[400px]  2lg:h-[506px]  transition-all duration-500 group ">
      <div
        ref={firstImageContainerRef}
        className="bg-[url('/ss/hero3.jpg')] bg-cover w-[100px] h-[213.9px] md:w-[187px] md:h-[400px]  2lg:w-[186px] 2lg:h-[180px] rounded-xl mb-[65.75px]  2lg:mb-[146px] 2lg:mt-[180px] group-hover:!-translate-y-2 transition-all duration-500 "
      />

      <div
        ref={secondImageContainerRef}
        className="bg-[url('/ss/hero1.jpg')] bg-cover  w-[100px] h-[213.9px] md:w-[187px] md:h-[400px] 2lg:w-[186px] 2lg:h-[180px] rounded-xl 2lg: mb-[100px] mt-14 2lg:mt-[226px] group-hover:!translate-y-2 transition-all duration-500"
      />
      <div
        ref={thirdImageContainerRef}
        className="bg-[url('/ss/hero4.jpg')] bg-cover w-[100px] h-[213.9px] md:w-[187px] md:h-[400px] 2lg:w-[186px] 2lg:h-[180px] rounded-xl mb-[65.75px] 2xl:mb-[146px] 2lg:mt-[180px] group-hover:!-translate-y-2 transition-all duration-500 "
      />
    </div>
  )
}
