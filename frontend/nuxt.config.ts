import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  css: ["./assets/css/tailwind.css"],
  vite: {
    plugins: [tsconfigPaths()],
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
});
