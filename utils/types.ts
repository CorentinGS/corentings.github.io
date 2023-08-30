export enum TimelineCardType {
  School = 0,
  Work = 1,
  Personal = 2,
  Course = 3,
  Other = 4
}

export interface TimelineCard {
  name: string
  description: string
  type: TimelineCardType
  start_date: string
  end_date?: string
  image?: string
  link?: string
  location?: string
  tools?: string
}
export interface TimelineCardList extends Array<TimelineCard> {}

export interface BlogPost {
  title: string
  description: string
  image: ImageMetadata
  date: string
  link: string
  category: string
  author: object
  timeToRead?: string
  dark_background?: boolean
}

export interface BlogPostList extends Array<BlogPost> {}

export interface BlogAuthor {
  name: string
  avatar: ImageMetadata
  link?: string
}
