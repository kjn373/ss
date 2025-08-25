export interface IBrochureApiResponse {
  status: number
  message: string
  data: IBrochureItem[]
  totalCount: number
}

interface FileData {
  key: string
  bucket: string[]
  mimeType: string[]
}

export interface IBrochureItem {
  id: string
  title: string
  image: FileData
  file: FileData
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED'
  publishedAt: string
  createdAt: string
  updatedAt: string
}
