import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Link from 'next/link'

const Copywright = () => {
  return (
    <HomeWrapper className="py-4">
      <div className="flex flex-col lg:flex-row gap-y-6  md:gap-y-4 lg:gap-y-0 justify-between">
        <h2 className="font-workSans font-light  text-[14px] md:text-[16px] leading-[21px] md:leading-[27.2px] text-white">
          Copyright ©2025. All Rights Reserved by SS College | Powered by
          <br className="hidden md:block 2lg:hidden" />
          <Link
            href={'https://aitc.ai/'}
            target="__blank"
            className="hover:underline"
          >
            {' '}
            AITC International
          </Link>
        </h2>
        <div className="font-workSans font-light text-[14px]  leading-[21px]  text-white">
          <Link href="/terms-and-condition" className="">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Copywright
