import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://regainstm.netlify.app/',
  integrations: [tailwind(), preact(), prefetch(), compress(), robotsTxt()]
});