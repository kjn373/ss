'use client'
import React, { useEffect, useState } from 'react'
import ResultSection from './ResultSection'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { resultTab } from '../_constants/data'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { IResult, IResultApiResponse } from '../_interface/result'
import { Pagination } from '@/common/components/Pagination'

const ResultUi = () => {
  const [activeTab, setActiveTab] = useState<string>(resultTab[0].key)
  const [resultData, setResultData] = useState<IResult[] | undefined>(undefined)

  const pageSize = 12
  const [program, setProgram] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number | undefined>(undefined)

  const fetchResultData = async () => {
    try {
      const resultData: IResultApiResponse | undefined = await UseServerFetch(
        `/api/v1/result?page=${page}&pageSize=${pageSize}&type=${activeTab}${
          program.length > 1 && program !== 'all' ? `&program=${program}` : ''
        }`
      )
      if (resultData) {
        setResultData(resultData.data)
        setTotalCount(resultData.totalCount)
      }
    } catch (error) {
      console.error('error fetching result data', error)
    }
  }

  const handleDynamicData = (key: string) => {
    setProgram('')
    setPage(1)
    setActiveTab(key)
  }

  const showPagination = () => {
    if (totalCount && resultData && resultData?.length < totalCount) {
      return true
    } else {
      return false
    }
  }

  const isPagination = showPagination()

  useEffect(() => {
    fetchResultData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, program, page])

  return (
    <div>
      <CoverImage
        title="Result"
        list={[{ link: '', title: 'Result' }]}
        key={'result'}
      />
      <HomeWrapper>
        <div className="flex flex-col justify-center items-center ">
          <TabAnimation
            activeTab={activeTab}
            handleDynamicData={handleDynamicData}
            setActive={setActiveTab}
            tabs={resultTab}
          />
          <div className="w-full  p-6  mt-10  md:bg-background">
            <ResultSection
              program={program}
              results={resultData ? resultData : undefined}
              active={activeTab}
              setProgram={setProgram}
              setPage={setPage}
            />
            {isPagination && (
              <div className="mt-10 flex justify-center">
                <Pagination
                  currentPage={Number(page)}
                  pageSize={pageSize}
                  totalCount={Number(totalCount)}
                  onPageChange={(page: string | number) => {
                    setPage(page as number)
                  }}
                  siblingCount={0}
                />
              </div>
            )}
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

export default ResultUi
