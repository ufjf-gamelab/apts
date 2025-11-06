/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cx", "cva", "tw"],
};

export default config;
