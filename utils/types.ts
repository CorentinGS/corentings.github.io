export enum TimelineCardType {
  School = 0,
  Work = 1,
  Personal = 2,
  Other = 3,
}

export interface TimelineCard {
  name: string;
  description: string;
  type: TimelineCardType;
  start_date: string;
  end_date?: string;
  image: string;
  link?: string;
  location?: string;
}

export interface TimelineCardList extends Array<TimelineCard> {}

export const TimelineCardColors = {
  [TimelineCardType.School]: "primary",
  [TimelineCardType.Work]: "secondary",
  [TimelineCardType.Other]: "accent",
};
