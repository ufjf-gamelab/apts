/** @type {import("prettier").Config} */
const config = {
	arrowParens: "avoid",
	experimentalTernaries: true,
	plugins: ["prettier-plugin-organize-imports"],
	semi: true,
	singleAttributePerLine: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: false,
};

export default config;
