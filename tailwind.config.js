/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		"prettier-plugin-tailwindcss",
		"tailwindcss-react-aria-components",
		"tailwindcss-animate",
		require("@tailwindcss/forms"),
	],
};
