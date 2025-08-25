import { AcademicSection } from './_components/AcademicProgram/AcademicSection'
import { ContactSection } from './_components/Contact/ContactSection'
import { HeroSection } from './_components/Hero/HeroSection'
import { ReasonsToStudy } from './_components/ReasonsToStudy/ReasonsToStudy'
import AboutusWrapper from './_components/Aboutus/AboutusWrapper'
import ProcessSection from './_components/Process/ProcessSection'
import { GallerySection } from './_components/Gallery/GallerySection'
import TestimonialsSection from './_components/Testimonials/TestimonialsSection'
import { NoticeModal } from './_components/Notice/NoticeModal'
import NewsAndEvents from './_components/News/NewsAndEvents'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { ISettingsResponseData } from '../(routes)/contact/_interface/Contact'

export default async function Home() {
  const settingResponse: ISettingsResponseData | undefined =
    await UseServerFetch('/api/v1/settings')

  const settingData = settingResponse && settingResponse?.data.homepage
  return (
    <>
      <HeroSection settings={settingData} />
      <AcademicSection settings={settingData} />
      <ReasonsToStudy settings={settingData} />
      <ProcessSection />
      <AboutusWrapper />
      <TestimonialsSection />
      <GallerySection />
      <NewsAndEvents />
      <ContactSection />
      <NoticeModal />
    </>
  )
}
