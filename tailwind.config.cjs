/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'hotpink': {
					'main': 'hsl(335, 100%, 50%)',
					'light': 'hsl(335, 100%, 60%)'
				} 
			}
		},
	},
	plugins: [],
}
