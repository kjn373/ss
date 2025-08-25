import React, { ReactNode } from 'react'

export const HeroBgWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="  bg-[#0b1c68] md:bg-[url('/ss/blue-bg.svg')] bg-no-repeat 2lg:bg-cover bg-background 2lg:bg-transparent  ">
      {children}
    </div>
  )
}
