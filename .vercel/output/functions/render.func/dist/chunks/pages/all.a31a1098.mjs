import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function get(context) {
  return rss({
    title: "Corentin GS's blog",
    description: "A young programmer journey",
    site: "https://corentings.dev",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./blog/dnf5-step-by-step.mdx": () => import('../prerender.e00ba34c.mjs').then(n => n.e),"./blog/docker-and-go.mdx": () => import('../prerender.e00ba34c.mjs').then(n => n.f),"./blog/mergesort-parallel.mdx": () => import('../prerender.e00ba34c.mjs').then(n => n.d),"./blog/simple-go-vs-goroutines.mdx": () => import('../prerender.e00ba34c.mjs').then(n => n.c)})),
    customData: `<language>en-us</language>`
  })
}

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

export { _page3 as _ };