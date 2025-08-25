'use client'

import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { academicCardsDataOne } from './constant/data'
import { cn } from '@/common/utils/utils'
import Link from 'next/link'

type IType = 'PLUS_TWO' | 'BACHELOR'

export const AcademicCards = ({
  title,
  description,
  list,
  color,
  type,
}: {
  title: string
  description: string
  list: typeof academicCardsDataOne
  color: string
  type?: IType
}) => {
  return (
    <div className="bg-white p-8 rounded-[12px] flex flex-col gap-y-4 relative group overflow-hidden">
      <span className="text-primary font-poppins font-semibold text-[20px] leading-[26px] z-10">
        {title}
      </span>
      <p className="font-workSans font-normal text-[16px] leading-[27.2px] max-w-[333px] z-10 text-body">
        {description}
      </p>
      <div className="mt-4 flex flex-col gap-y-8 z-10">
        {list.map((list) => (
          <AcademicList
            key={list.id}
            title={list.title}
            slug={list.slug}
            type={type ? type : 'PLUS_TWO'}
          />
        ))}
      </div>
      <div
        className={` size-[259px] rounded-full ${color} absolute bottom-[-11.25rem] -right-[9.75rem] group-hover:scale-[600%] transition-all duration-500 z-[1]`}
      />
    </div>
  )
}

const AcademicList = ({
  title,
  slug,
  type,
}: {
  title: string
  slug: string
  type: IType
}) => {
  return (
    <Link
      href={`/academics/${type === 'PLUS_TWO' ? 'plustwo' : 'school'}/${slug}`}
    >
      <span
        className={cn(
          'flex items-center gap-x-2 font-workSans font-normal text-[16px] leading-4 transition-all duration-300 text-heading hover:text-primary '
        )}
      >
        {title}
        <GoArrowRight
          className={cn(' transition-all duration-500 w-4 text-heading')}
        />
      </span>
    </Link>
  )
}
