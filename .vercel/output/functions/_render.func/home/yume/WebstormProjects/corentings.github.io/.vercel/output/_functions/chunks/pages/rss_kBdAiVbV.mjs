import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function get(context) {
  return rss({
    title: "Corentin GS's blog",
    description: "A young programmer journey",
    site: "https://corentings.dev",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({})),
    customData: `<language>en-us</language>`
  });
}

export { get };
