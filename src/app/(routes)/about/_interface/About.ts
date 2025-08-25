export interface IVoiceOfManagementResponse {
  status: number
  message: string
  data: VoiceOfManagement[]
}

export interface IAboutResponse {
  status: number
  message: string
  data: IntroductionData
}

export interface IntroductionData {
  id: string
  title: string
  description: string
  features: string[]
}

export interface VoiceOfManagement {
  description: string
  Team: TeamMember
}

export interface TeamMember {
  name: string
  position: string
  image: Image
  facebook: string
  instagram: string
  twitter: string
}

export interface Image {
  key: string
  bucket: string
  mimeType: string
}
