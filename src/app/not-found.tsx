import React from 'react'
import { NavSection } from './(home)/_components/NavSection'
import { ISettingsResponseData } from './(routes)/contact/_interface/Contact'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import Footer from '@/common/components/Molecules/Footer/Footer'
import Image from 'next/image'

import Link from 'next/link'
import { Button } from '@/common/components/Atom/Button'

const notFound = async () => {
  const settingsData: ISettingsResponseData | undefined = await UseServerFetch(
    '/api/v1/settings'
  )
  return (
    <div className="h-screen overflow-y-scroll">
      <NavSection settings={settingsData} />
      <div className="w-full px-4 md:px-12 lg:px-[60px] 2xl:px-[200px] 2xl_lg:px-[240px] 3xl:px-[540px] py-[56px]  md:py-[80px]">
        <div className="flex gap-8 flex-col md:flex-row justify-center">
          <div className="mx-auto">
            <Image
              src="/home/Group.svg"
              width={394}
              height={289}
              alt="not-found"
            />
          </div>
          <div className="flex flex-col max-w-[326px] mx-auto justify-center md:justify-start items-center md:items-start">
            <h1 className="font-poppins text-[100px] text-[#22292F] font-semibold leading-[120px]">
              404
            </h1>
            <h2 className="font-poppins text-[24px] text-[#22292F] font-semibold mt-6">
              Uh Oh! You&apos;re lost.
            </h2>
            <p className="text-[#5A6F81] font-workSans text-sm font-normal mt-4 text-center md:text-start">
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage
            </p>
            <div className="mt-6">
              <Link href="/">
                <Button variant={'default'} className=" w-[113px] h-[48px] ">
                  Go Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer settings={settingsData} />
    </div>
  )
}

export default notFound
