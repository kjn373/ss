'use client'

import React, { useState } from 'react'
import { MultipleSteps } from './StepUi'
import {
  Form,
  Formik,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from 'formik'
import * as Yup from 'yup'
import {
  applicationCourseDetailSchema,
  applicationFamilyDetailSchema,
  applicationPreviousSchoolDetailSchema,
  initialValues,
  MultiStepFormInputStyle,
  StepComponentPlusTwo,
  ValidationSchemas,
} from '../constant/data'
import { Button } from '@/common/components/Atom/Button'
import { postPlusTwoForm } from '@/common/constant/route'
import { toast } from '@/common/hook/use-toast'
import { ToastClose } from '@/common/components/ui/toast'
import Image from 'next/image'
import Axios from '@/common/utils/Axios'
import { ButtonLoader } from '@/common/components/Atom/ButtonLoader'

interface IPlusTwoFormProps {
  onFormChange: (isDirty: boolean) => void
}

export const PlusTwoForm: React.FC<IPlusTwoFormProps> = ({ onFormChange }) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [completedSteps, setCompletedStep] = useState<number[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const handleNext = (
    setTouched: (
      touched: FormikTouched<FormikValues>,
      shouldValidate?: boolean
    ) => void
  ) => {
    const currentStepFields = Object.keys(ValidationSchemas[currentStep])

    const touchedFields = currentStepFields.reduce((acc, field) => {
      acc[field] = true
      return acc
    }, {} as Record<string, boolean>)

    completedSteps.push(currentStep)
    setTouched(touchedFields, true)
    setCurrentStep((prev) =>
      Math.min(prev + 1, StepComponentPlusTwo.length - 1)
    )
  }

  const handlePrev = () => {
    completedSteps.pop()
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    const { resetForm, setTouched } = formikHelpers
    if (currentStep < StepComponentPlusTwo.length - 1) {
      handleNext(setTouched)
    } else {
      const formData = new FormData()
      const applicationFamilyDetail: { [key: string]: string } = {}
      const applicationPreviousSchoolDetail: { [key: string]: string } = {}
      const applicationCourseDetail: { [key: string]: string } = {}
      Object.keys(values).forEach((key) => {
        if (
          values[key] !== '' &&
          values[key] !== undefined &&
          values[key] !== null
        ) {
          if (applicationFamilyDetailSchema.includes(key)) {
            applicationFamilyDetail[key] = values[key]
          } else if (applicationPreviousSchoolDetailSchema.includes(key)) {
            applicationPreviousSchoolDetail[key] = values[key]
          } else if (applicationCourseDetailSchema.includes(key)) {
            applicationCourseDetail[key] = values[key]
          } else if (key === 'document') {
            for (let i = 0; i < values['document'].length; i++) {
              formData.append('document', values['document'][i])
            }
          } else {
            formData.append(key, values[key])
          }
        }
      })
      formData.append('applicationFor', 'PLUS_TWO')
      formData.append(
        'applicationFamilyDetail',
        JSON.stringify(applicationFamilyDetail)
      )
      formData.append(
        'applicationPreviousSchoolDetail',
        JSON.stringify(applicationPreviousSchoolDetail)
      )
      formData.append(
        'applicationCourseDetail',
        JSON.stringify(applicationCourseDetail)
      )

      try {
        setLoading(true)
        const response = await Axios.post(`/${postPlusTwoForm}`, formData)
        if (response.data) {
          toast({
            title: response.data.message,
            action: (
              <ToastClose>
                <Image
                  src={'/admission/toast-close.svg'}
                  width={20}
                  height={20}
                  alt="close icon"
                  className="size-5"
                />
              </ToastClose>
            ),
            className:
              'bg-successBg py-[18px] px-4 text-success font-workSans text-[16px] leading-4  font-medium',
          })
          setTimeout(() => {
            resetForm()
            setCurrentStep(0)
            setCompletedStep([])
          }, 500)
        } else {
        }
      } catch (error) {
        setLoading(false)
        console.error('Error submitting form:', error)
      } finally {
        setLoading(false)
      }
    }
  }
  const isSubmit = currentStep < StepComponentPlusTwo.length - 1

  return (
    <div className=" bg-background w-full rounded-xl p-6 flex flex-col gap-y-10">
      <MultipleSteps
        activeIndex={currentStep}
        steps={StepComponentPlusTwo.length}
        completedIndex={completedSteps}
      />

      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) =>
          handleSubmit(values, formikHelpers)
        }
        validationSchema={Yup.object().shape(ValidationSchemas[currentStep])}
      >
        {(formik) => {
          const {
            setFieldValue,
            setFieldError,
            errors,
            touched,
            values,
            dirty,
          } = formik

          const StepComponentsPlusTwo = StepComponentPlusTwo[currentStep]

          onFormChange(dirty)

          return (
            <Form>
              <StepComponentsPlusTwo
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                setFieldError={setFieldError}
                inputStyle={MultiStepFormInputStyle}
                values={values}
              />

              <div className="flex justify-end  gap-x-3 mt-10 ml-auto">
                {currentStep > 0 && (
                  <Button
                    onClick={handlePrev}
                    type="button"
                    variant={'outline'}
                    className="w-fit"
                  >
                    Previous
                  </Button>
                )}
                <Button disabled={loading} type={'submit'} className="w-fit">
                  {isSubmit ? 'Next' : <ButtonLoader loading={loading} />}
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
