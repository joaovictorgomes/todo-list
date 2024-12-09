import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-dark": "#0D0D0D",
        "custom-dark-secundary": "#1A1A1A",
        "custom-gray-500": "#262626",
      },
    },
  },
  plugins: [],
} satisfies Config;
