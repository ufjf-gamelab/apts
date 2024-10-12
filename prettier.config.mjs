const config = {
  semi: true,
  trailingComma: "all",
  singleAttributePerLine: false,
  tabWidth: 2,
  useTabs: false,
  tailwindFunctions: ["cva", "clsx", "cx"],
  tailwindConfig: "tailwind.config.ts",
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],
  experimentalTernaries: true,
};

export default config;
