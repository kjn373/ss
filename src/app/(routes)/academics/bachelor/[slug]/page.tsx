import { NoDataFound } from '@/common/components/NoDataFound'
import { IAcademicsResponse } from '../../_interface/academic'
import Bachelor from '../_components/Bachelor'
import { redirect } from 'next/navigation'
import { academicsData } from '@/common/data/staticData'

export async function generateStaticParams() {
  // Return bachelor-specific slugs from academicsData
  const bachelorSlugs = ['BBS', 'BBS'] // Add other bachelor program slugs as needed
  return bachelorSlugs
    .filter((slug) => slug in academicsData)
    .map((slug) => ({
      slug: slug,
    }))
}

const Page = async ({ params }: { params: { slug: string } }) => {
  // Get static data based on slug
  const response: IAcademicsResponse | undefined =
    academicsData[params.slug as keyof typeof academicsData]

  const renderBachelorDetailUi = () => {
    if (!response?.data) {
      redirect('/not-found')
    }

    if (response?.data) {
      return (
        <Bachelor
          bannerDetail={response.banner}
          detail={response.data}
          slug={params.slug}
        />
      )
    } else {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No detail found" />
        </div>
      )
    }
  }
  return renderBachelorDetailUi()
}

export default Page
