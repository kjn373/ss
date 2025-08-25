'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useEffect, useState } from 'react'
import { BrochureUi } from './BrochureUi'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IBrochureApiResponse, IBrochureItem } from '../interface/brochureType'
import { Pagination } from '@/common/components/Pagination'
import { NoDataFound } from '@/common/components/NoDataFound'
import { UiLoader } from '@/common/components/Atom/UiLoader'

export const BrochureSection = () => {
  const [brochureData, setBrochureData] = useState<IBrochureItem[] | undefined>(
    undefined
  )

  const pageSize = 9
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number | undefined>(undefined)

  const showPagination = () => {
    if (totalCount && brochureData && brochureData.length < totalCount) {
      return true
    } else {
      return false
    }
  }

  const isPagination = showPagination()

  useEffect(() => {
    const fetchBrochureResponse = async () => {
      try {
        const brochureDataResponse: IBrochureApiResponse | undefined =
          await UseServerFetch(
            `/api/v1/brochure?page=${currentPage}&pageSize=${pageSize}`
          )
        //rember to change this
        if (brochureDataResponse) {
          setBrochureData(brochureDataResponse?.data)
          setTotalCount(brochureDataResponse?.totalCount)
        }
      } catch (error) {
        console.error('Error fetching brochure data:', error)
      }
    }

    fetchBrochureResponse()
  }, [currentPage])

  const renderBrochureUi = () => {
    if (brochureData && brochureData?.length > 0) {
      return <BrochureUi data={brochureData} />
    } else if (brochureData && brochureData.length === 0) {
      return <NoDataFound title="No Brochure Found" />
    } else {
      return (
        <div className="min-h-[300px] flex justify-center items-center">
          <UiLoader />
        </div>
      )
    }
  }

  return (
    <div>
      <CoverImage title="Brochure" list={[{ link: null, title: 'brochure' }]} />
      <HomeWrapper>
        {renderBrochureUi()}
        <div className="w-full flex justify-center mt-10">
          {isPagination && (
            <Pagination
              currentPage={Number(currentPage)}
              pageSize={pageSize}
              totalCount={Number(totalCount)}
              onPageChange={(page: string | number) =>
                setCurrentPage(page as number)
              }
              siblingCount={0}
            />
          )}
        </div>
      </HomeWrapper>
    </div>
  )
}
