import { IHomepageItem } from '@/app/(routes)/contact/_interface/Contact'
import { Button } from '@/common/components/Atom/Button'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import { AcademicCards } from './AcademicCards'
import { AcademicSwipeCard } from './AcademicSwipeCard'
import { academicCardsDataOne, academicCardsDataTwo } from './constant/data'

export const AcademicSection = ({
  settings,
}: {
  settings: IHomepageItem[] | undefined
}) => {
  // Suppress unused variable warning - settings is passed as prop but not currently used
  void settings
  // const filterAcademicStudentNum = settings?.filter(
  //   (d) => d.key === 'Satisfied Students'
  // )

  return (
    <HomeWrapper isBg className=" ">
      <div className="pt-[7.2rem] md:pt-[12rem] 2lg:pt-0  flex flex-col  2lg:flex-row justify-between gap-x-6">
        <div className="flex flex-col gap-y-2 xl:my-[68.5px] 2xl_md:my-[68.5px] max-h-[279px]">
          <MiniHeading isMd>Program</MiniHeading>
          <SectionHeading isMd className="text-center">
            Academic Program
          </SectionHeading>
          <p className="font-normal text-[16px] font-workSans mt-2 text-heading text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br className="hidden 2lg:block" />
            Deleniti labore mollitia quis. Magni eligendi eos recusandae
          </p>
          <div className="flex items-center justify-center md:justify-start gap-x-2 mt-2">
            <Image
              width={112}
              height={40}
              src={'/home/default-users.svg'}
              alt="list of user profiles"
              className="pointer-events-none"
            />
            <div className="flex flex-col gap-y-1">
              <span className="font-workSans font-semibold text-[14px] leading-4 text-heading">
                {/* {filterAcademicStudentNum && filterAcademicStudentNum[0].value} */}
                10000+
              </span>
              <p className="font-workSans text-[12px] leading-[18px] text-body">
                Satisfied Students
              </p>
            </div>
          </div>
          <Link href={'/contact'} className="w-full  md:w-fit">
            <Button className="mt-6 w-full  mx-auto md:mx-0">Contact Us</Button>
          </Link>
        </div>
        <div className="hidden md:flex flex-row  gap-x-4 mt-10">
          <AcademicCards
            title={'Plus Two'}
            description={
              'Prepare for higher education and specialized careers with our focused streams:'
            }
            color={'bg-primaryLighter'}
            list={academicCardsDataOne}
            type={'PLUS_TWO'}
          />
          <AcademicCards
            title={'Bachelor'}
            description={'Build a strong foundation for real world:'}
            color={'bg-secondaryLighter'}
            list={academicCardsDataTwo}
            type={'BACHELOR'}
          />
        </div>
        <AcademicSwipeCard />
      </div>
    </HomeWrapper>
  )
}
