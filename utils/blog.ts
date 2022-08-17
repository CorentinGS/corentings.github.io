import { BlogAuthorMap, BlogPostList } from "~/utils/types";

export class BlogAuthor {
  private static readonly _blogAuthors: BlogAuthorMap = new Map([
    [
      "cgs",
      {
        name: "Corentin Giaufer Saubert",
        avatar:
          "https://raw.githubusercontent.com/CorentinGS/corentings.github.io/main/public/img/avatar.webp",
      },
    ],
  ]);

  static get(name: string) {
    return this._blogAuthors.get(name);
  }
}

export class BlogPosts {
  static get blogPosts(): BlogPostList {
    return this._blogPosts;
  }
  private static readonly _blogPosts: BlogPostList = [
    {
      title: "My first post",
      description: "Let's start with a simple post",
      image:
        "https://images.unsplash.com/photo-1503104538136-7491acef4d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: "August 16, 2022",
      link: "/blog/first",
      category: "Life",
      timeToRead: "5 min",
      author: BlogAuthor.get("cgs"),
      dark_background: true,
    },
  ];
}
