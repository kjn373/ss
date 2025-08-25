'use client'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { ITeamsData } from '../_interface/Teams'
import './teams.css'

const TeamCards = ({ teams }: { teams: ITeamsData[] }) => {
  return (
    <>
      <div className="flex flex-col gap-2 md:hidden">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex bg-[#F8FAFD] gap-4 py-[22px] rounded-xl w-full justify-start items-center"
          >
            <div className="pl-[16px]">
              <ImageWithPlaceholder
                // src={team.image ? team.image.key : undefined}
                src={team.image.key}
                width={236}
                height={236}
                alt="teams"
                className="rounded-full w-14 h-14 object-cover"
              />
            </div>
            <div>
              <h1 className="font-poppins text-[18px] font-medium leading-6 text-heading">
                {team.name}
              </h1>
              <p className="font-inter font-normal text-[16px] text-body">
                {team.position}
              </p>
              <ul className="flex gap-4 text-body justify-start items-center mt-3">
                <Link
                  href={team.twitter || ''}
                  target={team.twitter ? '_blank' : ''}
                  className={cn(``, team.twitter ? '' : 'cursor-not-allowed')}
                >
                  <FaXTwitter className="size-4" />
                </Link>
                <Link
                  href={team.facebook || ''}
                  target={team.facebook ? '_blank' : ''}
                  className={cn(``, team.facebook ? '' : 'cursor-not-allowed')}
                >
                  <FaFacebookF className="size-4" />
                </Link>
                <Link
                  href={team.instagram || ''}
                  target={team.instagram ? '_blank' : ''}
                  className={cn(``, team.instagram ? '' : 'cursor-not-allowed')}
                >
                  <AiFillInstagram className="size-5" />
                </Link>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-2 gap-16 lg:gap-[52px] lg:flex lg:flex-wrap justify-center items-center">
        {teams.map((team, index) => (
          <div
            className="flex flex-col justify-center items-center group"
            key={index}
          >
            <div
              className="flex justify-center items-center border rounded-full w-[304px] lg:w-[236px] h-[304px] lg:h-[236px] border-primaryLight relative overflow-hidden"
              key={index}
            >
              <div className="relative  w-[236px] lg:w-[200px] h-[236px] lg:h-[200px]">
                <ImageWithPlaceholder
                  // src={team.image ? team.image.key : undefined}
                  src={team.image.key}
                  width={236}
                  height={236}
                  alt="teams"
                  className="rounded-full w-[236px] lg:w-[200px] h-[236px] lg:h-[200px] object-cover border-primaryLight transition duration-300 relative"
                />
                <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-primary/[56%] rounded-full bg-opacity-70 z-50">
                  <ul className="flex gap-4">
                    <Link
                      href={team.twitter || ''}
                      target={team.twitter ? '_blank' : ''}
                      className={cn(
                        'bg-white hover:bg-primary w-7 h-7 rounded-full flex justify-center items-center transition-all duration-300 text-primary hover:text-white',
                        team.twitter ? '' : 'cursor-not-allowed'
                      )}
                    >
                      <FaXTwitter className="w-3 h-3 " />
                    </Link>
                    <Link
                      href={team.facebook || ''}
                      target={team.facebook ? '_blank' : ''}
                      className={cn(
                        'bg-white hover:bg-primary w-7 h-7 rounded-full flex justify-center items-center transition-all duration-300 text-primary hover:text-white',
                        team.facebook ? '' : 'cursor-not-allowed'
                      )}
                    >
                      <FaFacebookF className="w-3 h-3 " />
                    </Link>
                    <Link
                      href={team.instagram || ''}
                      target={team.instagram ? '_blank' : ''}
                      className={cn(
                        'bg-white hover:bg-primary w-7 h-7 rounded-full flex justify-center items-center transition-all duration-300 text-primary hover:text-white',
                        team.instagram ? '' : 'cursor-not-allowed'
                      )}
                    >
                      <AiFillInstagram className="w-5 h-5 " />
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="absolute inset-0 flex justify-center items-center transition-transform duration-300 group-hover:rotate-[-25deg]">
                <div className="diagonal-border"></div>
              </div>
            </div>
            <div className="text-center mt-[25px] space-y-2">
              <h1 className="font-poppins font-medium text-xl leading-6 text-heading">
                {team.name}
              </h1>
              <p className="font-poppins font-normal text-base leading-4 text-body">
                {team.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TeamCards
