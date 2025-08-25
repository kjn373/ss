interface ContentItemWithSubtitle {
  subtitle: string
  text: string
  url?: string
}

interface ContentItemWithoutSubtitle {
  text: string
  url?: string
}

type ContentItem = ContentItemWithSubtitle | ContentItemWithoutSubtitle

export interface FooterLink {
  title: string
  subtitle?: string[]
  content: ContentItem[]
}
