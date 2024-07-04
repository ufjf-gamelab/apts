const config = {
    semi: true,
    trailingComma: "all",
    importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    singleAttributePerLine: false,
    tabWidth: 4,
    useTabs: false,
    tailwindFunctions: ["cva", "clsx", "cx"],
    tailwindConfig: "tailwind.config.js",
    plugins: [
        "@trivago/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
    experimentalTernaries: true,
};

export default config;
