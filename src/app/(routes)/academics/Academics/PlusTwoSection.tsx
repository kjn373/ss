import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { plustwoPrograms } from '../constants/data'

const PlusTwoSection = () => {
  return (
    <div className="relative space-y-6 max-w-[77.5rem] flex flex-col md:flex-row items-start justify-center flex-wrap mx-auto">
      <div className="bg-background rounded-xl p-6 relative flex-1 md:w-[53%] lg:w-[50%] lg:ml-[3%] md:mr-[-6%] overflow-hidden">
        <Image
          src="/home/Ellipse 2.svg"
          width={282}
          height={282}
          alt="a"
          className="hidden md:block md:absolute -bottom-14 -left-14 z-[-1]"
        />
        <div className="md:pr-[18%] ">
          <SectionHeading>Plus Two</SectionHeading>
          <hr className="my-6" />
          <p className="font-workSans text-base leading-7 font-normal text-body">
            We offer specialized streams to prepare students for higher
            education and future careers We also have co-curricular activities
            at SS College. By participating in these activities, our students
            not only excel in academics but also acquire the skills and values
            necessary to become responsible, confident, and dynamic leaders of
            tomorrow.
          </p>
          <hr className="my-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[80px] md:pr-[18%] z-50">
          <h1 className="font-poppins text-heading text-xl leading-6 font-medium">
            Available Programs
          </h1>
          <ul className="text-heading font-workSans text-lg leading-6 font-normal space-y-8 z-50">
            {plustwoPrograms.map((program) => (
              <li key={program.id}>
                <Link
                  href={program.link}
                  className="flex justify-start items-center gap-2 hover:text-secondary"
                >
                  {program.title}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-xl w-full md:w-[50%] z-50 relative">
        <Image
          src="/ss/acadm.jpg"
          width={610}
          height={405}
          alt="academic1 "
          className="rounded-xl w-full md:max-w-full h-auto md:mt-14 relative"
        />
        <div className="absolute w-[206px] h-[75px] -bottom-1 left-0 bg-white rounded-tr-xl flex justify-center items-center rounded-bl-xl">
          <h2 className="text-lg leading-7 font-workSans font-medium text-heading">
            Take A Warm Tour
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PlusTwoSection
