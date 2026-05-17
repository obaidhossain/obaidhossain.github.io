import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change base value with your actual GitHub repo name
// e.g. base: "/portfolio/" or base: "/" for username.github.io
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/",
});