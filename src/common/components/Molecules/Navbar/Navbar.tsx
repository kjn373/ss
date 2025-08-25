'use client'
import { navLinks } from '@/common/constant/data'
import { useNavLinks } from '@/common/hook/useNavLinks'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Button } from '../../Atom/Button'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import { scrollToTop } from '../../ScrollToTop'

export const Navbar = () => {
  const pathname = usePathname()
  const { facilites } = useNavLinks()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSublink, setActiveSublink] = useState<number | null>(null)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setActiveDropdown(null)
    setActiveSublink(null)
    scrollToTop()
  }, [pathname])

  const handleMouseEnter = (label: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = (label: string) => {
    const id = setTimeout(() => {
      if (activeDropdown === label) {
        setActiveDropdown(null)
        setActiveSublink(null)
      }
    }, 200)
    setTimeoutId(id)
  }

  const handleSublinkClick = (id: number) => {
    setActiveSublink(activeSublink === id ? null : id)
  }

  return (
    <div className="py-4 sticky top-0 bg-white/85 backdrop-blur-xl z-[999]  hidden 2lg:block shadow-sm ">
      <HomeWrapper className="!py-0">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-6">
            <Link href={'/'}>
              <Image
                width={56}
                height={56}
                src={'/ss/logo.jpg'}
                alt="School logo"
              />
            </Link>

            <Link href={'/'}>
              <h2 className="font-poppins font-semibold text-[20px] leading-6 text-heading">
                SS College
              </h2>
              <p className="text-[14px] leading-4 font-workSans font-normal mt-1">
                NayaThimi - 4, Bhaktapur
              </p>
            </Link>
          </div>
          <div className="flex gap-x-6 items-center">
            <div className="flex gap-x-6">
              {navLinks.map((links) => (
                <NavLinksUi
                  key={links.id}
                  links={links.title}
                  isDropdown={links.isDropDown}
                  link={links.link}
                  sublinks={
                    links.title === 'Our facilities'
                      ? facilites
                      : links.sublink || undefined
                  }
                  activeDropdown={activeDropdown}
                  activeSublink={activeSublink}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  handleSublinkClick={handleSublinkClick}
                  pathname={pathname}
                />
              ))}
            </div>
            <Link href="/contact">
              <Button className="h-fit">Contact Us</Button>
            </Link>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

const NavLinksUi = ({
  links,
  isDropdown,
  link,
  sublinks,
  activeDropdown,
  activeSublink,
  handleMouseEnter,
  handleMouseLeave,
  handleSublinkClick,
  pathname,
}: {
  links: string
  isDropdown: boolean
  link?: string
  sublinks?: {
    id: number
    title: string
    link: string
    subsublink?: { id: number; title: string; link: string }[]
  }[]
  activeDropdown: string | null
  activeSublink: number | null
  handleMouseEnter: (label: string) => void
  handleMouseLeave: (label: string) => void
  handleSublinkClick: (id: number) => void
  pathname: string
}) => {
  const handleHomeScroll = (disableScroll: boolean) => {
    const homeLayoutScroll = document.querySelector(
      '.home-layout-container'
    ) as HTMLElement

    if (disableScroll) {
      if (homeLayoutScroll) {
        homeLayoutScroll.style.overflow = 'hidden'
        homeLayoutScroll.style.position = 'relative'
        homeLayoutScroll.style.scrollbarGutter = 'stable'
      }
    } else {
      if (homeLayoutScroll) {
        homeLayoutScroll.style.overflowY = 'scroll'
        homeLayoutScroll.style.overflowX = 'hidden'
        homeLayoutScroll.style.position = ''
        homeLayoutScroll.style.paddingRight = ''
      }
    }
  }

  const handleRouteScroll = (disableScroll: boolean) => {
    const routeLayoutScroll = document.querySelector(
      '.route-layout-container'
    ) as HTMLElement

    if (disableScroll) {
      if (routeLayoutScroll) {
        routeLayoutScroll.style.overflow = 'hidden'
        routeLayoutScroll.style.position = 'relative'
        routeLayoutScroll.style.scrollbarGutter = 'stable'
      }
    } else {
      if (routeLayoutScroll) {
        routeLayoutScroll.style.overflowY = 'scroll'
        routeLayoutScroll.style.overflowX = 'hidden'
        routeLayoutScroll.style.position = ''
        routeLayoutScroll.style.paddingRight = ''
      }
    }
  }
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    dropdown: boolean,
    link: string | undefined
  ) => {
    // Prevent default only if the link is empty or '#' and there is a dropdown
    if (dropdown && (!link || link === '')) {
      e.preventDefault()
    }
  }

  return (
    <div
      className="flex items-center gap-x-2 group relative"
      onMouseEnter={() => isDropdown && handleMouseEnter(links)}
      onMouseLeave={() => isDropdown && handleMouseLeave(links)}
    >
      <div className="flex flex-col gap-y-1 ">
        <Link
          href={link || '/'}
          className="text-[14px] leading-4 font-workSans font-medium group-hover:text-primary transition-all duration-500 "
          onClick={(e) => {
            handleHomeScroll(false)
            handleLinkClick(e, isDropdown && !!sublinks, link)
          }}
        >
          {links}
        </Link>
        <span className="w-1/3 h-[1px] bg-primary opacity-0 rounded group-hover:opacity-100 transition-all duration-500" />
      </div>
      {isDropdown && (
        <>
          <FiChevronDown className="w-[14px] mb-[3px] group-hover:text-primary transition-all duration-500" />
          {activeDropdown === links && (
            <div
              className={cn(
                'absolute top-full left-0 mt-1 bg-white shadow-md rounded-[12px] p-2 z-50 w-[240px]  ',
                {
                  'overflow-y-auto max-h-[200px] pdf-scrollbar':
                    links === 'Our facilities',
                }
              )}
              onMouseEnter={() => {
                handleHomeScroll(true)
                handleRouteScroll(true)
              }}
              onMouseLeave={() => {
                handleHomeScroll(false)
                handleRouteScroll(false)
              }}
            >
              <div className="flex flex-col py-4 px-6 space-y-5">
                {sublinks?.map((sublink) => (
                  <div key={sublink.id} className="relative  group">
                    {sublink.link ? (
                      <Link href={sublink.link}>
                        <div
                          className={cn(
                            'text-[14px] group/item leading-4 font-workSans font-medium hover:text-primary transition-all duration-500 cursor-pointer',
                            pathname === sublink.link
                              ? 'text-primary'
                              : 'text-black'
                          )}
                          onClick={() => {
                            handleHomeScroll(false)
                            handleRouteScroll(false)
                            handleSublinkClick(sublink.id)
                          }}
                        >
                          {sublink.title}
                          {sublink.subsublink && (
                            <FiChevronDown className="ml-2 w-[14px] mb-[3px] inline-block -rotate-90" />
                          )}
                          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-500 group-hover/item:w-[10%]" />
                        </div>
                      </Link>
                    ) : (
                      <button
                        className="text-[14px] leading-4 group/item font-workSans font-medium hover:text-primary transition-all duration-500 cursor-pointer"
                        onClick={() => {
                          handleHomeScroll(false)
                          handleRouteScroll(false)
                          handleSublinkClick(sublink.id)
                        }}
                      >
                        {sublink.title}
                        {sublink.subsublink && (
                          <FiChevronDown className="ml-2 w-[14px] mb-[3px] inline-block -rotate-90" />
                        )}
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-500 group-hover/item:w-[10%]" />
                      </button>
                    )}

                    {sublink.subsublink && activeSublink === sublink.id && (
                      <div
                        className="absolute top-[0px] left-[205px] mt-0 bg-white shadow-md rounded-[12px] p-2 z-50 w-[240px]"
                        onMouseEnter={() => {
                          handleHomeScroll(true)
                          handleRouteScroll(true)
                        }}
                        onMouseLeave={() => {
                          handleHomeScroll(false)
                          handleRouteScroll(false)
                        }}
                      >
                        <div className="flex flex-col py-2 px-4 space-y-7">
                          {sublink.subsublink.map((subsublink) => (
                            <Link
                              key={subsublink.id}
                              href={subsublink.link}
                              className="group/subitem text-[14px] leading-4 font-workSans font-medium hover:text-primary transition-all duration-500"
                              onClick={() => {
                                handleHomeScroll(false)
                                handleRouteScroll(false)
                                handleSublinkClick(sublink.id)
                              }}
                            >
                              {subsublink.title}
                              <span className="block mt-[1px] h-[1px] w-0 bg-primary transition-all duration-500 group-hover/subitem:w-[10%]" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
