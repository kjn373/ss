import React from 'react'
import { IStepProps } from '../../interface/type'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { hostelList, shiftList, streamList } from '../../constant/data'

export const StepFour = ({
  errors,
  setFieldValue,
  touched,
  values,
}: IStepProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Course Detail
      </h1>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.stream && touched.stream}
          error={errors.stream}
          list={streamList}
          placeHolder={'Select stream'}
          label="Choose Stream"
          field={'stream'}
          isRequired
          value={values!.stream}
        />
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.shift && touched.shift}
          error={errors.shift}
          list={shiftList}
          placeHolder={'Select Shift'}
          label="Shift"
          field={'shift'}
          isRequired
          value={values!.shift}
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
