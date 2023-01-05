import { type TimelineCardList, TimelineCardType } from "./types";
import { t } from "i18next";

export class Profile {
  static readonly full_name = "Corentin Giaufer Saubert";
  static readonly short_name = "Corentin GS";
  static readonly title = "Freelance backend developer";
  static readonly location = "Nice, France";
  static readonly email = "c.giaufersaubert@outlook.com";
  static readonly avatar = "/img/avatar.webp";
}

export class Config {
  static readonly twitter = "GSCorentinDev";
  static readonly facebook = "";
  static readonly instagram = "";
  static readonly youtube = "";
  static readonly github = "CorentinGS";
  static readonly linkedin = "corentin-giaufer-saubert/";
  static readonly medium = "";
  static readonly patreon = "";
  static readonly discord = "https://discord.gg/wc4PQsd7eE";
  static readonly telegram = "";
  static readonly reddit = "";
  static readonly twitch = "";
  static readonly stackoverflow = "";
  static readonly devto = "";
  static readonly mastodon = "https://hachyderm.io/@TheLittlePrince";
}

export class Experiences {
  private static readonly _experiences: TimelineCardList = [
    {
      name: t("experiences.bsc_cs.title"),
      type: TimelineCardType.School,
      description: t("experiences.bsc_cs.description"),
      start_date: "2023",
      tools: "Java",
      link: "https://www.iu.org/bachelor/computer-science/",
      image: "/img/iu_logo.png",
    },
    {
      name: t("experiences.freelance.title"),
      type: TimelineCardType.Work,
      description: t("experiences.freelance.description"),
      start_date: "2022",
      tools: "Golang, PostgreSQL, Docker...",
      link: "https://corentings.vercel.app",
    },

    {
      name: t("experiences.stouuf.title"),
      type: TimelineCardType.Personal,
      description: t("experiences.stouuf.description"),
      start_date: "2022",
      tools: "Canva, Tailwindcss",
      image: "/MF_STOUUF.png",
      link: "https://stouuf.net/",
    },
    {
      name: t("experiences.educative.title"),
      type: TimelineCardType.Course,
      description: t("experiences.educative.description"),
      start_date: "2022",
      tools: "C, Golang, Data Structure, Java",
      link: "https://www.Educative.io",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s---FKkgQBv--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/246442/81bbdd1a-3596-4e44-b522-758c0839afa6.png",
    },
    {
      name: t("experiences.hackerrank.title"),
      type: TimelineCardType.Course,
      description: t("experiences.hackerrank.description"),
      start_date: "March 2022",
      end_date: "March 2022",
      tools: "Golang, Python",
      link: "https://www.hackerrank.com/certificates/03173cedd98b",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    },
    {
      name: t("experiences.memnix.title"),
      type: TimelineCardType.Personal,
      description: t("experiences.memnix.description"),
      start_date: "2021",
      image:
        "https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true",
      link: "https://memnix.app/",
      tools: "Golang, Nuxt, PostgreSQL, Docker...",
    },
    {
      type: TimelineCardType.School,
      description: t("experiences.unice.description"),
      link: "https://univ-cotedazur.fr/",
      image:
        "https://univ-cotedazur.fr/medias/photo/uca-logo-haut-2-_1646652165191-?ID_FICHE=1167951",
      name: t("experiences.unice.title"),
      start_date: "September 2021",
      end_date: "December 2022",
      location: "Nice, France",
      tools: "Python, Arduino",
    },
    {
      type: TimelineCardType.Work,
      description: t("experiences.onetoo.description"),
      image:
        "https://media-exp2.licdn.com/dms/image/C4E0BAQF9j7wBRv2oBQ/company-logo_200_200/0/1592988142210?e=2147483647&v=beta&t=XLLVYgKGUPYmLdMt3qXgFR4UlGif3KM5sGJ4_c1O278",
      name: t("experiences.onetoo.title"),
      start_date: "June 2021",
      end_date: "July 2021",
      location: "Nice, France",
      link: "https://www.one-too.com/",
    },
    {
      type: TimelineCardType.School,
      description: t("experiences.estaca.description"),
      link: "https://www.estaca.fr/",
      image:
        "https://pbs.twimg.com/profile_images/755292884308459522/ewGGfLoa_400x400.jpg",
      name: t("experiences.estaca.title"),
      start_date: "2020",
      end_date: "2021",
      location: "Laval, France",
    },
    {
      type: TimelineCardType.School,
      name: t("experiences.bac.title"),
      description: t("experiences.bac.description"),
      start_date: "2020",
      location: "Valognes, France",
      link: "https://www.lycee-valognes.fr/",
    },
    {
      type: TimelineCardType.Personal,
      name: t("experiences.ktk.title"),
      description: t("experiences.ktk.description"),
      start_date: "2019",
      end_date: "2019",
      link: "https://www.ktkamp.com/",
      image:
        "https://images.squarespace-cdn.com/content/v1/5f402f8de96cb40645d516ba/1602983171206-LM9GX2J3VWHV3US6C2MH/ktk+logo.jpg?format=1500w",
      location: "Orlando, Florida",
    },
    {
      type: TimelineCardType.Personal,
      name: t("experiences.ppl.title"),
      description: t("experiences.ppl.description"),
      start_date: "2019",
      location: "Cherbourg, France",
      link: "https://ac-cherbourg.com/",
    },
    {
      type: TimelineCardType.Work,
      name: t("experiences.qualialtis.title"),
      description: t("experiences.qualialtis.description"),
      start_date: "2018",
      end_date: "2018",
      location: "Toulouse, France",
      tools: "Kubernetes, Helm, Debian",
      link: "https://www.qualialtis.com/",
      image: "/img/logo_qualialtis.png",
    },
    {
      type: TimelineCardType.Personal,
      name: t("experiences.copernicus.title"),
      description: t("experiences.copernicus.description"),
      start_date: "2018",
      end_date: "2018",
      location: "Toulouse, France",
    },
  ];

  static get experiences(): TimelineCardList {
    return this._experiences;
  }
}
