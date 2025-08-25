export interface IAdmissionResponse {
  status: number
  message: string
  data: IAdmissionData[]
  totalCount: number
}
export interface IAdmissionData {
  id: number
  admissionId: string
  articleTitle: string
  description: string
  image: Image
  programType: string
  process: string
  academics: {
    title: string
    slug: string
  }
}

export interface IDetailData {
  id: string
  academicId: string
  articleTitle: string
  description: string
  image: {
    key: string[]
    bucket: string[]
    mimeType: string[]
  }
  process: string
  form: {
    key: string
    bucket: string
    mimeType: string
  }
  academics: {
    title: string
    slug: string
  }
  programType: string
  createdAt: string
  updatedAt: string
}
export interface IAdmissionDetailResponse {
  status?: number
  message?: string
  data: IDetailData
}

export interface Image {
  key: string
  bucket: string
  mimeType: string
}
