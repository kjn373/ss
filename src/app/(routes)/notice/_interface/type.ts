export interface INotice {
  id: string
  title: string
  date: string
  src: string
  pdfSrc: string
}

export interface INoticeResponse {
  status: number
  message: string
  data: INoticeResponseData
}

export interface INoticeResponseData {
  data: INoticeData
  banner: BannerData
}

export interface BannerData {
  id: string
  title: string
  image: BannerImages
  link: string
  isEnabled: boolean
  type: string
  createdAt: string
  updatedAt: string
}

export interface INoticeData {
  id: string
  title: string
  description: string
  images: BannerImages
  category: string
  type: string
  status: string
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

interface BannerImages {
  key: string
  bucket: string[]
  mimeType: string[]
}
