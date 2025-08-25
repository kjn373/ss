'use client'
import React, { useEffect, useState } from 'react'
import { cn } from '@/common/utils/utils'
import { IAdmissionData } from '../_interface/admission'

interface AdmissionFilterProps {
  admissions: IAdmissionData[]
  onFilterChange: (slug: string) => void
}

const AdmissionFilter: React.FC<AdmissionFilterProps> = ({
  admissions,
  onFilterChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeAdmission, setActiveAdmission] = useState<string>('')

  useEffect(() => {
    if (!activeAdmission && admissions.length > 0) {
      const defaultSlug = admissions[0].academics.slug // Set first added admission as default
      setActiveAdmission(defaultSlug)
      onFilterChange(defaultSlug)
    }
  }, [admissions, activeAdmission, onFilterChange])

  const handleTabClick = (slug: string) => {
    setActiveAdmission(slug)
    onFilterChange(slug) // Trigger filter change
    setIsDropdownOpen(false)
  }

  return (
    <div className="2lg:hidden relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="font-workSans font-normal text-[18px] leading-6 px-4 py-2 bg-white text-black rounded-[8px] h-[48px] w-full text-left flex justify-between items-center shadow border-[#E7EEF8]"
      >
        {/* Display the active admission or default to the last admission */}
        {admissions.find(
          (admission) => admission.academics.slug === activeAdmission
        )?.academics.title || admissions[0]?.academics.title}
        <svg
          className={cn('w-6 h-6 transition-transform', {
            'transform rotate-180': isDropdownOpen,
          })}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute bg-white shadow-md rounded-[10px] mt-2 w-full z-10 border-b-[#E7EEF8]">
          {admissions?.map((admission: IAdmissionData, index: number) => (
            <button
              key={index}
              onClick={() => handleTabClick(admission.academics.slug)}
              className={`font-workSans font-normal text-[18px] leading-6 px-4 py-2 w-full text-left bg-transparent text-black hover:bg-primary hover:text-white rounded-[10px] transition-all duration-300 ${
                activeAdmission === admission.academics.slug ? '' : ''
              }`}
            >
              {admission.academics.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdmissionFilter
