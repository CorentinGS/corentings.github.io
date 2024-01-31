interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Corentin GS', // Site author
	title: 'Corentin Giaufer Saubert', // Site title.
	description:
		'Meet CorentinGS, Freelance Backend Developer and Chess lover. Expert in Golang, Docker, Linux. Join an innovative journey 🚀', // Description to display in the meta tags
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
