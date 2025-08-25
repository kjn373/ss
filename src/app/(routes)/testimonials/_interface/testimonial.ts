export interface ITestimonialResponse {
  status: string
  message: string
  data: ITestimonialData[]
  totalCount: number
}
export interface ITestimonialData {
  id: number
  name: string
  position: string
  image: Image
  description: string
  organization?: string
}

export interface Image {
  key: string
  bucket: string
  mimeType: string
}
