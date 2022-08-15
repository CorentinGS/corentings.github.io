import { TimelineCardList, TimelineCardType } from "~/utils/types";

export class Config {
  static readonly twitter = "";
  static readonly facebook = "";
  static readonly instagram = "";
  static readonly youtube = "";
  static readonly github = "CorentinGS";
  static readonly linkedin = "corentin-giaufer-saubert/";
  static readonly medium = "";
  static readonly patreon = "";
  static readonly discord = "282233191916634113";
  static readonly telegram = "";
  static readonly reddit = "";
  static readonly twitch = "";
  static readonly stackoverflow = "";
  static readonly devto = "";
}

export class Profile {
  static readonly full_name = "Corentin Giaufer Saubert";
  static readonly short_name = "Corentin GS";
  static readonly title = "Computer Science student at Unice.";
  static readonly location = "Nice, France";
  static readonly email = "c.giaufersaubert@outlook.com";
  static readonly avatar = "/img/avatar.png";
}

export class Experiences {
  private static readonly _experiences: TimelineCardList = [
    {
      type: TimelineCardType.School,
      description:
        "Bachelor's degree in Computer Science at Université Nice Côte d'Azur.",
      link: "https://univ-cotedazur.fr/",
      image:
        "https://univ-cotedazur.fr/medias/photo/uca-logo-haut-2-_1646652165191-?ID_FICHE=32842",
      name: "Computer Science student at unice",
      start_date: "2021",
      location: "Nice, France",
      tools: "Python",
    },
    {
      name: "Stouuf community manager",
      type: TimelineCardType.Work,
      description:
        "Managing the Stouuf community, website development, events organization and twitch moderation.",
      start_date: "2022",
      tools: "Canva, Tailwindcss",
    },
    {
      name: "Memnix lead developer",
      type: TimelineCardType.Personal,
      description:
        "Leading the development of the Memnix project, a spaced repetition learning platform.",
      start_date: "2022",
      image:
        "https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true",
      link: "https://memnix.app/",
      tools: "Golang, Nuxt, PostgreSQL, Docker...",
    },

    {
      type: TimelineCardType.Work,
      description:
        "Linux embedded system and QT software development internship. Technical documentation writing and setup of project management tools.",
      image:
        "https://media-exp2.licdn.com/dms/image/C4E0BAQF9j7wBRv2oBQ/company-logo_200_200/0/1592988142210?e=2147483647&v=beta&t=XLLVYgKGUPYmLdMt3qXgFR4UlGif3KM5sGJ4_c1O278",
      name: "Developer intern at OneToo",
      start_date: "June 2021",
      end_date: "July 2021",
    },
    {
      type: TimelineCardType.School,
      description:
        "First year of the aeronautical engineering degree program at Estaca",
      link: "https://www.estaca.fr/",
      image:
        "https://pbs.twimg.com/profile_images/755292884308459522/ewGGfLoa_400x400.jpg",
      name: "Student at Estaca",
      start_date: "2020",
      end_date: "2021",
      location: "Laval, France",
    },
  ];

  static get experiences(): TimelineCardList {
    return this._experiences;
  }
}
