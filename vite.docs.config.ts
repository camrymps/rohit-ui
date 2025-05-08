import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/rohit-ui-v2/", // For GitHub Pages deployment
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs-dist",
  },
  server: {
    open: true,
  },
  root: path.resolve(__dirname, "src/docs"),
});
