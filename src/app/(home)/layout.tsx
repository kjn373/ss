import { ReactNode } from 'react'
import { NavSection } from './_components/NavSection'
import Footer from '@/common/components/Molecules/Footer/Footer'
import { ISettingsResponseData } from '../(routes)/contact/_interface/Contact'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { ScrollToTopUi } from '@/common/components/Molecules/ScrollToTopUi'

export default async function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  const settingsData: ISettingsResponseData | undefined =
    await UseServerFetch('/api/v1/settings')

  return (
    <div className="lg:h-screen lg:overflow-y-scroll home-layout-container ">
      <NavSection settings={settingsData} />
      {children}
      <ScrollToTopUi layout=".home-layout-container" />
      <Footer settings={settingsData} />
    </div>
  )
}
