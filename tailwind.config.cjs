/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'hotpink': {
					'main': 'hsl(335, 100%, 50%)',
					'light': 'hsl(335, 100%, 60%)',
					'white': 'hsl(0, 100%, 96%)',
				}
			},
			flex: {
        '2': '2 2 0%'
      }
		},
	},
	plugins: [],
}
