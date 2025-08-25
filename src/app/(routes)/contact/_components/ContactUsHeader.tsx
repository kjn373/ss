'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { contactData } from '@/common/data/staticData'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  IContactInfoData,
  IPhoneNumberItem,
  // ISettingsResponseData,
  ITelephoneItem,
} from '../_interface/Contact'

// Dynamically map icons to keys
const iconMap: { [key: string]: string } = {
  'Contact Number': '/home/phone.svg',
  Email: '/home/envelop.svg',
  'College Time': '/home/clock.svg',
  Address: '/home/location.svg', // Add other mappings as needed
}

const ContactUsHeader = () => {
  // Using static data instead of API calls
  const [settings, setSettings] = useState<IContactInfoData[] | undefined>([])
  const [phoneNumber, setPhoneNumbers] = useState<
    IPhoneNumberItem[] | undefined
  >([])

  const [telePhoneNumber, setTelephoneNumbers] = useState<
    ITelephoneItem[] | undefined
  >([])

  const handleClick = (type: 'tel' | 'mailto', value: string) => {
    if (type === 'tel') {
      window.location.href = `tel:${value}`
    } else if (type === 'mailto') {
      window.location.href = `mailto:${value}`
    }
  }

  useEffect(() => {
    // Using static data instead of API fetch
    const filteredSettings = contactData.settings.filter(
      (contact) => contact.key !== 'Address'
    )

    setSettings(filteredSettings)
    setPhoneNumbers(contactData.phoneNumbers)
    setTelephoneNumbers(contactData.telephoneNumbers)

    // API fetching logic
    // const fetchSettings = async () => {
    //   try {
    //     const settings: ISettingsResponseData | undefined =
    //       await UseServerFetch('/api/v1/settings')
    //     const filteredSettings = settings?.data.data.filter(
    //       (contact) => contact.key !== 'Address'
    //     )
    //     const phoneNumbers = settings?.data.phoneNumber
    //     const telePhoneNumbers = settings?.data.telephone

    //     setSettings(filteredSettings)
    //     setPhoneNumbers(phoneNumbers)
    //     setTelephoneNumbers(telePhoneNumbers)
    //   } catch (error) {
    //     console.error('Error fetching settings:', error)
    //   }
    // }
    // fetchSettings()
  }, [])

  return (
    <HomeWrapper className="!pb-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-center items-center">
        {settings?.map((contact, i) => (
          <div
            className="!max-w-[398px] h-[240px] bg-background flex flex-col justify-center items-center rounded-xl p-2"
            key={i}
          >
            <div>
              <Image
                src={iconMap[contact.key] || '/home/default-icon.svg'} // Fallback to default icon if key isn't found
                width={40}
                height={40}
                alt={`${contact.key}-icon`}
              />
            </div>
            <div className="mt-12 text-center">
              <h1 className="font-workSans text-base font-medium text-heading">
                {contact.key}
              </h1>

              {/* Display content dynamically based on key */}
              {contact.key === 'Contact Number' ? (
                <ul className="mt-6 font-poppins text-base font-normal text-body flex flex-col gap-2">
                  <li className="cursor-pointer">
                    {/* Display phone numbers in two lines */}
                    <span
                      onClick={() => {
                        if (phoneNumber && phoneNumber[0].value) {
                          handleClick('tel', phoneNumber[0].value)
                        }
                      }}
                    >
                      {phoneNumber && phoneNumber[0].value}
                    </span>{' '}
                    <span
                      onClick={() => {
                        if (phoneNumber && phoneNumber[1].value) {
                          handleClick('tel', phoneNumber[1].value)
                        }
                      }}
                    >
                      / {phoneNumber && phoneNumber[1].value}
                    </span>
                  </li>
                  <li className="cursor-pointer">
                    <span
                      onClick={() => {
                        if (telePhoneNumber && telePhoneNumber[0].value) {
                          handleClick('tel', telePhoneNumber[0].value)
                        }
                      }}
                    >
                      {telePhoneNumber && telePhoneNumber[0].value}
                    </span>{' '}
                    <span
                      onClick={() => {
                        if (telePhoneNumber && telePhoneNumber[1].value) {
                          handleClick('tel', telePhoneNumber[1].value)
                        }
                      }}
                    >
                      / {telePhoneNumber && telePhoneNumber[1].value}
                    </span>
                  </li>
                </ul>
              ) : contact.key === 'E-mail' ? (
                <div className="mt-6  font-poppins text-base font-normal">
                  {contact.value}
                </div>
              ) : contact.key === 'College Time' ? (
                <div className="mt-6 font-poppins text-base font-normal text-body w-[295px]">
                  {/* Split by 'Sat Closed' and handle the formatting */}
                  {contact.value.replace('Sat Closed', '').trim()}
                  <br />
                  <span className="text-red-500">Sat Closed</span>
                </div>
              ) : (
                <p
                  onClick={() => {
                    handleClick('mailto', contact.value)
                  }}
                  className="mt-6 font-poppins text-base font-normal text-body cursor-pointer"
                >
                  {contact.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </HomeWrapper>
  )
}

export default ContactUsHeader
