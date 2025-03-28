import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Revues de code",
        items: [
          { text: "Anthony Saillant", link: "/anthony-saillant" },
          { text: "Lorik Parent", link: "/lorik-parent" },
        ],
      },
    ],
  },
});
