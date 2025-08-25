import { IFileMetadata } from '@/common/interface/type'
import { FormikErrors, FormikTouched } from 'formik'

// Common fields for both steps
interface ICommonFields {
  firstName: string
  middleName?: string
  lastName: string
  street: string
  city: string
  email: string
  gender: string
  dateOfBirth: Date | undefined
  mobileNumber: string
  province: string
  document?: File[]
  fatherName: string
  fatherProfession: string
  fatherMobileNumber: string
  localGuardianName: string
  localGuardianProfession: string
  localGuardianPhoneNumber: string
  schoolName: string
  schoolAddress: string
  schoolBoard: string
  seeSymbolNum: string
  seeGpaPoint: string
  seeGpaGrade: string
  hostel: string
  transportation: string
}

// Specific fields for Step One
interface IStepOneSpecificFields {
  stream: string
  shift: string
}

// Specific fields for School Step
interface ISchoolStepSpecificFields {
  level: string
}

// Error interfaces
export interface IStepOneError extends ICommonFields, IStepOneSpecificFields {}
export interface ISchoolStepError
  extends ICommonFields,
    ISchoolStepSpecificFields {}

// Field interfaces
export interface IStepFields extends ICommonFields, IStepOneSpecificFields {}
export interface ISchoolStepFields
  extends ICommonFields,
    ISchoolStepSpecificFields {}

// Touched interfaces
export interface IStepOneTouched {
  [key: string]: boolean // can be used for all fields in common
}

export interface ISchoolStepTouched extends IStepOneTouched {
  level: boolean // additional field for School Step
}

// Input styles
export interface InputStyle {
  input: string
  label: string
}

// Step props interfaces
export interface IStepProps {
  setFieldValue(
    field: string,
    value: string | IFileMetadata[] | boolean | File[]
  ): void
  errors: FormikErrors<IStepOneError>
  touched: FormikTouched<IStepOneTouched>
  setFieldError?: (field: string, message: string | undefined) => void
  inputStyle: InputStyle
  values?: IStepFields | undefined
}

export interface ISchoolStepProps {
  setFieldValue(
    field: string,
    value: string | IFileMetadata[] | boolean | File[]
  ): void
  errors: FormikErrors<ISchoolStepError>
  touched: FormikTouched<ISchoolStepTouched>
  setFieldError?: (field: string, message: string | undefined) => void
  inputStyle: InputStyle
  values?: ISchoolStepFields | undefined
}
