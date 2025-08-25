import { ISocialMediaData } from '@/app/(routes)/contact/_interface/Contact'
import { navLinks } from '@/common/constant/data'
import { useNavLinks } from '@/common/hook/useNavLinks'
import { INavLink, INavSubLink } from '@/common/interface/type'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { Button } from '../../Atom/Button'
import { NavHeaderSocialMedia } from './NavHeader'
import { NavHeaderLink } from './NavHeaderLink'
import { Sidebar } from './Sidebar'

export const SidebarContainer = ({
  setOpenMainSidebar,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  socialLinks,
}: {
  setOpenMainSidebar: Dispatch<SetStateAction<boolean>>
  socialLinks: ISocialMediaData[] | undefined
}) => {
  const { facilites } = useNavLinks()
  const [openDropDown, setOpenDropdown] = useState<boolean>(false)
  const [navDropdown, setNavDropDown] = useState<INavSubLink[] | []>([])

  useEffect(() => {
    if (!openDropDown) {
      setNavDropDown([])
    }
  }, [openDropDown])

  const handleLinkClick = (
    link: INavLink,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (link.isDropDown) {
      event.preventDefault()
      setNavDropDown(link.sublink || [])
      setOpenDropdown(true)
    } else {
      setOpenMainSidebar(false)
    }
  }

  return (
    <div className="mt-8  w-full">
      <div className="flex flex-col gap-y-6  p-4">
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="flex flex-row items-center gap-x-1"
            onClick={() => {
              if (link.title === 'Our facilities' && facilites) {
                setNavDropDown(facilites)
              } else {
                if (link.sublink) {
                  setNavDropDown(link.sublink)
                  setOpenDropdown(true)
                }
              }
            }}
          >
            <Link
              href={link.link || '/'} // Provide a default fallback
              onClick={(event) => handleLinkClick(link, event)}
            >
              <span className="font-workSans font-medium text-[16px] leading-4 text-heading">
                {link.title}
              </span>
            </Link>

            {link.isDropDown && (
              <FiChevronDown className="w-[14px]   group-hover:text-primary transition-all duration-500 -rotate-90" />
            )}
          </button>
        ))}

        <Link href={'/contact'}>
          <Button
            onClick={() => setOpenMainSidebar(false)}
            className="w-fit mt-2"
          >
            Contact Us
          </Button>
        </Link>
        <NavHeaderLink setOpenSidebar={setOpenMainSidebar} />
        {/* <NavHeaderSocialMedia links={socialLinks} /> */}
        <NavHeaderSocialMedia />
      </div>

      {openDropDown && (
        <Sidebar isOpen={openDropDown} setOpen={setOpenDropdown} isChild={true}>
          <div className="p-4 flex flex-col gap-y-6">
            {navDropdown.length &&
              navDropdown?.map((dropdown) => (
                <NavDropDown
                  link={dropdown}
                  key={dropdown.id}
                  setClose={setOpenMainSidebar}
                />
              ))}
          </div>
        </Sidebar>
      )}
    </div>
  )
}

const NavDropDown = ({
  link,
  setClose,
}: {
  link: INavSubLink
  setClose: Dispatch<SetStateAction<boolean>>
}) => {
  const [openSubSidebar, setOpenSubSidebar] = useState<boolean>(false)
  const [subSublinks, setSubSublinks] = useState<INavSubLink[]>([])

  const handleSubLinkClick = (
    subLinks: INavSubLink[] | undefined,
    linkUrl: string | undefined,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    // If the link has sub-sublinks, open the sub-sublink sidebar
    if (subLinks && subLinks.length > 0) {
      event.preventDefault() // Prevent default navigation if sub-sublinks exist
      if (openSubSidebar && subSublinks === subLinks) {
        setOpenSubSidebar(false)
        setSubSublinks([])
      } else {
        setSubSublinks(subLinks)
        setOpenSubSidebar(true)
      }
    } else if (linkUrl) {
      // If the link has a valid URL, close the sidebar and navigate
      setClose(false)
    } else {
      event.preventDefault() // Prevent default navigation if no valid link URL
    }
  }

  return (
    <>
      <Link
        href={link.link || '#'}
        onClick={(event) =>
          handleSubLinkClick(link.subsublink, link.link, event)
        }
        className="flex flex-row items-center gap-x-1"
      >
        <span className="font-workSans font-medium text-[16px] leading-4 text-heading">
          {link.title}
        </span>
        {link.subsublink && !openSubSidebar && (
          <FiChevronRight className="w-[14px]" />
        )}
      </Link>

      {openSubSidebar && (
        <Sidebar
          isOpen={openSubSidebar}
          setOpen={setOpenSubSidebar}
          isChild={true}
        >
          <div className="p-4 flex flex-col gap-y-6 z-50">
            {subSublinks.map((subLink) => (
              <Link
                href={subLink.link || '/'}
                onClick={() => setClose(false)}
                key={subLink.id}
              >
                <span className="font-workSans font-medium text-[16px] leading-4 text-heading">
                  {subLink.title}
                </span>
              </Link>
            ))}
          </div>
        </Sidebar>
      )}
    </>
  )
}
