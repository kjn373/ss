import { ReactNode } from 'react'
import { Swiper } from 'swiper/react'

export const SwiperWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={15}
      slidesPerView={1}
    >
      {children}
    </Swiper>
  )
}
export const SwiperWrapperAcademicProgram = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <Swiper
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={15}
      slidesPerView={1}
    >
      {children}
    </Swiper>
  )
}
