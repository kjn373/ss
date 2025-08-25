import { useEffect, useState } from 'react'

export const CheckIsIos = () => {
  const [isIos, setIsIos] = useState<boolean>(false)

  useEffect(() => {
    const IsIos = () => {
      const userAgent = window.navigator.userAgent
      return /iPad|iPhone|iPod|Macintosh|Mac OS X/.test(userAgent)
    }

    setIsIos(IsIos())
  }, [])
  return isIos
}
