import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://meilcli.net",
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport",
    },
    integrations: [mdx(), sitemap(), tailwind()],
});
