import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function get(context) {
	return rss({
		title: "Corentin GS's blog",
		description: 'A young programmer journey',
		site: "https://corentings.dev",
		items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./blog/dnf5-step-by-step.mdx": () => import('../prerender_62f3d684.mjs').then(n => n.g),"./blog/docker-and-go.mdx": () => import('../prerender_62f3d684.mjs').then(n => n.h),"./blog/mergesort-parallel.mdx": () => import('../prerender_62f3d684.mjs').then(n => n.m),"./blog/optimizing-goroutines-sum-of-squares.mdx": () => import('../prerender_62f3d684.mjs').then(n => n.o),"./blog/simple-go-vs-goroutines.mdx": () => import('../prerender_62f3d684.mjs').then(n => n.s)})),
		customData: `<language>en-us</language>`,
	});
}

export { get };
