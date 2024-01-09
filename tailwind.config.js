/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-grey": "#fafafa",
				"dark-grey": "#f2f2f2",
				"darker-grey": "#e6e6e6",
				"dark-blue": "#1E2640",
				"font-gray": "#4c4c4c",
				"font-dark": "#1A181E",
				"font-grayer": "#d2d4d9",
				"font-blue": "#146EB4",
			},

			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			borderWidth: { 1.5: "1.5px" },
			ringWidth: { 0.5: "0.5px" },
			flex: { 0.5: "0.5px" },
		},
	},
	plugins: [],
};
