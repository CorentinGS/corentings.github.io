import rss from '@astrojs/rss'
import { getCollection } from 'astro:content';


export async function get(context) {
	const posts = await getCollection('blog')

	return rss({
		title: "Corentin GS's blog",
		description: 'A young programmer journey',
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.title,
			description: post.description,
			url: post.url,
			date: post.date,
			link: `/blog/${post.slug}`,
		})),
		customData: `<language>en-us</language>`
	})
}
