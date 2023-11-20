import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function get(context) {
	return rss({
		title: "Corentin GS's blog",
		description: 'A young programmer journey',
		site: "https://corentings.dev",
		items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./blog/dnf5-step-by-step.mdx": () => import('../prerender_97b2423f.mjs').then(n => n.a),"./blog/docker-and-go.mdx": () => import('../prerender_97b2423f.mjs').then(n => n.b),"./blog/mergesort-parallel.mdx": () => import('../prerender_97b2423f.mjs').then(n => n.m),"./blog/optimizing-goroutines-sum-of-squares.mdx": () => import('../prerender_97b2423f.mjs').then(n => n.o),"./blog/simple-go-vs-goroutines.mdx": () => import('../prerender_97b2423f.mjs').then(n => n.s)})),
		customData: `<language>en-us</language>`,
	});
}

export { get };
