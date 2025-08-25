import { allowedFileypes } from '@/common/constant/fileType'
import * as Yup from 'yup'

export const firstNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(20, 'First name must be at most 20 characters')
  .min(2, 'First name must be at least 2 characters')
  .typeError('Please enter a valid name')
  .required('First name is a required field')
  .test('spaces', 'Multiple spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{2,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const middleNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(20, 'Middle name must be at most 20 characters')
  .min(3, 'Middle name must be at least 3 characters')
  .typeError('Please enter a valid name')
  .test('spaces', 'Spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{1,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const lastNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(20, 'Last name must be at most 20 characters')
  .min(3, 'Last name must be at least 3 characters')
  .typeError('Please enter a valid name')
  .required('Last name is a required field')
  .test('spaces', 'Spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{1,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const streetValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(50, 'Street must be at most 50 characters')
  .min(4, 'Street must be at least 4 characters')
  .typeError('Please enter a valid name')
  .required('Street is a required field')
  .matches(
    /^[A-Za-z0-9\s.,'!@#$%^&*()\-+=<>?;:"\[\]{}|\\~`]+$/,
    'Must contain only letters, numbers, spaces, and special characters'
  )
  .test(
    'no-multiple-spaces',
    'Multiple spaces are not allowed',
    function (value) {
      if (value) {
        const multipleSpacesPattern = /\s{2,}/
        return !multipleSpacesPattern.test(value)
      }
      return true
    }
  )

export const cityValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .required('City is a required field')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(30, 'City must be at most 30 characters')
  .min(4, 'City must be at least 4 characters')
  .typeError('Please enter a valid name')
  .test(
    'no-multiple-spaces',
    'Multiple spaces are not allowed',
    function (value) {
      if (value) {
        const multipleSpacesPattern = /\s{2,}/
        return !multipleSpacesPattern.test(value)
      }
      return true
    }
  )

export const provinceNumberValidation = Yup.string().required(
  'Province is a required field'
)

export const genderValidation = Yup.string().required(
  'Gender is a required field'
)

export const mobileNumberValidation = Yup.string()
  .matches(/^(?!\s+$)[0-9+ ]+$/, 'Please enter a valid mobile number')
  .test('spaces', 'Spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{1,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })
  .min(10, 'Mobile number must be at least 10 characters')
  .required('Mobile is a required field')
  .max(14, 'Mobile number must be at most 14 characters')

export const emailValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email')
  .max(50, 'Email must be less than or equal to 50 characters')
  .required('Email is a required field')
  .test(
    'no-multiple-spaces',
    'Multiple spaces are not allowed',
    function (value) {
      if (value) {
        const multipleSpacesPattern = /\s{2,}/
        return !multipleSpacesPattern.test(value)
      }
      return true
    }
  )

export const fileValidation = Yup.array()
  .of(
    Yup.mixed()
      .test('fileSize', 'File size should be less than 10 MB', (value) => {
        if (value && (value as File).size) {
          return (value as File).size <= 10 * 1024 * 1024
        }
        return true
      })
      .test('fileType', 'Only PDFs are allowed', (value) => {
        if (value && (value as File).type) {
          return allowedFileypes.includes((value as File).type)
        }
        return false
      })
      .nullable()
  )
  .nullable()

export const dateOfBirthValidation = Yup.string().required(
  'Date of Birth is a required field'
)

export const fatherNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .typeError('Please enter a valid name')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(50, 'Father name must be at most 50 characters')
  .min(2, 'Father name must be at least 2 characters')
  .required('Father name is a required field')
  .test('spaces', 'Spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{2,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const fatherProfessionValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .typeError('Please enter a valid profession')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(50, 'Father profession must be at most 50 characters')
  .min(2, 'Father profession must be at least 2 characters')

export const localGuardianNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .typeError('Please enter a  valid name')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(50, 'Guardian name must be at most 50 characters')
  .min(2, 'Guardian name must be at least 2 characters')

export const guardianProfessionValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .typeError('Please enter a  valid profession')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .max(50, 'Guardian profession must be at most 50 characters')
  .min(2, 'Guardian profession must be at least 2 characters')

export const gurdianMobileNumber = Yup.string()
  .test('spaces', 'Spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{1,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })
  .matches(/^(?!\s+$)[0-9+ ]+$/, 'Please enter a valid mobile number')
  .min(10, 'Mobile number must be at least 10 characters')
  .max(14, 'Mobile number must be at most 14 characters')

export const schoolNameValidation = Yup.string()
  .required('Previous school’s name is required')
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    (value) => !/^\s/.test(value)
  )
  .typeError('Please enter a valid school name')
  .min(2, 'School name must be at least 2 characters')
  .max(150, 'School name must be at most 150 characters')
  .matches(
    /^[A-Za-z0-9\s.-]+$/,
    'School name can only contain letters, numbers, spaces, hyphens, and periods'
  )

export const schoolAddressValidation = Yup.string()
  .required('Previous school address is required')
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    (value) => !/^\s/.test(value)
  )
  .min(5, 'School address must be at least 5 characters')
  .max(200, 'School address must be at most 200 characters')
  .matches(
    /^[A-Za-z0-9\s,.]+$/,
    'School address can only contain letters, numbers, spaces, commas, and periods.'
  )
  .typeError('Please enter a valid school address')

export const schoolBoardValidation = Yup.string()
  .required('Previous school board is required')
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    (value) => !/^\s/.test(value)
  )
  .matches(
    /^[A-Za-z\s.-]+$/,
    'School board can only contain letters, spaces, hyphens, and periods.'
  )
  .min(5, 'School board must be at least 5 characters')
  .max(80, 'School board must be at most 80 characters')

export const seeSymbolNumberValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .required('SEE symbol number is required')
  .length(9, 'SEE symbol number must be exactly 9 characters')
  .matches(
    /^[A-Za-z0-9]+$/,
    'SEE symbol number can only contain letters and numbers'
  )

export const seeGpaPointValidation = Yup.string()
  .required('SEE GPA point is required')
  .matches(
    /^\d+(\.\d{1,2})?$/,
    'SEE GPA point must be a numeric value with up to 2 decimal places'
  )
  .test('range', 'SEE GPA point must be between 0.0 and 4.0', (value) => {
    const numValue = parseFloat(value)
    return numValue >= 0 && numValue <= 4
  })
  .test(
    'length',
    'SEE GPA point must be between 3 and 4 characters',
    (value) => {
      if (value == null) return false
      return value.length >= 3 && value.length <= 4
    }
  )

export const seeGpaGradeValidation = Yup.string()
  .required('SEE GPA Grade is required')
  .oneOf(
    ['a+', 'a', 'b+', 'b', 'c+', 'c', 'd'],
    'SEE GPA Grade must be one of the predefined grades'
  )
export const streamValidation = Yup.string().required('Please select stream.')

export const schoolLevelValidation = Yup.string().required(
  'Please select level'
)

export const shiftValidation = Yup.string().required(
  'Please select one option.'
)

export const hostelValidation = Yup.string().required(
  'Please select one option.'
)

export const transportationValidation = Yup.string().required(
  'Please select one option. '
)
