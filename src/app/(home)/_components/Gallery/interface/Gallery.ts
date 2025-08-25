export interface IGalleryItem {
  id: number
  serialNo: string
  title: string
  src: string
  type: 'image' | 'video' | string
}

export interface IHomeGalleryResponse {
  status: number
  message: string
  data: IHomeGallery[]
  totalCount: number
}

export interface IHomeGallery {
  id?: string
  title?: string
  photo?: Image
}

export interface Image {
  key: string
  bucket: string
  mimeType: string
}
