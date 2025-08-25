'use client'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { NoDataFound } from '@/common/components/NoDataFound'
import { Dispatch, SetStateAction, useState } from 'react'
import { PdfViewerModal } from '../../brochure/_component/PdfViewerModal'
import {
  ICategory,
  PlusTwoDropdownList,
  SchoolLevelDropdownList,
} from '../_constants/data'
import { IResult } from '../_interface/result'
import ResultCard from './ResultCard'
import { UiLoader } from '@/common/components/Atom/UiLoader'

const ResultSection = ({
  results,
  active,
  setProgram,
  program,
  setPage,
}: {
  results: IResult[] | undefined
  active: string
  setProgram: Dispatch<SetStateAction<string>>
  program: string
  setPage: Dispatch<SetStateAction<number>>
}) => {
  const handleCategoryClick = (category: ICategory) => {
    setProgram(category)
    setPage(1)
  }

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [pdfSrc, setPdfSrc] = useState<string | null>(null)

  const returnDropDownList = () => {
    if (active === 'PLUS_TWO') {
      return PlusTwoDropdownList
    } else {
      return SchoolLevelDropdownList
    }
  }

  const renderResultUi = () => {
    if (results && results.length > 0) {
      return (
        <div className="grid 2lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <ResultCard
              data={result}
              key={result.id}
              setPdfSrc={setPdfSrc}
              setOpen={setOpenModal}
            />
          ))}
        </div>
      )
    } else if (results && results.length === 0) {
      return (
        <div className="flex justify-center items-center w-full ">
          <NoDataFound title="No Data found" />
        </div>
      )
    } else {
      return (
        <div className="min-h-[300px] flex justify-center items-center">
          <UiLoader />
        </div>
      )
    }
  }

  return (
    <div className=" ">
      <div className="flex justify-between items-center">
        <h1 className="text-heading font-poppins font-medium text-xl leading-6 hidden md:block">
          Result of {active === 'PLUS_TWO' ? 'Plus Two' : 'School'}
        </h1>
        <div className="relative w-full md:max-w-[380px]">
          <CustomDropdown
            list={returnDropDownList()}
            placeHolder="Filter by Programs"
            label=""
            field="category"
            error=""
            isError={false}
            isRequired={false}
            isBoolean={false}
            value={program}
            setFieldValue={(field, value) =>
              handleCategoryClick(value as ICategory)
            }
          />
        </div>
      </div>
      <div className="mt-10">{renderResultUi()}</div>
      {openModal && pdfSrc && (
        <CustomModal isOpen={openModal}>
          <PdfViewerModal setOpen={setOpenModal} src={pdfSrc} />
        </CustomModal>
      )}
    </div>
  )
}

export default ResultSection
