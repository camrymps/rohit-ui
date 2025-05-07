import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "example-dist",
  },
  // Configuration for example app
  server: {
    open: true,
  },
  // Use the example app as the entry point
  root: path.resolve(__dirname, "src/example"),
});
