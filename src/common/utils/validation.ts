import * as Yup from 'yup'

export const fullNameValidation = Yup.string()
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
  .max(50, 'Name must be at most 50 characters')
  .min(4, 'Name must be at least 4 characters')
  .typeError('Please enter a valid name')
  .required('Name is a required field')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .test('spaces', 'Multiple spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{2,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const emailValidation = Yup.string()

  .email('Enter valid email')

  .matches(
    /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    'Email must be in valid format'
  )
  .max(50, 'Email must be less than or equal to 50 characters')

  .typeError('Enter valid email')

  .required('Email is a required field')

export const phoneNumberValidation = Yup.string()
  .matches(/^\+?[0-9]+$/, 'Please enter a valid phone number')
  .min(10, 'Phone number must be at least 10 characters')
  .required('Phone is a required field')
  .max(14, 'Phone number must be at most 14 characters')

export const messageValidation = Yup.string()
  .trim()
  .matches(/\S/, 'Please enter a valid message')
  .min(5, 'Message must be at least 5 characters')
  .max(1000, 'Message must be less or equal to 1000 characters')
  .typeError('Please enter a valid message')
  .required('Message is a required field')

export const levelValidation = Yup.string()
  .min(2, 'Level must be at least 2 characters')
  .max(650, 'Level must be less or equal to 650 characters')
  .required('Level is a required field')
