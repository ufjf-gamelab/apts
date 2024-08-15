/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      0: "0px",
      DEFAULT: "1px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    borderRadius: {
      30: "1.875rem",
      full: defaultTheme.borderRadius.full,
    },
    boxShadow: {
      "inner-2": "inset 0.125rem 0.125rem",
      "inner-4": "inset 0.25rem 0.25rem",
      "outer-2": "0.125rem 0.125rem",
      "outer-3": "0.1875rem 0.1875rem",
      "outer-4": "0.25rem 0.25rem",
      "outer-8": "0.5rem 0.5rem",
    },
    colors: {
      inherit: colors.inherit,
      light: colors.neutral["50"],
      dark: colors.neutral["950"],
      background: colors.orange["50"],
      primary: {
        light: colors.blue["300"],
        common: colors.blue["400"],
        dark: colors.blue["500"],
      },
      secondary: {
        light: colors.amber["700"],
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
        light: colors.red["400"],
        common: colors.red["500"],
        dark: colors.red["600"],
      },
      warning: {
        light: colors.amber["200"],
        common: colors.amber["300"],
        dark: colors.amber["400"],
      },
      success: {
        light: colors.green["400"],
        common: colors.green["500"],
        dark: colors.green["600"],
      },
      inactive: {
        light: colors.neutral["400"],
        common: colors.neutral["500"],
        dark: colors.neutral["600"],
      },
    },
    fontFamily: {
      common: ["Open Sans", ...defaultTheme.fontFamily.sans],
      heading: ["Georama", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    "tailwindcss-react-aria-components",
    "tailwindcss-animate",
    require("@tailwindcss/forms"),
  ],
};
