import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: "Corentin GS's blog",
        stylesheet: '/styles.xsl',
        description: 'A young programmer journey',
        site: context.site,
        customData: `<atom:link href="https://corentin.gs/rss.xml" rel="self" type="application/rss+xml" />`,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            customData: `<category>${post.data.category}</category>
            <atom:link href="https://corentin.gs/blog/${post.slug}" rel="self" type="application/rss+xml" />`,
            author: "Corentin GS &lt;contact+rss@corentings.dev&gt;",
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
              }),
        })),
    });
}