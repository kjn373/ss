interface Facility {
  facilityTitle: string
  slug: string
}

export interface IFacilityResponse {
  status: number
  message: string
  data: Facility[]
  totalCount: number
}

export interface Images {
  key: string[]
  bucket: string[]
  mimeType: string[]
}

export interface IFacilityData {
  id: string
  images: Images
  facilityTitle: string
  slug: string
  articleTitle: string
  description: string
}

export interface IFacilityDetailResponse {
  status: number
  message: string
  data: IFacilityData
}

export interface IFacilityListResponse {
  status: number
  message: string
  data: IFacilityData[]
}
