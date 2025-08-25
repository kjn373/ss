'use client'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { Button } from '@/common/components/ui/button'
import Link from 'next/link'
import { MdOutlineChevronRight } from 'react-icons/md'
import 'swiper/css'
import { IAcademicsImage } from '../../_interface/academic'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BachelorGallery = ({ gallery }: { gallery: IAcademicsImage }) => {
  return (
    <div className="flex justify-between flex-col gap-x-6 gap-y-6 mt-6">
      <div className="flex justify-center">
        <ImageWithPlaceholder
          src="/ss/hero4.jpg"
          alt="Active Bachelor Gallery"
          width={787}
          height={524}
          className="rounded-xl md:w-[787px] md:h-[524px] object-contain"
        />
      </div>

      <div className="mt-6 relative">
        <Link href="/gallery">
          <div className="mt-6">
            <Button
              variant="secondary"
              className="group w-full flex items-center gap-4 font-workSans text-heading text-lg font-medium transition-all duration-500"
            >
              View Our Gallery
              <MdOutlineChevronRight width={24} height={24} />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BachelorGallery
