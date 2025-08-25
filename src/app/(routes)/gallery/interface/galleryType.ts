interface PhotoVideo {
  key: string
  bucket: string
  mimeType: string
}

export interface IGalleryPhotoItem {
  id: string
  title: string
  photo: PhotoVideo
  video: PhotoVideo
}

export interface IGalleryVideoItem {
  id: string
  title: string
  photo: PhotoVideo
  video: PhotoVideo
}

export interface IGalleryPhotoResponse {
  status: number
  message: string
  data: IGalleryPhotoItem[]
  totalCount: number
}

export interface IGalleryVideoResponse {
  status: number
  message: string
  data: IGalleryVideoItem[]
  totalCount: number
}
