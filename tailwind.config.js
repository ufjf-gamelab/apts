/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			light: colors.neutral["50"],
			dark: colors.neutral["950"],
			background: colors.orange["50"],
			primary: {
				light: colors.blue["300"],
				common: colors.blue["400"],
				dark: colors.blue["500"],
			},
			secondary: {
				common: colors.amber["800"],
				dark: colors.amber["900"],
			},
			accent: {
				lighter: colors.blue["50"],
				light: colors.blue["100"],
				common: colors.blue["200"],
				dark: colors.blue["300"],
			},
			danger: {
				common: colors.red["500"],
				dark: colors.red["600"],
			},
			warning: {
				common: colors.amber["300"],
				dark: colors.amber["400"],
			},
			success: {
				common: colors.green["500"],
				dark: colors.green["600"],
			},
			inactive: {
				common: colors.neutral["500"],
				dark: colors.neutral["600"],
			},
		},
		fontFamily: {
			common: ["Open Sans", ...fontFamily.sans],
			heading: ["Georama", ...fontFamily.sans],
		},
	},
	plugins: [
		"prettier-plugin-tailwindcss",
		"tailwindcss-react-aria-components",
		"tailwindcss-animate",
		require("@tailwindcss/forms"),
	],
};
