export interface ITeamsResponse {
  status: number
  message: string
  data: ITeamsData[]
}

export interface ITeamsData {
  id: string
  name: string
  position: string
  image: Image
  managementLevel:
    | 'BOARD_MEMBER'
    | 'EXPERT_INSTRUCTOR'
    | 'ADMINISTRATION_MEMBER'
  facebook: string | null
  instagram: string | null
  twitter: string | null
}

export interface Image {
  key: string
  bucket: string
  mimeType: string
}
