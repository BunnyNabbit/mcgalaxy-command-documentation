// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import { baseURL } from "./src/shared/getCanonicalURL.mts"

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: baseURL,
	integrations: [sitemap()],
	prefetch: {
		defaultStrategy: "hover",
	},
	trailingSlash: "always",
	image: {
		responsiveStyles: true,
		layout: "constrained",
	},
	markdown: {
		gfm: true
	}
})
