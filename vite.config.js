import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages deployment - change base if repo is not username.github.io
// e.g. base: "/repo-name/" for github.com/username/repo-name
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    mimeTypes: {
      "application/javascript": ["jsx"],
    },
  },
});