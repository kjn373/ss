'use client'

import axios from 'axios'
import { toast } from '../hook/use-toast'
import { ToastClose } from '../components/ui/toast'
import Image from 'next/image'

interface ValidationErrorDetail {
  field: string
  message: string
}

const Axios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
})

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.data.status) {
        case 400:
          toast({
            title: 'Only PDF files are allowed!',
            action: (
              <ToastClose>
                <Image
                  src={'/admission/toast-close.svg'}
                  width={20}
                  height={20}
                  alt="close icon"
                />
              </ToastClose>
            ),
            className:
              'bg-errorLighter py-[18px] px-4 text-error font-workSans text-[16px] leading-4 font-medium',
          })
          return

        case 412:
          const details = error.response.data.details
            .map(
              (detail: ValidationErrorDetail) =>
                `${detail.field}: ${detail.message}`
            )
            .join(', ')
          toast({
            title: details,
            action: (
              <ToastClose>
                <Image
                  src={'/admission/red-cross-toast.svg'}
                  width={20}
                  height={20}
                  alt="close icon"
                />
              </ToastClose>
            ),
            className:
              'bg-errorLighter py-[18px] px-4 text-error font-workSans text-[16px] leading-4 font-medium',
          })
          return

        case 404:
          const errorMessage = error.response.data.message || 'Not found'
          // eslint-disable-next-line no-console
          console.log('error message: ', errorMessage)
          toast({
            title: errorMessage,
            action: (
              <ToastClose>
                <Image
                  src={'/admission/red-cross-toast.svg'}
                  width={20}
                  height={20}
                  alt="close icon"
                />
              </ToastClose>
            ),
            className:
              'bg-errorLighter py-[18px] px-4 text-error font-workSans text-[16px] leading-4 font-medium',
          })
          return

        default:
          toast({
            title: 'An unexpected error occurred. Please try again later.',
            action: (
              <ToastClose>
                <Image
                  src={'/admission/red-cross-toast.svg'}
                  width={20}
                  height={20}
                  alt="close icon"
                />
              </ToastClose>
            ),
            className:
              'bg-errorLighter py-[18px] px-4 text-error font-workSans text-[16px] leading-4 font-medium',
          })
          return
      }
    }

    return Promise.reject(error)
  }
)

export default Axios
