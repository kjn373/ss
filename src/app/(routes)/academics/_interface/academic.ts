export interface IAcademicsResponse {
  status: number
  message: string
  data: IAcademicsData
  banner: IAcademicBanner
}

export interface IAcademicsData {
  id: string
  title: string
  slug: string
  articleTitle: string
  description: string
  image: IAcademicsImage
  programType: string
  createdAt: string
  updatedAt: string
}

export interface IAcademicBanner {
  id: string
  title: string
  image: IAcademicsImage
  link: string
  isEnabled: boolean
  type: string
  createdAt: string
  updatedAt: string
}

export interface IAcademicsImage {
  key: string[]
  bucket: string[]
  mimeType: string[]
}

export interface ISchoolGalleryResponse {
  status: number
  message: string
  data: ISchoolGallery[]
  totalCount: number
}

export interface ISchoolGallery {
  id?: string
  title?: string
  photo?: IAcademicsImage
}
