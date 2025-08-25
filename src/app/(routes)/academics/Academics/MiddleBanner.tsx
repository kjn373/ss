import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const MiddleBanner = () => {
  return (
    <div className="w-full h-[566px] md:h-[480px] lg:h-[322px] relative flex items-center justify-center">
      <Image
        src="/ss/CTA.svg"
        alt="Banner"
        width={1920}
        height={235}
        className={`w-full h-full object-cover hidden md:hidden lg:block`}
      />
      <Image
        src="/ss/CTA1.svg"
        alt="Banner"
        width={1920}
        height={235}
        className={`w-full h-full object-cover hidden md:block lg:hidden`}
      />
      <Image
        src="/ss/CTA (2).svg"
        alt="Banner"
        width={1920}
        height={235}
        className={`w-full h-full object-cover md:hidden`}
      />
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-6 px-8 lg:px-6">
        <div className="md:w-[608px]">
          <h1 className="text-white font-poppins text-[28px] md:text-[32px] font-medium leading-10">
            Fostering a Community of Learning
          </h1>
          <p className="text-white font-workSans text-base leading-7 font-normal">
            When reading an application, we get to know the person behind the
            numbers.{' '}
          </p>
        </div>
        <div className="md:w-[608px] flex flex-col md:flex-row gap-6">
          <div className="md:w-[292px] bg-white rounded-xl transition-all duration-500 hover:-translate-y-1">
            <Link href={'/apply?form=plus-two'}>
              <div className="pt-[56px] pl-[24px] pb-[24px] pr-[94px] leading-7 text-base font-workSans font-medium text-primary">
                <h1>
                  Apply to <br /> Plus Two Programs{' '}
                  <FaArrowRightLong className="inline" />
                </h1>
              </div>
            </Link>
          </div>
          <Link
            href={'/apply?form=school'}
            className="transition-all duration-500 hover:-translate-y-1"
          >
            <div className="md:w-[292px] bg-transparent border-[1px] border-white rounded-xl">
              <div className="pt-[56px] pl-[24px] pb-[24px] pr-[66px]  leading-7 text-base font-workSans font-normal text-white">
                <h1>
                  Apply to <br /> Bachelor Programs{' '}
                  <FaArrowRightLong className="inline" />
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MiddleBanner
