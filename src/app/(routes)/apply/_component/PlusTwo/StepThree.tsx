import { Input } from '@/common/components/Atom/Input'
import React from 'react'
import { IStepProps } from '../../interface/type'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { gpaDropdownList } from '../../constant/data'

export const StepThree = ({
  errors,
  inputStyle,
  touched,
  setFieldValue,
  values,
}: IStepProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Previous School Detail
      </h1>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Previous School Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Previous School Name"
          name="schoolName"
          error={errors!.schoolName}
          className={inputStyle.input}
          isError={!!errors!.schoolName && touched.schoolName}
        />
        <Input
          isRequired
          label="Previous School Address"
          labelClass={inputStyle.label}
          placeholder="Your previous school address"
          name="schoolAddress"
          error={errors!.schoolAddress}
          className={inputStyle.input}
          isError={!!errors!.schoolAddress && touched.schoolAddress}
        />
        <Input
          label="Previous School Board"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your previous school board"
          name="schoolBoard"
          error={errors!.schoolBoard}
          className={inputStyle.input}
          isError={!!errors!.schoolBoard && touched.schoolBoard}
        />
      </div>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="SEE Symbol No"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your SEE symbol no"
          name="seeSymbolNum"
          error={errors!.seeSymbolNum}
          className={inputStyle.input}
          isError={!!errors!.seeSymbolNum && touched.seeSymbolNum}
        />
        <Input
          isRequired
          label="SEE GPA Point"
          labelClass={inputStyle.label}
          placeholder="Your SEE GPA point"
          name="seeGpaPoint"
          error={errors!.seeGpaPoint}
          className={inputStyle.input}
          isError={!!errors!.seeGpaPoint && touched.seeGpaPoint}
        />
        <CustomDropdown
          field="seeGpaGrade"
          isRequired
          label="See SEE GPA Grade"
          list={gpaDropdownList}
          placeHolder="Select SEE GPA Grade"
          setFieldValue={setFieldValue}
          error={errors!.seeGpaGrade}
          isError={!!errors.seeGpaGrade && touched.seeGpaGrade}
          value={values!.seeGpaGrade}
        />
      </div>
    </div>
  )
}
