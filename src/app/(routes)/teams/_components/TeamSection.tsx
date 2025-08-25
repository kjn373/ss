'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useState, useEffect } from 'react'
import TeamCards from './TeamCards'
import TeamTab from './TeamTab'
import { ITeamsData } from '../_interface/Teams'
// import { ITeamsResponse } from '../_interface/Teams'
// import { UseServerFetch } from '@/common/hook/useServerFetch'
import { NoDataFound } from '@/common/components/NoDataFound'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
// import { UiLoader } from '@/common/components/Atom/UiLoader'

const tabs = [
  { key: 'Our Board Members', title: 'Our Board Members' },
  { key: 'Our Expert Instructors', title: 'Our Expert Instructors' },
  { key: 'Administration Members', title: 'Administration Members' },
]

// Static data instead of API response
const staticTeamsData: ITeamsData[] = [
  // Board Members
  {
    id: '1',
    name: 'Person 1',
    position: 'Chairman',
    managementLevel: 'BOARD_MEMBER',
    image: {
      key: '/ss/chairman.jpg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: 'https://www.facebook.com/sscollegethimi14',
    twitter: 'https://x.com/',
    instagram: 'https://www.instagram.com/',
  },
  {
    id: '2',
    name: 'Person 2',
    position: 'Vice Chairman',
    managementLevel: 'BOARD_MEMBER',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  {
    id: '3',
    name: 'Person 3',
    position: 'Board Member',
    managementLevel: 'BOARD_MEMBER',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  // Expert Instructors
  {
    id: '4',
    name: 'Person 4',
    position: 'Senior Mathematics Teacher',
    managementLevel: 'EXPERT_INSTRUCTOR',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  {
    id: '5',
    name: 'Person 5',
    position: 'Science Department Head',
    managementLevel: 'EXPERT_INSTRUCTOR',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  {
    id: '6',
    name: 'Person 6',
    position: 'English Literature Teacher',
    managementLevel: 'EXPERT_INSTRUCTOR',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  {
    id: '7',
    name: 'Person 7',
    position: 'Physical Education Instructor',
    managementLevel: 'EXPERT_INSTRUCTOR',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  // Administration Members
  {
    id: '8',
    name: 'Person 8',
    position: 'Principal',
    managementLevel: 'ADMINISTRATION_MEMBER',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  {
    id: '9',
    name: 'Person 9',
    position: 'Vice Principal',
    managementLevel: 'ADMINISTRATION_MEMBER',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  {
    id: '10',
    name: 'Person 10',
    position: 'Academic Coordinator',
    managementLevel: 'ADMINISTRATION_MEMBER',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
  {
    id: '11',
    name: 'Person 11',
    position: 'Administrative Officer',
    managementLevel: 'ADMINISTRATION_MEMBER',
    image: {
      key: '/kws/person.svg',
      mimeType: 'image/svg+xml',
      bucket: 'static',
    },
    facebook: '',
    twitter: '',
    instagram: '',
  },
]

const TeamSection = () => {
  // const [response, setResponse] = useState<ITeamsResponse | null>(null)
  const [active, setActiveTab] = useState<string>(tabs[0]?.key)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response: ITeamsResponse | undefined = await UseServerFetch(
  //         '/api/v1/team'
  //       )

  //       if (response) {
  //         setResponse(response)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  const [filteredTeams, setFilteredTeams] = useState<ITeamsData[] | null>(null)

  useEffect(() => {
    // Filter static data based on management level
    const filteredData = staticTeamsData.filter((team: ITeamsData) => {
      if (active === 'Our Board Members') {
        return team.managementLevel === 'BOARD_MEMBER'
      } else if (active === 'Our Expert Instructors') {
        return team.managementLevel === 'EXPERT_INSTRUCTOR'
      } else if (active === 'Administration Members') {
        return team.managementLevel === 'ADMINISTRATION_MEMBER'
      }
      return false
    })

    setFilteredTeams(filteredData)
  }, [active])

  // Original dynamic data logic (commented out)
  // useEffect(() => {
  //   if (response) {
  //     // Filter based on title and management level
  //     const filteredData = response.data.filter((team: ITeamsData) => {
  //       if (active === 'Our Board Members') {
  //         return team.managementLevel === 'BOARD_MEMBER'
  //       } else if (active === 'Our Expert Instructors') {
  //         return team.managementLevel === 'EXPERT_INSTRUCTOR'
  //       } else if (active === 'Administration Members') {
  //         return team.managementLevel === 'ADMINISTRATION_MEMBER'
  //       }
  //       return false
  //     })

  //     setFilteredTeams(filteredData)
  //   }
  // }, [active, response])

  const handleDynamicData = (key: string) => {
    setActiveTab(key)
  }

  const renderTeamsUi = () => {
    // Using static data - always has data, so simplified logic
    if (filteredTeams && filteredTeams.length > 0) {
      return <TeamCards teams={filteredTeams} />
    } else {
      return <NoDataFound title="No data found" />
    }

    // Original dynamic data logic (commented out)
    // if (filteredTeams && filteredTeams.length > 0) {
    //   return <TeamCards teams={filteredTeams} />
    // } else if (filteredTeams && filteredTeams.length === 0) {
    //   return <NoDataFound title="No data found" />
    // } else {
    //   return (
    //     <div className="min-h-[200px] flex justify-center items-center">
    //       <UiLoader />
    //     </div>
    //   )
    // }
  }

  return (
    <>
      <CoverImage
        title="Our Team"
        list={[{ link: '', title: 'Our Team' }]}
        key={'Our Team'}
      />
      <HomeWrapper>
        <div className="flex flex-col md:items-center gap-y-10 2lg:gap-y-14">
          <div>
            <TabAnimation
              activeTab={active}
              setActive={setActiveTab}
              tabs={tabs}
              handleDynamicData={handleDynamicData}
              className="hidden md:flex"
            />
            <TeamTab handleDynamicData={handleDynamicData} />
          </div>
          <div>{renderTeamsUi()}</div>
        </div>
      </HomeWrapper>
    </>
  )
}

export default TeamSection
