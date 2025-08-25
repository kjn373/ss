'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { GalleryMobileSlider, GallerySlider } from './GalleryNewSlider'

export const GallerySection = () => {
  return (
    <div className="bg-[url('/home/gallery-bg.svg')]">
      <HomeWrapper className=" 2lg:pt-[96px]">
        <div className="flex flex-col gap-y-7 lg:gap-y-8 2lg:gap-y-8 overflow-hidden">
          <div className="flex flex-col justify-center items-center gap-y-2 ">
            <MiniHeading className="text-secondary ">gallery</MiniHeading>
            <SectionHeading className="md:text-[38px]">
              Life at SS College
            </SectionHeading>
          </div>
          <GallerySlider />
          <GalleryMobileSlider />
        </div>
      </HomeWrapper>
    </div>
  )
}
