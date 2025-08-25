import { SchoolStepOne } from '../_component/School/SchoolStepOne'
import { SchoolStepThree } from '../_component/School/SchoolStepThree'
import { SchoolStepTwo } from '../_component/School/SchoolStepTwo'
import {
  hostelValidation,
  schoolLevelValidation,
  transportationValidation,
} from '../validation'
import { stepOneValidationSchema, stepTwoValidationSchema } from './data'

export const StepComponentSchool = [
  SchoolStepOne,
  SchoolStepTwo,
  SchoolStepThree,
]

export const schoolInitialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  street: '',
  city: '',
  province: '',
  gender: '',
  dateOfBirth: undefined,
  mobileNumber: '',
  email: '',
  document: undefined,
  fatherName: '',
  fatherProfession: '',
  fatherMobileNumber: '',
  localGuardianName: '',
  localGuardianProfession: '',
  localGuardianPhoneNumber: '',
  schoolName: '',
  schoolAddress: '',
  schoolBoard: '',
  seeSymbolNum: '',
  seeGpaPoint: '',
  seeGpaGrade: '',
  level: '',
  hostel: '',
  transportation: '',
}

export const stepThreeSchoolValidation = {
  level: schoolLevelValidation,
  hostel: hostelValidation,
  transportation: transportationValidation,
}

export const ValidationSchemasSchool = [
  stepOneValidationSchema,
  stepTwoValidationSchema,
  stepThreeSchoolValidation,
]
