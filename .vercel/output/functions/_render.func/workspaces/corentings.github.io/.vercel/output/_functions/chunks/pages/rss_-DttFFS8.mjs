import rss from '@astrojs/rss';
import { a as getCollection } from './__DYJJjHjB.mjs';

async function get(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Corentin GS's blog",
    description: "A young programmer journey",
    site: "https://corentings.dev",
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      url: post.url,
      date: post.date,
      link: `/blog/${post.slug}`
    })),
    customData: `<language>en-us</language>`
  });
}

export { get };
