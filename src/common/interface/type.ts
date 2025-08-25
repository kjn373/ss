export interface INavSubLink {
  id: number
  title: string
  link: string
  subsublink?: INavSubLink[]
}

export interface INavLink {
  id: number
  title: string
  sublink: INavSubLink[]
  isDropDown: boolean
}

export interface IDropdownList {
  title: string
  value: string
}

export interface IFileMetadata {
  name: string
  size: string
}
