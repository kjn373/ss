'use client'
import Image from 'next/image'
import React from 'react'
import { SectionHeading } from '../Atom/SectionHeading'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IBreadCrumbList {
  title: string
  link: string | null
}

export const CoverImage = ({
  title,
  list,
}: {
  title: string
  list?: IBreadCrumbList[]
}) => {
  return (
    <div className="w-full h-[142px] md:h-[171px] relative   flex items-center justify-center ">
      <Image
        src="/ss/coverimage.svg"
        alt="Banner"
        width={1920}
        height={235}
        className={`w-full h-full object-cover `}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-1">
        <SectionHeading className="text-center text-white capitalize">
          {title}
        </SectionHeading>
        {list && <CustomBreadCrumb list={list} />}
      </div>
    </div>
  )
}

const CustomBreadCrumb = ({ list }: { list: IBreadCrumbList[] }) => {
  const pathname = usePathname()

  // Split the pathname into segments and filter out empty segments
  const pathSegments = pathname.split('/').filter((segment) => segment)

  // Generate breadcrumb items from the path segments
  const breadcrumbItems = pathSegments.map((segment, index) => {
    // Build the path for the current segment
    const href = '/' + pathSegments.slice(0, index + 1).join('/')

    // Capitalize the segment name
    const title = segment
      .replace(/-/g, ' ')
      .replace(/^\w/, (c) => c.toUpperCase())

    return {
      title,
      link: href,
    }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="">
            <Link
              className="font-workSans text-white font-medium text-[14px] leading-4"
              href="/"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {list
          ? list.map((link) => (
              <>
                <BreadcrumbSeparator className="text-white  [&>svg]:size-4" />
                <BreadcrumbItem>
                  {link.link ? (
                    <Link href={link.link}>
                      <span className="font-workSans text-white font-medium text-[14px] leading-4 capitalize">
                        {link.title}
                      </span>
                    </Link>
                  ) : (
                    <span className="font-workSans text-white font-medium text-[14px] leading-4 capitalize">
                      {link.title}
                    </span>
                  )}
                </BreadcrumbItem>
              </>
            ))
          : breadcrumbItems.map((item, index) => (
              <React.Fragment key={item.link}>
                <BreadcrumbSeparator className="text-white [&>svg]:size-4" />
                <BreadcrumbItem>
                  {index !== breadcrumbItems.length - 1 ? (
                    <Link href={item.link}>
                      <span className="font-workSans text-white font-medium text-[14px] leading-4 capitalize">
                        {item.title}
                      </span>
                    </Link>
                  ) : (
                    <span className="font-workSans text-white font-medium text-[14px] leading-4 capitalize">
                      {item.title}
                    </span>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
