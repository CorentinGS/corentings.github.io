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
      name: "Stouuf community manager",
      type: TimelineCardType.Work,
      description:
        "Managing the Stouuf community, website development, events organization and twitch moderation.",
      start_date: "2022",
      tools: "Canva, Tailwindcss",
    },
    {
      name: "Educative.io courses",
      type: TimelineCardType.Course,
      description:
        "Following several courses on Educative.io including but not limited to: Golang, Python, C, Java, Data Structure...",
      start_date: "2022",
      tools: "C, Golang, Data Structure, Java",
      link: "https://www.Educative.io",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s---FKkgQBv--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/246442/81bbdd1a-3596-4e44-b522-758c0839afa6.png",
    },
    {
      name: "HackerRank certifications",
      type: TimelineCardType.Course,
      description:
        "Obtained the following certifications from HackerRank: Python(Basic), Golang(Basic)",
      start_date: "March 2022",
      end_date: "March 2022",
      tools: "Golang, Python",
      link: "https://www.hackerrank.com/certificates/03173cedd98b",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    },
    {
      name: "Memnix lead developer",
      type: TimelineCardType.Personal,
      description:
        "Leading the development of the Memnix project, a spaced repetition learning platform.",
      start_date: "2021",
      image:
        "https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true",
      link: "https://memnix.app/",
      tools: "Golang, Nuxt, PostgreSQL, Docker...",
    },
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
      tools: "Python, Arduino",
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
    {
      type: TimelineCardType.School,
      name: "Scientific Baccalaureate Graduate (Engineering Sciences)",
      description:
        "Obtained the Scientific Baccalaureate with honors with Engineering Sciences and English options at Cornat High School in Valognes ",
      start_date: "2020",
      location: "Valognes, France",
    },
    {
      type: TimelineCardType.Personal,
      name: "Theatre actor - Addams Family Show",
      description:
        "Performed in the Addams Family Show in Orlando, Florida for Kids Theater Kamp.",
      start_date: "2019",
      end_date: "2019",
      link: "https://www.ktkamp.com/",
      image:
        "https://images.squarespace-cdn.com/content/v1/5f402f8de96cb40645d516ba/1602983171206-LM9GX2J3VWHV3US6C2MH/ktk+logo.jpg?format=1500w",
      location: "Orlando, Florida",
    },
    {
      type: TimelineCardType.Personal,
      name: "Private Pilot License",
      description:
        "Preparing for the private pilot license exam (postponed due to covid-19)",
      start_date: "2019",
      location: "Cherbourg, France",
    },
    {
      type: TimelineCardType.Work,
      name: "Intern devops at Qualialtis",
      description:
        "Devops internship at Qualialtis to learn about devops, kubernetes, helm and linux administration.",
      start_date: "2018",
      end_date: "2018",
      location: "Toulouse, France",
      tools: "Kubernetes, Helm, Debian",
    },
    {
      type: TimelineCardType.Personal,
      name: "Hackaton - Climathon Copernicus",
      description:
        "Climathon organized by Copernicus at Toulouse to find digitals solutions to the climate crisis. Got the 3rd place.",
      start_date: "2018",
      end_date: "2018",
      location: "Toulouse, France",
    },
  ];

  static get experiences(): TimelineCardList {
    return this._experiences;
  }
}
