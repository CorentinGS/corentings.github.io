import {TimelineCardList, TimelineCardType} from "~/utils/types";

export class Config {
    static readonly twitter = '';
    static readonly facebook = '';
    static readonly instagram = '';
    static readonly youtube = '';
    static readonly github = 'CorentinGS';
    static readonly linkedin = 'corentin-giaufer-saubert/';
    static readonly medium = '';
    static readonly patreon = '';
    static readonly discord = '282233191916634113';
    static readonly telegram = '';
    static readonly reddit = '';
    static readonly twitch = '';
    static readonly stackoverflow = '';
    static readonly devto = '';
}

export class Profile {
    static readonly full_name = 'Corentin Giaufer Saubert';
    static readonly short_name = 'Corentin GS';
    static readonly title = 'Computer Science student at Unice.';
    static readonly location = 'Nice, France';
    static readonly email = 'c.giaufersaubert@outlook.com';
    static readonly avatar = '/img/avatar.png';
}

export class Experiences {
    private static readonly _experiences: TimelineCardList = [
        {
            type: TimelineCardType.School,
            description: "Student at unice",
            link: "https://unice.fr",
            image: "https://www.hyperui.dev/photos/man-5.jpeg",
            name: "Student at unice",
            start_date: "2021",
            location: "Nice, France",
        },
        {
            type: TimelineCardType.School,
            description: "Student at unice",
            image: "https://www.hyperui.dev/photos/man-5.jpeg",
            name: "Student at unice",
            start_date: "2021",
            end_date: "2022",
        },
    ]

    static get experiences(): TimelineCardList {
        return this._experiences;
    }

}