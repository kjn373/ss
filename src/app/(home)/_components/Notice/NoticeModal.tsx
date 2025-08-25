'use client'

import { Button } from '@/common/components/Atom/Button'
import { CloseButton } from '@/common/components/Atom/CloseButton'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { cn } from '@/lib/utils'
// import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// interface CampaignData {
//   id: string
//   image: {
//     key: string
//     mimeType: string
//   }
//   createdAt: string
//   updatedAt: string
// }

// interface CampaignResponse {
//   status: number
//   message: string
//   data: CampaignData[]
// }

export const NoticeModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(true)
  // const [campaignData, setCampaignData] = useState<CampaignData | null>(null)
  // const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const isModalAlreadyShown =
      sessionStorage.getItem('showAnnouncement') === 'true'
    if (isModalAlreadyShown) {
      setOpenModal(false)
    }
  }, [openModal])

  // useEffect(() => {
  //   const fetchCampaignData = async () => {
  //     try {
  //       setLoading(true)
  //       const response = await axios.get<CampaignResponse>(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/campaign`
  //       )

  //       if (response.data.data && response.data.data.length > 0) {
  //         setCampaignData(response.data.data[0])
  //       }
  //     } catch (error) {
  //       console.error('Error fetching campaign data:', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchCampaignData()
  // }, [])

  const handleCloseModal = () => {
    setOpenModal(false)
    sessionStorage.setItem('showAnnouncement', 'true')
  }

  return (
    <CustomModal isOpen={openModal}>
      <div
        className={cn(
          'bg-white p-6 md:w-[45vw] md:h-[80vw] lg:w-[45vw] lg:h-[60vh] xl:w-[42vw] xl:h-[94vh] 2xl:h-[94vh] 2xl:w-[29vw] flex 2xl_md:w-[45vw] 2xl_md:h-[94vh] 5xl:w-[45vw] 5xl:h-[94vh] flex-col items-center justify-center gap-y-6 rounded-[12px] relative'
        )}
      >
        {/* {loading ? (
          <div className="w-full h-[90%] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <Image
            width={552}
            height={764}
            // src={
            //   campaignData?.image?.key
            //     ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${campaignData.image.key}`
            //     : '/home/announce.jpg'
            // }
            src="/kws/announce.png"
            alt="Campaign notice image"
            className="w-full h-[90%] object-contain"
          />
        )} */}
        <Image
          width={552}
          height={764}
          src="/ss/announce.jpg"
          alt="Campaign notice image"
          className="w-full h-[90%] object-contain"
          unoptimized
        />
        <Link href={'/apply'}>
          <Button onClick={handleCloseModal}>Online Registration Form</Button>
        </Link>
      </div>
      <CloseButton handleClick={handleCloseModal} />
    </CustomModal>
  )
}
