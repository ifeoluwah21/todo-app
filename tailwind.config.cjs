/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				exo: ["Exo", "sans-serif"],
			},
			colors: {
				primary: "#BACDFE",
				secondary: "#FF0000",
				pry: {
					"01": "rgba(0, 0, 0, 0.5)",
					"02": "rgba(0, 0, 0, 0.05)",
					"03": "#FFFFFF",
				},
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/shape1.svg')",
			},
		},
	},
	plugins: [],
};
