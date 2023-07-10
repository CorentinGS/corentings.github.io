import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function get(context) {
  return rss({
    title: "Corentin GS's blog",
    description: "A young programmer journey",
    site: "https://corentings.dev",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./blog/dnf5-step-by-step.mdx": () => import('../prerender.d41b1404.mjs').then(n => n.f),"./blog/docker-and-go.mdx": () => import('../prerender.d41b1404.mjs').then(n => n.g),"./blog/mergesort-parallel.mdx": () => import('../prerender.d41b1404.mjs').then(n => n.m),"./blog/simple-go-vs-goroutines.mdx": () => import('../prerender.d41b1404.mjs').then(n => n.s)})),
    customData: `<language>en-us</language>`
  })
}

export { get };
