'use client'

import React, { useEffect, useState } from 'react'
import { ContactLocation } from './ContactLocation'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { ContactForm } from './ContactForm'
import { usePathname } from 'next/navigation'

export const ContactSection = () => {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if (message.length > 1) {
      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
  }, [message])

  const pathname = usePathname()

  const isContactPage = pathname === '/contact'
  const isAboutPage = pathname === '/about'
  return (
    <HomeWrapper
      className={`${isContactPage ? 'pt-6' : ''} ${
        isAboutPage ? 'pt-[96px]' : ''
      }`}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col-reverse lg:flex-row gap-y-6 md:gap-x-6 justify-center">
          <ContactLocation />
          <ContactForm />
        </div>
      </div>
    </HomeWrapper>
  )
}
