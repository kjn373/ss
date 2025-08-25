import React from 'react'
import Image from 'next/image'
import { HomeWrapper } from '../../Atom/HomeWrapper'
// import { ISettings } from '@/app/(routes)/contact/_interface/Contact'
import Link from 'next/link'

// const FooterHeader = ({ footer }: { footer: ISettings | undefined }) => {
const FooterHeader = () => {
  return (
    <HomeWrapper className="py-8">
      <div className="flex justify-between items-center">
        <Link href={'/'}>
          <div className="flex justify-start items-center gap-x-6">
            <div className="bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <Image
                src="/ss/logo.jpg"
                width={800}
                height={890}
                alt="logo "
                className="w-[56px] h-[56px]"
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="font-poppins text-white text-[18px]">
                SS College
              </h1>
              <p className="font-workSans  text-white text-[14px] font-normal ">
                NayaThimi - 4, Bhaktapur
              </p>
            </div>
          </div>
        </Link>
        <div>
          <ul className="flex gap-4">
            <li className=" flex justify-center items-center">
              <Link
                href="https://www.facebook.com/sscollegethimi14/"
                target="_blank"
                className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              >
                <Image
                  src="/ss/ffacebook 1.svg"
                  width={100}
                  height={100}
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </Link>{' '}
            </li>

            <li>
              <Link
                href="https://x.com/"
                target="_blank"
                className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              >
                <Image
                  src="/ss/ftwitter 1.svg"
                  width={100}
                  height={100}
                  alt="Twitter"
                  className="w-4 h-4"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              >
                <Image
                  src="/ss/finstagram 1.svg"
                  width={100}
                  height={100}
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
              >
                <Image
                  src="/ss/fyoutube 1.svg"
                  width={100}
                  height={100}
                  alt="YouTube"
                  className="w-4 h-4"
                />
              </Link>
            </li>
          </ul>
          {/* <ul className="flex gap-4">
            {footer?.socialMedia.map((item, indx) => (
              <li key={indx} className=" flex justify-center items-center">
                {item.key === 'Facebook' && (
                  <Link
                    href="https://www.facebook.com/KathmanduWS"
                    target="_blank"
                    className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
                  >
                    <Image
                      src="/home/ffacebook.svg"
                      width={100}
                      height={100}
                      alt="Facebook"
                      className="w-4 h-4"
                    />
                  </Link>
                )}
                {item.key === 'X' && (
                  <Link
                    href="https://x.com/"
                    target="_blank"
                    className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
                  >
                    <Image
                      src="/home/ftwitter.svg"
                      width={100}
                      height={100}
                      alt="Twitter"
                      className="w-4 h-4"
                    />
                  </Link>
                )}
                {item.key === 'Instagram' && (
                  <Link
                    href="https://www.instagram.com/kathmanduws/"
                    target="_blank"
                    className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
                  >
                    <Image
                      src="/home/finstagram.svg"
                      width={100}
                      height={100}
                      alt="Instagram"
                      className="w-4 h-4"
                    />
                  </Link>
                )}
                {item.key === 'YouTube' && (
                  <Link
                    href="https://www.youtube.com/@KathmanduWorldSchool"
                    target="_blank"
                    className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
                  >
                    <Image
                      src="/home/fyoutube.svg"
                      width={100}
                      height={100}
                      alt="YouTube"
                      className="w-4 h-4"
                    />
                  </Link>
                )}
                {/* Add more conditionals as needed 
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FooterHeader
