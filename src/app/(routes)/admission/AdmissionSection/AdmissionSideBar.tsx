'use client'
import React, { useEffect, useState } from 'react'
import { DownloadUi } from '../../news/_component/DownloadUi'
import AdmissionFilterTwo from '../_components/AdmissionFilterTwo'
import AdmissionForm from '../_components/AdmissionForm'
import { IAdmissionResponse } from '../_interface/admission'
import { IBrochureItem } from '../../brochure/interface/brochureType'
import { brochureData } from '@/common/data/staticData'

interface AdmissionSideBarProps {
  admissions: IAdmissionResponse | null
  onFilterChange: (slug: string) => void
}

const AdmissionSideBar: React.FC<AdmissionSideBarProps> = ({
  admissions,
  onFilterChange,
}) => {
  const [brochureDataState, setBrochureDataState] = useState<
    IBrochureItem[] | undefined
  >(undefined)

  useEffect(() => {
    // Use static brochure data instead of API call
    const loadBrochureData = () => {
      try {
        setBrochureDataState(brochureData.data)
      } catch (error) {
        console.error('Error loading brochure data:', error)
      }
    }

    loadBrochureData()
  }, [])
  return (
    <div className="flex flex-col gap-6  2lg:w-[400px]">
      <AdmissionFilterTwo
        admissions={admissions?.data || []}
        onFilterChange={onFilterChange}
      />
      {brochureDataState && <DownloadUi data={brochureDataState} />}
      <AdmissionForm />
    </div>
  )
}

export default AdmissionSideBar
