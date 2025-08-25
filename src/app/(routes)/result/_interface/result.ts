export interface ITitle {
  title: string
}

export interface ICategory {
  category: string
}

export interface ITitleCategory {
  title: string
  categories: ICategory[]
}
export interface IResultData {
  pdfUrl: string | Uint8Array
  id: number
  heading: string
  date: string
  type: string
  category: string
}

export interface IResultApiResponse {
  status: number
  message: string
  data: IResult[]
  totalCount: number
}

export interface IResult {
  id: string
  resultId: string
  title: string
  status: 'PUBLISHED' | 'DRAFT'
  publishedAt: string | null
  file: FileDetails
  programType: string
  createdAt: string
  updatedAt: string
  level: Level
}
interface FileDetails {
  key: string
  bucket: string[]
  mimeType: string[]
}

interface Level {
  title: string
  slug: string
}
