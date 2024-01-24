import type { BlogAuthor, BlogPost, BlogPostList } from './types'

import imgAvatar from 'src/assets/avatar.webp'
import imgDnf5 from 'src/assets/blog/dnf5-step-by-step.webp'
import imgDocker from 'src/assets/blog/docker-and-go.webp'
import imgMergesort from 'src/assets/blog/mergesort-parallel.webp'
import imgOptimizingGoroutines from 'src/assets/blog/optimizing-goroutines-sum-of-squares.webp'
import imgSimpleGo from 'src/assets/blog/simple-go-vs-goroutines.webp'

const cgs: BlogAuthor = {
	name: 'Corentin Giaufer Saubert',
	avatar: imgAvatar,
	link: ''
}

export class BlogPosts {
	private static readonly _blogPosts: BlogPostList = [
		{
			title:
				'Solving the Sum of Squares Problem: Unraveling Goroutine Misuse and Optimizing Performance',
			description:
				"Discover how to optimize performance, avoid common pitfalls, and achieve top-notch results. Ready to conquer the challenges? Let's go!",
			image: imgOptimizingGoroutines,
			date: 'Aug. 10, 2023',
			link: '/blog/optimizing-goroutines-sum-of-squares',
			category: 'Programming',
			timeToRead: '10 min',
			author: cgs,
			dark_background: false
		},
		{
			title: 'Upgrading to dnf5: A step-by-step guide for Fedora users',
			description:
				'Dnf5 is the new, faster, and more powerful package manager for Fedora. This blog post will show you how to replace dnf with dnf5 on your Fedora system.',
			image: imgDnf5,
			date: 'Apr. 29, 2023',
			link: '/blog/dnf5-step-by-step',
			category: 'Programming',
			timeToRead: '3 min',
			author: cgs,
			dark_background: true
		},
		{
			title: 'Merge Sort using Goroutines',
			description:
				'This is a simple example of how to use goroutines to implement a merge sort algorithm.',
			image: imgMergesort,
			date: 'Jan. 15, 2023',
			link: '/blog/mergesort-parallel',
			category: 'Programming',
			timeToRead: '6 min',
			author: cgs,
			dark_background: true
		},
		{
			title: 'Simple Function vs Goroutines',
			description:
				'This is a simple example of why goroutines might be overkill for some tasks and less efficient than a simple function.',
			image: imgSimpleGo,
			date: 'Jan. 12, 2023',
			link: '/blog/simple-go-vs-goroutines',
			category: 'Programming',
			timeToRead: '10 min',
			author: cgs,
			dark_background: false
		},
		{
			title: 'Deploying a Go application with Docker',
			description: 'How to deploy an optimized Go application with Docker',
			image: imgDocker,
			date: 'Nov. 09, 2022',
			link: '/blog/docker-and-go',
			category: 'Programming',
			timeToRead: '5 min',
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

	static getBlogPostFirst(): BlogPost | any {
		return this._blogPosts[0]
	}
}
