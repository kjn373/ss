import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'

const FacilitiesOverview = async () => {
  return (
    <HomeWrapper>
      <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-[81px] ">
        <div className="flex gap-6 max-w-[656px]">
          <div className="w-[316px] ">
            <Image
              src="/ss/hero4.jpg"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl h-[50vh]"
            />
          </div>
          <div className="max-w-[316px] ">
            <Image
              src="/ss/hero2.jpg"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl h-[50vh]"
            />
          </div>
        </div>
        <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
          <MiniHeading isMd className="text-start">
            SS College
          </MiniHeading>
          <SectionHeading isMd className="mt-2 text-center md:text-start">
            Nurturing Tomorrow &apos;s Leaders
          </SectionHeading>
          <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
            At SS College, Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Pariatur possimus veniam soluta suscipit in commodi, dolor
            quae. Aliquid, rem consectetur tempora quas autem quos unde nisi
            voluptatem non, voluptates consequatur. lorem Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laboriosam, accusantium minima,
            culpa dolorum inventore aliquam, nam laborum doloribus placeat
            incidunt fugit impedit officia sapiente earum quae. Reiciendis cum
            maiores harum.
            <br /> <br />
          </p>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FacilitiesOverview
