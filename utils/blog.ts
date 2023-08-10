import type { BlogAuthor, BlogPost, BlogPostList } from "./types"

import imgAvatar from "../src/assets/avatar.webp"

const cgs = {
  name: "Corentin Giaufer Saubert",
  avatar: imgAvatar
}

export class BlogPosts {
  private static readonly _blogPosts: BlogPostList = [
    {
      title: "Solving the Sum of Squares Problem: Unraveling Goroutine Misuse and Optimizing Performance",
        description: "Discover how to optimize performance, avoid common pitfalls, and achieve top-notch results. Ready to conquer the challenges? Let's go!",
        image:  "https://images.unsplash.com/photo-1547296825-8646e0556e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=626&q=70",
        date: "Aug. 10, 2023",
        link: "/blog/optimizing-goroutines-sum-of-squares",
        category: "Programming",
        timeToRead: "10 min",
        author: cgs,
        dark_background: false,
    },
    {
      title: "Upgrading to dnf5: A step-by-step guide for Fedora users",
      description:
        "Dnf5 is the new, faster, and more powerful package manager for Fedora. This blog post will show you how to replace dnf with dnf5 on your Fedora system.",
      image:
        "https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=70",
      date: "Apr. 29, 2023",
      link: "/blog/dnf5-step-by-step",
      category: "Programming",
      timeToRead: "3 min",
      author: cgs,
      dark_background: true
    },
    {
      title: "Merge Sort using Goroutines",
      description:
        "This is a simple example of how to use goroutines to implement a merge sort algorithm.",
      image:
        "https://images.unsplash.com/photo-1465251964418-7035fd8f889a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1491&q=70",
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
        "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=70",
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
        "https://images.unsplash.com/photo-1646627927863-19874c27316b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=70",
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
