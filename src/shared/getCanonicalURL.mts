export const baseURL = "https://mcgalaxy-commands.bunnynabbit.com"

export default function getCanonicalURL(pathname: string) {
	const { origin } = new URL(baseURL)
	return `${origin}${pathname}`
}
