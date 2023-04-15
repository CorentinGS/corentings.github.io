import type { BlogAuthor, BlogPost, BlogPostList } from "./types"

const cgs: BlogAuthor = {
  name: "Corentin Giaufer Saubert",
  avatar:
    "https://raw.githubusercontent.com/CorentinGS/corentings.github.io/main/public/img/avatar.webp"
}

export class BlogPosts {
  private static readonly _blogPosts: BlogPostList = [
    {
      title: "Merge Sort using Goroutines",
      description:
        "This is a simple example of how to use goroutines to implement a merge sort algorithm.",
      image:
        "https://images.unsplash.com/photo-1465251964418-7035fd8f889a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1491&q=80",
      date: "Jan. 15, 2023",
      link: "/blog/mergesort-parallel",
      category: "Programming",
      timeToRead: "6 min",
      author: cgs,
      dark_background: true
    },
    {
      title: "Simple Function vs Goroutines",
      description:
        "This is a simple example of why goroutines might be overkill for some tasks and less efficient than a simple function.",
      image:
        "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      date: "Jan. 12, 2023",
      link: "/blog/simple-go-vs-goroutines",
      category: "Programming",
      timeToRead: "10 min",
      author: cgs,
      dark_background: false
    },
    {
      title: "Deploying a Go application with Docker",
      description: "How to deploy an optimized Go application with Docker",
      image:
        "https://images.unsplash.com/photo-1646627927863-19874c27316b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
      date: "Nov. 09, 2022",
      link: "/blog/docker-and-go",
      category: "Programming",
      timeToRead: "5 min",
      author: cgs,
      dark_background: true
    }
  ]

  static get blogPosts(): BlogPostList {
    return this._blogPosts
  }

  static getBlogPostByLink(link: string): BlogPost | any {
    return this._blogPosts.find((post) => post.link === link)
  }
}
