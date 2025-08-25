import { useEffect, useState } from 'react'

export const useBrowserDetect = () => {
  const [browserClass, setBrowserClass] = useState('')

  useEffect(() => {
    const getBrowserClass = () => {
      const userAgent = navigator.userAgent.toLowerCase()

      if (userAgent.indexOf('chrome') > -1) {
        return 'h-[calc(100vh-20rem)]'
      }
      if (userAgent.indexOf('firefox') > -1) {
        return 'h-[calc(100vh-18rem)]'
      }
      if (
        userAgent.indexOf('safari') > -1 &&
        userAgent.indexOf('chrome') === -1
      ) {
        return 'h-[calc(100vh-16rem)]'
      }
      if (userAgent.indexOf('edge') > -1) {
        return '2lg:h-[calc(100vh-10rem)]  2xl:h-[calc(100vh-10rem)] 3xl:h-[calc(100vh-10rem)]'
      }
      return 'h-[calc(100vh-20rem)]'
    }

    setBrowserClass(getBrowserClass())
  }, [])

  return browserClass
}
