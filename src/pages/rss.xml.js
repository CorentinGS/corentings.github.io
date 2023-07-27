import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get(context) {
  return rss({
    title: "Corentin GS's blog",
    description: "A young programmer journey",
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.mdx")),
    customData: `<language>en-us</language>`
  })
}
