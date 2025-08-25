import {
  emailValidation,
  phoneNumberValidation,
} from '@/common/utils/validation'
import { StepFour } from '../_component/PlusTwo/StepFour'
import { StepOne } from '../_component/PlusTwo/StepOne'
import { StepThree } from '../_component/PlusTwo/StepThree'
import { StepTwo } from '../_component/PlusTwo/StepTwo'
import {
  cityValidation,
  dateOfBirthValidation,
  fatherNameValidation,
  fatherProfessionValidation,
  fileValidation,
  firstNameValidation,
  genderValidation,
  guardianProfessionValidation,
  gurdianMobileNumber,
  hostelValidation,
  lastNameValidation,
  localGuardianNameValidation,
  middleNameValidation,
  provinceNumberValidation,
  schoolAddressValidation,
  schoolBoardValidation,
  schoolNameValidation,
  seeGpaGradeValidation,
  seeGpaPointValidation,
  seeSymbolNumberValidation,
  shiftValidation,
  streamValidation,
  streetValidation,
  transportationValidation,
} from '../validation'

export const provinces = [
  { title: 'Koshi Province', value: 'KOSHI_PROVINCE' },
  { title: 'Madhesh Province', value: 'MADHESH_PROVINCE' },
  { title: 'Bagmati Province', value: 'BAGMATI_PROVINCE' },
  { title: 'Gandaki Province', value: 'GANDAKI_PROVINCE' },
  { title: 'Lumbini Province', value: 'LUMBINI_PROVINCE' },
  { title: 'Karnali Province', value: 'KARNALI_PROVINCE' },
  { title: 'Sudurpashchim Province', value: 'SUDURPASCHIM_PROVINCE' },
]

export const StepComponentPlusTwo = [StepOne, StepTwo, StepThree, StepFour]

export const MultiStepFormInputStyle = {
  input: 'border-[1px] border-border shadow-sm placeholder:text-[14px] ',
  label: 'text-body font-normal',
}

export const initialValues = {
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
  stream: '',
  shift: '',
  hostel: '',
  transportation: '',
}

export const stepOneValidationSchema = {
  firstName: firstNameValidation,
  middleName: middleNameValidation,
  lastName: lastNameValidation,
  street: streetValidation,
  city: cityValidation,
  province: provinceNumberValidation,
  gender: genderValidation,
  dateOfBirth: dateOfBirthValidation,
  mobileNumber: phoneNumberValidation,
  email: emailValidation,
  document: fileValidation,
}

export const stepTwoValidationSchema = {
  fatherName: fatherNameValidation,
  fatherProfession: fatherProfessionValidation,
  fatherMobileNumber: phoneNumberValidation,
  localGuardianName: localGuardianNameValidation,
  localGuardianProfession: guardianProfessionValidation,
  localGuardianPhoneNumber: gurdianMobileNumber,
}

const stepThreeValidationSchema = {
  schoolName: schoolNameValidation,
  schoolAddress: schoolAddressValidation,
  schoolBoard: schoolBoardValidation,
  seeSymbolNum: seeSymbolNumberValidation,
  seeGpaPoint: seeGpaPointValidation,
  seeGpaGrade: seeGpaGradeValidation,
}

export const stepFourValidationSchema = {
  stream: streamValidation,
  shift: shiftValidation,
  hostel: hostelValidation,
  transportation: transportationValidation,
}

export const ValidationSchemas = [
  stepOneValidationSchema,
  stepTwoValidationSchema,
  stepThreeValidationSchema,
  stepFourValidationSchema,
]

export const gpaDropdownList = [
  { title: 'A+', value: 'a+' },
  { title: 'A', value: 'a' },
  { title: 'B+', value: 'b+' },
  { title: 'B', value: 'b' },
  { title: 'C+', value: 'c+' },
  { title: 'C', value: 'c' },
  { title: 'D', value: 'd' },
]

export const genderList = [
  { title: 'Male', value: 'MALE' },
  { title: 'Female', value: 'FEMALE' },
  { title: 'Others', value: 'OTHERS' },
]

export const streamList = [
  { title: 'Science', value: 'SCIENCE' },
  { title: 'Management', value: 'MANAGEMENT' },
  { title: 'Humanities', value: 'HUMANITIES' },
]

export const shiftList = [
  { title: 'Morning', value: 'MORNING' },
  { title: 'Day', value: 'DAY' },
]

export const hostelList = [
  { title: 'yes', value: 'TRUE' },
  { title: 'no', value: 'FALSE' },
]

export const transportationList = [
  { title: 'yes', value: 'TRUE' },
  { title: 'no', value: 'FALSE' },
]

export const applicationFamilyDetailSchema = [
  'fatherName',
  'fatherProfession',
  'fatherMobileNumber',
  'localGuardianName',
  'localGuardianProfession',
  'localGuardianPhoneNumber',
]

export const applicationPreviousSchoolDetailSchema = [
  'schoolName',
  'schoolAddress',
  'schoolBoard',
  'seeSymbolNum',
  'seeGpaPoint',
  'seeGpaGrade',
]

export const applicationCourseDetailSchema = [
  'stream',
  'shift',
  'hostel',
  'transportation',
  'level',
]

export const schoolLevelList = [
  {
    title: 'P.G',
    value: 'P.G',
  },
  {
    title: 'Nursery',
    value: 'Nursery',
  },
  {
    title: 'L.K.G',
    value: 'L.K.G',
  },
  {
    title: 'U.K.G',
    value: 'U.K.G',
  },
  {
    title: 'One',
    value: 'One',
  },
  {
    title: 'Two',
    value: 'Two',
  },
  {
    title: 'Three',
    value: 'Three',
  },
  {
    title: 'Four',
    value: 'Four',
  },
  {
    title: 'Five',
    value: 'Five',
  },
  {
    title: 'Six',
    value: 'Six',
  },
  {
    title: 'Seven',
    value: 'Seven',
  },
  {
    title: 'Eight',
    value: 'Eight',
  },
  {
    title: 'Nine',
    value: 'Nine',
  },
]
