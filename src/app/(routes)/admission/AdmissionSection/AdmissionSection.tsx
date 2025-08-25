'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React, { useEffect, useState } from 'react'
import AdmissionDetail from './AdmissionDetail'
import AdmissionSideBar from './AdmissionSideBar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'

import AdmissionFilter from '../_components/AdmissionFilter'
import {
  IAdmissionDetailResponse,
  IAdmissionResponse,
} from '../_interface/admission'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { NoDataFound } from '@/common/components/NoDataFound'
import { UiLoader } from '@/common/components/Atom/UiLoader'
import { admissionData, admissionDetailData } from '@/common/data/staticData'

const AdmissionSection = () => {
  const [admissions, setAdmissions] = useState<IAdmissionResponse | null>(null)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [selectedAdmission, setSelectedAdmission] =
    useState<IAdmissionDetailResponse | null>(null)

  // admission api - using static data
  useEffect(() => {
    const loadAdmissions = () => {
      try {
        const response: IAdmissionResponse = admissionData
        setAdmissions(response)
        // Set the default to the first item in the list (index 0)
        if (!activeSlug && response.data.length > 0) {
          setActiveSlug(response.data[0].academics.slug)
        }
      } catch (error) {
        console.error('Error loading admissions:', error)
      }
    }
    loadAdmissions()
  }, [activeSlug])

  useEffect(() => {
    if (activeSlug) {
      const admissionDetail = activeSlug.toLowerCase()
      const loadAdmissionDetail = () => {
        try {
          // Get static data based on slug
          const response: IAdmissionDetailResponse | undefined =
            admissionDetailData[
              admissionDetail as keyof typeof admissionDetailData
            ]
          if (response) {
            setSelectedAdmission(response)
          }
        } catch (error) {
          console.error('Error loading admission details:', error)
        }
      }
      loadAdmissionDetail()
    }
  }, [activeSlug])

  const handleFilterChange = (slug: string) => {
    setActiveSlug(slug)
  }

  const renderAdmissionUi = () => {
    if (admissions && admissions?.data && admissions?.data.length > 0) {
      return (
        <>
          <AdmissionFilter
            admissions={admissions?.data || []}
            onFilterChange={handleFilterChange}
          />
          <div className="flex flex-col 2lg:flex-row justify-between w-full">
            <AdmissionDetail selectedAdmission={selectedAdmission?.data} />
            <AdmissionSideBar
              admissions={admissions}
              onFilterChange={handleFilterChange}
            />
          </div>
        </>
      )
    } else if (admissions?.data.length === 0) {
      return <NoDataFound title="No Admission data found" />
    } else {
      return (
        <div className="min-h-[300px] flex justify-center items-center w-full">
          <UiLoader />
        </div>
      )
    }
  }

  return (
    <div>
      <CoverImage title="Admission" list={[{ link: '', title: 'Admission' }]} />

      <HomeWrapper>
        <div className="flex flex-col 2lg:flex-row gap-[50px] lg:gap-[80px] 2lg:gap-[56px]">
          {renderAdmissionUi()}
        </div>
      </HomeWrapper>
    </div>
  )
}

export default AdmissionSection
