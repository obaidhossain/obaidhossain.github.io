import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages deployment - change base if repo is not username.github.io
// e.g. base: "/repo-name/" for github.com/username/repo-name
export default defineConfig({
  plugins: [
    react({
      // Include this to handle JSX properly
      include: "**/*.{jsx,tsx}",
    }),
  ],
  base: "/",
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
