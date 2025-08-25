import { BannerData } from '../../notice/_interface/type'

export interface INewsResponseData {
  status: number
  message: string
  data: INewsItem[]
  totalCount: number
}

export interface INewsItem {
  id: string
  title: string
  description: string
  images: Images
  category: string
  type: string
  status: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  slug: string
  isHoliday?: boolean
}

export interface INewsData {
  data: INewsItem
  banner: BannerData
}
export interface INewsDetailResponse {
  status: number
  message: string
  data: INewsData
  totalCount: number
}

interface Images {
  key: string
  bucket: string
  mimeType: string
}
