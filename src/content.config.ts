import { CATEGORIES } from '@/data/categories'
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/[^_]*.mdx', base: "./src/data/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }
