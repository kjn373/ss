'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { UiLoader } from '@/common/components/Atom/UiLoader'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { NoDataFound } from '@/common/components/NoDataFound'
import { Pagination } from '@/common/components/Pagination'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { useEffect, useState } from 'react'
import {
  IGalleryPhotoItem,
  IGalleryVideoItem,
  IGalleryVideoResponse,
} from '../interface/galleryType'
import { GalleryCard } from './GalleryCard'
import { GalleryModal } from './GalleryModal'
import { VideoModal } from './VideoModal'

type IType = 'photo' | 'video'

export const GallerySection = () => {
  const galleryTabs = [
    {
      title: 'Photos',
      key: 'photo',
    },
    {
      title: 'Videos',
      key: 'video',
    },
  ]

  // Static gallery images from public/kws/gallery folder
  const staticGalleryPhotos: IGalleryPhotoItem[] = [
    {
      id: '1',
      title: 'Gallery Image 1',
      photo: {
        key: '/ss/hero4.jpg',
        bucket: 'local',
        mimeType: 'image/jpeg',
      },
      video: { key: '', bucket: '', mimeType: '' },
    },
    {
      id: '2',
      title: 'Gallery Image 2',
      photo: {
        key: '/ss/img2.jpg',
        bucket: 'local',
        mimeType: 'image/jpeg',
      },
      video: { key: '', bucket: '', mimeType: '' },
    },
    {
      id: '3',
      title: 'Gallery Image 3',
      photo: {
        key: '/ss/img3.jpg',
        bucket: 'local',
        mimeType: 'image/jpeg',
      },
      video: { key: '', bucket: '', mimeType: '' },
    },
    {
      id: '4',
      title: 'Gallery Image 4',
      photo: {
        key: '/ss/img4.jpg',
        bucket: 'local',
        mimeType: 'image/jpeg',
      },
      video: { key: '', bucket: '', mimeType: '' },
    },
    {
      id: '5',
      title: 'Gallery Image 5',
      photo: {
        key: '/ss/hero1.jpg',
        bucket: 'local',
        mimeType: 'image/jpeg',
      },
      video: { key: '', bucket: '', mimeType: '' },
    },
    {
      id: '6',
      title: 'Gallery Image 6',
      photo: {
        key: '/ss/hero2.jpg',
        bucket: 'local',
        mimeType: 'image/jpeg',
      },
      video: { key: '', bucket: '', mimeType: '' },
    },
    {
      id: '7',
      title: 'Gallery Image 7',
      photo: {
        key: '/ss/hero3.jpg',
        bucket: 'local',
        mimeType: 'image/jpeg',
      },
      video: { key: '', bucket: '', mimeType: '' },
    },
  ]

  const [galleryTab, setGalleryTab] = useState<string>(galleryTabs[0].key)

  // Using static photos instead of dynamic API calls
  const [galleryPhoto] = useState<IGalleryPhotoItem[]>(staticGalleryPhotos)
  const [currentGalleryPhotoPage, setCurrentGalleryPhotoPage] =
    useState<number>(1)
  const totalCountPhoto = staticGalleryPhotos.length

  // Commented out dynamic photo state
  // const [galleryPhoto, setGalleryPhoto] = useState<
  //   IGalleryPhotoItem[] | undefined
  // >(undefined)

  const [galleryVideo, setGalleryVideo] = useState<
    IGalleryVideoItem[] | undefined
  >(undefined)

  const [currentGalleryVideoPage, setCurrentGalleryVideoPage] =
    useState<number>(1)

  // Commented out dynamic photo pagination
  // const [totalCountPhoto, setTotalCountPhoto] = useState<number | undefined>(
  //   undefined
  // )
  const [totalCountVideo, setTotalCountVideo] = useState<number | undefined>(
    undefined
  )
  const pageSize = 6
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [type, setType] = useState<IType>('photo')

  const handleDynamicData = (type: IType) => {
    setType(type)
    setCurrentGalleryPhotoPage(1)
    setCurrentGalleryVideoPage(1)
  }

  const showPaginationPhoto = () => {
    return totalCountPhoto > pageSize
  }

  const showPaginationVideo = () => {
    if (
      totalCountVideo &&
      galleryVideo &&
      galleryVideo.length < totalCountVideo
    ) {
      return true
    } else {
      return false
    }
  }

  const isPaginationPhoto = showPaginationPhoto()
  const isPaginationVideo = showPaginationVideo()

  // Get paginated photos for current page
  const getPaginatedPhotos = () => {
    const startIndex = (currentGalleryPhotoPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return galleryPhoto.slice(startIndex, endIndex)
  }

  const renderGalleryCardsUi = () => {
    if (type === 'video') {
      if (galleryVideo && galleryVideo?.length > 0) {
        return (
          galleryVideo &&
          galleryVideo.map((gallery, index) => {
            return (
              <GalleryCard
                key={gallery.id}
                gallery={gallery}
                setModalOpen={setModalOpen}
                setActiveImage={setActiveImage}
                index={index}
                type={'video'}
              />
            )
          })
        )
      } else if (galleryVideo?.length === 0) {
        return <NoDataFound title="No gallery video found" />
      } else {
        return <UiLoader className="min-h-[200px]" />
      }
    } else {
      const paginatedPhotos = getPaginatedPhotos()
      if (paginatedPhotos && paginatedPhotos.length > 0) {
        return paginatedPhotos.map((gallery, index) => {
          // Calculate the actual index for modal navigation
          const actualIndex = (currentGalleryPhotoPage - 1) * pageSize + index
          return (
            <GalleryCard
              key={gallery.id}
              gallery={gallery}
              setModalOpen={setModalOpen}
              setActiveImage={setActiveImage}
              index={actualIndex}
              type={'photo'}
            />
          )
        })
      } else if (galleryPhoto?.length === 0) {
        return <NoDataFound title="No gallery photo found" />
      } else {
        return <UiLoader className="min-h-[200px]" />
      }
    }
  }

  // Commented out dynamic photo fetching - now using static images
  // const fetchGalleryData = async () => {
  //   try {
  //     const galleryData: IGalleryPhotoResponse | undefined =
  //       await UseServerFetch(
  //         `/api/v1/gallery/photos?page=${currentGalleryPhotoPage}&pageSize=${pageSize}`
  //       )
  //     setGalleryPhoto(galleryData?.data)
  //     setTotalCountPhoto(galleryData?.totalCount)
  //   } catch (error) {
  //     console.error('error fetching gallery photo', error)
  //   }
  // }

  const fetchGalleryVideoData = async () => {
    try {
      const galleryData: IGalleryVideoResponse | undefined =
        await UseServerFetch(
          `/api/v1/gallery/videos?page=${currentGalleryVideoPage}&pageSize=${pageSize}`
        )
      setGalleryVideo(galleryData?.data)
      setTotalCountVideo(galleryData?.totalCount)
    } catch (error) {
      console.error('error fetching gallery video', error)
    }
  }

  const handleTabClick = (title: string) => {
    if (title === 'photo') {
      handleDynamicData('photo')
      setGalleryTab('photo')
    } else {
      setGalleryTab('video')
      handleDynamicData('video')
    }
  }

  useEffect(() => {
    if (type === 'video') {
      fetchGalleryVideoData()
    }
    // Commented out photo fetching since we're using static images
    // else {
    //   fetchGalleryData()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, currentGalleryVideoPage])

  return (
    <>
      <CoverImage title="Gallery" list={[{ link: null, title: 'Gallery' }]} />
      <HomeWrapper>
        <div className="flex flex-col items-center gap-y-10 2lg:gap-y-14">
          <TabAnimation
            activeTab={galleryTab}
            handleDynamicData={handleTabClick}
            setActive={setGalleryTab}
            tabs={galleryTabs}
          />
          <div className="flex flex-row flex-wrap justify-center  gap-6 md:gap-x-5 md:gap-y-6 2lg:gap-6 ">
            {renderGalleryCardsUi()}
          </div>
          {type === 'video'
            ? isPaginationVideo && (
                <Pagination
                  currentPage={currentGalleryVideoPage}
                  pageSize={pageSize}
                  totalCount={totalCountVideo!}
                  siblingCount={0}
                  onPageChange={(page: string | number) =>
                    setCurrentGalleryVideoPage(page as number)
                  }
                />
              )
            : isPaginationPhoto && (
                <Pagination
                  currentPage={currentGalleryPhotoPage}
                  pageSize={pageSize}
                  totalCount={totalCountPhoto}
                  siblingCount={0}
                  onPageChange={(page: string | number) => {
                    setCurrentGalleryPhotoPage(page as number)
                  }}
                />
              )}
        </div>
      </HomeWrapper>
      {isModalOpen && (
        <CustomModal isOpen={isModalOpen}>
          {type === 'photo' ? (
            <GalleryModal
              src={
                galleryPhoto && galleryPhoto.length > 0 && activeImage !== null
                  ? galleryPhoto[activeImage].photo.key
                  : galleryPhoto && galleryPhoto.length > 0
                    ? galleryPhoto[0].photo.key
                    : undefined
              }
              title={
                galleryPhoto && galleryPhoto.length > 0 && activeImage !== null
                  ? galleryPhoto[activeImage].title
                  : undefined
              }
              setModalOpen={setModalOpen}
              setActiveImage={setActiveImage}
              length={galleryPhoto && galleryPhoto.length}
              showSwipe={galleryPhoto && galleryPhoto.length > 1 ? true : false}
            />
          ) : (
            <VideoModal
              src={
                galleryVideo && galleryVideo.length > 0 && activeImage !== null
                  ? galleryVideo[activeImage].video.key
                  : galleryVideo && galleryVideo.length > 0
                    ? galleryVideo[0].video.key
                    : undefined
              }
              setModalOpen={setModalOpen}
              setActiveImage={setActiveImage}
              length={galleryVideo && galleryVideo.length}
              type={type}
              showSwipe={galleryVideo && galleryVideo.length > 1 ? true : false}
            />
          )}
        </CustomModal>
      )}
    </>
  )
}
