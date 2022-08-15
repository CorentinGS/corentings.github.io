export enum TimelineCardType {
  School = 0,
  Work = 1,
  Personal = 2,
  Course = 3,
  Other = 4,
}

export interface TimelineCard {
  name: string;
  description: string;
  type: TimelineCardType;
  start_date: string;
  end_date?: string;
  image?: string;
  link?: string;
  location?: string;
  tools?: string;
}

export interface TimelineCardList extends Array<TimelineCard> {}

