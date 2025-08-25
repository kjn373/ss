'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useEffect, useState } from 'react'
import { TestimonailBigCard } from './TestimonialBigCard'
import { ITestimonialResponse } from '../_interface/testimonial'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { NoDataFound } from '@/common/components/NoDataFound'
import { Pagination } from '@/common/components/Pagination'
import { UiLoader } from '@/common/components/Atom/UiLoader'
import { staticTestimonialData } from '@/common/data/staticData'

const TestimonialsSection = () => {
  const [response, setResponse] = useState<ITestimonialResponse | null>(null)

  const pageSize = 6
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number | undefined>(undefined)

  const showPagination = () => {
    if (totalCount && response && response.data.length < totalCount) {
      return true
    } else {
      return false
    }
  }

  const isPagination = showPagination()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ITestimonialResponse | undefined = await UseServerFetch(
          `/api/v1/testimonial?page=${currentPage}&pageSize=${pageSize}`
        )

        if (response) {
          setResponse(response)
          setTotalCount(response?.totalCount)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchData()
  }, [currentPage])

  const renderTestimonialUi = () => {
    if (response && response.data && response?.data.length > 0) {
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {/* {response?.data.map((card) => ( */}
          {staticTestimonialData.map((card) => (
            <TestimonailBigCard card={card} key={card.id} />
          ))}
        </div>
      )
    } else if (response && response?.data.length === 0) {
      return <NoDataFound title="No Testimonial Found" />
    } else {
      return (
        <div className="min-h-[300px] flex justify-center items-center">
          <UiLoader />
        </div>
      )
    }
  }

  return (
    <>
      <CoverImage
        title="Testimonial"
        list={[{ link: '', title: 'Testimonial' }]}
      />
      <HomeWrapper>
        {renderTestimonialUi()}
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
    </>
  )
}

export default TestimonialsSection
