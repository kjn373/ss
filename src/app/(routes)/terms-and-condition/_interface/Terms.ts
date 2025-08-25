export interface ITermsResponse {
  status: number
  message: string
  data: TermsData[]
}

export interface TermsData {
  id: string
  description: string
  createdAt: string
  updatedAt: string
}
