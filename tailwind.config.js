/** @type {import('tailwindcss').Config} */
export default {
  content: [
  	"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
		screens: {
			'sm': '0px',
			'md': '670px',
			'big': '850px',
			'lg': '1200px'
		},
		colors: {
			"asphalt": {
				DEFAULT: "#1c1e25",
				"light": "#323542"
			},
			"green": {
				DEFAULT: "#084025",
				"light": "#00ab36"
			},
			"blue": {
				DEFAULT: "#4e84c1"
			},
			"red": {
				DEFAULT: "#db0004"
			}
		}
  },
  plugins: [],
}
