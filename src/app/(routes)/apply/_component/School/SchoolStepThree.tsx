import React from 'react'
import { ISchoolStepProps } from '../../interface/type'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { hostelList, schoolLevelList } from '../../constant/data'

export const SchoolStepThree = ({
  errors,
  touched,
  setFieldValue,
  values,
}: ISchoolStepProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Course Detail
      </h1>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.level && touched.level}
          error={errors.level}
          list={schoolLevelList}
          placeHolder={'Select level'}
          label="Choose Level"
          field={'level'}
          isRequired
          value={values!.level}
        />
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.hostel && touched.hostel}
          error={errors.hostel}
          list={hostelList}
          placeHolder={'Select hostel'}
          label="Hostel"
          field={'hostel'}
          isRequired
          value={values!.hostel}
          isBoolean
        />
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.transportation && touched.transportation}
          error={errors.transportation}
          list={hostelList}
          placeHolder={'Select transportation'}
          label="Transportation"
          field={'transportation'}
          isRequired
          value={values!.transportation}
          isBoolean
        />
      </div>
    </div>
  )
}
