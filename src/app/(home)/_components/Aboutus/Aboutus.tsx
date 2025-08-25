import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React from 'react'
import './about.css'
import { Button } from '@/common/components/Atom/Button'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Link from 'next/link'
// import { IAboutResponse } from '@/app/(routes)/about/_interface/About'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
// import { NoDataFound } from '@/common/components/NoDataFound'
import { aboutData } from '@/common/data/staticData'

const Aboutus = async () => {
  // Using static data instead of API call
  // const response: IAboutResponse | undefined = await UseServerFetch(
  //   '/api/v1/introduction'
  // )

  const renderAboutDataUi = () => {
    // Use static data
    const introduction = aboutData
    const features = introduction.features
    return (
      <div className="flex flex-col lg:flex-row gap-[40px] justify-between 2lg:gap-[80px]">
        <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
          <MiniHeading isMd className="text-start  w-fit">
            about SS College
          </MiniHeading>
          <SectionHeading isMd className="mt-2 text-start">
            {introduction.title}
          </SectionHeading>
          <div
            className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6"
            dangerouslySetInnerHTML={{ __html: introduction.description }}
          ></div>
          <div className="">
            <ul className="custom-list text-heading font-normal text-[16px] leading-[27.2px] grid grid-cols-1 lg:grid-cols-2 gap-y-[16px] gap-2 2lg:gap-[24px]">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-[40px]">
            <Link href={'/about'}>
              <Button className="w-full 2lg:w-fit">About us</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="gap-4 flex flex-col">
            <div>
              <Image
                src="/ss/person.jpg"
                width={320}
                height={335}
                alt="ab"
                className="w-full h-[360px] md:w-[321px] sm:h-[335px] object-cover rounded-xl"
              />
            </div>
            <div className="hidden md:block bg-[#0b1c68] text-white max-w-[320px] h-[258px] ">
              <h2 className="font-poppins text-[18px] 4xl:text-[20px] font-medium leading-[26px] p-6 2lg:p-10">
                Lorem ipsum dolor sit amet co
              </h2>
              <p className="text-[14px] 4xl:text-[16px] font-workSans font-normal leading-[27.2px] p-6 2lg:p-10">
                Debitis quas provident placeat. Iusto quo ear
              </p>
            </div>
          </div>
          <div className="h-[610px]">
            <Image
              src="/ss/img4.jpg"
              width={320}
              height={610}
              alt="ab"
              className="w-full md:w-[321px] h-[610px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    )
  }

  return <HomeWrapper>{renderAboutDataUi()}</HomeWrapper>
}

export default Aboutus
