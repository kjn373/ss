'use client'

import React, { useEffect, useState } from 'react'
import { PlusTwoForm } from './PlusTwoForm'
import { SchoolForm } from './SchoolForm'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { UnSaveChange } from './UnSaveChange'
import { useSearchParams } from 'next/navigation'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'

export const AdmissionTab = () => {
  const tabs = [
    { key: 'plus-two', title: '+2 Registration Form' },
    { key: 'school', title: 'Bachelor Registration Form' },
  ]

  const mobileTab = [
    { key: 'plus-two', title: 'Plus Two' },
    { key: 'school', title: 'School' },
  ]

  const params = useSearchParams()
  const [reponsiveTab, setReponsiveTab] = useState(tabs)
  const updateResponsiveTabs = () => {
    if (window.innerWidth < 768) {
      setReponsiveTab(mobileTab)
    } else {
      setReponsiveTab(tabs)
    }
  }
  const [active, setActiveTab] = useState<string>(reponsiveTab[0]?.key)
  const [triggerModal, setTriggerModal] = useState<boolean>(false)
  const [clickedTab, setClickedTab] = useState<string>('')
  const [isFieldChange, setIsFieldChange] = useState<boolean>(false)

  useEffect(() => {
    updateResponsiveTabs()

    window.addEventListener('resize', updateResponsiveTabs)

    return () => {
      window.removeEventListener('resize', updateResponsiveTabs)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleConfirm = () => {
    setActiveTab(clickedTab)
    setTriggerModal(false)
  }

  const renderFormUi = () => {
    switch (active) {
      case 'plus-two':
        return <PlusTwoForm onFormChange={setIsFieldChange} />
      case 'school':
        return <SchoolForm onFormChange={setIsFieldChange} />
      default:
        return null
    }
  }

  const handleTabClick = (key: string) => {
    if (isFieldChange && key !== active) {
      setTriggerModal(true)

      setClickedTab(key)
    } else {
      setActiveTab(key)
    }
  }

  useEffect(() => {
    const getFormType = params.get('form')
    if (getFormType) {
      if (getFormType === 'school') {
        setActiveTab('school')
      } else {
        setActiveTab('plus-two')
      }
    }
  }, [params])

  return (
    <div className="flex flex-col  justify-center items-center gap-y-10">
      <div className="w-fit flex flex-col justify-center items-center gap-y-10">
        <div className="md:block hidden">
          <TabAnimation
            activeTab={active}
            tabs={tabs}
            setActive={setActiveTab}
            className="text-sm"
            isFieldChange={true}
            handleDynamicData={handleTabClick}
          />
        </div>
        <div className="md:hidden block">
          <TabAnimation
            activeTab={active}
            tabs={mobileTab}
            setActive={setActiveTab}
            className="text-sm"
            isFieldChange={true}
            handleDynamicData={handleTabClick}
          />
        </div>

        <p className="font-workSans font-normal text-[16px] leading-[27.2px] text-center text-body">
          When reading an application, we get to know the person behind the
          numbers. We take into consideration your academic achievements,
          extracurricular activities, personal qualities, and life experiences.
          Just as there is no typical student, there is no ideal applicant. We
          look forward to learning more about you.
        </p>
      </div>
      {renderFormUi()}
      {triggerModal && (
        <CustomModal isOpen={triggerModal}>
          <UnSaveChange
            setOpen={setTriggerModal}
            handleConfirm={handleConfirm}
          />
        </CustomModal>
      )}
    </div>
  )
}
