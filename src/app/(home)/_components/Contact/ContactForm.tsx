'use client'

import { Button } from '@/common/components/Atom/Button'
import { ButtonLoader } from '@/common/components/Atom/ButtonLoader'
import { Input } from '@/common/components/Atom/Input'
import { SuccessMessageUi } from '@/common/components/Molecules/SuccessMessageUi'
import { ToastClose } from '@/common/components/ui/toast'
import { contactForm } from '@/common/constant/route'
import { toast } from '@/common/hook/use-toast'
import Axios from '@/common/utils/Axios'
import {
  emailValidation,
  fullNameValidation,
  levelValidation,
  messageValidation,
  phoneNumberValidation,
} from '@/common/utils/validation'
import { Form, Formik, FormikHelpers } from 'formik'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { ContactDropdown } from './ContactDropdown'

export const ContactForm = () => {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (message.length > 1) {
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  }, [message])

  const initialValues = {
    name: '',
    email: '',
    phoneNo: '',
    level: '',
    message: '',
  }

  const handleSubmit = async (
    values: typeof initialValues,
    resetForm: FormikHelpers<typeof initialValues>['resetForm']
  ) => {
    try {
      setLoading(true)
      const response = await Axios.post(`/${contactForm}`, values)

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
        }, 500)
      }
    } catch (error) {
      setLoading(false)
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className={`relative z-10 w-full bg-cover p-8 rounded-[12px] bg-[url('/ss/contact-bg.svg')] text-white`}
    >
      <h1 className="font-poppins font-medium text-[28px] leading-[36.4px]">
        Get in touch with Us
      </h1>
      <p className="font-workSans font-light text-[16px] leading-[27.2px] mt-4">
        We&apos;re here to answer your questions and provide more information
        about our programs.
        {/* <span className={`underline text-white`}>
          pawanprakriti2048@gmail.com
        </span> */}
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        validationSchema={Yup.object().shape({
          name: fullNameValidation,
          email: emailValidation,
          phoneNo: phoneNumberValidation,
          level: levelValidation,
          message: messageValidation,
        })}
      >
        {(formik) => {
          const { errors, touched, setFieldValue } = formik
          return (
            <Form>
              <div className="flex flex-col gap-y-6  mt-[32px]">
                <Input
                  type="text"
                  label="Name"
                  isRequired
                  placeholder="Your name"
                  name="name"
                  className="bg-white w-full "
                  error={errors.name!}
                  isError={!!errors.name && touched.name}
                  labelColor={'text-white'}
                />
                <Input
                  type="text"
                  label="Your Email"
                  isRequired
                  placeholder="you@company.com"
                  name="email"
                  className="bg-white w-full "
                  error={errors.email!}
                  isError={!!errors.email && touched.email}
                  labelColor={'text-white'}
                />
                <Input
                  type="text"
                  label="Your Phone"
                  isRequired
                  placeholder="+9779811111111"
                  name="phoneNo"
                  className="bg-white w-full "
                  error={errors.phoneNo!}
                  isError={!!errors.phoneNo && touched.phoneNo}
                  labelColor={'text-white'}
                />
                <ContactDropdown
                  label="Level"
                  value={formik.values.level}
                  setFieldValue={setFieldValue}
                  error={errors.level!}
                  isError={!!errors.level && touched.level}
                />
                <Input
                  isMessage
                  rows={3}
                  type="text"
                  label="Message"
                  isRequired
                  placeholder="Hello there!"
                  name="message"
                  className="bg-white w-full "
                  error={errors.message!}
                  isError={!!errors.message && touched.message}
                  labelColor={'text-white'}
                />
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full md:w-fit mt-[8px]"
                >
                  <ButtonLoader loading={loading} />
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
      {message.length > 1 && <SuccessMessageUi showMessage={message} />}
    </div>
  )
}
