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
      },
			keyframes: {
				blink: {
					'0%': { opacity: '0', zIndex: '0' },
					'20%': { opacity: '1', zIndex: '20' },
					'80%': { opacity: '1', zIndex: '20' },
					'100%': { opacity: '0', zIndex: '0' },
				}
			},
			animation: {
				'blink': 'blink 4s 2s'
			}
		},
	},
	plugins: [],
}
