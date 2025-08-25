import React from 'react'
import { ISchoolStepProps } from '../../interface/type'
import { StepOne } from '../PlusTwo/StepOne'

export const SchoolStepOne = ({
  errors,
  inputStyle,
  setFieldError,
  setFieldValue,
  touched,
  values,
}: ISchoolStepProps) => {
  return (
    <StepOne
      errors={errors}
      inputStyle={inputStyle}
      setFieldError={setFieldError}
      setFieldValue={setFieldValue}
      values={values}
      touched={touched}
    />
  )
}
