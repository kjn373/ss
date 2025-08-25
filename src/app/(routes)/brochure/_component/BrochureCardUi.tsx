import React from 'react'
import { IBrochureItem } from '../interface/brochureType'
import { format } from 'date-fns'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { MdArrowForwardIos } from 'react-icons/md'

export const BrochureCardUi = ({
  data,
  handleBrochureClick,
}: {
  data: IBrochureItem
  handleBrochureClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}) => {
  return (
    <button onClick={handleBrochureClick}>
      <div className="p-5 rounded-xl bg-white flex items-center justify-between gap-4  border-b-[4px] border-r-[4px] border-shadowBorder group hover:bg-primary transition-all duration-500 cursor-pointer 2lg:w-[397px] 2lg:h-[104px]">
        <ImageWithPlaceholder
          src={data.image.key}
          //src={data.image ? data.image.key : undefined}
          width={56}
          height={56}
          alt="Brochure image"
          className="rounded-full size-14 object-cover aspect-square"
        />

        <div className=" w-full flex flex-col justify-start">
          <p className="font-workSans text-left font-medium text-[16px] leading-[27.2px] text-heading group-hover:text-white transition-all duration-500">
            {data.title}
          </p>
          <span className="font-workSans text-left  font-normal text-[14px] leading-4 text-body group-hover:text-white transition-all duration-500 ">
            {format(data.publishedAt, 'MMMM d, yyyy')}
          </span>
        </div>
        <MdArrowForwardIos className="text-[25px] text-body group-hover:text-white transition-all duration-500" />
      </div>
    </button>
  )
}
