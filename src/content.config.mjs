import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders"

const commands = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/commands" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			contributors: z.array(z.string()).optional(),
			summary: z.string().optional(),
			image: image().optional(),
			imageAlt: z.string().optional(),
			noIndex: z.boolean().optional(),
			isIndex: z.boolean().optional(),
			indexListOnlyCategories: z.boolean().optional(),
		}),
})

export const collections = { commands }
