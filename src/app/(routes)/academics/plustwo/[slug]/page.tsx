import { NoDataFound } from '@/common/components/NoDataFound'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { IAcademicsResponse } from '../../_interface/academic'
import AcademicDetail from '../_components/AcademicDetail'
import { redirect } from 'next/navigation'
import { academicsData } from '@/common/data/staticData'

export async function generateStaticParams() {
  // Return all available slugs from academicsData
  return Object.keys(academicsData).map((slug) => ({
    slug: slug,
  }))
}

const Page = async ({ params }: { params: { slug: string } }) => {
  // Commented out API fetching logic - now using static data
  // const response: IAcademicsResponse | undefined = await UseServerFetch(
  //   `/api/v1/academics/${params.slug}`
  // )

  // Get static data based on slug
  const response: IAcademicsResponse | undefined =
    academicsData[params.slug as keyof typeof academicsData]

  const renderAcademicsDetailUi = () => {
    if (!response?.data) {
      redirect('/not-found')
    }

    if (response) {
      return (
        <AcademicDetail
          bannerDetail={response && response.banner}
          detail={response && response.data}
          slug={params.slug}
        />
      )
    } else if (!response) {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No detail found" />
        </div>
      )
    }
  }

  return renderAcademicsDetailUi()
}

export default Page
