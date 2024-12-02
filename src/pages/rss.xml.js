import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
const parser = new MarkdownIt()

export async function GET(context) {

	const blog = (await getCollection('blog')).filter(post => !post.data.draft && new Date(post.data.pubDate) <= new Date()).sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
	return rss({
		title: "Corentin GS's blog",
		stylesheet: '/styles.xsl',
		description: 'A young programmer journey',
		site: context.site,
		customData: `<atom:link href="https://corentings.dev/rss.xml" rel="self" type="application/rss+xml" />`,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			customData: `<category>${post.data.category}</category>`,
			author: 'Corentin GS &lt;contact+rss@corentings.dev&gt;',
			// Compute RSS link from post `slug`
			// This example assumes all posts are rendered as `/blog/[slug]` routes
			link: `/blog/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
			})
		}))
	})
}
